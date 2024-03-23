<template >
    <entetePageDetailDemandeEtOffre
    :isEnteteDemandeDeStage="true"
    :isEnteteDemandeOffre="false"
    :enteteDemandeStage=" demandeDeStageResult"
    :enteteDemandeOffre="demandeDeStageResult"/>
    <fichePageDetailDemandeEtOffre
    :isFicheDetailDemandeDeStage="true"
    :isFicheDetailDemandeOffre="false"
    :ficheDemandeStage="demandeDeStageResult"
    :ficheDemandeOffre="offreDeStagesResult"
    ficheDemandeStageEtOffre="allo"
    />
</template>

<script setup>
import entetePageDetailDemandeEtOffre from '@/components/entetePageDetailDemandeEtOffre.vue';
// import fichePageDetailDemandeEtOffre from '@/components/fichePageDetailDemandeEtOffre.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useDemandesDeStages } from '@/composables/demandeDeStage';
import { useOffreDeStages } from '@/composables/offreDeStage';

const route = useRoute();
const isFicheDetailDemandeDeStage = ref(true);
const isFicheDetailDemandeOffre = ref(true);


const {
    demandeDeStageResult,
    getDemandeDeStagesById
} = useDemandesDeStages();
let demandeDeStageId = ref(null);

const {
    offreDeStagesResult,
    getOffreDeStageById
} = useOffreDeStages();
let offreDeStageId = ref(null);

onMounted(async () => {

// aller valider si candidat ou entreprise dans l'url
const urlString = window.location.href;

if (urlString.includes('pagedetaildemandedestage')) {
    isFicheDetailDemandeDeStage.value = true;
    isFicheDetailDemandeOffre.value = false;
    demandeDeStageId = route.params.id;
    await getDemandeDeStagesById(demandeDeStageId);
    console.log(demandeDeStageResult);

} else if (urlString.includes('pagedetailoffredestage')) {
    isFicheDetailDemandeOffre.value = true;
    isFicheDetailDemandeDeStage.value = false;
    offreDeStageId = route.params.id;
    await getOffreDeStageById(offreDeStageId);
    console.log(offreDeStagesResult);
}

}); 
</script>

<style>

</style>

