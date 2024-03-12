<template>
    <Sidebar />
    <MenuActions />
    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './sidebar.vue';
import MenuActions from './menuActions.vue'
</script>