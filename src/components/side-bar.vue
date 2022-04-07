<script>
export default {props: {}, setup() {}}
</script>

<template>  
  <nav class="sidebar">
    <div class="sidebarHeader">
      <img src="../assets/logo.png" />
      <p>Boxinator</p>
    </div>
    <router-link class="navBtn" to="/">Login</router-link>
    <router-link class="navBtn" to="/register">Register</router-link>
    <router-link class="navBtn" to="/main">Main</router-link>
    <router-link class="navBtn" to="/profile">Profile</router-link>
  </nav>
</template>