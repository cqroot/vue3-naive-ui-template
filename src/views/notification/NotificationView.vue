<script setup lang="ts">
import type { NotificationType } from "naive-ui";
const info = () => {
  window.$message.info(
    "I don't know why nobody told you how to unfold your love",
    {
      keepAliveOnHover: true,
    }
  );
};
const error = () => {
  window.$message.error("Once upon a time you dressed so fine");
};
const warning = () => {
  window.$message.warning("How many roads must a man walk down");
};
const success = () => {
  window.$message.success(
    "'Cause you walked hand in hand With another man in my place"
  );
};
const loading = () => {
  window.$message.loading(
    "If I were you, I will realize that I love you more than any other guy"
  );
};

const notify = (type: NotificationType) => {
  window.$notification[type]({
    content: "What to say?",
    meta: "I don't know",
    duration: 2500,
    keepAliveOnHover: true,
  });
};
</script>

<template>
  <h2>Message</h2>
  <n-space style="margin-bottom: 20px">
    <n-button @click="info"> Info(Hover will keep alive) </n-button>
    <n-button @click="error"> Error </n-button>
    <n-button @click="warning"> Warning </n-button>
    <n-button @click="success"> Success </n-button>
    <n-button @click="loading"> Loading </n-button>
  </n-space>

  <h2>Notification</h2>
  <n-space>
    <n-button @click="notify('info')"> Info </n-button>
    <n-button @click="notify('success')"> Success </n-button>
    <n-button @click="notify('warning')"> Warning </n-button>
    <n-button @click="notify('error')"> Error </n-button>
  </n-space>
</template>
