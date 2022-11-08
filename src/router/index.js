import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import('../views/SignupPage.vue'),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import('../views/AccountPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;