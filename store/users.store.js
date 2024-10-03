import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("user", () => {
  const currentUser = ref({});
  const currentUserLogo = ref("");
  const token = ref("");

  //Авторизация. Получение списка пользователей через axios.get, поиск, сравнение переданных переменных среди полученной { data }: логин и пароль. Функция возращает пользователя, токен для localStorage.
  const tryLogin = async (userName, userPassword) => {
    try {
      const { data } = await axios.get("/api/users");

      const user = data.users.find(
        (u) => u.login === userName && u.password === userPassword,
      );

      if (user) {
        currentUser.value = user;
        token.value = "authorized";
        localStorage.setItem("token", token.value);
        currentUserLogo.value = user.logo;
        localStorage.setItem("userLogo", currentUserLogo.value);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const logout = () => {
    currentUser.value = {};
    currentUserLogo.value = "";
    token.value = "";
    location.reload();
    localStorage.removeItem("token");
    localStorage.removeItem("userLogo");
  };

  return {
    currentUser,
    token,
    tryLogin,
    logout,
  };
});
