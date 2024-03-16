<template>
    <div v-if="isCandidat" class="bg-white p-4 w-80">
        <div class="flex items-center">
            <div class="bg-fuchsia-800 w-20 h-20 flex justify-center items-center">
                <img src="/src/assets/icons/candidate-48.png" alt="candidat" class="w-14">
            </div>
            <div class="ml-3">
                <h1 class="text-lg font-bold">Plume Latraverse</h1>
                <p class="text-xs mb-3">UX Designer</p>
                <p class="text-xs">plume@latraverse.com</p>
                <p class="text-xs">819 999 9999</p>
            </div>
        </div>
    </div>

</template>

<script setup>
    const props = defineProps({
        isCandidat: Boolean,
        isEntreprise: Boolean,
    })

</script>