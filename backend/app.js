import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mobilezone.co.nz",
      "https://www.mobilezone.co.nz",
      "https://main.d11wi47a9v20fx.amplifyapp.com",
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(bodyParser.json());
// const PORT = process.env.PORT || 8080;

// Setup SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
// app.get("/", (req, res) => res.send("✅ Server is up and running!"));
app.get("/health", (req, res) => res.send("✅ Server is up and running!"));

app.post("/send-email", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      deviceType,
      problem,
      condition,
      deviceModel,
      contactMethod,
      subject,
    } = req.body;

    const issue = problem || condition;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "paramveer7267@gmail.com",
      subject: subject,
      html: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #2c3e50;">📱 ${subject || "New Inquiry"}</h2>
    <p>You have received a new request. Here are the details:</p>
    
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${name || ""}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${email || ""}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${phone || ""}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Device Type</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${deviceType}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Device Model</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${
          deviceModel || ""
        }</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>${
          condition ? "Condition" : "Problem"
        }</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${issue || ""}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Preferred Contact Method</strong></td>
        <td style="padding: 8px; border: 1px solid #ddd;">${
          contactMethod || ""
        }</td>
      </tr>
    </table>
    
    <p style="margin-top: 20px;">Best regards,<br><strong>MobileZone</strong></p>
  </div>
`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Email failed to send" });
  }
});

// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
export const handler = serverless(app);
