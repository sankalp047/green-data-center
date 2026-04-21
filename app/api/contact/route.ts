import { NextRequest, NextResponse } from "next/server";

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY!;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN ?? "mg.thegreendatacenter.com";
const TO_EMAIL = process.env.TO_EMAIL ?? "contact@thegreendatacenter.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, address, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    const body = new URLSearchParams({
      from: `${name} <mailgun@${MAILGUN_DOMAIN}>`,
      to: TO_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nAddress: ${address || "—"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#16A34A;border-bottom:2px solid #16A34A;padding-bottom:8px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#666;width:120px;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Phone</strong></td><td style="padding:8px 0;">${phone || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Address</strong></td><td style="padding:8px 0;">${address || "—"}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f5f5f5;border-radius:8px;">
            <strong>Message:</strong>
            <p style="margin:8px 0 0;white-space:pre-wrap;">${message}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#999;">Sent from thegreendatacenter.com contact form</p>
        </div>
      `,
      "h:Reply-To": email,
    });

    const response = await fetch(
      `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error("Mailgun error:", err);
      return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
