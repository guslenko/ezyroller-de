<template>
  <ErBVideo />
  <ErBusiness />
  <NuxtLayout name="page">
    <div class="max-w-[700px] mx-auto p-6" id="business">
      <h1 class="text-2xl font-bold mb-6">{{ $t("biz34") }}</h1>

      <!-- SUCCESS -->
      <div
        v-if="success"
        class="p-6 bg-green-50 border border-green-200 rounded-md text-center"
      >
        <h2 class="text-xl font-semibold mb-2">{{ $t("businesssuccess1") }}</h2>
        <p class="text-neutral-700">{{ $t("businesssuccess2") }}</p>
      </div>

      <!-- FORM -->
      <form v-else class="flex flex-col gap-6" @submit.prevent="submitForm">

        <!-- FIRMA -->
        <div>
          <label class="block mb-1 font-medium">
            {{ $t("business1") }} <span class="text-red-600">*</span>
          </label>
          <SfInput v-model="firmname" :invalid="submitted && firmnameError" />
          <p v-if="submitted && firmnameError" class="text-red-600 text-sm mt-1">
            {{ $t("business1error") }}
          </p>
        </div>

        <!-- EMAIL + TELEFON -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 font-medium">
              {{ $t("business2") }} <span class="text-red-600">*</span>
            </label>
            <SfInput v-model="email" type="email" :invalid="submitted && emailError" />
            <p v-if="submitted && emailError" class="text-red-600 text-sm mt-1">
              {{ $t("business2error") }}
            </p>
          </div>

          <div>
            <label class="block mb-1 font-medium">
              {{ $t("business3") }} <span class="text-red-600">*</span>
            </label>
            <SfInput v-model="telefon" :invalid="submitted && telefonError" />
            <p v-if="submitted && telefonError" class="text-red-600 text-sm mt-1">
              {{ $t("business3error") }}
            </p>
          </div>
        </div>

        <!-- NAME + FORNAME -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block mb-1 font-medium">
              {{ $t("business4") }} <span class="text-red-600">*</span>
            </label>
            <SfInput v-model="name" :invalid="submitted && nameError" />
            <p v-if="submitted && nameError" class="text-red-600 text-sm mt-1">
              {{ $t("business4error") }}
            </p>
          </div>

          <div>
            <label class="block mb-1 font-medium">
              {{ $t("business5") }} <span class="text-red-600">*</span>
            </label>
            <SfInput v-model="forname" :invalid="submitted && fornameError" />
            <p v-if="submitted && fornameError" class="text-red-600 text-sm mt-1">
              {{ $t("business5error") }}
            </p>
          </div>
        </div>

        <!-- PLZ/ORT + STRASSE -->
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-1">
            <label class="block mb-1 font-medium">
              {{ $t("business6") }} <span class="text-red-600">*</span>
            </label>
            <SfInput v-model="plzort" :invalid="submitted && plzortError" />
            <p v-if="submitted && plzortError" class="text-red-600 text-sm mt-1">
              {{ $t("business6error") }}
            </p>
          </div>

          <div class="col-span-2">
            <label class="block mb-1 font-medium">
              {{ $t("business7") }} <span class="text-red-600">*</span>
            </label>
            <SfInput v-model="strasse" :invalid="submitted && strasseError" />
            <p v-if="submitted && strasseError" class="text-red-600 text-sm mt-1">
              {{ $t("business7error") }}
            </p>
          </div>
        </div>

        <!-- MESSAGE -->
        <div>
          <label class="block mb-1 font-medium">
            {{ $t("business8") }} <span class="text-red-600">*</span>
          </label>
          <SfTextarea
            v-model="message"
            class="w-full"
            :invalid="submitted && messageError"
          />
          <p v-if="submitted && messageError" class="text-red-600 text-sm mt-1">
            {{ $t("business8error") }}
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
              {{ $t("business9") }}
              <span class="text-red-600">*</span>
            </span>
          </label>
          <p v-if="submitted && consentError" class="text-red-600 text-sm mt-1">
            {{ $t("business9error") }}
          </p>
        </div>

        <!-- SUBMIT -->
        <SfButton type="submit" :disabled="loading">
          <SfLoaderCircular v-if="loading" size="sm" />
          <span v-else>{{ $t("businesssubmit") }}</span>
        </SfButton>
      </form>
    </div>
  </NuxtLayout>
</template>


<script setup>
definePageMeta({
  pageType: "static",
})

const { t } = useI18n()

useHead({
  title: t("businesstitle"),
  meta: [
    {
      name: "description",
      content: t("businesstop2"),
    },
    {
      property: "og:title",
      content: t("businesstitle"),
    },
    {
      property: "og:description",
      content: t("businesstop2"),
    }
  ]
})

import ErBusiness from "~/components/Home/ErBusiness.vue"
import ErBVideo from "~/components/Home/ErBVideo.vue"

import { ref, computed } from 'vue'
import { SfInput, SfTextarea, SfButton, SfLoaderCircular } from '@storefront-ui/vue'

/* FIELDS */
const firmname = ref('')
const email = ref('')
const telefon = ref('')
const name = ref('')
const forname = ref('')
const plzort = ref('')
const strasse = ref('')
const message = ref('')
const consent = ref(false)

/* STATE */
const loading = ref(false)
const success = ref(false)
const submitted = ref(false)

/* VALIDATION */
const firmnameError = computed(() => firmname.value.trim() === '')
const emailError = computed(() => !/^\S+@\S+\.\S+$/.test(email.value))
const telefonError = computed(() => telefon.value.trim() === '')
const nameError = computed(() => name.value.trim() === '')
const fornameError = computed(() => forname.value.trim() === '')
const plzortError = computed(() => plzort.value.trim() === '')
const strasseError = computed(() => strasse.value.trim() === '')
const messageError = computed(() => message.value.trim() === '')
const consentError = computed(() => !consent.value)

const formValid = computed(() =>
  !firmnameError.value &&
  !emailError.value &&
  !telefonError.value &&
  !nameError.value &&
  !fornameError.value &&
  !plzortError.value &&
  !strasseError.value &&
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
    await $fetch('/api/business', {
      method: 'POST',
      body: {
        firmname: firmname.value,
        email: email.value,
        telefon: telefon.value,
        name: name.value,
        forname: forname.value,
        plzort: plzort.value,
        strasse: strasse.value,
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
