<template  v-if="allCandidatesResults" v-for="candidat in allCandidatesResults" :key="candidat._id">


  <!-- <div class="ficheDetaillee__conteneur-icônes-mode"> 
  <RouterLink :to="{name:'formulairedo', params:{id: candidat._id}}">
    <i class="ficheDetaillee__icône-editer fas fa-edit"></i>
  </RouterLink>
  <i class="ficheDetaillee__icône-supprimer fas fa-trash" @click="toggleModalSuppression"></i>
      <modalSuppression 
      :etatDuModal="etatDuModal"
      :title="title"
      :firstName="firstName"
      :lastName="lastName"
      @confirmationSuppression="confirmationSuppression"
      @suppressionAnnulee="suppressionAnnulee"/>
  </div> -->

  <!-- ATTENTION, les allo ne sont que des exemples pour linstant le temps que je finisse mon code -->
  <entetePageDetailDemandeEtOffre
    :isEnteteDemandeDeStage="true"
    :isEnteteDemandeOffre="false"
    enteteDemandeStage="allo" 
    enteteDemandeOffre="allo">
  </entetePageDetailDemandeEtOffre>
  <fichePageDetailDemandeEtOffre
    :isPageDetaillerDemandeDeStage="true"
    :isPageDetaillerDemandeOffre="false"
    ficheDemandeStage="allo"
    ficheDemandeOffre="allo"
    ficheDemandeStageEtOffre="allo">
    </fichePageDetailDemandeEtOffre>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import fichePageDetailDemandeEtOffre from '@/components/fichePageDetailDemandeEtOffre.vue';
import entetePageDetailDemandeEtOffre from '@/components/entetePageDetailDemandeEtOffre.vue'
import { useCandidate } from '@/composables/candidats';
import { useEnterprise } from '@/composables/entreprises';

    const route = useRoute();

    const isPageDetaillerDemandeDeStage = ref(true);

    const {candidateResult, getCandidateById } = useCandidate();
    let candidateId = ref(null);

    const { enterpriseResult, getEnterpriseById } = useEnterprise();
    let enterpriseId = ref(null);

    onMounted(async () => {

        // aller valider si candidat ou entreprise dans l'url
        const urlString = window.location.href;

        if (urlString.includes('candidat')) {
          isPageDetaillerDemandeDeStage.value = true;
            candidateId = route.params.id;
            await getCandidateById(candidateId);
            console.log(candidateResult);

        } else if (urlString.includes('entreprise')) {
          isPageDetaillerDemandeDeStage.value = false;
            enterpriseId = route.params.id;
            await getEnterpriseById(enterpriseId);
            console.log(enterpriseResult);
        }


    });
</script>
