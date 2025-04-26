import { createRouter, createWebHistory } from 'vue-router';

// Import your views
import DashboardView from '../views/DashboardView.vue';
import LoginView from '../views/LoginView.vue';
import SettingsView from '../views/SettingsView.vue';
import AboutView from '../views/AboutView.vue';
import NotFoundView from '../views/NotFoundView.vue';

// Define your routes
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }, // Protect this route (requires authentication)
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
    meta: { requiresAuth: true }, // Protect this route (requires authentication)
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all route for 404 errors
    name: 'not-found',
    component: NotFoundView,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Use Webpack's environment variable
  routes,
});

// Navigation Guard for Authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Check for token in localStorage

  // If the route requires authentication and the user is not authenticated
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login'); // Redirect to login page
    } else {
      next(); // Allow access to the route
    }
  } else {
    next(); // Allow access to public routes
  }
});

// Export the router
export default router;