<template>
      <ficheDetailler
      sousTitre="allo"
      mainTitre="allo"
      ficheTitreOne="allo"
      ficheTitreTwo="allo"
      ficheDescription="allo"
      @emitRedirectionPageEdition=""
      @emitToggleModal="toggleModal"
      programmeDeFormation="allo"
      secteurDeActiviter="allo"
      competence="allo"
      etablissementEnseignement="allo"
      ville="allo"
      region="allo"
      diplomeDemandees="allo"
      exigencesText="allo"
      adresse="allo"
      province="allo"
      codePostal="allo"
      telephone="allo"
      courriel=""
      typeDeStage="allo"
      nombreHeures="allo"
      remuneration="allo"
      dateDeDebut="allo"
      dateDeFin="allo"
      informationsSupplémentairesText="allo"
      :isPageDetaillerDemandeDeStage="true"
      :isPageDetaillerDemandeOffre="false"
      :isPageDetaillerCandidat="false">
      <modalSuppression
          :etatDuModal="true" 
          @suppressionAnnuleeIcone="annulerSuppressionIcone"
          @suppressionAnnulee="annulerSuppression"
          @confirmationSuppression="suppressionConfirmee"
          title="title"
          firstName="firstName"
          lastName="lastName"
      />
      </ficheDetailler>
</template>

<script setup>
import ficheDetailler from '@/components/ficheDetailler.vue';
import modalSuppression from '@/components/modalSuppression.vue';
import { ref } from 'vue'

const etatDuModal = ref(false)

const annulerSuppressionIcone = () => {
  etatDuModal.value = false;
  console.log(etatDuModal.value)
}

const annulerSuppression = () => {
  etatDuModal.value = false;
  console.log(etatDuModal.value)
}

const suppressionConfirmee = () => {
  etatDuModal.value = false;
  // Information de lapi pour la suppression
  console.log(etatDuModal.value)
}

const toggleModal = () => {
  etatDuModal.value = !etatDuModal.value;
}
</script>