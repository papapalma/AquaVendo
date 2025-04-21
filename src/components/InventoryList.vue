<template>
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-6">Inventory Management</h2>
      <ul class="space-y-4">
        <li
          v-for="item in inventory"
          :key="item.id"
          class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
        >
          <div>
            <p class="font-semibold">{{ item.type }}</p>
          </div>
          <div class="text-right">
            <p class="text-lg font-bold">{{ item.quantity }}</p>
            <p class="text-sm text-gray-500">Quantity</p>
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
      const inventory = ref([]);
  
      const fetchInventory = async () => {
        const querySnapshot = await getDocs(collection(db, "inventory"));
        inventory.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      };
  
      onMounted(() => {
        fetchInventory();
      });
  
      return { inventory };
    }
  };
  </script>