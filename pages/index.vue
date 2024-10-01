<template>
  <div class="main-page">
    <div class="main-page-head">
      <SelectComponent />
    </div>
    <div class="main-page-body">
      <div class="main-page-body-container">
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import SelectComponent from "~/components/FunctionalComponents/Select/SelectComponent.vue";
import ProductCard from "~/components/FunctionalComponents/Cards/ProductCard.vue";

useSeoMeta({
  title: "Главная страница",
  ogTitle: "Главная страница",
  description: "default",
  ogDescription: "default",
});
</script>

<style lang="scss" scoped>
.main-page {
  &-body {
    &-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>
