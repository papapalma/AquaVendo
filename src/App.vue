<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="flex-1 p-6 md:ml-64">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  components: { Sidebar }
};
</script>