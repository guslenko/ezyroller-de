<template>    
    <div class="mx-auto border-b border-slate-300">
    <div class="max-w-screen-3xl flex items-center mx-auto py-3">


      <UiLogo />

      <UiSearch class="hidden md:block flex-1 relative z-30 px-10" />
      
      <nav class="hidden ml-4 md:flex md:flex-row md:flex-nowrap max-w-screen-3xl">

        <LanguageSelectorNew />
        
        <SfDropdown v-if="isAuthorized" v-model="isAccountDropdownOpen" placement="bottom-end" class="z-50">
          <template #trigger>
            <UiButton
              variant="tertiary"
              class="group relative hover:!bg-slate-300 active:!bg-slate-300 mr-3 -ml-0.5 rounded-md cursor-pointer shadow-xs border border-slate-300 bg-slate-200 text-slate-700"
              :class="{ 'bg-primary-700': isAccountDropdownOpen }"
              data-testid="account-dropdown-button"
              @click="accountDropdownToggle()"
            >
              <template #prefix>
                <SfIconPerson />
              </template>
              {{ user?.firstName }}
            </UiButton>
          </template>
          
          <ul class="rounded bg-white shadow-md border border-neutral-100 text-neutral-900 min-w-[152px] py-2">
            <li v-for="({ label, link }, labelIndex) in accountDropdown" :key="`label-${labelIndex}`">
              <template v-if="label === t('account.logout')">
                <UiDivider class="my-2" />
                <SfListItem tag="button" class="text-left" data-testid="account-dropdown-logout-item" @click="logOut()">
                  {{ label }}
                </SfListItem>
              </template>
              <SfListItem
                v-else
                :tag="NuxtLink"
                :to="link"
                :class="{ 'bg-neutral-200': route.path === link }"
                data-testid="account-dropdown-list-item"
              >
                {{ label }}
              </SfListItem>
            </li>
          </ul>
        </SfDropdown>
        
        <UiButton
          v-else
          class="group relative hover:!bg-slate-200 active:!bg-slate-200 mr-3 ml-3 px-4 -ml-0.5 rounded-md cursor-pointer shadow-xs bg-white text-slate-700"
          variant="tertiary"
          :aria-label="t('auth.login.openLoginForm')"
          square
          @click="navigateToLogin"
        >
          <SfIconPerson />
        </UiButton>
        <UiButton
          class="group relative hover:!bg-slate-200 active:!bg-slate-200 mr-3 -ml-0.5 rounded-md cursor-pointer shadow-xs bg-swhite px-4 text-slate-700"
          :tag="NuxtLink"
          :to="localePath(paths.cart)"
          :aria-label="t('numberInCart', { count: cartItemsCount })"
          variant="tertiary"
          square
        >
          <template #prefix>
            <SfIconShoppingCart />
            <SfBadge
              :content="cartItemsCount"
              :style="{ backgroundColor: iconColor, outlineColor: headerBackgroundColor, color: headerBackgroundColor }"
              class="outline group-hover:outline-primary-800 group-active:outline-primary-700 flex justify-center items-center text-xs min-w-[16px] min-h-[16px]"
              data-testid="cart-badge"
              placement="top-right"
              :max="99"
            />
          </template>
        </UiButton>
      </nav>
      
    </div>
    

    <div v-if="viewport.isLessThan('lg')">
      <LanguageSelectorNew />
      <UiButton
        variant="tertiary"
        class="relative text-white hover:text-white active:text-white hover:bg-header-400 active:bg-header-400 rounded-md md:hidden"
        square
        :style="{ color: iconColor }"
        :aria-label="t('openSearchModalButtonLabel')"
        @click="searchModalOpen"
      >
        <SfIconSearch />
      </UiButton>
    </div>
    <ErMenu />
    </div>
    



  
  <UiModal
    v-if="viewport.isGreaterOrEquals('md') && isAuthenticationOpen"
    v-model="isAuthenticationOpen"
    tag="section"
    class="h-full md:w-[500px] md:h-fit m-0 p-0 overflow-y-auto"
  >
    <header class="relative z-40">
      <UiButton
        :aria-label="t('closeDialog')"
        square
        variant="tertiary"
        class="absolute right-2 top-2"
        @click="closeAuthentication"
      >
        <SfIconClose />
      </UiButton>
    </header>
    <LoginComponent
      v-if="isLogin"
      :is-modal="true"
      @change-view="isLogin = false"
      @logged-in="navigateAfterAuth(true)"
    />
    <Register v-else :is-modal="true" @change-view="isLogin = true" @registered="closeAuthentication" />
  </UiModal>

  <NuxtLazyHydrate v-if="viewport.isLessThan('lg')" when-idle>
    <SfModal
      v-model="isSearchModalOpen"
      class="w-full h-full z-50"
      tag="section"
      role="dialog"
      aria-labelledby="search-modal-title"
    >
      <header class="mb-4">
        <UiButton
          :aria-label="t('closeDialog')"
          square
          variant="tertiary"
          class="absolute right-4 top-2"
          @click="searchModalClose"
        >
          <SfIconClose class="text-neutral-500" />
        </UiButton>
        <h3 id="search-modal-title" class="absolute left-6 top-4 font-bold typography-headline-4 mb-4">
          {{ t('search') }}
        </h3>
      </header>
      <UiSearch :close="searchModalClose" />
    </SfModal>
  </NuxtLazyHydrate>
  
