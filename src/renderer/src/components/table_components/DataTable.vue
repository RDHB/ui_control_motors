<template>
    <div class="relative shadow-md rounded-lg w-full h-full ">
        <table class="text-left w-full h-full rounded-lg bg-gray-800">
            <thead class="bg-gray-700 text-gray-400 w-full text-sm rounded-lg">
                <tr class="flex w-full p-2 justify-center content-center">
                    <th class="p-2 w-full text-center">Medida 1 (x)</th>
                    <th class="p-2 w-full text-center">Medida 2 (x)</th>
                </tr>
            </thead>

            <tbody class="flex flex-col items-center justify-start overflow-auto w-full h-full">
                <tr v-for="data in dataset" class="flex justify-start items-center w-full bg-gray-800 border-gray-600 hover:bg-gray-600 text-xs">
                    <td class="p-4 w-full text-left">{{ data.x }}</td>
                    <td class="p-4 w-full  text-left">{{ data.y }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    const props = defineProps({
        dataset: {
            type : Array,
            default: []
        },
    })
</script>

<style scoped></style>