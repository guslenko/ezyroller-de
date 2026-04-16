export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    await $fetch(`${process.env.PLENTY_API_URL}/rest/forms/business`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.PLENTY_API_TOKEN}`
      },
      body: {
        data: body
      }
    })

    return { ok: true }
  } catch (err) {
    console.error("PLENTY FORM ERROR:", err)
    throw createError({
      statusCode: 500,
      statusMessage: "Plenty form error",
      data: err
    })
  }
})
