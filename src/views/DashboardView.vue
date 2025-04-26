<template>
    <div>
      <Header></Header>>
      <MetricsCards />
      <SalesOverview />
      <div class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <WaterDispensingAnalytics />
        <MachineStatus />
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import MetricsCards from '../components/MetricsCards.vue';
  import SalesOverview from '../components/SalesOverview.vue';
  import WaterDispensingAnalytics from '../components/WaterDispensingAnalytics.vue';
  import MachineStatus from '../components/MachineStatus.vue';
  
  export default {
    components: {
      Header,
      MetricsCards,
      SalesOverview,
      WaterDispensingAnalytics,
      MachineStatus,
    },
  };
  </script>