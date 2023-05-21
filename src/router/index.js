import { createRouter, createWebHistory } from "vue-router";
import { authStore } from "../store/auth";
import { ability } from "../plugins/ability";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    meta: { authRequired: true },
    children: [
      {
        path: "finance",
        name: "Finance",
        component: () => import("../views/Finance/Finance.vue"),
        meta: { authRequired: true },
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("../views/Dashboard/Dashboard.vue"),
        meta: { authRequired: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: "hash",
});

const DEFAULT_TITLE = "LFR.uz";
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
