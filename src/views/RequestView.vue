<script setup lang="ts">
import { ref } from "vue";
import { reqGet200, reqGet404 } from "@/api/requests";

const text = ref("");

const handleGet200 = () => {
  reqGet200().then((response) => {
    text.value = JSON.stringify(response, null, 2);
  });
};
const handleGet404 = () => {
  reqGet404().then((response) => {
    text.value = JSON.stringify(response.data, null, 2);
  });
};
</script>

<template>
  <n-space>
    <n-button @click="handleGet200">https://httpbin.org/status/200</n-button>
    <n-button @click="handleGet404">https://httpbin.org/status/404</n-button>
  </n-space>
  <pre>
    {{ text }}
  </pre>
</template>
