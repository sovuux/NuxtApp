<!--Экспериментальное решение, через использование 2 header-->
<template>
  <!--  Desktop Header-->
  <header class="header">
    <div class="header-left">
      <div class="header-left-logo header-logo">Annoncé</div>
      <div class="header-left-catalog">
        <img :src="CatalogIco" alt="catalog" />
        <span class="header-left-catalog-text"> Все категории </span>
      </div>
    </div>
    <nav class="header-right">
      <div class="header-right-city header-right-item">
        <img :src="MapIco" alt="point" />
        <span class="header-right-city-text"> Ростов-на-Дону </span>
      </div>
      <div class="header-right-line header-right-item">|</div>
      <div class="header-right-notification header-right-item">
        <span> Разместить объявление </span>
      </div>
      <div
        class="header-right-profile header-right-item"
        @click="toggleBurgerMenu"
      >
        <i
          class="pi pi-bars header-right-profile-icon"
          style="font-size: 1.5rem"
        >
          <div
            class="header-right-profile-dropdown"
            v-if="isBurgerMenuOpen"
            @click="store.logout"
          >
            Выйти
          </div>
        </i>
        <img
          :src="props.headerLogo"
          alt="logo"
          class="header-right-profile-logo"
        />
      </div>
    </nav>
  </header>
  <!--  Mobile Header-->
  <header class="header-mobile">
    <div class="header-mobile-content">
      <div class="header-mobile-content-menu-icon" @click="toggleBurgerMenu">
        <i class="pi pi-bars" style="font-size: 1.5rem" />
      </div>
      <div class="header-mobile-logo header-logo">Annoncé</div>
      <div class="header-mobile-content-menu-icon">
        <img :src="CartIco" alt="cart" />
      </div>
    </div>
    <div v-if="isBurgerMenuOpen" class="mobile-menu">
      <div class="mobile-menu-item">Все категории</div>
      <div class="mobile-menu-item">Разместить объявление</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import CatalogIco from "public/icons/catalog.png";
import CartIco from "public/icons/cart.png";
import MapIco from "public/icons/svg/map.svg";
import BaseLogo from "public/icons/favicon.ico";
import { ref } from "vue";
import { useUserStore } from "~/store/users.store";

const props = defineProps({
  headerLogo: {
    type: String,
    default: BaseLogo,
  },
});

const store = useUserStore();

//Бургер меню
const isBurgerMenuOpen = ref(false);

function toggleBurgerMenu() {
  isBurgerMenuOpen.value = !isBurgerMenuOpen.value;
}
</script>

<style scoped lang="scss">
//Header desktop
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0;
  background-color: $header-background-color;
  &-logo {
    font-size: clamp(20px, 28px, 34px) !important;
  }
  &-left {
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    user-select: none;
    &-logo {
      @include Title;
      font-size: 28px;
      font-weight: 600;
      color: $title-color;
      cursor: pointer;
    }
    &-catalog {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      padding: 1rem;
      border-radius: 40px;
      background: $header-container-background-color;
      cursor: pointer;
      &-text {
        font-size: 15px;
        font-weight: 600;
        margin-left: 0.5rem;
      }
    }
  }
  &-right {
    display: flex;
    align-items: center;
    font-size: 15px;
    &-item {
      margin: 0 1rem 0 1rem;
    }
    &-city {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-weight: 400;
      color: $text-color-main;
      &-text {
        margin-left: 0.5rem;
      }
    }
    &-line {
      font-size: 30px;
      font-weight: 200;
    }
    &-notification {
      color: $text-color-green;
      cursor: pointer;
    }
    &-profile {
      user-select: none;
      cursor: pointer;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: $header-container-background-color;
      padding: 0.2rem 0.2rem 0.2rem 1rem;
      margin: 0 1.5rem 0 1rem;
      border-radius: 24px;
      &-logo {
        padding: 0.5rem;
        background-color: $primary;
        margin-left: 0.5rem;
        border-radius: 50px;
        width: 50px;
        height: 50px;
      }
      &-icon {
        position: relative;
        display: inline-block;
      }
      &-dropdown {
        user-select: none;
        position: absolute;
        background-color: #ff3737;
        border-radius: 12px;
        color: $primary;
        min-width: 50px;
        margin-top: 1rem;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        padding: 6px 8px;
        z-index: 1;
      }
    }
  }
}

//Header Mobile
.header-mobile {
  display: none;
  padding: 1rem 2rem 1rem 2rem;
  background-color: $header-background-color;

  .header-mobile-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-mobile-logo {
    font-size: 2rem;
    margin-left: 3rem;
    font-weight: bold;
    color: $title-color;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    background-color: $header-container-background-color;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    .mobile-menu-item {
      padding: 1rem;
      border-bottom: 1px solid #ddd;
      cursor: pointer;
      color: $text-color-main;

      &:last-child {
        border-bottom: none;
      }
    }
  }
}

//Adaptive
@media (max-width: 768px) {
  .header {
    display: none;
  }

  .header-mobile {
    display: block;
  }
}
</style>