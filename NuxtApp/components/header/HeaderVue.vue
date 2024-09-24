<template>
  <header class="header">
    <div class="header-left">
      <div class="header-left-logo">Annoncé</div>
      <div class="header-left-catalog">
        <img :src="CatalogIco" alt="catalog" />
        <span class="header-catalog-text"> Все категории </span>
      </div>
    </div>
    <nav class="header-right">
      <div class="header-right-city">
        <img :src="MapIco" alt="point" />
        <span class="header-right-city-text"> Ростов-на-Дону </span>
      </div>
      <div class="header-right-line">|</div>
      <div class="header-right-notification">
        <span> Разместить объявление </span>
      </div>
      <div class="header-right-profile">
        <i class="pi pi-bars" style="font-size: 1.5rem" />
        <img :src="props.headerLogo" alt="logo" />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import CatalogIco from "~/public/icons/catalog.png";
import MapIco from "~/public/icons/svg/map.svg";
import BaseLogo from "~/public/icons/favicon.ico";

const props = defineProps({
  headerLogo: {
    type: String,
    default: BaseLogo,
  },
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background-color: $header-background-color;
}
</style>
