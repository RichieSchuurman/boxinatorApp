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
                <input placeholder="Your firstname" type="text" />
            </div>
            <div class="inputItem">
                <h4 class="required">Lastname</h4>
                <input placeholder="Your lastname" type="text" />
            </div>
        </div>

        <div class="inputItems3">
            <div class="inputItem">
                <h4 class="required">E-mail</h4>
                <input placeholder="Your e-mail" type="email" />
            </div>
            <div class="inputItem inputPassword">
                <h4 class="required">Password</h4>
                <input placeholder="Your password" type="password" />
            </div>
            <div class="inputItem inputPassword">
                <h4 class="required">Re-enter password</h4>
                <input placeholder="Your re-entered password" type="password" />
            </div>
        </div>

        <div class="inputItems">
            <div class="inputItem">
                <h4>Date of birth</h4>
                <input placeholder="Your date of birth" type="date" />
            </div>
            <div class="inputItem">
                <h4>Country of residence</h4>
                <input placeholder="Your country" type="text" />
            </div>
        </div>

        <div class="inputItems">
            <div class="inputItem">
                <h4>Zip/Postal code</h4>
                <input placeholder="Your zip/postal code" type="text" />
            </div>
            <div class="inputItem">
                <h4>Contact number</h4>
                <input placeholder="Your contact number" type="number" />
            </div>
        </div>

        <p class="button" id="updateProfile">Update account</p>

    </div>

  </div>
</template>