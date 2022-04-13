<script>
  import NewShipment from "./new-shipment.vue"
  import SideBar from "./side-bar.vue"
  export default {components: { NewShipment, SideBar }}
</script>

<template>

  <SideBar />

  <h2 class="header">User Dashboard</h2>

  <NewShipment />

  <br />

<!-- Completed shipments -->
  <div class="ordersContainer">
    <p class="ordersContainerHeader">Completed Shipments</p>

    <n-grid x-gap="10" :cols="4" class="orderItems">
      <n-gi> <h4> Reciever name </h4> </n-gi>
      <n-gi> <h4> Weight </h4> </n-gi>
      <n-gi> <h4> Box color </h4> </n-gi>
      <n-gi> <h4> Destination country </h4> </n-gi>
    </n-grid>

<!-- For every completed shipment this div -->
    <n-grid x-gap="10" :cols="4"  class="orderItems">
      <n-gi> <p> Timothy Blom </p> </n-gi>
      <n-gi class="orderHighlight"> Premium </n-gi>
      <n-gi> <div class="orderColor" /> </n-gi>
      <n-gi> <p> Netherlands </p> </n-gi>
    </n-grid>

  </div>

<!-- Current shipments -->
  <div class="ordersContainer">
    <p class="ordersContainerHeader">Current Shipments</p>

    <n-grid x-gap="10" :cols="5" class="orderItems">
      <n-gi> <h4> Reciever name </h4> </n-gi>
      <n-gi> <h4> Weight </h4> </n-gi>
      <n-gi> <h4> Box color </h4> </n-gi>
      <n-gi> <h4> Destination country </h4> </n-gi>
      <n-gi> <h4> Status </h4> </n-gi>
    </n-grid>

<!-- For every current shipment this div -->
    <n-grid  x-gap="10" :cols="5" class="orderItems">
      <n-gi> <p> Timothy Blom </p> </n-gi>
      <n-gi> <p class="orderHighlight"> Premium </p> </n-gi>
      <n-gi> <div class="orderColor" /> </n-gi>
      <n-gi> <p> Netherlands </p> </n-gi>
      <n-gi> <p class="orderHighlight">In transit </p> </n-gi>
    </n-grid>

  </div>

</template>
