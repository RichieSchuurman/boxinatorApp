<script>
import NewShipment from "../components/new-Shipment.vue"
import SideBar from "../components/side-bar.vue"
export default { components: { NewShipment, SideBar }}

// var vm = new Vue({
    // el: '#example',
//     data: {
//         isShow: true
//     }
// });

</script>

<template>

  <SideBar />

  <h2 class="header">Dashboard</h2>
  <h2 v-on:click="isShow = !isShow" class="button" id="createNewShipment">Create shipment</h2>

  <NewShipment v-show="isShow" />

  <br />

<!-- Completed shipments -->
  <div class="ordersContainer">
    <p class="ordersContainerHeader">Completed Shipments</p>

    <div class="orderItems">
      <h4>Reciever name</h4>
      <h4>Weight</h4>
      <h4>Box color</h4>
      <h4>Destination country</h4>
    </div>

<!-- For every completed shipment this div -->
    <div class="orderItems">
      <p>Timothy Blom</p>
      <p class="orderHighlight">Premium</p>
      <div class="orderColor" />
      <p>Netherlands</p>
    </div>

  </div>

  <!-- Current shipments -->
  <div class="ordersContainer">
    <p class="ordersContainerHeader">Current Shipments</p>

    <div class="currentOrderItems">
      <h4>Reciever name</h4>
      <h4>Weight</h4>
      <h4>Box color</h4>
      <h4>Destination country</h4>
      <h4>Status</h4>
    </div>

<!-- For every current shipment this div -->
    <div class="currentOrderItems">
      <p>Timothy Blom</p>
      <p class="orderHighlight">Premium</p>
      <div class="orderColor" />
      <p>Netherlands</p>
      <p class="orderHighlight">In transit</p>
    </div>

  </div>

</template>
