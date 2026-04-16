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
      from: `"Website B2B" <${config.emailFromBusiness}>`,
      to: config.emailToBusiness,
      cc: config.emailDebugCopy,
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
  } catch (err: any) {
    console.error("SMTP BUSINESS ERROR:", err);

    throw createError({
      statusCode: 500,
      statusMessage: "SMTP business error",
      data: err?.message || err
    });
  }
});