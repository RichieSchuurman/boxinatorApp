<script>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import { BookOutline as BookIcon } from "@vicons/ionicons5";
// import { RouterLink } from 'vue-router'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    Label: "Hear the Wind Sing",
    Key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon)
  },
  {
    Label: "A Wild Sheep Chase",
    Key: "a-wild-sheep-chase",
    icon: renderIcon(BookIcon)
  }
  //  {
  //   label: () => h(RouterLink, {
  //     to: {
  //       path: "/"
  //     }
  //   }, { default: () => "Go to work" }),
  //   key: "go-to-work",
  //   icon: renderIcon(WorkIcon)
  //  }
]

export default defineComponent({
  setup() {
    return {
      collapsed: ref(true),
      menuOptions
    };
  }
});
</script>

<template>

  <nav class="sidebar">
    <div class="sidebarHeader">
      <img src="../assets/logo.png" />
      <p>Boxinator</p>
    </div>
    <router-link class="navBtn" to="/">Login</router-link>
    <router-link class="navBtn" to="/register">Register</router-link>
    <router-link class="navBtn" to="/guest">Dashboard</router-link>
    <router-link class="navBtn" to="/user">Dashboard</router-link>
    <router-link class="navBtn" to="/admin">Dashboard</router-link>
    <router-link class="navBtn" to="/profile">Profile</router-link>
    <router-link class="navBtn" id="logOutBtn" to="/">Log Out</router-link>
  </nav>




  

  <!-- <n-layout has-sider class="slider">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        key-field="whateverKey"
        label-field="whateverLabel"
        children-field="whateverChildren"
      />
    </n-layout-sider>
      <n-layout class="spacing" />
  </n-layout> -->

</template>