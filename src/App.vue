<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <!-- Navigation Bar -->
    <nav class="bg-white shadow">
      <div class="container mx-auto px-4 py-2 flex justify-between items-center">
        <!-- Branding -->
        <div>
          <router-link to="/" class="text-xl font-bold text-blue-600 hover:text-blue-800">
            AquaVend Insights
          </router-link>
        </div>

        <!-- Navigation Links -->
        <div class="flex space-x-4">
          <router-link
            v-if="isAuthenticated"
            to="/"
            class="text-gray-700 hover:text-blue-600 font-medium"
            active-class="text-blue-600 underline"
          >
            Dashboard
          </router-link>
          <router-link
            v-if="isAuthenticated"
            to="/settings"
            class="text-gray-700 hover:text-blue-600 font-medium"
            active-class="text-blue-600 underline"
          >
            Settings
          </router-link>
          <router-link
            to="/about"
            class="text-gray-700 hover:text-blue-600 font-medium"
            active-class="text-blue-600 underline"
          >
            About
          </router-link>
          <router-link
            v-if="!isAuthenticated"
            to="/login"
            class="text-gray-700 hover:text-blue-600 font-medium"
            active-class="text-blue-600 underline"
          >
            Login
          </router-link>
          <button
            v-else
            @click="handleLogout"
            class="text-gray-700 hover:text-red-600 font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto p-4">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white shadow mt-8">
      <div class="container mx-auto px-4 py-4 text-center text-gray-500">
        &copy; {{ currentYear }} AquaVend Insights. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    // Dynamically calculate the current year for the footer
    currentYear() {
      return new Date().getFullYear();
    },
    // Check if the user is authenticated
    isAuthenticated() {
      return !!localStorage.getItem('token'); // Returns true if token exists
    },
  },
  methods: {
    // Handle logout
    handleLogout() {
      localStorage.removeItem('token'); // Remove the authentication token
      this.$router.push('/login'); // Redirect to the login page
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
.container {
  max-width: 1400px;
}
</style>