<template>
  <div class="fixed inset-0 flex items-center justify-center modal-container z-50 bg-transparent" style="background-color: rgba(0, 0, 0, 0.75);">
    <div class="modal-content bg-white p-8 rounded-lg shadow-lg max-w-md">
      <div class="donnees">
          <p v-if="isFicheDetailDemandeDeStage" class="text-red-600 text-xl mb-6">
            Voulez-vous vraiment supprimer cette demande de stage ?
          </p>
  
          <p v-else-if="isCandidate" class="text-red-600 text-xl mb-6">
            Voulez-vous vraiment supprimer ce candidat ou cette candidate ?
          </p>
      
          <p v-else-if="!isCandidate" class="text-red-600 text-xl mb-6">
            Voulez-vous vraiment supprimer cette entreprise ?
          </p>
    
          <p v-else-if="!isFicheDetailDemandeDeStage"class="text-red-600 text-xl mb-6">
            Voulez-vous vraiment supprimer cette offre de stage ?
          </p>


        <dl class="mb-6">
          <div class="mb-4">
            <dt v-if="isFicheDetailDemandeDeStage" class="font-bold text-gray-600">Titre du stage</dt>
            <dd v-if="isFicheDetailDemandeDeStage">{{ titleDuStage }}</dd>
            <dt v-if="!isFicheDetailDemandeDeStage && !isCandidate && isCandidate" class="font-bold text-gray-600">Titre de l'offre</dt>
            <dd v-if="!isFicheDetailDemandeDeStage">{{ titleDeOffre }}</dd>
          </div>
          <div class="mb-4">
            <dt v-if="isFicheDetailDemandeDeStage" class="font-bold text-gray-600">Prénom du stagiaire</dt>
            <dd v-if="isFicheDetailDemandeDeStage">{{ prenomDuStagiaire }}</dd>
            <dt v-if="isFicheDetailDemandeDeStage" class="font-bold text-gray-600">Nom du stagiaire</dt>
            <dd v-if="isFicheDetailDemandeDeStage">{{ nomDuStagiaire }}</dd>
            <dt v-if="isCandidate" class="font-bold text-gray-600">Prénom du candidat ou de la candidate</dt>
            <dd v-if="isCandidate">{{ prenomCandidate }}</dd>
            <dt v-if="isCandidate" class="font-bold text-gray-600">Nom du candidat ou de la candidate</dt>
            <dd v-if="isCandidate">{{ nomCandidate }}</dd>
            <dt v-if="!isCandidate && !isFicheDetailDemandeDeStage" class="font-bold text-gray-600">Nom de l'entreprise</dt>
            <dd v-if="!isCandidate && !isFicheDetailDemandeDeStage">{{ nomDeEntreprise }}</dd>
          </div>

        </dl>
      </div>
      
      <div class="flex justify-end gap-5 mt-15 button-container">
    <button class="cancel-button bg-transparent border-none text-gray-700 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 rounded-md text-base transition-colors duration-300" @click="annulerSuppression">Annuler</button>
    <button class="delete-button bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded-md text-base transition-colors duration-300" @click="confirmerSuppression">Supprimer</button>
  </div>
  
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const { titleDuStage, 
        prenomDuStagiaire,
        nomDuStagiaire,
        prenomCandidate,
        nomCandidate,
        etablissementEnseignement, 
        titleDeOffre,
        nomDeEntreprise, 
        modalSuppressionVisible,
        isCandidate,
        isFicheDetailDemandeDeStage } = defineProps({
  titleDuStage: String,
  prenomDuStagiaire: String,
  nomDuStagiaire: String,
  prenomCandidate: String,
  nomCandidate: String,
  etablissementEnseignement: String,
  titleDeOffre: String,
  nomDeEntreprise: String,
  modalSuppressionVisible: Boolean,
  isCandidate: Boolean,
  isFicheDetailDemandeDeStage: Boolean
});

const emits = defineEmits(['suppressionAnnulee', 'confirmationSuppression']);

const annulerSuppression = () => {
  emits('suppressionAnnulee');
};

const confirmerSuppression = () => {
  emits('confirmationSuppression');
};
</script>
