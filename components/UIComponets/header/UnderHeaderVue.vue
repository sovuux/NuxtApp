<template>
  <div class="under-header">
    <div class="under-header-head">
      <div :style="logoBackground" class="under-header-head-logo" />
      <h1 class="under-header-head-title">{{ props.companyTitle }}</h1>
      <div class="under-header-head-rating">
        <div v-if="companyDocuments" class="under-header-head-rating-documents">
          <img
            :src="CheckPng"
            alt="check-png"
            class="under-header-head-rating-ico"
          />
          <span>Документы проверены</span>
          <span class="under-header-head-point">•</span>
        </div>
        <div class="under-header-head-rating-stars">
          <img :src="StarPng" alt="star" class="under-header-head-rating-ico" />
          <span>{{ props.companyRating }}</span>
        </div>
        <span class="under-header-head-point">•</span>
        <div class="under-header-head-rating-feedback">
          <span>{{ props.companyFeedBack }}</span>
        </div>
      </div>
    </div>
    <div class="under-header-body">
      <button class="under-header-body-button">Показать номер телефона</button>
    </div>
    <div class="under-header-footer">
      <NuxtLink
        to="/"
        class="under-header-footer-button"
        :class="{ 'active-link': $route.path === '/' }"
        >Товары и услуги
        <span class="under-header-footer-button-count"
          >{{ props.companyProductCount }}
        </span>
      </NuxtLink>
      <NuxtLink
        to="/agents"
        class="under-header-footer-button"
        :class="{ 'active-link': $route.path === '/agents' }"
      >
        Агенты
        <span class="under-header-footer-button-count"
          >{{ props.companyAgentsCount }}
        </span>
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="under-header-footer-button"
        :class="{ 'active-link': $route.path === '/about' }"
        >О компании</NuxtLink
      >
    </div>
    <div class="under-header-underline" />
  </div>
</template>

<script setup lang="ts">
import LogoPng from "public/logo.png";
import CheckPng from "public/icons/greenCheck.png";
import StarPng from "public/icons/greenStar.png";

const props = defineProps({
  companyLogo: {
    type: String,
    default: LogoPng,
  },
  companyTitle: {
    type: String,
    default: "Наследие",
  },
  companyDocuments: {
    type: Boolean,
    default: true,
  },
  companyRating: {
    type: Number,
    default: 4.7,
  },
  companyFeedBack: {
    type: String,
    default: "19 отзывов",
  },
  companyProductCount: {
    type: Number,
    default: 0,
  },
  companyAgentsCount: {
    type: Number,
    default: 0,
  },
});

const logoBackground = computed(() => ({
  backgroundImage: `url(${props.companyLogo})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "120px",
  height: "120px",
}));
</script>

<style scoped lang="scss">
.under-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-point {
      margin: 0 0.5rem 0 0.5rem;
    }
    &-logo {
      border-radius: 20px;
      width: 120px;
      height: auto;
    }
    &-title {
      margin-top: 1.5rem;
      font-size: 24px;
      font-weight: 600;
    }
    &-rating {
      margin-top: 12px;
      display: flex;
      font-size: 15px;
      font-weight: 400;
      &-ico {
        padding-right: 0.5rem;
      }
      &-documents {
        display: flex;
        align-items: center;
      }
      &-stars {
        display: flex;
        align-items: center;
      }
      &-feedback {
        display: flex;
      }
    }
  }
  &-body {
    margin-top: 24px;
    &-button {
      cursor: pointer;
      background-color: $text-color-green;
      color: #f5f5f5;
      font-size: 15px;
      font-weight: 500;
      padding: 20px;
      border-radius: 12px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  &-footer {
    margin-top: 32px;
    &-button {
      cursor: pointer;
      color: $text-color-main;
      margin: 0 0.5rem 0 0.5rem;
      padding: 12px;
      background-color: $header-container-background-color;
      font-size: 15px;
      font-weight: 500;
      border-radius: 12px;
      &-count {
        color: #6b6b6b;
      }
      &:hover {
        opacity: 0.9;
      }
    }
  }
  &-underline {
    margin-top: 32px;
    height: 1px;
    width: 100%;
    background-color: #cccccccc;
  }
}
@media (max-width: 768px) {
  .under-header {
    &-head {
      display: none;
    }
    &-body {
      display: none;
    }
    &-footer {
      margin: 10px 0 10px 0;
      flex-wrap: nowrap;
      display: flex;
      &-button {
        font-size: clamp(11px, 13px, 15px);
      }
    }
    &-underline {
      margin: 0;
    }
  }
}
.active-link {
  border: 1px solid $text-color-main;
}
</style>
