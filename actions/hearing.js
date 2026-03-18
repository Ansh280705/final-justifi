"use server";

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
  } catch (err) {
    console.error(`Email error to ${to}:`, err.message);
  }
}

function emailTemplate({ title, subtitle, body, buttonText, buttonLink, warning }) {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f4f6f9; padding: 30px;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
      <div style="background: linear-gradient(135deg, #065f46 0%, #047857 100%); padding: 32px 40px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 10px;">⚖️</div>
        <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 700;">${title}</h1>
        ${subtitle ? `<p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">${subtitle}</p>` : ""}
      </div>
      <div style="padding: 32px 40px;">
        ${body}
        ${buttonText && buttonLink ? `
        <div style="text-align: center; margin-top: 28px;">
          <a href="${buttonLink}" style="background: #065f46; color: white; padding: 14px 32px; text-decoration: none; border-radius: 10px; font-weight: 600; font-size: 15px; display: inline-block;">
            ${buttonText}
          </a>
        </div>` : ""}
        ${warning ? `
        <div style="margin-top: 24px; background: #fef3c7; border-left: 4px solid #f59e0b; padding: 14px 18px; border-radius: 8px;">
          <p style="color: #92400e; font-size: 13px; margin: 0;">⚠️ <strong>Warning:</strong> ${warning}</p>
        </div>` : ""}
      </div>
      <div style="background: #f9fafb; padding: 18px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
        <p style="color: #9ca3af; font-size: 12px; margin: 0;">Justifi Legal Platform | Automated Compliance System</p>
      </div>
    </div>
  </div>`;
}

function infoRow(label, value) {
  return `<div style="display: flex; margin: 8px 0; font-size: 14px;">
    <span style="color: #6b7280; width: 130px; flex-shrink: 0;">${label}:</span>
    <span style="color: #111827; font-weight: 600;">${value}</span>
  </div>`;
}

// Auto-generate a unique Jitsi Meet link per hearing
function generateHearingLink(case_id, date) {
  const dateStr = new Date(date).toISOString().slice(0, 10).replace(/-/g, "");
  const caseShort = case_id.replace(/-/g, "").slice(0, 10);
  return `https://meet.jit.si/justifi-hearing-${caseShort}-${dateStr}`;
}

