<script>
import { defineComponent } from "vue";
import SideBar from "./components/side-bar.vue"
export default defineComponent({ components: { SideBar } });
</script>
<template>

<n-loading-bar-provider>
  <n-message-provider>
    <n-notification-provider>
      <n-dialog-provider>
        <SideBar />
      </n-dialog-provider>
    </n-notification-provider>
  </n-message-provider>
</n-loading-bar-provider>

  <router-view />
</template>