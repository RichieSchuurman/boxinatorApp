<script>
</script>
<template>

    <!-- <div class="blurBackground" /> -->

    <div class="newShipmentContainer">

        <h2 class="closeBtn" onclick=closeBtn >X</h2>

        <h3>Create a new shipment</h3>

        <div class="inputItem">
            <h4>Reciever name</h4>
            <input placeholder="Reciever name" type="text" />
        </div>

        <div class="inputItem">
            <h4>E-mail (for reciept only) (Only show this when logged in as guest)</h4>
            <input placeholder="Contact E-mail" type="email" />
        </div>

        <div class="inputItems">
            <div class="inputItem">
                <h4>Weight option</h4>
                <input placeholder="Select package weight" />
            </div>
            <div class="colorInputItem">
                <h4>Box color</h4>
                <input type="color" />
            </div>
        </div>

        <div class="inputItem">
            <h4>Destination country</h4>
            <input placeholder="Reciever name" type="text" />
        </div>

        <br />

        <p class="button">Create shipment</p>

    </div>
</template>