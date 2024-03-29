<template>

  <template v-if="isFicheDetailDemandeDeStage && demandeDeStageResult || offreDeStagesResult">
    <!-- Entete -->
    <div class="mb-10"
      :class="{'border-l-8 border-yellow-600': isFicheDetailDemandeDeStage, 'border-l-8 border-red-800': !isFicheDetailDemandeDeStage}">
      <p v-if="isFicheDetailDemandeDeStage" class="text-neutral-500 text-md font-semibold ml-5">Demande de stage</p>
      <p v-if="!isFicheDetailDemandeDeStage" class="text-neutral-500 text-md font-semibold ml-5">Offre de stage</p>
      <h1 class="text-neutral-500 text-4xl font-bold mb-5 ml-5">
        {{ isFicheDetailDemandeDeStage ? demandeDeStageResult.title : offreDeStagesResult.title }}</h1>
      <h2 v-if="!isFicheDetailDemandeDeStage"
        class="bg-white inline-block text-neutral-500 font-semibold text-xl text-center p-3 ml-5">
        {{ offreDeStagesResult.enterprise.name }}</h2>
    </div>
    
    <!-- Icones -->
   <div class="text-right font-extrabold">
      <i class="ficheDetaillee__icône-consulter fa fa-check fa-lg ml-2 mr-2 text-green-400" aria-hidden="true"></i>
      <i class="fa-solid fa-pen-to-square text-blue-900 text-lg ml-2 mr-2" type="button" @click="goToEditForm"></i>
      <i class="ficheDetaillee__icône-supprimer fas fa-trash fa-lg ml-2 mr-2 text-red-500" @click="ouvrirModalSuppression"></i>
      <modalSuppression
        v-if="modalSuppressionVisible && isFicheDetailDemandeDeStage"
        :modalSuppressionVisible="modalSuppressionVisible"
        @suppressionAnnulee="suppressionAnnulee"
        @confirmationSuppression="suppressionConfirmer(demandeDeStageResult._id)"
        :title="demandeDeStageResult?.title"
        :firstName="demandeDeStageResult?.candidate.firstName"
        :lastName="demandeDeStageResult?.candidate.lastName"
        />
        <modalSuppression
        v-if="modalSuppressionVisible && !isFicheDetailDemandeDeStage"
        :modalSuppressionVisible="modalSuppressionVisible"
        @suppressionAnnulee="suppressionAnnulee"
        @confirmationSuppression="suppressionConfirmer(offreDeStagesResult._id)"
        :title="offreDeStagesResult?.title"
        :firstName="offreDeStagesResult?.enterprise.activitySector"
        :lastName="offreDeStagesResult?.enterprise.name"
        />
   </div>

    <!-- Fiche -->
    <div class="bg-white p-8 lg:p-16 rounded-xl">
      <h3 v-if="isFicheDetailDemandeDeStage" class="text-3xl md:text-4xl font-bold mb-5 lg:mb-10"
        :class="{'text-yellow-600': isFicheDetailDemandeDeStage }">
        {{ demandeDeStageResult.candidate.firstName + ' ' + demandeDeStageResult.candidate.lastName }}</h3>
      <h3 v-if="!isFicheDetailDemandeDeStage" class="text-red-800 text-3xl md:text-4xl font-bold mb-5 lg:mb-10">
        Description de la tâche</h3>
      <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a nostrum modi, maiores voluptates recusandae
        odit dolorum iure exercitationem aperiam velit ipsam saepe. Ad praesentium sunt reprehenderit, perspiciatis
        cumque aut commodi unde quod mollitia laudantium vitae iure eaque, voluptas rem nesciunt labore, culpa illum
        accusamus dicta dolor illo ducimus deserunt excepturi. Vitae totam nulla ullam sunt vero iusto, non molestiae
        autem placeat alias modi, quod minus error sed impedit adipisci repudiandae facilis a mollitia quam officiis
        aperiam nisi?</p>
        <p class="mb-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nisi laborum aliquid corrupti possimus
        aliquam quia officia provident cupiditate dolorem perferendis iusto consequatur at animi molestiae natus, rerum
        tenetur porro, sed ducimus? Perspiciatis, corporis animi quasi ex quam molestias! Alias quas architecto
        provident officia ad, saepe laudantium suscipit eaque inventore nostrum ipsa esse beatae.</p>
      <div v-if="isFicheDetailDemandeDeStage" class="grid grid-cols-1 md:grid-cols-2 md:gap-5">
        <div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Programme de formation</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ demandeDeStageResult.skills[0] }}</p>
          </div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Secteur d'activité</h5>
            <p class="text-neutral-500 text-sm ml-2">Nouvelles technologies de l'information</p>
          </div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Compétences</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ demandeDeStageResult.candidate.skills.slice(0,10) .join(', ') }}</p>
          </div>
        </div>
        <div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Établissement d'enseignement</h5>
            <p class="text-neutral-500 text-sm ml-2">Cégep de Trois-Rivières</p>
          </div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Ville</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ demandeDeStageResult.candidate.city }}</p>
          </div>
          <div class="border-l-8 border-neutral-500 mb-8">
            <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Région</h5>
            <p class="text-neutral-500 text-sm ml-2">{{ demandeDeStageResult.province.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>

  <div v-else>
  Chargement en cours ...
  </div>

</template>

<script setup>
  import modalSuppression from "@/components/modalSuppression.vue";
  import { useRouter, useRoute} from "vue-router";
  import { onMounted, ref } from "vue";
  import { useDemandesDeStages } from "@/composables/demandeDeStage";
  import { useOffreDeStages } from "@/composables/offreDeStage";
  import axios from 'axios';


  // Initialisation des variables
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

  const isFicheDetailDemandeDeStage = ref(true);

  const router = useRouter()
  const route = useRoute();
    
  // Configuration affichage des informations detailler selon l'identifiant
  onMounted(async () => {
    const urlString = window.location.href;

    if (urlString.includes("pagedetaildemandedestage")) {
      isFicheDetailDemandeDeStage.value = true;
      demandeDeStageId = route.params.id;
      await getDemandeDeStagesById(demandeDeStageId);
      console.log(demandeDeStageResult);

    } else if (urlString.includes("pagedetailoffredestage")) {
      isFicheDetailDemandeDeStage.value = false;
      offreDeStageId = route.params.id;
      await getOffreDeStageById(offreDeStageId);
      console.log(offreDeStagesResult);
    }
  });

  // Configuration icone editer pour formulaire edition
  const goToEditForm = () => {
    let id;
    let type;
    
    if (isFicheDetailDemandeDeStage.value) {
      id = demandeDeStageId;
      type = 'request';
    } else {
      id = offreDeStageId;
      type = 'offer';
    }
    router.push({ name: 'formulairedo', params: { type: type, id: id } })
  }

  // Configuration icone supprimer pour modal de suppression
  const modalSuppressionVisible = ref(false);

  const ouvrirModalSuppression = () => {
    modalSuppressionVisible.value = !modalSuppressionVisible.value;
    console.log(modalSuppressionVisible.value)
  };

  const fermerModalSuppression = () => {
    modalSuppressionVisible.value = false;
  };

  const suppressionAnnulee = () => {
    fermerModalSuppression();
  };

  const suppressionConfirmer = async(id) => {
    try {
      const url = isFicheDetailDemandeDeStage ? 'https://api-4.fly.dev/internship-requests' : 'https://api-4.fly.dev/internship-offers';
      const response = await axios.delete(`${url}/${id}`);
      console.log(response.data); 
      console.log(`L'entrée avec l'ID ${id} a été supprimée.`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'entrée avec l'ID ${id}:`, error);
    }
    console.log("Supprimer l'entrée avec ID:");
    fermerModalSuppression();

    router.push('/app/demandesdestages');
  };
  
</script>
