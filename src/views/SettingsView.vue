<template>
    <div class="container mx-auto p-4 bg-white shadow rounded">
      <h1 class="text-2xl font-bold mb-4">Settings</h1>
      <p class="text-gray-600 mb-6">Manage your AquaVend machine settings here.</p>
  
      <!-- Settings Form -->
      <form @submit.prevent="saveSettings" class="space-y-4">
        <div>
          <label for="machineName" class="block text-sm font-medium text-gray-700">Machine Name</label>
          <input
            type="text"
            id="machineName"
            v-model="settings.machineName"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter machine name"
          />
        </div>
  
        <div>
          <label for="notificationEmail" class="block text-sm font-medium text-gray-700">Notification Email</label>
          <input
            type="email"
            id="notificationEmail"
            v-model="settings.notificationEmail"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter email for notifications"
          />
        </div>
  
        <div>
          <label for="maintenanceSchedule" class="block text-sm font-medium text-gray-700">Maintenance Schedule</label>
          <select
            id="maintenanceSchedule"
            v-model="settings.maintenanceSchedule"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </div>
  
        <button
          type="submit"
          class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save Settings
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SettingsView',
    data() {
      return {
        settings: {
          machineName: '',
          notificationEmail: '',
          maintenanceSchedule: 'weekly',
        },
      };
    },
    methods: {
      saveSettings() {
        // Simulate saving settings (e.g., send to API)
        console.log('Settings saved:', this.settings);
        alert('Settings saved successfully!');
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>