<template>
    <div v-if="isCandidat" v-for="candidate in candidates" :key="candidate._id" class="bg-white p-5 hover:bg-fuchsia-100 ">
        <div class="flex items-center">
            <div class="bg-fuchsia-800 w-24 h-24 flex justify-center items-center">
                <img src="/src/assets/icons/candidate-48.png" alt="candidat" class="w-20">
            </div>
            <div class="ml-5">
                <h1 class="text-xl font-bold">{{candidate.firstName}} {{ candidate.lastName }}</h1>
                <p class="text-sm mb-3 text-neutral-500">Développeur Front-End</p>
                <p class="text-sm text-neutral-500">{{ candidate.email }}</p>
                <p class="text-sm text-neutral-500">{{ candidate.phone }}</p>
            </div>
        </div>
    </div>
    
    <div v-if="isEntreprise" v-for="enterprise in enterprises" :key="enterprise._id" class="bg-white p-16 hover:bg-blue-100">
        <div class="flex items-center">
            <div>
                <img :src="enterprise.image" :alt="enterprise.name" class="w-32">
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
import { onMounted, ref } from 'vue';
import axios from 'axios';


const props = defineProps({
        isCandidat: Boolean,
        isEntreprise: Boolean,
})

const candidates = ref([]);

const getCandidates = () => {
    return axios.get("https://api-4.fly.dev/candidates")
    .then((res) => candidates.value = res.data)
    .catch((error) => console.log(error))
}

onMounted(() => {
    getCandidates();
})

const enterprises = ref([]);

const getEnterprises = () => {
    return axios.get("https://api-4.fly.dev/enterprises")
    .then((res) => enterprises.value = res.data)
    .catch((error) => console.log(error))
}

onMounted(() => {
    getEnterprises();
})


</script>