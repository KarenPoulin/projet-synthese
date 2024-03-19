<template>
  <div class="relative grid grid-cols-12 bg-neutral-100 ">

    <Sidebar class="col-span-2" />

    <div class="col-span-10">
      <MenuActions class="h-24" />
      <main class="px-20 py-20">
        <RouterView />
      </main>
    </div>

  </div>
<!--   <div class="relative flex w-screen bg-neutral-100 ">

    <Sidebar class="w-[20%]" />

    <div class="w-full">
      <MenuActions class="h-24" />
      <main class="px-20 py-20">
        <RouterView />
      </main>
    </div>

  </div> -->
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './sidebar.vue';
import MenuActions from './menuActions.vue'
</script>