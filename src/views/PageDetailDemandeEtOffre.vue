<template>
  <div>
    <entetePageDetailDemandeEtOffre
      :isEnteteDemandeDeStage="true"
      :isEnteteDemandeOffre="false"
      :enteteDemandeStage="demandeDeStageResult ? demandeDeStageResult.title : ''"
      :enteteDemandeOffre="offreDeStagesResult ? offreDeStagesResult.title : ''"
    />
    <fichePageDetailDemandeEtOffre
      :isFicheDetailDemandeDeStage="true"
      :isFicheDetailDemandeOffre="false"
      :ficheDemandeStage="demandeDeStageResult ? demandeDeStageResult : ''"
      :ficheOffreStage="offreDeStagesResult ? offreDeStagesResult : ''" 
    />
  </div>
</template>

<script setup>
import entetePageDetailDemandeEtOffre from '@/components/entetePageDetailDemandeEtOffre.vue';
import fichePageDetailDemandeEtOffre from '@/components/fichePageDetailDemandeEtOffre.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useDemandesDeStages } from '@/composables/demandeDeStage';
import { useOffreDeStages } from '@/composables/offreDeStage';

const route = useRoute();

let isFicheDetailDemandeDeStage = ref(true);
let isFicheDetailDemandeOffre = ref(false);

const { demandeDeStageResult, getDemandeDeStagesById } = useDemandesDeStages();
let demandeDeStageId = ref(null);

const { offreDeStagesResult, getOffreDeStageById } = useOffreDeStages();
let offreDeStageId = ref(null);

onMounted(async () => {
  const urlString = window.location.href;

  if (urlString.includes('pagedetaildemandedestage')) {
    isFicheDetailDemandeDeStage.value = true;
    isFicheDetailDemandeOffre.value = false;
    demandeDeStageId.value = route.params.id; // Modified to assign value to ref
    await getDemandeDeStagesById(demandeDeStageId.value);
    console.log(demandeDeStageResult);
  } else if (urlString.includes('pagedetailoffredestage')) {
    isFicheDetailDemandeOffre.value = true;
    isFicheDetailDemandeDeStage.value = false;
    offreDeStageId.value = route.params.id; // Modified to assign value to ref
    await getOffreDeStageById(offreDeStageId.value);
    console.log(offreDeStagesResult);
  }
});
</script>

<style>
</style>
