import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue"
import MainView from "../views/MainView.vue"
import ProfileView from "../views/ProfileView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;