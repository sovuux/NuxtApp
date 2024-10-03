<template>
  <div class="container">
    <Select
      v-model="selectedCategory"
      :options="categories"
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="items"
      class="container-dropdown"
      group
    >
      <template #value="slotProps">
        <div class="container-dropdown-selected-option">
          <span>{{ slotProps.value?.label || "Все товары и услуги" }}</span>
        </div>
      </template>

      <template #optiongroup="slotProps">
        <div class="container-dropdown-group-header">
          <span>{{ slotProps.option.label }}</span>
        </div>
      </template>

      <template #option="slotProps">
        <div class="container-dropdown-option-item">
          <span>{{ slotProps.option.label }}</span>
        </div>
        <i
          v-if="selectedCategory === slotProps.option"
          class="pi pi-check container-dropdown-option-item-check"
        />
      </template>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Select from "primevue/select";

//Категории Select
const categories = ref([
  {
    label: null,
    items: [{ label: "Все товары и услуги", value: "allCategories" }],
  },
  {
    label: "Категория 1",
    items: [
      { label: "Гробы", value: "coffin", count: 5 },
      { label: "Урны", value: "urn", count: 12 },
    ],
  },
  {
    label: "Категория 2",
    items: [
      { label: "Тапки", value: "slippers", count: 2 },
      { label: "Покрывало", value: "cover", count: 1 },
    ],
  },
]);
//Изначально выбранная категория
const selectedCategory = ref(categories.value[0].items[0].value);
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  &-dropdown {
    width: 100%;
    max-width: 350px;
    background-color: #dbdbdb;
    border-radius: 8px;
    border: none;
    padding: 10px;
    &:focus {
      border-color: #ededed !important;
    }
    &-selected-option {
      font-size: 15px;
      font-weight: 600;
      color: #333;
    }

    &-group-header {
      font-size: 13px;
      font-weight: 400;
      color: #666;
      padding: 8px 0;
    }

    &-option-item {
      display: flex;
      font-weight: 400;
      font-size: 15px;
      padding: 8px 0;
      color: $text-color-main;
      cursor: pointer;
      &-check {
        color: $text-color-green;
      }
    }
  }
}

.item-count {
  font-size: 12px;
  color: #999;
}
.p-select-option {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.p-select:not(p-disabled) {
  border: 1px solid #ededed !important;
  background: #f5f5f5 !important;
}
.p-focus {
  background: transparent !important;
}
.p-select-option-selected {
  background: transparent !important;
}
.p-select-list-container {
  background: #f5f5f5 !important;
}
#pv_id_1_0 {
  display: none !important;
}
</style>
