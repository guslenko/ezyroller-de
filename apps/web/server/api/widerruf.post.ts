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
      from: `"Website B2B" <${config.emailFromWider}>`,
      to: config.emailToWider,
      subject: `Widerrufsformular von ${body.fullname}| id: ${body.orderId}`,
      html: `
        <h1>Neue Widerrufsformular</h1>
        <p><strong>Auftragsnummer:</strong> ${body.orderId}</p>
        <p><strong>Vollständiger Name:</strong> ${body.fullname}</p>
        <p><strong>E-Mail:</strong> ${body.email}</p>
        <p><strong>Grund für den Widerruf (optional):</strong> ${body.reason}</p>
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
