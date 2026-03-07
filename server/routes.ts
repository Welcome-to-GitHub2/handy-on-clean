import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.contact.create.path, async (req, res) => {
    try {

      // Validate request body
      const input = api.contact.create.input.parse(req.body);

      const {
        name,
        phone,
        email,
        serviceType,
        preferredDate,
        message
      } = input;

      // Send email using Resend
      const emailResponse = await resend.emails.send({
        from: "Handy On Cleaning <onboarding@resend.dev>",
        to: "your@email.com", // <-- replace with your real email
        subject: "New Cleaning Service Request",
        html: `
          <h2>New Cleaning Service Request</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Service Requested:</strong> ${serviceType}</p>
          <p><strong>Preferred Date:</strong> ${preferredDate}</p>

          <h3>Additional Details</h3>
          <p>${message || "None provided"}</p>
        `,
      });

      return res.status(200).json({
        success: true,
        message: "Request sent successfully",
        emailId: emailResponse.data?.id,
      });

    } catch (err) {

      // Zod validation errors
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }

      console.error("Contact form error:", err);

      return res.status(500).json({
        message: "Failed to send message",
      });
    }
  });

  return httpServer;
}