export async function createHearing(data) {
  try {
    // Auto-generate Jitsi link
    const hearing_link = generateHearingLink(data.case_id, data.hearing_date);

    const hearing = await db.hearing.create({
      data: {
        case_id: data.case_id,
        hearing_date: new Date(data.hearing_date),
        hearing_link,
        plaintiff_status: "pending",
        defendant_status: "pending",
        reminders_sent: 0,
        absences: 0,
        penalty_applied: false,
      },
    });

    // Send confirmation emails immediately
    const dispute = await db.dispute.findUnique({ where: { id: data.case_id } });
    if (dispute) {
      const caseShort = data.case_id.slice(0, 8).toUpperCase();
      const hearingTime = new Date(data.hearing_date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      const body = `
        <p style="color: #374151; font-size: 15px; line-height: 1.6;">A legal hearing has been scheduled for your case. Please mark your calendar and ensure your attendance.</p>
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 20px; margin: 20px 0;">
          ${infoRow("Case ID", `#${caseShort}`)}
          ${infoRow("Category", dispute.category)}
          ${infoRow("Date & Time", hearingTime)}
          ${infoRow("Platform", "Jitsi Meet (Video)")}
          ${infoRow("Meeting Link", `<a href="${hearing_link}" style="color:#065f46;">${hearing_link}</a>`)}
        </div>
        <p style="color: #374151; font-size: 14px;">You will receive automatic reminders 1 day and 1 hour before the hearing. Click below to join when it's time.</p>`;

      const html = emailTemplate({
        title: "Hearing Scheduled",
        subtitle: `Case #${caseShort}`,
        body,
        buttonText: "🔗 Join Hearing",
        buttonLink: hearing_link,
        warning: "Attendance is mandatory. Non-attendance will result in penalties.",
      });

      if (dispute.complainantEmail) {
        await sendEmail(dispute.complainantEmail, `📅 Hearing Scheduled — Case #${caseShort}`, html);
      }
      if (dispute.opponentEmail) {
        await sendEmail(dispute.opponentEmail, `📅 Hearing Scheduled — Case #${caseShort}`, html);
      }
    }

    return { success: true, hearing };
  } catch (error) {
    console.error("Failed to create hearing:", error);
    return { success: false, error: error.message };
  }
}

export async function joinHearing(hearing_id, role) {
  try {
    const hearing = await db.hearing.findUnique({ where: { hearing_id } });
    if (!hearing) return { success: false, error: "Hearing not found" };

    const updateData = {};
    if (role === "plaintiff") updateData.plaintiff_status = "present";
    if (role === "defendant") updateData.defendant_status = "present";

    await db.hearing.update({ where: { hearing_id }, data: updateData });

    // Send confirmation email
    const dispute = await db.dispute.findUnique({ where: { id: hearing.case_id } });
    if (dispute) {
      const caseShort = hearing.case_id.slice(0, 8).toUpperCase();
      const email = role === "plaintiff" ? dispute.complainantEmail : dispute.opponentEmail;
      const name = role === "plaintiff" ? dispute.complainantName : (dispute.opponentName || "Opponent");

      if (email) {
        const body = `
          <p style="color: #374151;">Dear ${name},</p>
          <p style="color: #374151; font-size: 14px; line-height: 1.6;">Your attendance has been recorded for the hearing on Case #${caseShort}.</p>
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 16px; margin: 16px 0;">
            ${infoRow("Status", "✅ Present")}
            ${infoRow("Case ID", `#${caseShort}`)}
            ${infoRow("Role", role.charAt(0).toUpperCase() + role.slice(1))}
          </div>`;

        await sendEmail(email, `✅ Attendance Confirmed — Case #${caseShort}`, emailTemplate({
          title: "Attendance Confirmed",
          subtitle: `Case #${caseShort}`,
          body,
        }));
      }
    }

    return { success: true, hearing_link: hearing.hearing_link };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getAllHearings() {
  try {
    const hearings = await db.hearing.findMany({
      orderBy: { hearing_date: "asc" },
    });
    return { hearings };
  } catch (error) {
    return { hearings: [] };
  }
}

export async function getHearingViolationsPublic() {
  try {
    const violations = await db.hearing.findMany({
      where: {
        OR: [
          { plaintiff_status: "absent" },
          { defendant_status: "absent" },
          { absences: { gt: 0 } },
        ],
      },
      orderBy: { updatedAt: "desc" },
    });

    const penalties = await db.penalty.findMany({
      orderBy: { timestamp: "desc" },
    });

    return { violations, penalties };
  } catch (error) {
    return { violations: [], penalties: [] };
  }
}

export async function markAttendance(hearing_id, role, status) {
  try {
    const hearing = await db.hearing.findUnique({ where: { hearing_id } });
    if (!hearing) return { success: false, error: "Hearing not found" };

    const updateData = {};
    if (role === "plaintiff") updateData.plaintiff_status = status;
    if (role === "defendant") updateData.defendant_status = status;

    if (status === "absent") {
      const newAbsences = hearing.absences + 1;
      updateData.absences = newAbsences;

      // Auto-create penalty on 2nd absence
      if (newAbsences >= 2) {
        await db.penalty.create({
          data: {
            case_id: hearing.case_id,
            user_id: role,
            amount: 1000,
            reason: "Missed Hearing",
            status: "pending",
          },
        });
        updateData.penalty_applied = true;
      }
    }

    await db.hearing.update({ where: { hearing_id }, data: updateData });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function payPenalty(penalty_id) {
  try {
    await db.penalty.update({
      where: { penalty_id },
      data: { status: "paid" },
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getDisputeIds() {
  try {
    const disputes = await db.dispute.findMany({
      select: { id: true, category: true, complainantName: true },
      orderBy: { createdAt: "desc" },
      take: 20,
    });
    return { disputes };
  } catch (error) {
    return { disputes: [] };
  }
}
