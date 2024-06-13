<script setup lang="ts">
import Menu from '@renderer/components/miscellaneous/Menu.vue'
import Footer from '@renderer/components/miscellaneous/Footer.vue';
</script>

<template>
  <div class="h-screen flex flex-col justify-between bg-slate-950 bg-wave-lines text-white">
    <Menu class="bg-b-first"/>
    <router-view class="mb-auto h-full overflow-y-auto"/>
    <Footer class=""/>
  </div>
</template>
