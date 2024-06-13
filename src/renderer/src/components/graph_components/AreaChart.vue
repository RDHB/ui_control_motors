<template>
    <LineChart :chartData="data" :options="options"/>
</template>

<script setup lang="ts">
    import { use_control_motor_store } from '@renderer/stores/control_motor_store'
    import { storeToRefs } from 'pinia'
    import { ref, computed } from 'vue';
    import { LineChart } from 'vue-chart-3'
    import { Chart, registerables } from "chart.js"
    import { watch } from 'vue';
    Chart.register(...registerables)

    
    const cmStore = use_control_motor_store()
    const { dataset } = storeToRefs(cmStore)

    const data = computed(() => ({
        labels: dataset.value.map(el => {return el.x}),
        datasets: [
            {
                label: "Medición",
                data: dataset.value.map(el => {return el.y}),
                backgroundColor: '#05445E',
                borderColor: '#189AB4',
            },
        ],
    }))

    const options = ref({
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            title: {
                display: true,
                fullSize: true,
                text: "Position versus Voltage",
                align: "center",
                color: "#D4F1F4",
                position: "top",
                font: {
                    weight: 'bold'
                },
            },
            legend: {
                position: 'top',
                align: 'end',
                labels: {
                color: '#B1D4E0',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                color: '#B1D4E0',
                padding: 3
                },
                grid: {
                color: '#425257'
                }
            },
            y: {
                ticks: {
                color: '#B1D4E0',
                padding: 3,
                },
                grid: {
                color: '#425257'
                }
            },
        },
    })
</script>

<style scoped>
  .chart {
    background-color: rgba(255, 255, 255, 0.28);
    border-radius: 0.5em;
  }
</style>