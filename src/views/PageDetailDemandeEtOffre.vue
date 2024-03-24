<template>
    <div v-if="demandeDeStageResult || offreDeStagesResult">
      <entetePageDetailDemandeEtOffre
      :isEnteteDemandeDeStage="true"
      :isEnteteDemandeOffre="false"
      :enteteDemandeStage="demandeDeStageResult"
      :enteteDemandeOffre="offreDeStagesResult"
      />
      <fichePageDetailDemandeEtOffre
      :isFicheDetailDemandeDeStage="false"
      :isFicheDetailDemandeOffre="true"
      :ficheDemandeStage="demandeDeStageResult"
      :ficheOffreStage="offreDeStagesResult"
      @emitConsulter="consulterAction"
      @emitSupprimer="toggleModalSuppression"
      />
      <!-- :id="demandeDeStageResult._id" -->
      <!-- <modalSuppression
      :modalSuppressionVisible="modalSuppressionVisible"
      @suppressionAnnulee="suppressionAnnulee"
      @confirmationSuppression="confirmationSuppression"/> -->
    </div>
    <!-- <div v-else>
      chargement en cours...
    </div> -->
</template>

<script setup>
import entetePageDetailDemandeEtOffre from '@/components/entetePageDetailDemandeEtOffre.vue';
import fichePageDetailDemandeEtOffre from '@/components/fichePageDetailDemandeEtOffre.vue';
import modalSuppression from '@/components/modalSuppression.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useDemandesDeStages } from '@/composables/demandeDeStage';
import { useOffreDeStages } from '@/composables/offreDeStage';

// Recuperation des donnees a partir du id pour laffichage
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
    demandeDeStageId.value = route.params.id;
    await getDemandeDeStagesById(demandeDeStageId.value);
    console.log(demandeDeStageResult);
  } else if (urlString.includes('pagedetailoffredestage')) {
    isFicheDetailDemandeOffre.value = true;
    isFicheDetailDemandeDeStage.value = false;
    offreDeStageId.value = route.params.id;
    await getOffreDeStageById(offreDeStageId.value);
    console.log(offreDeStagesResult);
  }
});

// Configuration pour declenchement du modal
const modalSuppressionVisible = ref(false);

const toggleModalSuppression = () => modalSuppressionVisible.value = !modalSuppressionVisible.value;
const fermerModalSuppression = () => modalSuppressionVisible.value = false;

const suppressionAnnulee = () => {
    console.log("Suppresion annuler");
    fermerModalSuppression();
};

const confirmationSuppression = () => {
    console.log("Suppression confirmer");
    fermerModalSuppression();
};
</script>

<style>
</style>
