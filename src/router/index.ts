import { createRouter, createWebHistory } from "vue-router";
import { Home, Person } from "@vicons/ionicons5";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: { icon: Home },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
      meta: { icon: Person },
    },
  ],
});

export default router;
