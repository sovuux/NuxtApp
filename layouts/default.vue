<template>
  <HeaderVue />
  <UnderHeaderVue />
  <main>
    <slot />
  </main>
  <FooterComponent />
</template>

<script setup>
import HeaderVue from "~/components/UIComponets/header/HeaderVue.vue";
import UnderHeaderVue from "~/components/UIComponets/header/UnderHeaderVue.vue";
import FooterComponent from "~/components/UIComponets/footer/FooterComponent.vue";
</script>
