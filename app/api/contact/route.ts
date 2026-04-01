import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const COMPANY_EMAIL = process.env.COMPANY_EMAIL ?? "geral@oceaninformatix.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "Ocean Informatix <hello@oceaninformatix.com>";

interface ContactBody {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildConfirmationEmail(name: string): string {
  const safeName = escapeHtml(name);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ocean Informatix — Message Received</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f9ff;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f9ff;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:linear-gradient(135deg,#0ea5e9,#0369a1);padding:44px 48px;border-radius:12px 12px 0 0;">
              <p style="margin:0 0 16px;color:rgba(255,255,255,0.65);font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">
                Ocean Informatix
              </p>
              <h1 style="margin:0;color:#ffffff;font-size:30px;font-weight:700;line-height:1.2;">
                Message received.
              </h1>
            </td>
          </tr>
          <tr>
            <td style="background:#ffffff;padding:48px;border-radius:0 0 12px 12px;border:1px solid #e0f2fe;border-top:none;">
              <p style="margin:0 0 16px;color:#0f172a;font-size:16px;line-height:1.6;">
                Hi ${safeName},
              </p>
              <p style="margin:0 0 24px;color:#475569;font-size:15px;line-height:1.7;">
                Thank you for reaching out. We've received your message and one of our
                team members will be in touch within
                <strong style="color:#0f172a;">1–2 business days</strong>.
              </p>
              <div style="background:#f0f9ff;border-left:3px solid #0ea5e9;padding:20px 24px;border-radius:0 8px 8px 0;margin:24px 0;">
                <p style="margin:0;color:#0369a1;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">
                  In the meantime
                </p>
                <p style="margin:8px 0 0;color:#475569;font-size:14px;line-height:1.6;">
                  You can learn more about our services and approach on our website at
                  <a href="https://oceaninformatix.com" style="color:#0ea5e9;text-decoration:none;">
                    oceaninformatix.com
                  </a>.
                </p>
              </div>
              <p style="margin:24px 0 0;color:#475569;font-size:15px;line-height:1.7;">
                Warm regards,<br />
                <strong style="color:#0f172a;">The Ocean Informatix Team</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 0 0;text-align:center;">
              <p style="margin:0;color:#94a3b8;font-size:12px;">
                Ocean Informatix &middot; Porto, Portugal
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildNotificationEmail(data: ContactBody): string {
  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    company: data.company ? escapeHtml(data.company) : null,
    service: escapeHtml(data.service),
    message: escapeHtml(data.message),
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:40px 20px;background:#f0f9ff;font-family:Arial,Helvetica,sans-serif;">
  <table width="600" cellpadding="0" cellspacing="0"
    style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e0f2fe;overflow:hidden;">
    <tr>
      <td style="background:#0f172a;padding:28px 32px;">
        <p style="margin:0 0 6px;color:#0ea5e9;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600;">
          New Enquiry
        </p>
        <h2 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">
          Contact Form Submission
        </h2>
      </td>
    </tr>
    <tr>
      <td style="padding:32px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #e0f2fe;">
              <p style="margin:0;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                Name
              </p>
              <p style="margin:5px 0 0;color:#0f172a;font-size:15px;font-weight:600;">
                ${safe.name}
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #e0f2fe;">
              <p style="margin:0;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                Email
              </p>
              <p style="margin:5px 0 0;font-size:15px;">
                <a href="mailto:${safe.email}" style="color:#0ea5e9;text-decoration:none;">
                  ${safe.email}
                </a>
              </p>
            </td>
          </tr>
          ${
            safe.company
              ? `<tr>
            <td style="padding:12px 0;border-bottom:1px solid #e0f2fe;">
              <p style="margin:0;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                Company
              </p>
              <p style="margin:5px 0 0;color:#0f172a;font-size:15px;">${safe.company}</p>
            </td>
          </tr>`
              : ""
          }
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #e0f2fe;">
              <p style="margin:0;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                Service Interest
              </p>
              <p style="margin:5px 0 0;color:#0f172a;font-size:15px;">${safe.service}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 0 0;">
              <p style="margin:0;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">
                Message
              </p>
              <p style="margin:8px 0 0;color:#0f172a;font-size:15px;line-height:1.7;white-space:pre-wrap;">
                ${safe.message}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, service, message } = body;

  if (!name?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (message.trim().length > 5000) {
    return NextResponse.json({ error: "Message too long" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "We received your message — Ocean Informatix",
        html: buildConfirmationEmail(name),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: COMPANY_EMAIL,
        subject: `New enquiry from ${name} — ${service}`,
        html: buildNotificationEmail(body),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
