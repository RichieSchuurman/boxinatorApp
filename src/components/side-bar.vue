<script>
</script>

<template>

  <nav class="sidebar">

    <div class="sidebarHeader">
      <img src="../assets/logo.png" />
      <p>Boxinator</p>
    </div>

    <router-link class="navBtn" to="/guest">Dashboard</router-link>
    <router-link class="navBtn" to="/user">Dashboard</router-link>
    <router-link class="navBtn" to="/admin">Dashboard</router-link>
    <router-link class="navBtn" to="/profile">Profile</router-link>
    <router-link class="navBtn" id="logOutBtn" to="/">Log Out</router-link>

  </nav>

</template>