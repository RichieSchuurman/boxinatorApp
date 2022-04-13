<script>
import SideBar from "./side-bar.vue"
export default { components: { SideBar }}
</script>

<template>

  <SideBar />

  <div class="loginView">

    <div class="loginHeader">
      <img src="../assets/logo.png" />
      <h1>Boxinator</h1>
    </div>

    <div class="inputItem">
      <h4>Email</h4>
      <input placeholder="Your e-mail" />
    </div>

    <div class="inputItem">
      <h4>Password</h4>
      <input placeholder="Your password" />
    </div>

    <br />

    <router-link class="loginBtn" to="/user">
      <p class="button">Log in</p>
    </router-link>
    <p>Or</p>
    <router-link class="loginBtn" to="/guest">
      <p class="button" id="guestLogin">Continue as guest</p>
    </router-link>

    <div class="registerText">
      <p>Not registered yet?</p>
      <router-link class="toRegister" to="/register">Create an account</router-link>
    </div>

  </div>
</template>