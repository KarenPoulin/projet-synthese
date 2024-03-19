<template>
    <div class="ficheDetaillee__conteneur-icônes-mode">
      <i class="ficheDetaillee__icône-consulter fa fa-check"></i>
      <i class="ficheDetaillee__icône-editer fas fa-edit" @click="emitRedirectionPageEdition"></i>
      <i class="ficheDetaillee__icône-supprimer fas fa-trash" @click="emitToggleModal"></i>
      <div class="modal-container" v-if="etatDuModal">
        <modalSuppression
          @suppressionAnnuleeIcone="emitAnnulerSuppressionIcone"
          @suppressionAnnulee="emitAnnulerSuppression"
          :title="title"
          :firstName="firstName"
          :lastName="lastName"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  import modalSuppression from './modalSuppression.vue';
  
  const props = defineProps({
    title: String,
    firstName: String,
    lastName: String
  });
  
  const emits = defineEmits([
    'redirectionPageEdition',
    'toggleModal',
    'annulerSuppressionIcone',
    'annulerSuppression'
  ]);
  
  const etatDuModal = ref(false);
  
  const emitRedirectionPageEdition = () => {
    emits('redirectionPageEdition');
  }
  
  const emitToggleModal = () => {
    emits('toggleModal');
  }
  
  const emitAnnulerSuppressionIcone = () => {
    emits('annulerSuppressionIcone');
  }
  
  const emitAnnulerSuppression = () => {
    emits('annulerSuppression');
  }
  </script>
  