<template>
    <div class="container mx-auto p-4 bg-white shadow rounded">
      <h2 class="text-xl font-bold mb-2">Water Dispensing Analytics</h2>
      <p class="text-gray-500 mb-4">Track water dispensing volume and patterns</p>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-2/3 p-4">
          <h3 class="text-lg font-bold mb-2">Volume Dispensed Over Time</h3>
          <div class="relative h-64">
            <canvas id="volumeChart"></canvas>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-4">
          <h3 class="text-lg font-bold mb-2">Dispensing Distribution by Time</h3>
          <div class="relative h-64">
            <canvas id="distributionChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    data() {
      return {
        volumeChart: null,
        distributionChart: null,
      };
    },
    mounted() {
      this.renderCharts();
    },
    beforeUnmount() {
      this.destroyCharts();
    },
    methods: {
      renderCharts() {
        const volumeCtx = document.getElementById('volumeChart').getContext('2d');
        const distributionCtx = document.getElementById('distributionChart').getContext('2d');
  
        // Destroy if already initialized
        this.destroyCharts();
  
        this.volumeChart = new Chart(volumeCtx, {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'Volume (Liters)',
              data: [150, 200, 250, 300, 280, 270, 260],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
  
        this.distributionChart = new Chart(distributionCtx, {
          type: 'pie',
          data: {
            labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
            datasets: [{
              data: [40, 40, 20, 5],
              backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f'],
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      },
      destroyCharts() {
        if (this.volumeChart) {
          this.volumeChart.destroy();
          this.volumeChart = null;
        }
        if (this.distributionChart) {
          this.distributionChart.destroy();
          this.distributionChart = null;
        }
      },
    },
  };
  </script>
  