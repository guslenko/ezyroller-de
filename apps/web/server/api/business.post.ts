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
      from: process.env.EMAIL_FROM_BUSINESS,
      to: process.env.EMAIL_TO_BUSINESS,
      subject: `Neue B2B Anfrage von ${body.firmname || 'Unbekannt'}`,
      html: `
        <h1>Neue B2B Anfrage</h1>

        <h2>Firmendaten</h2>
        <p><strong>Firmenname:</strong> ${body.firmname}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.telefon}</p>

        <h2>Kontaktperson</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Vorname:</strong> ${body.forname}</p>

        <h2>Adresse</h2>
        <p><strong>PLZ, Ort:</strong> ${body.plzort}</p>
        <p><strong>Straße und Hausnummer:</strong> ${body.strasse}</p>

        <h2>Nachricht</h2>
        <p>${body.message ? body.message.replace(/\n/g, '<br>') : '-'}</p>

        <h2>Datenschutz</h2>
        <p><strong>Einwilligung:</strong> ${body.consent ? 'Ja' : 'Nein'}</p>
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
