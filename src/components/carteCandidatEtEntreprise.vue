<template>
    <div v-if="isCandidat" class="bg-white p-5 w-96">
        <div class="flex items-center">
            <div class="bg-fuchsia-800 w-24 h-24 flex justify-center items-center">
                <img src="/src/assets/icons/candidate-48.png" alt="candidat" class="w-20">
            </div>
            <div class="ml-5">
                <h1 class="text-xl font-bold">Plume Latraverse</h1>
                <p class="text-sm mb-3">UX Designer</p>
                <p class="text-sm">plume@latraverse.com</p>
                <p class="text-sm">819 999 9999</p>
            </div>
        </div>
    </div>
    
    <div v-if="isEntreprise" class="bg-white p-12">
        <div class="flex items-center">
            <div>
                <img src="/src/assets/img/enterprises.png" alt="entreprise" class="w-32">
            </div>
            <div class="ml-16">
                <h1 class="text-xl font-bold">Mediavox</h1>
                <p class="text-sm">985, rue Royale</p>
                <p class="text-sm mb-3">Trois-Rivières G9A 4H7</p>
                <p class="text-sm">Téléphone : 819 373-2235</p>
                <p class="text-sm">Télécopieur : 819 373-8805</p>
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