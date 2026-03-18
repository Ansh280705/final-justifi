import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});

async function sendEmail(to, subject, html) {
  if (!to) return;
  try {
    await transporter.sendMail({
      from: `"⚖️ Justifi Legal Platform" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log(`✉️  Email sent → ${to}: ${subject}`);
  } catch (err) {
    console.error(`❌ Email failed → ${to}:`, err.message);
  }
}

function emailTemplate({ title, subtitle, body, buttonText, buttonLink, warning }) {
  return `
  <div style="font-family:'Segoe UI',Arial,sans-serif;background:#f4f6f9;padding:30px;">
    <div style="max-width:600px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
      <div style="background:linear-gradient(135deg,#065f46 0%,#047857 100%);padding:32px 40px;text-align:center;">
        <div style="font-size:40px;margin-bottom:10px;">⚖️</div>
        <h1 style="color:white;margin:0;font-size:22px;font-weight:700;">${title}</h1>
        ${subtitle ? `<p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">${subtitle}</p>` : ""}
      </div>
      <div style="padding:32px 40px;">
        ${body}
        ${buttonText && buttonLink ? `
        <div style="text-align:center;margin-top:28px;">
          <a href="${buttonLink}" style="background:#065f46;color:white;padding:14px 32px;text-decoration:none;border-radius:10px;font-weight:600;font-size:15px;display:inline-block;">${buttonText}</a>
        </div>` : ""}
        ${warning ? `
        <div style="margin-top:24px;background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;border-radius:8px;">
          <p style="color:#92400e;font-size:13px;margin:0;">⚠️ <strong>Warning:</strong> ${warning}</p>
        </div>` : ""}
      </div>
      <div style="background:#f9fafb;padding:18px 40px;text-align:center;border-top:1px solid #e5e7eb;">
        <p style="color:#9ca3af;font-size:12px;margin:0;">Justifi Legal Platform | Automated Compliance System</p>
      </div>
    </div>
  </div>`;
}

function row(label, value) {
  return `<div style="display:flex;margin:8px 0;font-size:14px;">
    <span style="color:#6b7280;width:140px;flex-shrink:0;">${label}:</span>
    <span style="color:#111827;font-weight:600;">${value}</span>
  </div>`;
}

// ─── REMINDER EMAILS ──────────────────────────────────────────────────────────
async function sendReminderEmails() {
  const now = new Date();
  const upcoming = await db.hearing.findMany({ where: { hearing_date: { gt: now } } });

  for (const hearing of upcoming) {
    const dispute = await db.dispute.findUnique({ where: { id: hearing.case_id } });
    if (!dispute) continue;

    const hoursLeft = (new Date(hearing.hearing_date) - now) / 3600000;
    const daysLeft  = hoursLeft / 24;
    const hearingTime = new Date(hearing.hearing_date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const caseShort = hearing.case_id.slice(0, 8).toUpperCase();

    // Determine which reminder tier to send (only if not already sent)
    let label = null, nextCount = hearing.reminders_sent;
    if (daysLeft <= 1  && hoursLeft > 2 && hearing.reminders_sent < 1) { label = "1 day";   nextCount = 1; }
    if (hoursLeft <= 2 && hoursLeft > 1 && hearing.reminders_sent < 2) { label = "2 hours"; nextCount = 2; }
    if (hoursLeft <= 1 && hoursLeft > 0 && hearing.reminders_sent < 3) { label = "1 hour";  nextCount = 3; }
    if (!label) continue;

    const body = `
      <p style="color:#374151;font-size:15px;line-height:1.6;">Your legal hearing is in <strong>${label}</strong>. Attendance is <strong>mandatory</strong>.</p>
      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px;margin:20px 0;">
        ${row("Case ID", `#${caseShort}`)}
        ${row("Category", dispute.category)}
        ${row("Date & Time", hearingTime)}
        ${row("Meeting Link", `<a href="${hearing.hearing_link}" style="color:#065f46;">${hearing.hearing_link}</a>`)}
      </div>
      <p style="color:#374151;font-size:14px;">Click the button to join. Your presence will be auto-confirmed when you join the call.</p>`;

    const html = emailTemplate({
      title: `⏰ Hearing in ${label}`,
      subtitle: `Case #${caseShort}`,
      body,
      buttonText: "🔗 Join Hearing Now",
      buttonLink: hearing.hearing_link,
      warning: "If you do not attend, you will first receive an official warning. A second absence will result in an automatic ₹1,000 penalty.",
    });

    const subject = `⚖️ Hearing Reminder — ${label} left | Case #${caseShort}`;
    if (dispute.complainantEmail) await sendEmail(dispute.complainantEmail, subject, html);
    if (dispute.opponentEmail)    await sendEmail(dispute.opponentEmail, subject, html);

    await db.hearing.update({ where: { hearing_id: hearing.hearing_id }, data: { reminders_sent: nextCount } });
  }
}

