<script setup lang="ts">
import RouterMenu from "@/layouts/RouterMenu.vue";
import {
  LogoGithub as GithubIcon,
  Sunny as SunnyIcon,
  Moon as MoonIcon,
} from "@vicons/ionicons5";
import { useMessage } from "naive-ui";
import { useNotification } from "naive-ui";
import { useTheme } from "@/layouts/theme";

window.$message = useMessage();
window.$notification = useNotification();
const { currentTheme, toggleTheme } = useTheme();
</script>

<template>
  <n-config-provider :theme="currentTheme">
    <n-layout>
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        Vue3 + NaiveUI Template
        <n-space style="float: right">
          <a
            href="https://github.com/cqroot/vue3-naiveui-template"
            target="_blank"
          >
            <n-button quaternary circle type="primary">
              <template #icon>
                <n-icon><github-icon /></n-icon>
              </template>
            </n-button>
          </a>
          <n-button quaternary circle type="primary" @click="toggleTheme">
            <template #icon>
              <n-icon>
                <sunny-icon v-if="currentTheme.name === 'light'" />
                <moon-icon v-else />
              </n-icon>
            </template>
          </n-button>
        </n-space>
      </n-layout-header>

      <n-layout has-sider style="height: calc(100vh - 64px)">
        <n-layout-sider
          collapse-mode="width"
          :collapsed-width="0"
          :width="240"
          :native-scrollbar="false"
          show-trigger="bar"
          bordered
        >
          <router-menu />
        </n-layout-sider>
        <n-layout-content
          :native-scrollbar="false"
          content-style="padding: 24px;"
        >
          <slot />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
