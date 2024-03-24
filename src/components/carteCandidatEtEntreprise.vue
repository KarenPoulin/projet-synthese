<template>
    <div v-if="isCandidat" class="bg-white p-5 hover:bg-fuchsia-100 ">
        <div class="flex items-center">
            <div class="bg-fuchsia-800 p-2 flex justify-center items-center">
                <img src="/src/assets/icons/candidate-48.png" alt="candidat" class="w-20">
            </div>
            <div class="ml-3">
                <h1 class="text-xl font-bold">{{candidate.firstName}} {{ candidate.lastName }}</h1>
                <p class="text-xs mb-3 text-neutral-500">Développeur Front-End</p>
                <p class="text-xs text-neutral-500">{{ candidate.email }}</p>
                <p class="text-xs text-neutral-500">{{ candidate.phone }}</p>
            </div>
        </div>
    </div>

    <div v-if="isEntreprise" class="bg-white px-12 py-16 hover:bg-blue-100">
        <div class="flex items-center">
            <div>
                <img src="../assets/img/enterprises.png" alt="logo-entreprises" class="w-48">
            </div>
            <div class="ml-16">
                <h1 class="text-xl font-bold">{{ enterprise.name }}</h1>
                <p class="text-sm">{{ enterprise.address }}</p>
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
        candidate: Object,
        enterprise: Object
})

</script>