<template>

  <template v-if="isFicheDetailDemandeDeStage && demandeDeStageResult || offreDeStagesResult">
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
    <div class="text-right mb-10">
            <button @click="goToEditForm" type="button" class="bg-yellow-600 p-3 text-white rounded-lg">Modifier</button>  
        </div>
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


</template>

<script setup>
  import modalSuppression from "@/components/modalSuppression.vue";
  import { useRouter, useRoute} from "vue-router";
  import { onMounted, ref } from "vue";
  import { computed } from "vue";
  import { useDemandesDeStages } from "@/composables/demandeDeStage";
  import { useOffreDeStages } from "@/composables/offreDeStage";

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

  // Configuration Modal de suppression
  const modalSuppressionVisible = ref(false);

  const toggleModalSuppression = () =>
    modalSuppressionVisible.value = !modalSuppressionVisible.value;

  const suppressionAnnulee = () => {
    console.log("Suppresion annuler");
    modalSuppressionVisible.value = false;
  };

  const suppressionComfirmer = () => {
    console.log("Suppression confirmer");
    modalSuppressionVisible.value = false;
  }; 
</script>
