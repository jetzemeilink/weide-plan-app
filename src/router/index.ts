import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../components/Login.vue";
import Dashboard from "../views/Dashboard.vue"
import { useSecurityStore } from "../stores/SecurityStore";


const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  const securityStore = useSecurityStore();

  if (!securityStore.isAuthenticated && to.name !== 'Login') {
    return { name: 'Login' }
  }
})

export default router;