<template>
    <div class="container mx-auto p-4 bg-white shadow rounded">
      <h2 class="text-xl font-bold mb-2">AquaVend #101</h2>
      <div class="flex justify-between items-center">
        <p class="text-gray-500">Machine Status</p>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.411.518l-2.315 1.757a1.76 1.76 0 00-2.866 0l-2.315-1.757A1.76 1.76 0 012 19.24V5.882a1.76 1.76 0 011.451-1.591l2.315-1.757a1.76 1.76 0 002.866 0l2.315 1.757A1.76 1.76 0 0111 5.882zM15 10.307V19.24a1.76 1.76 0 01-3.411.518l-2.315 1.757a1.76 1.76 0 00-2.866 0l-2.315-1.757A1.76 1.76 0 017 19.24V10.307a1.76 1.76 0 011.451-1.591l2.315-1.757a1.76 1.76 0 002.866 0l2.315 1.757A1.76 1.76 0 0115 10.307z" />
          </svg>
          <p class="text-yellow-500">Warning</p>
        </div>
      </div>
      <div class="mt-4">
        <div class="flex justify-between mb-2">
          <p>Water Level</p>
          <p>78%</p>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-blue-500 rounded-full h-2" style="width: 78%;"></div>
        </div>
        <div class="flex justify-between mb-2 mt-2">
          <p>Filter Status</p>
          <p>65%</p>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-blue-500 rounded-full h-2" style="width: 65%;"></div>
        </div>
        <div class="mt-4">
          <p class="text-gray-500">Last Maintenance</p>
          <p>2023-04-12</p>
        </div>
        <div class="mt-2">
          <p class="text-gray-500">Uptime</p>
          <p>5d 7h 23m</p>
        </div>
        <div class="mt-4">
          <p class="text-gray-500">Issues</p>
          <div class="flex items-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p class="text-red-500">Water filter needs replacement soon</p>
          </div>
        </div>
      </div>
    </div>
  </template>