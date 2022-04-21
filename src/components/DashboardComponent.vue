<script>
  import SideBar from "./side-bar.vue"
  import NewShipment from "./new-shipment.vue"
  import { defineComponent } from "vue";

  export default defineComponent({
    components: { NewShipment, SideBar },
    setup() {
      return {
        status: [
          {
            label: "Order history",
            disabled: true
          },
          {
            label: "In transit"
          },
          {
            label: "Order created"
          }
        ],
        adminStatus: [
          {
            label: "Change order history",
            key: "Order history",
            disabled: true
          },
          {
            label: "Order recieved",
            key: "Order recieved"
          },
          {
            label: "In transit",
            key: "In transit"
          },
          {
            label: "Order created",
            key: "Order created"
          }
        ]
      };
    }
  });
</script>

<template>

  <SideBar />

  <h2 class="header">Dashboard</h2>

  <NewShipment />

  <br />

<!-- Completed shipments -->
  <div class="ordersContainer">
    <p class="ordersContainerHeader">Completed Shipments (only shows when logged in as user)</p>

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
    <p class="ordersContainerHeader">Current Shipments (only shows when logged in as user or guest)</p>

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
      <n-gi>
        <n-dropdown trigger="click" :options="status">
          <n-button class="orderHighlight"> In transit </n-button>
        </n-dropdown>
      </n-gi>
    </n-grid>

  </div>

<!-- All shipments -->
  <div class="ordersContainer">
    <p class="ordersContainerHeader">All Shipments (only shows when logged in as admin)</p>

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
      <n-gi>
        <n-dropdown trigger="click" :options="adminStatus">
          <n-button class="orderHighlight"> In transit </n-button>
        </n-dropdown>
      </n-gi>
    </n-grid>

  </div>

</template>
