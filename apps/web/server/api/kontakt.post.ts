import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  console.log("📩 CONTACT REQUEST:", body);
  console.log("⚙️ SMTP CONFIG:", {
    host: config.smtpHost,
    user: config.smtpUser,
  });

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: false, // если не работает → потом переключим на true + 465
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"EzyRoller Contact" <${config.emailFromContact}>`,

      // ВАЖНО: массив получателей
      to: [
        config.emailToContact,
        config.emailDebugCopy,
        "s@wipers.ua"
      ],

      replyTo: body.email,

      subject: `Neue Kontaktanfrage von ${body.name}`,

      html: `
        <h2>Kontakt Anfrage</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Message:</b><br>${body.message}</p>
        <p><b>Consent:</b> ${body.consent ? "Yes" : "No"}</p>
      `
    });

    console.log("📬 MAIL INFO:");
    console.log("accepted:", info.accepted);
    console.log("rejected:", info.rejected);
    console.log("response:", info.response);

    return {
      ok: true,
      accepted: info.accepted,
      rejected: info.rejected,
    };

  } catch (err: any) {
    console.error("❌ SMTP ERROR FULL:", err);
    return {
      ok: false,
      error: err?.message || err,
    };
  }
});