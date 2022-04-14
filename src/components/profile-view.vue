<script>
import SideBar from "./side-bar.vue"
export default { components: { SideBar }}
</script>

<template>

    <SideBar />

  <div class="profileView">

  <h2 class="header">User profile</h2>

    <div class="profileContainer">

        <h2 class="profileViewHeader">Edit profile</h2>
        <h3 class="profileViewHeader">Complete or edit your profile</h3>

        <div class="inputItems">
            <div class="inputItem">
                <h4 class="required">Firstname</h4>
                <n-input round clearable placeholder="Your first name" class="inputField" />
            </div>
            <div class="inputItem">
                <h4 class="required">Lastname</h4>
                <n-input round clearable placeholder="Your last name" class="inputField" />
            </div>
        </div>

        <div class="inputItems3">
            <div class="inputItem">
                <h4 class="required">E-mail</h4>
                <n-input round clearable placeholder="Your e-mail" class="inputField" />
            </div>
            <div class="inputItem inputPassword">
                <h4 class="required">Password</h4>
                <n-input round clearable type="password" show-password-on="click" placeholder="Your password" class="inputField" />
            </div>
            <div class="inputItem inputPassword">
                <h4 class="required">Re-enter password</h4>
                <n-input round clearable type="password" show-password-on="click" placeholder="Re-enter your password" class="inputField" />
            </div>
        </div>

        <div class="inputItems">
            <div class="inputItem">
                <h4>Date of birth</h4>
                <n-date-picker class="inputField" />
            </div>
            <div class="inputItem">
                <h4>Country of residence</h4>
                <n-input round clearable placeholder="Your country" class="inputField" />
            </div>
        </div>

        <div class="inputItems">
            <div class="inputItem">
                <h4>Zip/Postal code</h4>
                <n-input round clearable placeholder="Your zip/postal code" class="inputField" />
            </div>
            <div class="inputItem">
                <h4>Contact number</h4>
                <n-input-number round clearable placeholder="Your contact number" class="inputField" />
            </div>
        </div>

        <n-button class="button" id="updateProfile">Update account</n-button>

    </div>

  </div>
</template>