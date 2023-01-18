<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <n-layout>
    <n-layout-header style="height: 64px; padding: 24px" bordered>
      Yiheyuan Road
    </n-layout-header>

    <n-layout has-sider style="height: calc(100vh - 64px)">
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="0"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered
      >
        <p>
          Handian Bridge Handian Bridge Handian Bridge Handian Bridge Handian
          Bridge
        </p>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        Pingshan Road
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
