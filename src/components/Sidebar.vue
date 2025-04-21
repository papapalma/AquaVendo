<template>
    <div>
      <!-- Hamburger Menu Button -->
      <button
        @click="toggleSidebar"
        class="fixed top-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-md shadow-lg md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
  
      <!-- Sidebar -->
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        @click="closeSidebar"
      ></div>
      <aside
        :class="[
          'fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        ]"
      >
        <div class="p-6">
          <h2 class="text-xl font-bold mb-6">Dashboard</h2>
          <ul class="space-y-4">
            <li>
              <router-link
                to="/"
                @click="closeSidebar"
                class="flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0l-2-2m2 2V4a1 1 0 011-1h3m-6 9l2-2"
                  />
                </svg>
                <span>Machine Monitoring</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/sales"
                @click="closeSidebar"
                class="flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span>Sales Analytics</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/inventory"
                @click="closeSidebar"
                class="flex items-center space-x-2 text-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <span>Inventory Management</span>
              </router-link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    setup() {
      const isOpen = ref(false);
  
      const toggleSidebar = () => {
        isOpen.value = !isOpen.value;
      };
  
      const closeSidebar = () => {
        isOpen.value = false;
      };
  
      return { isOpen, toggleSidebar, closeSidebar };
    }
  };
  </script>