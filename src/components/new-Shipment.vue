<script>
export default {props: {}, setup() {}}
</script>
<template>

    <!-- <div class="blurBackground" /> -->

    <div class="newShipmentContainer">
        <p class="closeBtn">X</p>
        <h3>Create a new shipment</h3>
        <div class="newShipmentItem">
            <p>Reciever name</p>
            <input placeholder="Reciever name">
        </div>
        <div class="newShipmentItems">
            <div class="newShipmentItem">
                <p>Weight option</p>
                <input placeholder="Select package weight">
            </div>
            <div class="newShipmentItem">
                <p>Box color</p>
                <div>{color slider}</div>
            </div>
        </div>
        <div class="newShipmentItem">
            <p>Destination country</p>
            <input placeholder="Reciever name">
        </div>
        <p class="CreateShipmentBtn">Create shipment</p>
    </div>
</template>