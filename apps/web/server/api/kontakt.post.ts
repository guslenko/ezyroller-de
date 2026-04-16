import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  console.log("SMTP_HOST:", config.smtpHost);

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: false,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  });

  try {
    await transporter.sendMail({
      from: `"Website Kontakt" <${config.emailFromContact}>`,
      to: config.emailToContact,
      cc: config.emailDebugCopy,
      subject: `Neue Kontaktanfrage von ${body.name}`,
      html: `
        <h1>Kontakt Anfrage</h1>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Nachricht:</strong><br>${body.message}</p>
        <p><strong>Einwilligung:</strong> ${body.consent ? "Ja" : "Nein"}</p>
      `
    });

    return { ok: true };
  } catch (err: any) {
    console.error("SMTP KONTAKT ERROR:", err);

    throw createError({
      statusCode: 500,
      statusMessage: "SMTP kontakt error",
      data: err?.message || err
    });
  }
});