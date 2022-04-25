<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const form = ref({
  username: "",
  password: "",
});

const redirectToDashboardAfterLogin = (form) => {
  store.dispatch("login", form).then(() => router.push("/dashboard"));
};
</script>

<template>
  <div class="loginView">
    <div class="loginHeader">
      <img src="../assets/logo.png" />
      <h1>Boxinator</h1>
    </div>

    <div class="inputItem">
      <h4>Username</h4>
      <n-input
        round
        clearable
        placeholder="Your username"
        class="inputField"
        v-model:value="form.username"
      />
    </div>

    <div class="inputItem">
      <h4>Password</h4>
      <n-input
        round
        clearable
        type="password"
        show-password-on="click"
        placeholder="Your password"
        class="inputField"
        v-model:value="form.password"
      />
    </div>

    <br />

    <n-button
      class="button centerBtn"
      @click="redirectToDashboardAfterLogin(form)"
      >Log in</n-button
    >
    <p>Or</p>
    <router-link class="loginBtn" to="/dashboard">
      <n-button class="button centerBtn" id="guestLogin"
        >Continue as guest</n-button
      >
    </router-link>

    <div class="registerText">
      <p>Not registered yet?</p>
      <router-link class="toRegister" to="/register"
        >Create an account</router-link
      >
    </div>
  </div>
</template>
