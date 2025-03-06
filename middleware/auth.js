export default defineNuxtRouteMiddleware((to, from) => {
  const authtoken = useCookie("authtoken");
  if (authtoken.value && authtoken.value.trim() !== "") {
    return navigateTo("/");
  }
});
