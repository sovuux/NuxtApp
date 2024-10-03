<template>
  <div class="main-page">
    <div class="main-page-head">
      <SelectComponent />
    </div>
    <div class="main-page-body">
      <div class="main-page-body-container">
        <ProductCard
          v-for="product in companyData.products"
          :key="product.id"
          :background-image="product.logo"
          :description="product.name"
          :price="product.price"
          :views-count="product.views"
          :day-count="product.daysSincePosted"
          :status="product.status"
        />
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

//Запрос для получения данных о компании
const { data: companyData } = await useFetch("/api/company");
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
