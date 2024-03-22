<template>
  <h1>Demande de stage</h1>
  <div class="flex">
    <RouterLink class="my-3  bg-teal-500 text-white px-4 py-2  rounded hover:bg-teal-600" to="/app/formulairedemande">
      Ajouter une demande</RouterLink>
  </div>

  <RouterLink to="/app/formulaireDo"
    class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-consulter fa fa-check"></i>
  </RouterLink>
  <RouterLink to="/app/formulaireDo"
    class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-editer fas fa-edit"></i>
  </RouterLink>

  <ficheDetailler sousTitre="allo" mainTitre="allo" ficheTitreOne="allo" ficheTitreTwo="allo" ficheDescription="allo"
    @emitRedirectionPageEdition="" @emitToggleModal="toggleModal" programmeDeFormation="allo" secteurDeActiviter="allo"
    competence="allo" etablissementEnseignement="allo" ville="allo" region="allo" diplomeDemandees="allo"
    exigencesText="allo" adresse="allo" province="allo" codePostal="allo" telephone="allo" courriel=""
    typeDeStage="allo" nombreHeures="allo" remuneration="allo" dateDeDebut="allo" dateDeFin="allo"
    informationsSupplémentairesText="allo" :isPageDetaillerDemandeDeStage="true" :isPageDetaillerDemandeOffre="false"
    :isPageDetaillerCandidat="false">
    <modalSuppression :etatDuModal="true" @suppressionAnnuleeIcone="annulerSuppressionIcone"
      @suppressionAnnulee="annulerSuppression" @confirmationSuppression="suppressionConfirmee" title="title"
      firstName="firstName" lastName="lastName" />
  </ficheDetailler>
</template>

<script setup>
import ficheDetailler from '@/components/ficheDetailler.vue';
import modalSuppression from '@/components/modalSuppression.vue';
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

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
