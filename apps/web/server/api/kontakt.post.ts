export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    await $fetch(`${process.env.API_ENDPOINT}/rest/contactforms/3`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.API_SECURITY_TOKEN}`
      },
      body
    })

    return { ok: true }
  } catch (err) {
    console.error("PLENTY KONTAKT FORM ERROR:", err)
    throw createError({
      statusCode: 500,
      statusMessage: "Plenty kontakt form error",
      data: err
    })
  }
})
