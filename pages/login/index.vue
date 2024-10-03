<template>
  <div class="container">
    <Toast />
    <form class="container-form">
      <h1 class="container-form-title">Страница авторизации</h1>
      <FloatLabel class="container-form-content">
        <InputText
          id="username"
          v-model="userName"
          class="container-form-content-input"
        />
        <label for="username">Имя пользователя</label>
      </FloatLabel>
      <FloatLabel class="container-form-content">
        <Password
          id="password"
          v-model="password"
          :feedback="false"
          toggleMask
          class="container-form-content-input"
        />
        <label for="password">Пароль</label>
      </FloatLabel>
      <Button
        class="container-form-button"
        label="Войти"
        raised
        @click="handleLogin"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import Toast from "primevue/toast";

import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { useUserStore } from "~/store/users.store";
import { useRouter } from "vue-router";

useSeoMeta({
  title: "Авторизация",
  ogTitle: "Авторизация",
  description: "default",
  ogDescription: "default",
});
definePageMeta({
  layout: "login",
});

const toast = useToast();
const store = useUserStore();
const router = useRouter();

const userName = ref("");
const password = ref("");

//Вызов всплывающего окна с ошибкой
const showError = () => {
  toast.add({
    severity: "error",
    summary: "Ошибка авторизации",
    detail: "Неверный логин или пароль",
    life: 3000,
  });
};

//Авторизация
const handleLogin = async () => {
  const success = await store.tryLogin(userName.value, password.value);
  if (success) {
    router.push("/");
  } else {
    showError();
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff7eb;
  &-form {
    background: $primary;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    &-title {
      @include Title;
      color: $text-color-main;
      padding: 1rem 1rem 3rem;
    }
    &-content {
      margin: 1rem 0 1rem 0;
      &-input {
        width: 248px;
        color: $text-color-main;
      }
    }
    &-button {
      width: 240px;
      margin: 2rem 0 1rem 0;
    }
  }
}
</style>
