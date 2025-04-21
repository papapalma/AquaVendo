<template>
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-6">Sales Analytics</h2>
      <Bar :data="chartData" :options="chartOptions" class="max-w-2xl mx-auto" />
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { db } from "../firebase";
  import { collection, getDocs } from "firebase/firestore";
  import { Bar } from "vue-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from "chart.js";
  
  // Register Chart.js components
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default {
    components: { Bar },
    setup() {
      const sales = ref([]);
      const chartData = ref({ labels: [], datasets: [] });
      const chartOptions = { responsive: true };
  
      const fetchSales = async () => {
        const querySnapshot = await getDocs(collection(db, "sales"));
        sales.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
        const labels = sales.value.map((sale) => new Date(sale.timestamp).toLocaleDateString());
        const amounts = sales.value.map((sale) => sale.amount);
  
        chartData.value = {
          labels,
          datasets: [{ label: "Sales", data: amounts, backgroundColor: "#3b82f6" }]
        };
      };
  
      onMounted(() => {
        fetchSales();
      });
  
      return { chartData, chartOptions };
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>