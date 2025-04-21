<template>
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-6">Machine Monitoring</h2>
      <ul class="space-y-4">
        <li
          v-for="machine in machines"
          :key="machine.id"
          class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
        >
          <div>
            <p class="font-semibold">{{ machine.location }}</p>
            <p class="text-gray-600">Status: {{ machine.status }}</p>
          </div>
          <div class="text-right">
            <p class="text-lg font-bold">{{ machine.waterLevel }}%</p>
            <p class="text-sm text-gray-500">Water Level</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { db } from "../firebase";
  import { collection, getDocs } from "firebase/firestore";
  
  export default {
    setup() {
      const machines = ref([]);
  
      const fetchMachines = async () => {
        const querySnapshot = await getDocs(collection(db, "machines"));
        machines.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      };
  
      onMounted(() => {
        fetchMachines();
      });
  
      return { machines };
    }
  };
  </script>