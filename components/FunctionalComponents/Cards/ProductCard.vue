<template>
  <div class="card">
    <div :style="cardBackgroundStyle" class="card-head">
      <div class="card-head-label">
        <i class="pi pi-eye" />
        <span>{{ props.viewsCount }}</span>
      </div>
      <div class="card-head-label">
        <i class="pi pi-calendar" />
        <span>{{ props.dayCount }}</span>
      </div>
    </div>
    <div class="card-body">
      <h1 class="card-body-price">{{ props.price }}</h1>
      <h2 class="card-body-description">{{ props.description }}</h2>
      <div class="card-body-line" />
    </div>
    <div class="card-status">{{ props.status }}</div>
  </div>
</template>

<script setup>
import CarPng from "public/cardImages/carPng.png";

const props = defineProps({
  backgroundImage: {
    type: String,
    default: CarPng,
  },
  viewsCount: {
    type: Number,
    default: 10,
  },
  dayCount: {
    type: String,
    default: "2 дня",
  },
  price: {
    type: String,
    default: "7 500 ₽",
  },
  description: {
    type: String,
    default: "Описание товара/услуги",
  },
  status: {
    type: String,
    default: "Объявление продвигается",
  },
});

const cardBackgroundStyle = computed(() => ({
  backgroundImage: `url(${props.backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));
</script>

<style scoped lang="scss">
.card {
  cursor: pointer;
  width: calc(25% - 3rem);
  margin: 1.5rem;
  &-head {
    border-radius: 28px;
    height: 322px;
    display: flex;
    user-select: none;
    &-label {
      background-color: #1b1d2299;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 72px;
      height: 32px;
      gap: 8px;
      margin: 8px 8px 12px 8px;
      color: white;
      border-radius: 12px;
      font-size: 13px;
    }
  }
  &-body {
    color: $text-color-main;
    margin-top: 1rem;
    margin-bottom: 12px;
    &-price {
      font-size: 17px;
      font-weight: 500;
    }
    &-description {
      padding-top: 0.5rem;
      font-size: 15px;
      font-weight: 500;
    }
    &-line {
      margin-top: 0.5rem;
      width: auto;
      height: 1px;
      background: $header-container-background-color;
    }
  }
  &-status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 1200px) {
  .card {
    width: calc(50% - 3rem);
    margin: 2rem 1rem 15rem 1rem;
    &-head {
      width: auto;
      height: 150%;
    }
  }
}

@media (max-width: 900px) {
  .card {
    width: calc(50% - 3rem);
    margin: 4rem 1rem 4rem 1rem;
    &-head {
      width: auto;
      height: 100%;
    }
  }
}

@media (max-width: 600px) {
  .card {
    width: calc(100% - 3rem);
    margin: 2rem 0 13rem 0;
    &-head {
      width: auto;
      height: 150%;
    }
  }
}
</style>
