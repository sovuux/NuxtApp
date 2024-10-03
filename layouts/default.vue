<template>
  <HeaderVue :header-logo="userLogo" />
  <UnderHeaderVue
    :company-agents-count="companyData.headers.agentsCount"
    :company-product-count="companyData.headers.productsCount"
    :company-documents="companyData.headers.rating.documents"
    :company-feed-back="companyData.headers.rating.reviews"
    :company-rating="companyData.headers.rating.stars"
    :company-logo="companyData.headers.logo"
    :company-title="companyData.headers.title"
  />
  <main>
    <slot />
  </main>
  <FooterComponent />
</template>

<script setup>
import HeaderVue from "~/components/UIComponets/header/HeaderVue.vue";
import UnderHeaderVue from "~/components/UIComponets/header/UnderHeaderVue.vue";
import FooterComponent from "~/components/UIComponets/footer/FooterComponent.vue";
import { useUserStore } from "~/store/users.store.js";
import { ref } from "vue";

const { data: companyData } = await useFetch("/api/company");

const store = useUserStore();
const user = ref({});
const userLogo = ref("");

//клонирование объекта из store
onMounted(() => {
  userLogo.value = localStorage.getItem("userLogo");
  user.value = { ...store.currentUser };
  console.log(user.value);
});
</script>
