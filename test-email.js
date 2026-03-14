const nodemailer = require('nodemailer');
require('dotenv').config();

async function testEmail() {
  console.log("Testing with User:", process.env.GMAIL_USER);
  const transporter = nodemailer.createTransport({
    host: "192.178.211.108", // smtp.gmail.com IP
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: {
      servername: 'smtp.gmail.com', // Required when using IP for TLS
      rejectUnauthorized: false
    }
  });

  try {
    console.log("Verifying connection...");
    await transporter.verify();
    console.log("Transporter verified!");
    
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // send to self
      subject: "Test Email from Justifi",
      text: "Connection check successful."
    });
    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error("Test failed:", err);
  }
}

testEmail();
