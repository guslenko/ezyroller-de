import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM_BUSINESS,
      to: process.env.EMAIL_TO_BUSINESS,
      cc: process.env.EMAIL_DEBUG_COPY, // ← ТЫ ПОЛУЧАЕШЬ КОПИЮ
      replyTo: body.email,
      subject: `Neue B2B Anfrage von ${body.firmname}`,
      html: `
        <h1>Neue B2B Anfrage</h1>
        <p><strong>Firma:</strong> ${body.firmname}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.telefon}</p>
        <p><strong>Name:</strong> ${body.name} ${body.forname}</p>
        <p><strong>Adresse:</strong> ${body.plzort}, ${body.strasse}</p>
        <p><strong>Nachricht:</strong><br>${body.message}</p>
        <p><strong>Einwilligung:</strong> ${body.consent ? "Ja" : "Nein"}</p>
      `
    });

    return { ok: true };
  } catch (err) {
    console.error("SMTP BUSINESS ERROR:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "SMTP business error",
      data: err
    });
  }
});
