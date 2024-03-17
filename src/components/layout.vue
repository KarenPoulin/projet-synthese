<template>
  <div>
    <!-- Barre de navigation -->
    <div class="">
    <MenuActions />
    </div>

    <!-- Contenu principal -->
    <div class="bg-neutral-100 flex">
      <!-- Sidebar -->
      <Sidebar />

      <!-- Contenu de la page -->
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './sidebar.vue';
import MenuActions from './menuActions.vue'
</script>