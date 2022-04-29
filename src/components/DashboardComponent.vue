<script>
  import SideBar from "../components/SidebarComponent.vue"
  import NewShipment from "../components/NewShipmentOverlayComponent.vue"
  import { defineComponent } from "vue";

  export default defineComponent({
    components: { NewShipment, SideBar },
    setup() {
      return {
        items: [
          {
            id: 1,
            name: "Tim",
            weight: "Premium",
            color: "Blue",
            destination: "Netherlands",
            status: "In transit"
          },
          {
            id: 2,
            name: "Timothy",
            weight: "Basic",
            color: "Blue",
            destination: "The Netherlands",
            status: "In transit"
          },
          {
            id: 3,
            name: "Blom",
            weight: "Premium",
            color: "Red",
            destination: "Norway",
            status: "In transit"
          }
        ],
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

    <n-grid x-gap="5" :cols="4" class="orderItems">
      <n-gi> <h4> Reciever name </h4> </n-gi>
      <n-gi> <h4> Weight </h4> </n-gi>
      <n-gi> <h4> Box color </h4> </n-gi>
      <n-gi> <h4> Destination country </h4> </n-gi>
    </n-grid>

    <n-grid x-gap="5" :cols="4" v-for="i of items" :key="i.id" class="orderItems">
      <n-gi> <p> {{i.name}} </p> </n-gi>
      <n-gi class="orderHighlight"> {{i.weight}} </n-gi>
      <n-gi> <div class="orderColor" /> </n-gi>
      <n-gi> <p> {{i.destination}} </p> </n-gi>
    </n-grid>
  </div>

<!-- Current shipments -->
  <div class="ordersContainer">
    <p class="ordersContainerHeader">Current Shipments (only shows when logged in as user or guest)</p>

    <n-grid x-gap="5" :cols="6" class="orderItems">
      <n-gi> <h4> Reciever name </h4> </n-gi>
      <n-gi> <h4> Weight </h4> </n-gi>
      <n-gi> <h4> Box color </h4> </n-gi>
      <n-gi> <h4> Destination country </h4> </n-gi>
      <n-gi> <h4> Status </h4> </n-gi>
      <n-gi> <h4 class="deleteButton"> Delete </h4> </n-gi>
    </n-grid>

    <n-grid x-gap="5" :cols="6" v-for="i of items" :key="i.id" class="orderItems">
      <n-gi> <p> {{i.name}} </p> </n-gi>
      <n-gi class="orderHighlight"> {{i.weight}} </n-gi>
      <n-gi> <div class="orderColor" /> </n-gi>
      <n-gi> <p> {{i.destination}} </p> </n-gi>
      <n-gi>
        <n-dropdown trigger="click" :options="adminStatus">
          <n-button class="orderHighlight"> {{i.status}} </n-button>
        </n-dropdown>
      </n-gi>
      <n-gi> 
        <n-button class="deleteButton"> 
          <img src="../assets/deleteLogo.png" class="deleteButtonImg" /> 
        </n-button>
      </n-gi>
    </n-grid>
  </div>

<!-- All shipments -->
  <div class="ordersContainer">
    <p class="ordersContainerHeader">All Shipments (only shows when logged in as admin)</p>

    <n-grid x-gap="5" :cols="6" class="orderItems">
      <n-gi> <h4> Reciever name </h4> </n-gi>
      <n-gi> <h4> Weight </h4> </n-gi>
      <n-gi> <h4> Box color </h4> </n-gi>
      <n-gi> <h4> Destination country </h4> </n-gi>
      <n-gi> <h4> Status </h4> </n-gi>
      <n-gi> <h4 class="deleteButton"> Delete </h4> </n-gi>
    </n-grid>

    <n-grid x-gap="5" :cols="6" v-for="i of items" :key="i.id" class="orderItems">
      <n-gi> <p> {{i.name}} </p> </n-gi>
      <n-gi class="orderHighlight"> {{i.weight}} </n-gi>
      <n-gi> <div class="orderColor" /> </n-gi>
      <n-gi> <p> {{i.destination}} </p> </n-gi>
      <n-gi>
        <n-dropdown trigger="click" :options="adminStatus">
          <n-button class="orderHighlight"> {{i.status}} </n-button>
        </n-dropdown>
      </n-gi>
      <n-gi> 
        <n-button class="deleteButton"> 
          <img src="../assets/deleteLogo.png" class="deleteButtonImg" /> 
        </n-button>
      </n-gi>
    </n-grid>
  </div>

</template>