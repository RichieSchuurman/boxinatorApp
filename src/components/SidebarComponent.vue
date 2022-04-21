<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      isActive: false
    }
  }
})
</script>

<template>

  <nav class="sidebar" :class="{sideBarOpen: isActive}">

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
    <router-link class="navBtn" id="logOutBtn" to="/">
      <img src="../assets/logOutLogo.png" class="navBtnImg" />
      <p class="navBtnText">Log out</p>
    </router-link>

  </nav>

</template>