// ─── PER-PERSON ABSENCE + PENALTY ENGINE ─────────────────────────────────────
async function checkAndMarkAbsences() {
  const GRACE_MS = 15 * 60 * 1000; // 15 minutes
  const now = new Date();
  const cutoff = new Date(now - GRACE_MS);

  // Only hearings past the grace window with still-pending participants
  const pastHearings = await db.hearing.findMany({
    where: {
      hearing_date: { lt: cutoff },
      OR: [{ plaintiff_status: "pending" }, { defendant_status: "pending" }],
    },
  });

  for (const hearing of pastHearings) {
    const dispute = await db.dispute.findUnique({ where: { id: hearing.case_id } });
    if (!dispute) continue;

    const caseShort   = hearing.case_id.slice(0, 8).toUpperCase();
    const hearingTime = new Date(hearing.hearing_date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const updateData  = {};

    // ── Process each party independently ────────────────────────────────────
    for (const role of ["plaintiff", "defendant"]) {
      const statusKey = `${role}_status`;
      if (hearing[statusKey] !== "pending") continue; // already marked — skip

      // Mark absent in this hearing
      updateData[statusKey] = "absent";

      const email = role === "plaintiff" ? dispute.complainantEmail : dispute.opponentEmail;
      const name  = role === "plaintiff" ? dispute.complainantName  : (dispute.opponentName || "Opponent Party");

      // Count how many PAST hearings THIS PERSON was absent from (for this case)
      const prevAbsent = await db.hearing.count({
        where: {
          case_id:    hearing.case_id,
          hearing_id: { not: hearing.hearing_id }, // exclude the current one
          [statusKey]: "absent",
        },
      });

      // Total absences including this one
      const totalAbsences = prevAbsent + 1;

      console.log(`[${caseShort}] ${role} absence #${totalAbsences} — email: ${email}`);

      // ── 1st absence → WARNING email ────────────────────────────────────────
      if (totalAbsences === 1) {
        if (email) {
          const body = `
            <p style="color:#374151;font-size:15px;">Dear ${name},</p>
            <p style="color:#374151;font-size:14px;line-height:1.6;">You were marked <strong style="color:#dc2626;">absent</strong> from your scheduled legal hearing.</p>
            <div style="background:#fef9e7;border:1px solid #f5c518;border-radius:10px;padding:18px;margin:20px 0;">
              ${row("Case ID", `#${caseShort}`)}
              ${row("Missed Hearing", hearingTime)}
              ${row("Your Role", role.charAt(0).toUpperCase() + role.slice(1))}
              ${row("Absence Count", `1st (Warning)`)}
            </div>
            <p style="color:#374151;font-size:14px;">This is your <strong>first and final warning</strong>. If you miss another hearing, a <strong>penalty of ₹1,000 will be automatically charged</strong> to your account.</p>`;

          await sendEmail(
            email,
            `⚠️ Warning — Missed Hearing | Case #${caseShort}`,
            emailTemplate({
              title: "Hearing Absence Warning",
              subtitle: `1st Absence — Case #${caseShort}`,
              body,
              warning: "Your next absence will trigger an automatic ₹1,000 penalty. No further warnings will be issued.",
            })
          );
        }
      }

      // ── 2nd+ absence → PENALTY email + create penalty record ──────────────
      else {
        // Create penalty record in DB
        await db.penalty.create({
          data: {
            case_id: hearing.case_id,
            user_id: role,
            amount:  1000,
            reason:  `Absence #${totalAbsences} — Missed hearing on ${hearingTime}`,
            status:  "pending",
          },
        });
        updateData.penalty_applied = true;

        if (email) {
          const escalation = totalAbsences >= 3;
          const penaltyBody = `
            <p style="color:#374151;font-size:15px;">Dear ${name},</p>
            <p style="color:#374151;font-size:14px;line-height:1.6;">You have missed <strong>${totalAbsences} hearings</strong> for Case #${caseShort}. A monetary penalty has been <strong>automatically issued</strong>.</p>
            <div style="background:#fff7ed;border:2px solid #f97316;border-radius:10px;padding:20px;margin:20px 0;text-align:center;">
              <p style="color:#7c2d12;font-size:12px;margin:0 0 6px;text-transform:uppercase;letter-spacing:1px;">Penalty Amount</p>
              <p style="color:#c2410c;font-size:40px;font-weight:800;margin:0;">₹1,000</p>
              <p style="color:#9a3412;font-size:12px;margin:8px 0 0;">Case #${caseShort} — Absence #${totalAbsences}</p>
            </div>
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:10px;padding:18px;margin:20px 0;">
              ${row("Case ID", `#${caseShort}`)}
              ${row("Missed Hearing", hearingTime)}
              ${row("Your Role", role.charAt(0).toUpperCase() + role.slice(1))}
              ${row("Total Absences", `${totalAbsences}`)}
              ${row("Penalty Status", "PENDING — Pay immediately")}
              ${escalation ? row("Escalation", "🚨 Flagged for Admin Review") : ""}
            </div>
            <p style="color:#374151;font-size:14px;">Click the button below to view and pay your penalty.</p>`;

          await sendEmail(
            email,
            `💸 Penalty Issued: ₹1,000 — Case #${caseShort}`,
            emailTemplate({
              title: escalation ? "🚨 Penalty + Escalation Notice" : "💸 Monetary Penalty Issued",
              subtitle: `Absence #${totalAbsences} — Case #${caseShort}`,
              body: penaltyBody,
              buttonText: "Pay Penalty Now →",
              buttonLink: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/hearings`,
              warning: escalation
                ? "Your case has been escalated to senior legal authorities. You may face additional legal consequences."
                : "Failure to pay will result in further escalation and additional penalties.",
            })
          );
        }
      }
    }

    // Update the hearing's total absence count (sum of plaintiff + defendant absences)
    const totalHearingAbsences = (updateData.plaintiff_status === "absent" ? 1 : 0) +
                                  (updateData.defendant_status === "absent" ? 1 : 0) +
                                  (hearing.plaintiff_status === "absent" ? 1 : 0) +
                                  (hearing.defendant_status === "absent" ? 1 : 0);
    updateData.absences = totalHearingAbsences;

    await db.hearing.update({ where: { hearing_id: hearing.hearing_id }, data: updateData });
    console.log(`✅ Hearing ${hearing.hearing_id} processed.`);
  }
}

// ─── CRON ENDPOINT ────────────────────────────────────────────────────────────
export async function GET() {
  try {
    console.log(`\n🕐 Cron triggered at ${new Date().toISOString()}`);
    await sendReminderEmails();
    await checkAndMarkAbsences();
    return NextResponse.json({ ok: true, ran_at: new Date().toISOString() });
  } catch (err) {
    console.error("❌ Cron error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
