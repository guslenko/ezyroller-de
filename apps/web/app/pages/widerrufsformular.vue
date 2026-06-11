<template>
  <NuxtLayout name="page">
    <div class="max-w-[700px] mx-auto p-6" id="widerruf">
      <h1 class="text-2xl font-bold mb-6">Widerrufsformular</h1>

      <!-- SUCCESS -->
      <div
        v-if="success"
        class="p-6 bg-green-50 border border-green-200 rounded-md text-center"
      >
        <h2 class="text-xl font-semibold mb-2">Ihr Widerruf wurde gesendet</h2>
        <p class="text-neutral-700">Vielen Dank! Wir melden uns bald.</p>
      </div>

      <!-- FORM -->
      <form v-else class="flex flex-col gap-6" @submit.prevent="submitForm">

        <!-- ORDER NUMBER -->
        <div>
          <label class="block mb-1 font-medium">
            Auftragsnummer <span class="text-red-600">*</span>
          </label>
          <SfInput v-model="orderId" :invalid="submitted && orderIdError" />
          <p v-if="submitted && orderIdError" class="text-red-600 text-sm mt-1">
            Bitte geben Sie Ihre Auftragsnummer ein.
          </p>
        </div>

        <!-- FULL NAME -->
        <div>
          <label class="block mb-1 font-medium">
            Vollständiger Name <span class="text-red-600">*</span>
          </label>
          <SfInput v-model="fullname" :invalid="submitted && fullnameError" />
          <p v-if="submitted && fullnameError" class="text-red-600 text-sm mt-1">
            Bitte geben Sie Ihren vollständigen Namen ein.
          </p>
        </div>

        <!-- EMAIL -->
        <div>
          <label class="block mb-1 font-medium">
            Kontakt-E-Mail <span class="text-red-600">*</span>
          </label>
          <SfInput v-model="email" type="email" :invalid="submitted && emailError" />
          <p v-if="submitted && emailError" class="text-red-600 text-sm mt-1">
            Bitte geben Sie eine gültige E-Mail ein.
          </p>
        </div>

        <!-- OPTIONAL MESSAGE -->
        <div>
          <label class="block mb-1 font-medium">
            Grund für den Widerruf (optional)
          </label>
          <SfTextarea
            v-model="reason"
            class="w-full"
          />
        </div>

        <!-- REQUIRED FIELDS NOTE -->
        <p class="text-sm text-neutral-600">
          * markierte Felder sind Pflichtfelder
        </p>

        <!-- SUBMIT -->
        <SfButton type="submit" :disabled="loading">
          <SfLoaderCircular v-if="loading" size="sm" />
          <span v-else>Widerruf bestätigen</span>
        </SfButton>
      </form>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  pageType: "static",
})

useHead({
  title: "Widerrufsformular",
  meta: [
    {
      name: "description",
      content: "Widerrufsformular – Bestellung widerrufen",
    }
  ]
})

import { ref, computed } from 'vue'
import { SfInput, SfTextarea, SfButton, SfLoaderCircular } from '@storefront-ui/vue'

/* FIELDS */
const orderId = ref('')
const fullname = ref('')
const email = ref('')
const reason = ref('')

/* STATE */
const loading = ref(false)
const success = ref(false)
const submitted = ref(false)

/* VALIDATION */
const orderIdError = computed(() => orderId.value.trim() === '')
const fullnameError = computed(() => fullname.value.trim() === '')
const emailError = computed(() => !/^\S+@\S+\.\S+$/.test(email.value))

const formValid = computed(() =>
  !orderIdError.value &&
  !fullnameError.value &&
  !emailError.value
)

/* SUBMIT */
const submitForm = async () => {
  submitted.value = true
  if (!formValid.value) return

  loading.value = true
  success.value = false

  try {
    await $fetch('/api/widerruf', {
      method: 'POST',
      body: {
        orderId: orderId.value,
        fullname: fullname.value,
        email: email.value,
        reason: reason.value
      }
    })

    success.value = true
  } catch (err) {
    console.error('FORM ERROR:', err)
  } finally {
    loading.value = false
  }
}
</script>
