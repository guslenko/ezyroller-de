// @ts-nocheck
export default defineNuxtPlugin(() => {
  if (process.client) {
    const id = 'GTM-T24Q79K3' // ← твой новый GTM ID

    // GTM script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`
    document.head.appendChild(script)

    // GTM noscript
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `
    document.body.prepend(noscript)
  }
})