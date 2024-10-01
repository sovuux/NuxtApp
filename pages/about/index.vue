<template>
  <div class="about-page">
    <div class="about-page-content about-page-block">
      <span class="about-page-title">О компании</span>
      <span class="about-page-description">{{ props.description }}</span>
    </div>
    <div class="about-page-work about-page-block">
      <span class="about-page-title">Режим работы</span>
      <span class="about-page-description">{{ props.workTime }}</span>
    </div>
    <div class="about-page-geo">
      <div class="about-page-geo-container about-page-block">
        <span class="about-page-title">Местоположение</span>
        <span class="about-page-description about-page-geo-container-text">{{
          props.address
        }}</span>
      </div>
      <div class="about-page-geo-map">{{ props.coordinateX }}</div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "О нас",
  ogTitle: "О нас",
  description: "default",
  ogDescription: "default",
});

const props = defineProps({
  description: {
    type: String,
    default:
      "Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой.",
  },
  workTime: {
    type: String,
    default: "Сегодня с 8:00 до 23:00",
  },
  address: {
    type: String,
    default: "Ростов на Дону, Воронежская ул., 42А корп. 1",
  },
  coordinateX: {
    type: String,
    default: "",
  },
  coordinateY: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.about-page {
  margin-top: 20px;
  display: grid;
  justify-content: center;
  &-title {
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 0.5rem;
  }
  &-text {
    font-size: 17px;
    font-weight: 400;
    color: $text-color-main;
  }
  &-block {
    width: 560px;
    margin-top: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  &-work {
    opacity: 0.3;
  }
  &-geo {
    display: flex;
    &-container {
      &-text {
        color: $text-color-green;
      }
    }
    &-map {
      width: 200px;
      border-radius: 0 12px 12px 0;
      background: $text-color-green;
    }
  }
}
</style>