</template>

<script setup lang="ts">
import {
  SfBadge,
  SfDropdown,
  SfIconClose,
  SfIconPerson,
  SfIconSearch,
  SfIconShoppingCart,
  SfListItem,
  SfModal,
  useDisclosure,
} from '@storefront-ui/vue';
import LanguageSelectorNew from '~/components/LanguageSelector/LanguageSelectorNew.vue';
import { paths } from '~/utils/paths';
import { handleLogout } from '~/utils/logout';
import ErMenu from "~/components/ui/ErMenu.vue";

const isLogin = ref(true);
const { data: cart } = useCart();
const cartItemsCount = ref(0);
const { getSetting: getIconColor } = useSiteSettings('iconColor');
const { getSetting: getHeaderBackgroundColor } = useSiteSettings('headerBackgroundColor');

const iconColor = computed(() => getIconColor());
const headerBackgroundColor = computed(() => getHeaderBackgroundColor());

const NuxtLink = resolveComponent('NuxtLink');
const { t, localeCodes } = useI18n();
const route = useRoute();
const localePath = useLocalePath();
const { isOpen: isAccountDropdownOpen, toggle: accountDropdownToggle } = useDisclosure();
const { isOpen: isAuthenticationOpen, open: openAuthentication, close: closeAuthentication } = useDisclosure();
const { open: searchModalOpen, isOpen: isSearchModalOpen, close: searchModalClose } = useDisclosure();
const { toggle: toggleLanguageSelect, isOpen: isLanguageSelectOpen } = useLocalization();
const { data: categoryTree } = useCategoryTree();
const { user, isAuthorized, logout } = useCustomer();
const viewport = useViewport();
const runtimeConfig = useRuntimeConfig();
const showConfigurationDrawer = runtimeConfig.public.showConfigurationDrawer;
const { isEditing, disableActions } = useEditor();
const isActive = computed(() => isLanguageSelectOpen);

onNuxtReady(() => {
  cartItemsCount.value = cart.value?.items?.reduce((price, { quantity }) => price + quantity, 0) ?? 0;
});

const navigateAfterAuth = (reload: boolean) => {
  if (reload) {
    window.location.reload();
  } else {
    closeAuthentication();
  }
};

watch(
  () => cart.value?.items,
  (cartItems) => {
    cartItemsCount.value = cartItems?.reduce((price, { quantity }) => price + quantity, 0) ?? 0;
  },
);

watch(
  () => isAuthenticationOpen.value,
  async () => {
    isLogin.value = true;
  },
);

const logOut = () => handleLogout({ logout, toggle: accountDropdownToggle });

const accountDropdown = computed(() => [
  {
    label: t('account.heading'),
    link: localePath(paths.account),
  },
  {
    label: t('account.ordersAndReturns.section.myOrders'),
    link: localePath(paths.accountMyOrders),
  },
  {
    label: t('account.ordersAndReturns.section.returns'),
    link: localePath(paths.accountReturns),
  },
  {
    label: t('account.logout'),
  },
]);
const navigateToLogin = () => {
  if (route.path !== localePath(paths.authLogin)) {
    openAuthentication();
  }
};
</script>
