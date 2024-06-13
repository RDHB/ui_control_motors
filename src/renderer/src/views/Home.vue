<template>
  <div class="flex flex-row justify-around w-full h-full p-5">

    <div class="flex flex-col h-full w-full md:pt-3 md:pb-3 md:pr-3">
      <div class="flex flex-col justify-center items-center md:h-3/4 w-full">
        <AreaChart class="w-full h-full p-8 flex items-center chart"/>
      </div>
      <div class="flex flex-col md:flex-row justify-center items-center md:h-1/4 w-full mt-3">
        <MainEquipmentController  class="w-full lg:w-4/6 h-full text-sm md:mr-2 border-2 border-slate-700"/>
        <MainConnectionController class="w-full lg:w-2/6 h-full text-sm mt-2 md:mt-0 md:ml-2 border-2 border-slate-700"/>
      </div>
    </div>

    <div class="hidden md:flex flex-col h-full md:w-78 lg:w-80 pt-3 pb-3">
      <DataTable :dataset="dataset"/>
    </div>

  </div>
</template>


<script setup lang="ts">
  //import components
  import AreaChart from '@renderer/components/graph_components/AreaChart.vue';
  import DataTable from '@renderer/components/table_components/DataTable.vue';
  import MainEquipmentController from '@renderer/components/equipment_controller/MainEquipmentController.vue';
  import MainConnectionController from '@renderer/components/connections_controllers/MainConnectionController.vue';

  //import pinea store
  import { use_control_motor_store } from '@renderer/stores/control_motor_store';
  import { storeToRefs } from 'pinia';

  const cmStore = use_control_motor_store();
  const { dataset } = storeToRefs(cmStore);
  
</script>

<style scoped>
  .chart {
    background-color: rgba(255, 255, 255, 0.28);
    border-radius: 0.5em;
  }
</style>