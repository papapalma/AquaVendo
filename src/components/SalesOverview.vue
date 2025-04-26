<template>
    <div class="container mx-auto p-4 bg-white shadow rounded">
      <h2 class="text-xl font-bold mb-2">Sales Overview</h2>
      <p class="text-gray-500 mb-4">Track your sales performance over time</p>
      <div class="flex justify-between mb-4">
        <button
          :class="{ 'bg-blue-500 text-white': selectedTab === 'daily' }"
          @click="updateChart('daily')"
          class="px-4 py-2 rounded"
        >Daily</button>
        <button
          :class="{ 'bg-blue-500 text-white': selectedTab === 'weekly' }"
          @click="updateChart('weekly')"
          class="px-4 py-2 rounded"
        >Weekly</button>
        <button
          :class="{ 'bg-blue-500 text-white': selectedTab === 'monthly' }"
          @click="updateChart('monthly')"
          class="px-4 py-2 rounded"
        >Monthly</button>
      </div>
      <div class="relative h-64"> <!-- Set fixed height for the canvas -->
        <canvas id="salesChart"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
      return {
        selectedTab: 'daily',
        chart: null,
      };
    },
    mounted() {
      this.renderChart(this.selectedTab);
    },
    methods: {
      getChartData(tab) {
        const datasets = {
          daily: {
            labels: ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
            data: [200, 300, 800, 700, 400, 250],
          },
          weekly: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [1500, 2300, 1800, 2200, 2000, 1900, 2100],
          },
          monthly: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            data: [6000, 7500, 7000, 8000],
          },
        };
        return datasets[tab];
      },
      renderChart(tab) {
        const ctx = document.getElementById('salesChart').getContext('2d');
  
        // Destroy existing chart instance if any
        if (this.chart) {
          this.chart.destroy();
        }
  
        const chartData = this.getChartData(tab);
  
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: chartData.labels,
            datasets: [
              {
                label: 'Sales',
                data: chartData.data,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      },
      updateChart(tab) {
        this.selectedTab = tab;
        this.renderChart(tab);
      },
    },
  };
  </script>
  