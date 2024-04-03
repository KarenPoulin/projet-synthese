<template>
    <!-- CARTE COMPTEURS -->
    <div  class="mb-12 w-full flex flex-col lg:flex-row gap-y-2 gap-x-2 justify-between">
        <div class="w-full lg:w-2/3 gap-x-2 gap-y-2 flex flex-col sm:flex-row">
            <carteCompteurSimple :type="intershipRequests"/>
            <carteCompteurSimple :type="intershipOffers"/>
        </div>
        <div class="flex flex-row w-full lg:w-1/3 lg:max-w-1/3 rounded-lg">
            <carteCompteurSimple :type="candidates"/>
            <carteCompteurSimple :type="enterprises"/>
        </div>
    </div>

    <!-- TABLEAU DEMANDES DE STAGE INACTIVES (5) -->
    <template v-if="allDemandeDeStagesInactiveResults">
        <div class="mt-4 mb-16 px-4 py-6 lg:px-10 lg:py-16 bg-white rounded-lg">
            <div class="mb-16">
                <h2 class="text-lg font-bold">Dernières <span class="text-yellow-600">demandes</span> de stage</h2>
                <p class="text-sm text-red-700">En attente de validation</p>
            </div>
            <table class="w-full">
                <EnteteTableau :isDemandes="true" :isTableauDeBord="true" />
                <template v-for="demandeDeStage in allDemandeDeStagesInactiveResults.slice(0, 5)" :key="demandeDeStage._id">
                    <ElementTableau :element="demandeDeStage" :isDemandes="true" :isTableauDeBord="true" />
                </template>
            </table>
        </div>
    </template>
    <template v-else>
        <p class="text-xs">Chargement des demandes inactives...</p>
    </template>

    <!-- TABLEAU OFFRES DE STAGE INACTIVES (5) -->
    <template v-if="allOffreDeStagesInactiveResults">
        <div class="mt-4 px-4 py-6 lg:px-10 lg:py-16 bg-white rounded-lg">
            <div class="mb-16">
                <h2 class="text-lg font-bold">Dernières <span class="text-red-700">offres</span> de stage</h2>
                <p class="text-sm text-red-700">En attente de validation</p>
            </div>
            <table class="w-full">
                <EnteteTableau :isDemandes="false" :isTableauDeBord="true" />
                <template v-for="offreDeStage in allOffreDeStagesInactiveResults.slice(0, 5)" :key="offreDeStage._id">
                    <ElementTableau :element="offreDeStage" :isDemandes="false" :isTableauDeBord="true" />
                </template>
            </table>
        </div>
    </template>
    <template v-else>
        <p class="text-xs">Chargement des offres inactives...</p>
    </template>


</template>

<script setup>
import { onMounted } from 'vue';
import { useAllDemandeDeStagesInactive } from '@/composables/demandeDeStage';
import { useAllOffreDeStagesInactive } from '@/composables/offreDeStage';
import ElementTableau from '../components/elementTableau.vue'
import EnteteTableau from '../components/enteteTableau.vue'
import carteCompteurSimple from '@/components/carteCompteurSimple.vue';


const {allDemandeDeStagesInactiveResults, getAllDemandeDeStagesInactive} = useAllDemandeDeStagesInactive();
const {allOffreDeStagesInactiveResults, getAllOffreDeStagesInactive} = useAllOffreDeStagesInactive();

const intershipRequests = "internship-requests";
const intershipOffers = "internship-offers";
const candidates = "candidates";
const enterprises = "enterprises";


onMounted( async () => {
    await getAllDemandeDeStagesInactive();

    await getAllOffreDeStagesInactive();
})
</script>