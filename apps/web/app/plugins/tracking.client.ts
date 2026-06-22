export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("plenty:tracking", (event) => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(event)
  })
})
