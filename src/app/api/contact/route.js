import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map();

function json(data, status = 200) {
  return Response.json(data, { status });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const existing = requestLog.get(ip) || [];
  const recent = existing.filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return false;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").trim();
    const email = (body?.email || "").trim();
    const projectType = (body?.projectType || "").trim();
    const message = (body?.message || "").trim();
    const website = (body?.website || "").trim();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeProjectType = escapeHtml(projectType);
    const safeMessage = escapeHtml(message);
    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return json(
        { success: false, error: "Too many requests. Please wait a few minutes and try again." },
        429
      );
    }

    if (website) {
      return json({ success: true });
    }

    if (!name || !email || !projectType || !message) {
      return json({ success: false, error: "All fields are required." }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json({ success: false, error: "Invalid email address." }, 400);
    }

    if (message.length < 20) {
      return json({ success: false, error: "Message must be at least 20 characters." }, 400);
    }

    const {
      GMAIL_USER,
      GMAIL_APP_PASSWORD,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
      SMTP_HOST,
      SMTP_PORT,
      SMTP_SECURE,
      SMTP_USER,
      SMTP_PASS,
    } = process.env;

    const canUseGmail = Boolean(GMAIL_USER && GMAIL_APP_PASSWORD);
    const canUseSmtp = Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS);

    if (!canUseGmail && !canUseSmtp) {
      return json({ success: false, error: "Email service is not configured on the server." }, 500);
    }

    const toAddress = CONTACT_TO_EMAIL || GMAIL_USER || SMTP_USER;
    const fromAddress = CONTACT_FROM_EMAIL || GMAIL_USER || SMTP_USER;

    const transporter = canUseGmail
      ? nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: GMAIL_USER,
            pass: GMAIL_APP_PASSWORD,
          },
        })
      : nodemailer.createTransport({
          host: SMTP_HOST,
          port: Number(SMTP_PORT),
          secure: String(SMTP_SECURE).toLowerCase() === "true" || Number(SMTP_PORT) === 465,
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
        });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New portfolio inquiry from ${name} (${projectType})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${projectType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111827;">
          <h2 style="margin:0 0 14px;">New Portfolio Inquiry</h2>
          <p style="margin:0 0 6px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin:0 0 6px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin:0 0 14px;"><strong>Project Type:</strong> ${safeProjectType}</p>
          <p style="margin:0 0 6px;"><strong>Message:</strong></p>
          <p style="white-space:pre-line;margin:0;">${safeMessage}</p>
        </div>
      `,
    });

    return json({ success: true });
  } catch {
    return json({ success: false, error: "Unable to send email right now." }, 500);
  }
}
