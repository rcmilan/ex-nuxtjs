export default defineNuxtRouteMiddleware((to, from) => {
  if (isAuthenticated() === false) {
    return navigateTo("/login");
  }
});

function isAuthenticated() {
  // isAuthenticated() is an example method verifying if a user is authenticated
  console.log("isAuthenticated");
  return true;
}
