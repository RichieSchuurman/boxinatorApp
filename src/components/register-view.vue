<script>
</script>

<template>

  <div class="loginView">

    <div class="loginHeader">
      <img src="../assets/logo.png" />
      <h1>Boxinator</h1>
    </div>

    <div class="inputItems">
      <div class="inputItem">
        <p class="required">Firstname</p>
        <n-input round clearable placeholder="Your first name" class="inputField" />
      </div>
      <div class="inputItem">
        <p class="required">Lastname*</p>
        <n-input round clearable placeholder="Your last name" class="inputField" />
      </div>
    </div>

    <div class="inputItem">
      <p class="required">E-mail</p>
      <n-input round clearable placeholder="Your e-mail" class="inputField" />
    </div>

    <div class="inputItem inputPassword">
      <p class="required">Password</p>
      <n-input round clearable type="password" show-password-on="click" placeholder="Your password" class="inputField" />
    </div>

    <div class="inputItem inputPassword">
      <p class="required">Re-enter password</p>
      <n-input round clearable type="password" show-password-on="click" placeholder="Re-enter your password" class="inputField" />
    </div>

    <div class="inputItems">
      <div class="inputItem">
        <p>Date of birth</p>
        <n-date-picker class="inputField" />
      </div>
      <div class="inputItem">
        <p>Country of residence</p>
        <n-input round clearable placeholder="Your country" class="inputField" />
      </div>
    </div>

    <div class="inputItems">
      <div class="inputItem">
        <p>Zip/Postal code</p>
        <n-input round clearable placeholder="Your zip/postal code" class="inputField" />
      </div>
      <div class="inputItem">
        <p>Contact number</p>
        <n-input-number round clearable placeholder="Your contact number" class="inputField" />
      </div>
    </div>

    <router-link class="loginBtn" to="/user">
      <n-button class="button centerBtn">Register account</n-button>
    </router-link>

    <div class="registerText">
      <p>Allready have an account?</p>
      <router-link class="toRegister" to="/">Back to login</router-link>
    </div>

  </div>
</template>
