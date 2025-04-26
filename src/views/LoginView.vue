<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <!-- Login Card -->
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-4">Login to AquaVend Insights</h2>
  
        <!-- Login Form -->
        <form @submit.prevent="handleLogin">
          <!-- Email Field -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
  
          <!-- Password Field -->
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
  
          <!-- Login Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
  
          <!-- Forgot Password Link -->
          <div class="mt-4 text-center">
            <a href="#" class="text-sm text-blue-600 hover:text-blue-800">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    data() {
      return {
        email: '', // Bind to the email input field
        password: '', // Bind to the password input field
      };
    },
    methods: {
      handleLogin() {
        // Simulate authentication logic
        if (this.email && this.password) {
          // Save a token in localStorage for demonstration purposes
          localStorage.setItem('token', 'dummy-auth-token');
  
          // Redirect to the dashboard after successful login
          this.$router.push('/');
        } else {
          alert('Please enter valid credentials.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>