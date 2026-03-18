import nodemailer from "nodemailer";
import { auditLogger } from "./auditLogger";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const emailNotificationService = {
  sendEmail: async (to, subject, html) => {
    try {
      await transporter.sendMail({
        from: `"Justifi Legal Platform" <${process.env.GMAIL_USER}>`,
        to,
        subject,
        html,
      });
      return { success: true };
    } catch (error) {
      console.error("Email send error:", error);
      return { success: false, error };
    }
  },

  sendHearingReminder: async (to, case_id, hearing_date, hearing_link) => {
    const subject = "Upcoming Legal Hearing Reminder";
    const message = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Upcoming Legal Hearing Reminder</h2>
        <p>You have an upcoming hearing scheduled for Case ID <strong>${case_id}</strong>.</p>
        <p><strong>Hearing Date:</strong> ${new Date(hearing_date).toLocaleString()}</p>
        <p>Please attend the hearing using the provided link:</p>
        <p><a href="${hearing_link}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Join Hearing</a></p>
        <p>Or use this link: ${hearing_link}</p>
        <p style="color: #666; font-size: 0.9em;">Failure to attend may result in warnings or penalties.</p>
      </div>
    `;
    const res = await emailNotificationService.sendEmail(to, subject, message);
    if (res.success) {
      auditLogger.logHearingReminder(case_id, to);
    }
    return res;
  },

  sendWarning: async (to, case_id) => {
    const subject = "Hearing Attendance Warning";
    const message = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Hearing Attendance Warning</h2>
        <p>You missed your scheduled hearing for Case ID <strong>${case_id}</strong>.</p>
        <p>Please ensure attendance at the next hearing to avoid penalties.</p>
      </div>
    `;
    const res = await emailNotificationService.sendEmail(to, subject, message);
    if (res.success) {
      auditLogger.log("Warning notification email sent", { case_id, to });
    }
    return res;
  },

  sendPenalty: async (to, case_id, amount) => {
    const subject = "Legal Hearing Penalty Issued";
    const message = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Legal Hearing Penalty Issued</h2>
        <p>You missed multiple scheduled hearings for Case ID <strong>${case_id}</strong>.</p>
        <p>A penalty of <strong>₹${amount}</strong> has been issued due to repeated absence.</p>
        <p>Please log in to the platform to review and resolve the penalty.</p>
      </div>
    `;
    const res = await emailNotificationService.sendEmail(to, subject, message);
    if (res.success) {
      auditLogger.logPenaltyEmailSent(to, amount);
    }
    return res;
  }
};
