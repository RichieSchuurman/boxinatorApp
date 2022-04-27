<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

onBeforeMount(() => storeAdminToken());

const router = useRouter();

const form = ref({
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmedPassword: "",
  dateOfBirth: null,
  countryOfResidence: "",
  postalCode: "",
  contactNumber: "",
});

const storeAdminToken = () => {
  const urlEncoded = new URLSearchParams();
  urlEncoded.append("client_id", "admin-cli");
  urlEncoded.append("username", "admin");
  urlEncoded.append("password", "admin");
  urlEncoded.append("grant_type", "password");

  const requestOptions = {
    method: "POST",
    body: urlEncoded,
    redirect: "follow",
  };

  fetch(
    "https://boxinator-app-keycloak.herokuapp.com/auth/realms/master/protocol/openid-connect/token",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => sessionStorage.setItem("adminToken", data.access_token))
    .catch((error) => console.log(error));
};

const register = (form) => {
  const adminToken = sessionStorage.getItem("adminToken");

  const user = {
    firstName: form.firstName,
    lastName: form.lastName,
    username: form.username,
    email: form.email,
    enabled: true,
    emailVerified: true,
    attributes: {
      date_of_birth: form.dateOfBirth,
      country_of_residence: form.countryOfResidence,
      postal_code: form.postalCode,
      contact_number: form.contactNumber,
    },
    credentials: [
      {
        type: "password",
        value: form.password,
        temporary: false,
      },
    ],
  };

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${adminToken}`);
  headers.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    body: JSON.stringify(user),
    headers,
    redirect: "follow",
  };

  fetch(
    "https://boxinator-app-keycloak.herokuapp.com/auth/admin/realms/boxinator/users",
    requestOptions
  )
    .then(() => router.push("/"))
    .catch((error) => console.log(error));
};
</script>

<template>
  <div class="loginView">
    <div class="loginHeader">
      <img src="../assets/logo.png" />
      <h1>Boxinator</h1>
    </div>

    <div class="inputItems">
      <div class="inputItem">
        <p class="required">First name</p>
        <n-input
          round
          clearable
          placeholder="Your first name"
          class="inputField"
          v-model:value="form.firstName"
        />
      </div>
      <div class="inputItem">
        <p class="required">Last name</p>
        <n-input
          round
          clearable
          placeholder="Your last name"
          class="inputField"
          v-model:value="form.lastName"
        />
      </div>
    </div>

    <div class="inputItem">
      <p class="required">Username</p>
      <n-input
        round
        clearable
        placeholder="Your username"
        class="inputField"
        v-model:value="form.username"
      />
    </div>

    <div class="inputItem">
      <p class="required">E-mail</p>
      <n-input
        round
        clearable
        placeholder="Your e-mail"
        class="inputField"
        v-model:value="form.email"
      />
    </div>

    <div class="inputItem inputPassword">
      <p class="required">Password</p>
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

    <div class="inputItem inputPassword">
      <p class="required">Re-enter password</p>
      <n-input
        round
        clearable
        type="password"
        show-password-on="click"
        placeholder="Re-enter your password"
        class="inputField"
        v-model:value="form.confirmedPassword"
      />
    </div>

    <div class="inputItems">
      <div class="inputItem">
        <p>Date of birth</p>
        <n-date-picker
          class="inputField"
          type="date"
          v-model:value="form.dateOfBirth"
        />
      </div>
      <div class="inputItem">
        <p>Country of residence</p>
        <n-input
          round
          clearable
          placeholder="Your country"
          class="inputField"
          v-model:value="form.countryOfResidence"
        />
      </div>
    </div>

    <div class="inputItems">
      <div class="inputItem">
        <p>Zip/Postal code</p>
        <n-input
          round
          clearable
          placeholder="Your zip/postal code"
          class="inputField"
          v-model:value="form.postalCode"
        />
      </div>
      <div class="inputItem">
        <p>Contact number</p>
        <n-input
          round
          clearable
          placeholder="Your contact number"
          class="inputField"
          :input-props="{ type: 'tel' }"
          v-model:value="form.contactNumber"
        />
      </div>
    </div>

    <br />

    <n-button class="button centerBtn" @click="register(form)"
      >Register account</n-button
    >

    <div class="registerText">
      <p>Already have an account?</p>
      <router-link class="toRegister" to="/">Back to login</router-link>
    </div>
  </div>
</template>
