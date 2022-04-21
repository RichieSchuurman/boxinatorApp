<script>
</script>

<template>

  <div class="loginView">

    <div class="loginHeader">
      <img src="../assets/logo.png" />
      <h1>Boxinator</h1>
    </div>

    <div class="inputItem">
      <h4>Email</h4>
      <n-input round clearable placeholder="Your e-mail" class="inputField" />
    </div>

    <div class="inputItem">
      <h4>Password</h4>
      <n-input round clearable type="password" show-password-on="click" placeholder="Your e-mail" class="inputField" />
    </div>

    <br />

    <router-link class="loginBtn" to="/dashboard">
      <n-button class="button centerBtn">Log in</n-button>
    </router-link>
    <p>Or</p>
    <router-link class="loginBtn" to="/dashboard">
      <n-button class="button centerBtn" id="guestLogin">Continue as guest</n-button>
    </router-link>

    <div class="registerText">
      <p>Not registered yet?</p>
      <router-link class="toRegister" to="/register">Create an account</router-link>
    </div>

  </div>
</template>