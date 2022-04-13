import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue"
import GuestView from "../views/GuestDashboardView.vue"
import UserView from "../views/UserDashboardView.vue"
import AdminView from "../views/AdminDashboardView.vue"
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
    path: "/guest",
    name: "guest",
    component: GuestView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
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