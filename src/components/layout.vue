<template>
  <div class="relative flex min-h-screen bg-neutral-100 ">
   
    <!-- Side Bar -->
    <div>
      
      <Sidebar />

      <!-- Contenu de la page -->
      <RouterView />
    </div>

     <!-- Barre de navigation -->
    <div class="flex-1">
    <MenuActions />
    </div>

  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './sidebar.vue';
import MenuActions from './menuActions.vue'
</script>