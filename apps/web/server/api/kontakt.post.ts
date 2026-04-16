import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  console.log("SMTP CONFIG:", {
    host: config.smtpHost,
    user: config.smtpUser,
  });

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: false, // если будут проблемы — поменяем на true + 465
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  });

  try {
    const info = await transporter.sendMail({
      from: `"EzyRoller Kontakt" <${config.emailFromContact}>`,

      // 🔥 ВАЖНО: массив вместо cc
      to: [
        config.emailToContact,
        config.emailDebugCopy
      ],

      replyTo: body.email,

      subject: `Neue Kontaktanfrage von ${body.name}`,

      html: `
        <h1>Kontakt Anfrage</h1>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Nachricht:</strong><br>${body.message}</p>
        <p><strong>Einwilligung:</strong> ${body.consent ? "Ja" : "Nein"}</p>
      `
    });

    console.log("MAIL RESULT:", info);

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