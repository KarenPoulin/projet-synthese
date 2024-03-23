<template>

    <div v-if="allDemandeDeStagesResults" class="mt-4 mb-16 px-10 py-16 bg-white rounded-lg">
        <div class="mb-16">
            <h2 class="text-lg font-bold">Dernières <span class="text-yellow-600">demandes</span> de stage</h2>
            <p class="text-sm text-red-700">En attente de validation</p>
        </div>
        <table class="w-full mb-10">
            <EnteteTableau :isDemandes="true" :isTableauDeBord="true" />
            <template v-for="demandeDeStage in allDemandeDeStagesResults" :key="demandeDeStage._id">
                <ElementTableau :element="demandeDeStage" :isDemandes="true" :isTableauDeBord="true" />
            </template>
        </table>
    </div>

    <div v-if="allOffreDeStagesResults" class="mt-4 px-10 py-16 bg-white rounded-lg">
        <div class="mb-16">
            <h2 class="text-lg font-bold">Dernières <span class="text-red-700">offres</span> de stage</h2>
            <p class="text-sm text-red-700">En attente de validation</p>
        </div>
        <table class="w-full mb-10">
            <EnteteTableau :isDemandes="false" :isTableauDeBord="true" />
            <template v-for="offreDeStage in allOffreDeStagesResults" :key="offreDeStage._id">
                <ElementTableau :element="offreDeStage" :isDemandes="false" :isTableauDeBord="true" />
            </template>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useAllDemandeDeStages } from '@/composables/demandeDeStage';
import { useAllOffreDeStages } from '@/composables/offreDeStage';
import ElementTableau from '../components/elementTableau.vue'
import EnteteTableau from '../components/enteteTableau.vue'

const { allDemandeDeStagesResults, getAllDemandeDeStages } = useAllDemandeDeStages();
const { allOffreDeStagesResults, getAllOffreDeStages } = useAllOffreDeStages();

onMounted(async () => {
    await getAllDemandeDeStages();
    await getAllOffreDeStages();
})
</script>