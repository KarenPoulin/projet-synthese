<template>
  <div class="bg-neutral-100 flex flex-col md:flex-row min-h-screen">

    <div class="hidden md:flex xl:flex 2xl:flex-shrink-0 2xl:100 xl:w-80 lg:w-60 md:w-40 sm:20 bg-gray-800 text-white min-h-screen">
      <Sidebar />
    </div>


    <div class="w-full flex flex-col">

      <div class="bg-neutral-100 z-20 sm:static top-0 left-0 right-0 ">
        <MenuActions />
      </div>


      <main class="py-24 w-5/6 mx-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './sidebar.vue';
import MenuActions from './menuActions.vue'
</script>