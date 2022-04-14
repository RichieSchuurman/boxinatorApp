<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  data() {
    return {
      showShipment: false
    }
  },
  setup () {
    return {
      weightOptions: ref([
        {
          label: "1kg | Basic tier",
          value: "1kg | Basic tier",
        },
        {
          label: "2kg | Humble tier",
          value: "2kg | Humble tier",
        },
        {
          label: "5kg | Deluxe tier",
          value: "5kg | Deluxe tier",
        },
        {
          label: "8kg | Premium tier",
          value: "8kg | Premium tier",
        }
      ]),
      showModal: ref(false)
    }
  }
})
</script>

<template>
  <n-button @click="showModal = true" class="button" id="createShipmentbtn"> Create shipment </n-button>
  <n-modal v-model:show="showModal">
    <n-card title="Create a new shipment" class="newShipmentContainer">

      <img class="closeBtn" src="../assets/closeBtn.png" @click="showModal = false" />

      <div class="inputItem">
        <h4>Reciever name</h4>
        <n-input round clearable placeholder="Reciever name" class="inputField" />
      </div>

      <div class="inputItem">
        <h4>E-mail (for reciept only) (Only show this when logged in as guest)</h4>
        <n-input round clearable placeholder="E-mail for reciept" class="inputField" />
      </div>

      <div class="inputItems">
        <div class="inputItem">
          <h4>Weight option</h4>
          <n-select :options="weightOptions" placeholder="Select your tier" class="inputField" />
        </div>
        <div class="colorInputItem">
          <h4>Box color</h4>
          <n-color-picker />
        </div>
      </div>

      <div class="inputItem">
        <h4>Destination country</h4>
        <n-input round clearable placeholder="Destination country" class="inputField" />
      </div>

      <br />

      <n-button class="button" @click="showModal = false">Create shipment</n-button>

    </n-card>
  </n-modal>
</template>