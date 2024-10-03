<template>
  <div class="card">
    <div class="card-logo" :style="cardBackgroundImage" />
    <div class="card-content">
      <div class="card-content-head">
        <span class="card-content-head-title">{{ props.title }}</span>
        <div class="card-content-head-labels">
          <span v-if="props.documents" class="card-content-head-labels-item">
            <img
              v-if="props.documents"
              :src="CheckPng"
              alt="check"
              class="card-content-head-labels-item-icon"
            />
            Документы проверены
            <span class="card-content-head-labels-point">•</span>
          </span>
          <span v-if="props.rating" class="card-content-head-labels-item">
            <img
              v-if="props.rating"
              :src="StarPng"
              alt="check"
              class="card-content-head-labels-item-icon"
            />
            {{ props.rating }}
            <span class="card-content-head-labels-point">•</span>
          </span>
          <span v-if="props.feedBack" class="card-content-head-labels-item">
            {{ props.feedBack }}
          </span>
        </div>
      </div>
      <div class="card-content-body">
        <span class="card-content-body-description">{{
          props.description
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AgentLogo from "~/public/cardImages/agents/agent1.png";
import CheckPng from "public/icons/greenCheck.png";
import StarPng from "~/public/icons/greenStar.png";

const props = defineProps({
  logo: {
    type: String,
    default: AgentLogo,
  },
  title: {
    type: String,
    default: "Дмитрий Хитрый",
  },
  documents: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 4.3,
  },
  feedBack: {
    type: String,
    default: "19 отзывов",
  },
  description: {
    type: String,
    default:
      "Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться",
  },
});

//Computed Hook для передачи backgroundImage через props
const cardBackgroundImage = computed(() => ({
  backgroundImage: `url(${props.logo})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "140px",
  height: "140px",
}));
</script>

<style scoped lang="scss">
.card {
  background-color: $text-white-color;
  width: auto;
  display: flex;
  align-items: center;
  padding: 20px;
  margin: 2rem 2rem 0 2rem;
  border-radius: 20px;
  cursor: pointer;
  &-logo {
    border-radius: 20px;
  }
  &-content {
    width: 360px;
    margin-left: 1rem;
    &-head {
      &-title {
        font-size: 24px;
        font-weight: 600;
        color: $text-color-main;
      }
      &-labels {
        margin-top: 4px;
        font-size: 15px;
        font-weight: 400;
        display: flex;
        align-items: center;
        &-point {
          margin: 0 0.3rem 0 0.3rem;
        }
        &-item {
          display: flex;
          align-items: center;
          &-icon {
            margin-right: 0.2rem;
          }
        }
      }
    }
    &-body {
      margin-top: 12px;
      font-size: 15px;
      font-weight: 400;
    }
  }
}
</style>
