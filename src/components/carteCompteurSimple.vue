<template>
    <!-- FOND DE CARTE -->
    <template v-if="count">
        <div v-if="count" class="h-full"
            :class="{
                'bg-yellow-500 w-full sm:w-1/2 lg:w-1/2 rounded-lg': type === 'internship-requests',
                'bg-red-900 w-full sm:w-1/2 lg:w-1/2 rounded-lg': type === 'internship-offers',
                'bg-fuchsia-900 w-1/2 flex flex-row justify-start rounded-tl-lg rounded-bl-lg': type === 'candidates',
                'bg-blue-500 w-1/2 flex flex-row justify-end rounded-tr-lg rounded-br-lg': type === 'enterprises',
            }">
            <div class="py-2 lg:py-4 w-11/12 flex flex-row items-center text-white"
                :class="{
                    'bg-yellow-400 px-2 lg:px-4 rounded-tl-lg rounded-bl-lg': type === 'internship-requests',
                    'bg-red-800 h-full px-2 lg:px-4 rounded-tl-lg rounded-bl-lg': type === 'internship-offers',
                    'bg-fuchsia-800 h-full pl-2 lg:pl-3.5 pr-6 lg:pr-8 rounded-tl-lg rounded-bl-lg': type === 'candidates',
                    'bg-blue-400 h-full pl-2 lg:pl-3.5 pr-6 lg:pr-8 rounded-tr-lg rounded-br-lg': type === 'enterprises'
                }">

                <!-- ICÔNES -->
                <div v-if="type === 'internship-requests'" class="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-file-text w-3 sm:w-3.5 md:w-4 lg:w-5 xl:w-6 h-3 sm:h-3.5 md:h-4 lg:h-5 xl:h-6" viewBox="0 0 16 16">
                        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
                    </svg>
                </div>
                <div v-if="type === 'internship-offers'" class="mr-3 ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-send w-3 sm:w-3.5 md:w-4 lg:w-5 xl:w-6 h-3 sm:h-3.5 md:h-4 lg:h-5 xl:h-6" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                    </svg>
                </div>
                <div v-if="type === 'candidates'" class="mr-2 ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person w-2.5 sm:w-3 md:w-3.5 lg:w-4 xl:w-5 h-2.5 sm:h-3 md:h-3.5 lg:h-4 xl:h-5" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </div>
                <div v-if="type === 'enterprises'" class="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person w-2.5 sm:w-3 md:w-3.5 lg:w-4 xl:w-5 h-2.5 sm:h-3 md:h-3.5 lg:h-4 xl:h-5" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </div>

                <!-- TEXTES -->
                <div>
                    <p v-if="type === 'internship-requests' || type === 'internship-offers'" class="text-xs xl:text-sm font-medium">{{type === 'internship-requests' ? 'Demandes de stage' : 'Offres de stage'}}</p>
                    <p v-if="type === 'candidates' || type === 'enterprises'" class="text-onze xl:text-xs font-medium">{{type === 'candidates' ? 'Candidats' : 'Entreprises'}}</p>
                    <p class="text-base lg:text-xl font-bold">{{ count }}</p>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <p class="text-xs">Chargement du compteur...</p>
    </template>

</template>

<script setup>
import { onMounted } from 'vue';
import { useCompteur } from '@/composables/compteur';

const props = defineProps({
    type: String
})

const {count, getDataCount} = useCompteur();

onMounted(() => {
    getDataCount(props.type);
})
</script>