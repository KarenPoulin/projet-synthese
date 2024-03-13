<template>
    <Sidebar />
    <MenuActions />
    <div class="p-20 bg-neutral-100">
        <RouterView />
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './sidebar.vue';
import MenuActions from './menuActions.vue'
</script>