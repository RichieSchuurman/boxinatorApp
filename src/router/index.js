import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue"
import DashboardView from "../views/DashboardView.vue"
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
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
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