export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    await $fetch(`${process.env.API_ENDPOINT}/rest/contactforms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.API_SECURITY_TOKEN}`
      },
      body
    })

    return { ok: true }
  } catch (err) {
    console.error("BUSINESS FORM ERROR:", err)
    throw createError({
      statusCode: 500,
      statusMessage: "Business form error",
      data: err
    })
  }
})
