//Пользователи для авторизации

export default defineEventHandler(() => {
  return {
    users: [
      {
        id: 1,
        login: "admin",
        password: "secret",
        logo: "/icons/User1.png",
      },
    ],
  };
});
