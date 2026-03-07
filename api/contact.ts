import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, phone, email, serviceType, preferredDate, message } = req.body;

    await resend.emails.send({
      from: "Handy On Cleaning <onboarding@resend.dev>",
      to: "your@email.com", // replace with your email
      subject: "New Cleaning Request",
      html: `
        <h2>New Cleaning Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceType}</p>
        <p><strong>Date:</strong> ${preferredDate}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}