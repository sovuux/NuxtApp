export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const token = localStorage.getItem("token");
    if (!token && to.path !== "/login") {
      return navigateTo("/login");
    } else if (token && to.path === "/login") {
      return navigateTo("/");
    }
  }
});
