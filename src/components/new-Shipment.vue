<script>
export default {props: {}, setup() {}}
</script>
<template>

    <!-- <div class="blurBackground" /> -->

    <div class="newShipmentContainer">
        <h2 class="closeBtn">X</h2>
        <h3>Create a new shipment</h3>
        <div class="inputItem">
            <h4>Reciever name</h4>
            <input placeholder="Reciever name">
        </div>
        <div class="inputItems">
            <div class="inputItem">
                <h4>Weight option</h4>
                <input placeholder="Select package weight">
            </div>
            <div class="inputItem">
                <h4>Box color</h4>
                <div>{color slider}</div>
            </div>
        </div>
        <div class="inputItem">
            <h4>Destination country</h4>
            <input placeholder="Reciever name">
        </div>
        <p class="button">Create shipment</p>
    </div>
</template>