import { createRouter, createWebHistory } from "vue-router";
import { Home, Notifications, Browsers, Person } from "@vicons/ionicons5";

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
      meta: {
        title: "Home",
        icon: Home,
      },
    },
    {
      path: "/notification",
      name: "notification",
      component: () => import("@/views/NotificationView.vue"),
      meta: {
        title: "Notification",
        icon: Notifications,
      },
    },
    {
      path: "/request",
      name: "request",
      component: () => import("@/views/RequestView.vue"),
      meta: {
        title: "Request",
        icon: Browsers,
        withDivider: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
      meta: {
        title: "About",
        icon: Person,
      },
    },
  ],
});

export default router;
