import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM_CONTACT,
      to: process.env.EMAIL_TO_CONTACT,
      subject: 'Kontakt Anfrage',
      html: `
        <h1>Kontakt Anfrage</h1>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Nachricht:</strong><br>${body.message}</p>
      `
    })

    return { ok: true }
  } catch (err) {
    console.error("SMTP ERROR:", err)
    throw createError({
      statusCode: 500,
      statusMessage: "SMTP error",
      data: err
    })
  }
})
