<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  data() {
    return {
      isActive: false,
    };
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    return {
      accessToken: computed(() => store.state.accessToken),
      refreshToken: computed(() => store.state.refreshToken),
      redirectAfterLogout(accessToken, refreshToken) {
        store
          .dispatch("logout", { accessToken, refreshToken })
          .then(() => router.push("/"));
      },
    };
  },
});
</script>

<template>
  <nav class="sidebar" :class="{ sideBarOpen: isActive }">
    <div class="sidebarHeader">
      <img src="../assets/logo.png" />
      <p>Boxinator</p>
    </div>

    <div class="sidebarHeader" id="sideBarToggle" @click="isActive = !isActive">
      <img src="../assets/menuLogo.png" />
    </div>

    <router-link class="navBtn" to="/dashboard">
      <img src="../assets/dashboardLogo.png" class="navBtnImg" />
      <p class="navBtnText">Dashboard</p>
    </router-link>
    <router-link class="navBtn" to="/profile">
      <img src="../assets/profileLogo.png" class="navBtnImg" />
      <p class="navBtnText">Profile</p>
    </router-link>
    <div
      class="navBtn"
      id="logOutBtn"
      @click="redirectAfterLogout(accessToken, refreshToken)"
    >
      <img src="../assets/logOutLogo.png" class="navBtnImg" />
      <p class="navBtnText">Log out</p>
    </div>
  </nav>
</template>
