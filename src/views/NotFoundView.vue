<template>
    <div class="container mx-auto p-4 bg-white shadow rounded text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p class="text-gray-600 mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Go Back to Dashboard
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundView',
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin-top: 20%;
  }
  </style>