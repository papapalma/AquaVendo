<template>
    <div class="container mx-auto p-4 bg-white shadow rounded">
      <h1 class="text-2xl font-bold mb-4">About AquaVend Insights</h1>
      <p class="text-gray-600 mb-6">
        AquaVend Insights is a comprehensive dashboard designed to help you monitor and manage your AquaVend machines efficiently.
      </p>
  
      <div class="space-y-4">
        <div>
          <h2 class="text-lg font-semibold text-gray-800">Features</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>Real-time sales and revenue tracking.</li>
            <li>Water dispensing analytics and trends.</li>
            <li>Machine status monitoring and alerts.</li>
            <li>User-friendly interface with customizable settings.</li>
          </ul>
        </div>
  
        <div>
          <h2 class="text-lg font-semibold text-gray-800">Contact Us</h2>
          <p class="text-gray-600">
            For support or inquiries, please contact us at:
            <a href="mailto:support@aquavend.com" class="text-blue-600 hover:underline">support@aquavend.com</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView',
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>