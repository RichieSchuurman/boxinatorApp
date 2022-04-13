<script>
import SideBar from "./side-bar.vue"
export default { components: { SideBar }}
</script>

<template>

    <SideBar />

  <div class="registerView">

    <div class="loginHeader">
      <img src="../assets/logo.png" />
      <h1>Boxinator</h1>
    </div>

    <div class="inputItems">
      <div class="inputItem">
        <p class="required">Firstname</p>
        <input placeholder="Your firstname" type="text"/>
      </div>
      <div class="inputItem">
        <p class="required">Lastname*</p>
        <input placeholder="Your lastname" type="text"/>
      </div>
    </div>

    <div class="inputItem">
      <p class="required">E-mail</p>
      <input placeholder="Your e-mail" type="email"/>
    </div>

    <div class="inputItem inputPassword">
      <p class="required">Password</p>
      <input placeholder="Your password" type="password"/>
    </div>

    <div class="inputItem inputPassword">
      <p class="required">Re-enter password</p>
      <input placeholder="Your re-entered password" type="password"/>
    </div>

    <div class="inputItems">
      <div class="inputItem">
        <p>Date of birth</p>
        <input placeholder="Your date of birth" type="date" />
      </div>
      <div class="inputItem">
        <p>Country of residence</p>
        <input placeholder="Your country" />
      </div>
    </div>

    <div class="inputItems">
      <div class="inputItem">
        <p>Zip/Postal code</p>
        <input placeholder="Your zip/postal code" />
      </div>
      <div class="inputItem">
        <p>Contact number</p>
        <input placeholder="Your contact number" type="number" />
      </div>
    </div>

    <router-link class="loginBtn" to="/user">
      <p class="button">Register account</p>
    </router-link>

    <div class="registerText">
      <p>Allready have an account?</p>
      <router-link class="toRegister" to="/">Back to login</router-link>
    </div>

  </div>
</template>
