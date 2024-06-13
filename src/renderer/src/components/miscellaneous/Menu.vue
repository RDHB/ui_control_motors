<template>
    <nav class="w-full flex flex-row justify-between items-center py-4 px-8">
        <div class="flex flex-row justify-center items-center">
            <RouterLink to="/" class="flex flex-row justify-center items-center">
                <img alt="logo" class="w-10" src="../../assets/electron.svg" />
                <p class="hidden sm:flex m-5 font-bold font-mono text-center uppercase">Home</p>
            </RouterLink>
        </div>
        <div class="flex flex-row justify-end items-center">
            <RouterLink to="/motorconfig" class="flex flex-row items-center justify-between px-4 md:px-2 hover:text-aqua2">
                <font-awesome-icon icon="fa-solid fa-gear" class="text-xl font-bold"/>
                <p class="hidden md:flex md:pl-2">Motor</p>
            </RouterLink>
            <RouterLink to="/datasetconfig" class="flex flex-row items-center justify-between px-4 md:px-2 hover:text-aqua2">
                <font-awesome-icon icon="fa-solid fa-table" class="text-xl font-bold"/>
                <p class="hidden md:flex md:pl-2">Dataset</p>
            </RouterLink>
            <RouterLink to="/graphconfig" class="flex flex-row items-center justify-between px-4 md:px-2 hover:text-aqua2">
                <font-awesome-icon icon="fa-solid fa-chart-line" class="text-xl font-bold"/>
                <p class="hidden md:flex md:pl-2">Graph</p>
            </RouterLink>
        </div>
    </nav>
</template>

<script setup>

// loading icons from fontaweson
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
</script>