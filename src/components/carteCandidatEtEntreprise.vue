<template>
    <div v-if="isCandidat" v-for="candidate in candidates" :key="candidate._id" class="bg-white pl-5 pr-12 pt-5 pb-5">
        <div class="flex items-center">
            <div class="bg-fuchsia-800 w-24 h-24 flex justify-center items-center">
                <img src="/src/assets/icons/candidate-48.png" alt="candidat" class="w-20">
            </div>
            <div class="ml-5">
                <h1 class="text-xl font-bold">{{candidate.firstName}} {{ candidate.lastName }}</h1>
                <p class="text-sm mb-3 text-neutral-500">{{ candidate.description }}</p>
                <p class="text-sm text-neutral-500">{{ candidate.email }}</p>
                <p class="text-sm text-neutral-500">{{ candidate.phone }}</p>
            </div>
        </div>
    </div>
    
    <div v-if="isEntreprise" class="bg-white pl-16 pr-20 pt-16 pb-16">
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