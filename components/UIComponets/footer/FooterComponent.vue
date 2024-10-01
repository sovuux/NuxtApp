<template>
  <footer class="footer">
    <span class="footer-title footer-text">© Annonce 2023</span>
    <span class="footer-text">Документы</span>
    <span class="footer-text">О компании</span>
    <span class="footer-text footer-mobile-text">Продавцам</span>
    <span class="footer-text footer-mobile-text">Покупателям</span>
    <span class="footer-text footer-mobile-text">Разместить объявление</span>
    <span class="footer-text footer-mobile-text">Продавцам</span>
    <div class="footer-text footer-mobile-div">
      <img :src="RusIco" alt="rus" class="footer-mobile-div-ico" />
      <span class="footer-mobile-div-text">Русский</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import RusIco from "~/public/icons/Russian.png";
</script>

<style scoped lang="scss">
.footer {
  margin-top: 4rem;
  height: 88px;
  display: flex;
  align-items: center;
  background-color: $text-white-color;
  border-top: 1px solid $footer-border;
  &-text {
    margin-left: 2rem;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    color: $text-footer-color;
  }
  &-title {
    color: $text-color-main;
  }
  &-mobile {
    &-text {
      display: none;
    }
    &-div {
      display: none;
    }
  }
}
@media (max-width: 600px) {
  .footer {
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 0;
    &-text {
      padding: 1rem 1rem 0.5rem 1rem;
    }
    &-mobile {
      &-text {
        display: block;
      }
      &-div {
        display: flex;
        align-items: center;
        color: $text-color-main;
        font-weight: 500;
        margin-bottom: 1rem;
        &-ico {
          margin-right: 0.2rem;
          border-radius: 200px;
        }
      }
    }
  }
}
</style>
