<template>
  <NuxtLayout name="page">
    <div class="max-w-[600px] mx-auto p-6">
      <h1 class="text-2xl font-bold mb-6">Kontaktformular</h1>

      <!-- SUCCESS -->
      <div
        v-if="success"
        class="p-6 bg-green-50 border border-green-200 rounded-md text-center"
      >
        <h2 class="text-xl font-semibold mb-2">Ihre Anfrage wurde gesendet</h2>
        <p class="text-neutral-700">Vielen Dank! Wir melden uns bald bei Ihnen.</p>
      </div>

      <!-- FORM -->
      <form v-else class="flex flex-col gap-4" @submit.prevent="submitForm">

        <!-- NAME -->
        <div>
          <label class="block mb-1 font-medium">
            Name <span class="text-red-600">*</span>
          </label>
          <SfInput v-model="name" :invalid="submitted && nameError" />
          <p v-if="submitted && nameError" class="text-red-600 text-sm mt-1">
            Bitte geben Sie Ihren Namen ein.
          </p>
        </div>

        <!-- EMAIL -->
        <div>
          <label class="block mb-1 font-medium">
            Email <span class="text-red-600">*</span>
          </label>
          <SfInput
            v-model="email"
            type="email"
            :invalid="submitted && emailError"
          />
          <p v-if="submitted && emailError" class="text-red-600 text-sm mt-1">
            Bitte geben Sie eine gültige Email ein.
          </p>
        </div>

        <!-- MESSAGE -->
        <div>
          <label class="block mb-1 font-medium">
            Nachricht <span class="text-red-600">*</span>
          </label>
          <SfTextarea
            v-model="message"
            class="w-full"
            :invalid="submitted && messageError"
          />
          <p v-if="submitted && messageError" class="text-red-600 text-sm mt-1">
            Bitte geben Sie eine Nachricht ein.
          </p>
        </div>

        <!-- CONSENT -->
        <div>
          <label class="flex items-start gap-3 text-sm text-neutral-700 cursor-pointer">
            <input
              type="checkbox"
              v-model="consent"
              class="mt-1 h-4 w-4 border-neutral-400 rounded"
            />
            <span>
              Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
              <span class="text-red-600">*</span>
            </span>
          </label>
          <p v-if="submitted && consentError" class="text-red-600 text-sm mt-1">
            Bitte Zustimmung erteilen.
          </p>
        </div>

        <!-- SUBMIT -->
        <SfButton type="submit" :disabled="loading">
          <SfLoaderCircular v-if="loading" size="sm" />
          <span v-else>Absenden</span>
        </SfButton>
      </form>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { SfInput, SfTextarea, SfButton, SfLoaderCircular } from '@storefront-ui/vue'

/* FORM FIELDS */
const name = ref('')
const email = ref('')
const message = ref('')
const consent = ref(false)

/* STATE */
const loading = ref(false)
const success = ref(false)
const submitted = ref(false)

/* VALIDATION */
const nameError = computed(() => name.value.trim() === '')
const emailError = computed(() => !/^\S+@\S+\.\S+$/.test(email.value))
const messageError = computed(() => message.value.trim() === '')
const consentError = computed(() => !consent.value)

const formValid = computed(() =>
  !nameError.value &&
  !emailError.value &&
  !messageError.value &&
  !consentError.value
)

/* SUBMIT */
const submitForm = async () => {
  submitted.value = true

  if (!formValid.value) return

  loading.value = true
  success.value = false

  try {
    await $fetch('/api/kontakt', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: message.value,
        consent: consent.value
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
