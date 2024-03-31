<template>
  <div class="fixed inset-0 flex items-center justify-center modal-container z-50 bg-transparent" style="background-color: rgba(0, 0, 0, 0.75);">
    <div class="modal-content bg-white p-8 rounded-lg shadow-lg max-w-md">
      <div class="donnees" v-if="isFicheDetailDemandeDeStage">
        <p class="text-red-600 text-xl mb-6">Voulez-vous vraiment supprimer <br> cette demande de stage ?</p>
        <dl class="mb-6">
          <div class="mb-4">
            <dt class="font-bold text-gray-600">Titre du stage</dt>
            <dd>{{ titleDuStage }}</dd>
          </div>
          <div class="mb-4">
            <dt class="font-bold text-gray-600">Prénom du stagiaire</dt>
            <dd>{{ prenomDuStagiaire }}</dd>
          </div>
          <div>
            <dt class="font-bold text-gray-600">Nom du stagiaire</dt>
            <dd>{{ monDuStagiaire }}</dd>
          </div>
        </dl>
      </div>

      <div class="donnees" v-else>
        <p class="text-red-600 text-xl mb-6">Voulez-vous vraiment supprimer cette offre de stage ?</p>
        <dl class="mb-6">
          <div class="mb-4">
            <dt class="font-bold text-gray-600">Titre de l'offre</dt>
            <dd>{{ titleDeOffre }}</dd>
          </div>
          <div>
            <dt class="font-bold text-gray-600">Nom de l'entreprise</dt>
            <dd>{{ nomDeEntreprise }}</dd>
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
        monDuStagiaire,
        etablissementEnseignement, 
        titleDeOffre,
        nomDeEntreprise, 
        modalSuppressionVisible,
        isFicheDetailDemandeDeStage } = defineProps({
  titleDuStage: String,
  prenomDuStagiaire: String,
  monDuStagiaire: String,
  etablissementEnseignement: String,
  titleDeOffre: String,
  nomDeEntreprise: String,
  modalSuppressionVisible: Boolean,
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
