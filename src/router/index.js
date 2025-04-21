import { createRouter, createWebHistory } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import MachineList from "../components/MachineList.vue";
import SalesChart from "../components/SalesChart.vue";
import InventoryList from "../components/InventoryList.vue";
import Login from "../components/Login.vue";

const routes = [
  { path: "/", component: MachineList, meta: { requiresAuth: true } },
  { path: "/sales", component: SalesChart, meta: { requiresAuth: true } },
  { path: "/inventory", component: InventoryList, meta: { requiresAuth: true } },
  { path: "/login", component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  onAuthStateChanged(auth, (user) => {
    if (requiresAuth && !user) {
      next("/login");
    } else {
      next();
    }
  });
});

export default router;