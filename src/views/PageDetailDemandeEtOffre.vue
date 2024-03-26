<template v-if="isFicheDetailDemandeDeStage && demandeDeStageResult || offreDeStagesResult">
  <div class="ficheDetaillee">
    <!-- Entete -->
    <div class="ficheDetaillee__container-titres-entete">
      <div
        class="ficheDetaillee__border-titre-soustitre"
        :class="{
          'border-l-8 bg-yellow-600': isFicheDetailDemandeDeStage,
          'border-l-8 bg-red-800': !isFicheDetailDemandeDeStage,
        }"
      >
        <span
          v-if="isFicheDetailDemandeDeStage"
          class="ficheDetaillee__sous-titre"
          >Demande de stage</span
        >
        <span
          v-if="!isFicheDetailDemandeDeStage"
          class="ficheDetaillee__sous-titre"
          >Offre de stage</span
        >
        <h1 class="ficheDetaillee__titre">
          {{
            isFicheDetailDemandeDeStage
              ? demandeDeStageResult.title
              : offreDeStagesResult.title
          }}
        </h1>
      </div>
    </div>
    <!-- icones -->
    <!-- <div class="containerIcones">
      <div class="ficheDetaillee__conteneur-icônes-mode">
        <i
          class="ficheDetaillee__icône-consulter fa fa-check"
          aria-hidden="true"
        ></i>
        <RouterLink
          v-if="isFicheDetailDemandeDeStage"
          :to="{ name: 'formulairedo', params: demandeDeStageResult._id }"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </RouterLink>
        <RouterLink
          v-if="!isFicheDetailDemandeDeStage"
          :to="{ name: 'formulairedo', params: offreDeStagesResult._id }"
        >
          <i class="fa-solid fa-pen-to-square"></i>
        </RouterLink>
        <i class="ficheDetaillee__icône-supprimer fas fa-trash"></i>
      </div>
    </div> -->

    <!-- Fiche -->
    <div class="ficheDetaillee__card">
      <!-- Titre et description -->
      <div class="ficheDetaillee__container-titres-card">
        <h2
          class="ficheDetaillee__nom-personne"
          :class="{
            'bg-blue-400': isFicheDetailDemandeDeStage,
            'bg-red-800': !isFicheDetailDemandeDeStage,
          }"
        >
          {{
            isFicheDetailDemandeDeStage
              ? demandeDeStageResult.candidate.firstname +
                " " +
                demandeDeStageResult.candidate.lastname
              : offreDeStagesResult.candidate.firstname +
                " " +
                offreDeStagesResult.candidate.lastname
          }}
        </h2>
        <p>
          {{
            isFicheDetailDemandeDeStage
              ? demandeDeStageResult.candidate.description
              : offreDeStagesResult.candidate.description
          }}
        </p>
      </div>
      <!-- Informations generale demandeDeStage -->
        <div class="ficheDetaillee__conteneur-informations-generales-stage" v-if="isFicheDetailDemandeDeStage">
          <div class="ficheDetaillee__conteneur-information" v-for="(info, index) in informationDemandeDeStage" :key="index">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">{{ info.title }}</h3>
              <span class="ficheDetaillee__contenu-info">{{
                info.content
              }}</span>
            </div>
          </div>
        </div>
        <!-- Informations generale offreDeStage -->
        <div class="ficheDetaillee__conteneur-informations-generales-offre" v-if="!isFicheDetailDemandeDeStage">
          <div class="ficheDetaillee__conteneur-information" v-for="(info, index) in informationOffreDeStage":key="index">
              <div class="ficheDetaillee__bloc-style"></div>
              <div class="ficheDetaillee__infos">
                <h3 class="ficheDetaillee__titre-info">{{ info.title }}</h3>
                <span class="ficheDetaillee__contenu-info">{{
                  info.content
                }}</span>
              </div>
            </div>
        </div>
        <!-- Information specifique titre -->
        <div class="ficheDetaillee__conteneur-titres">
          <h2 class="ficheDetaillee__titre-info-stage" v-if="isFicheDetailDemandeDeStage"
          :class="{'border-l-8 bg-blue-400': isFicheDetailDemandeDeStage}">
          Informations sur le stage recherché
          </h2>
          <h2 class="ficheDetaillee__titre-info-stage" v-if="!isFicheDetailDemandeDeStage"
          :class="{'border-l-8 bg-red-800': !isFicheDetailDemandeDeStage}">
          Informations sur le stage
          </h2>
        </div>
        <!-- Information specifique -->
        <div class="ficheDetaillee__conteneur-informations-specifiques">
          <div class="ficheDetaillee__conteneur-information" v-for="info in commonInfos" :key="info.title">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">{{ info.title }}</h3>
              <span class="ficheDetaillee__contenu-info">{{
                info.content
              }}</span>
            </div>
          </div>
        </div>
        <!-- Information supplementaire -->
        <div class="ficheDetaillee__conteneur-informations-supplementaires">
          <h2 :class="{ colorBlue: isFicheDetailDemandeDeStage, colorRed: !isFicheDetailDemandeDeStage}">
            Information supplementaires
          </h2>
          <p>
            {{
              isFicheDetailDemandeDeStage ? 
              demandeDeStageResult.additionalInformation
              : offreDeStagesResult.additionalInformation
            }}
          </p>
          <button
            type="button"
            class="text-white focus:ring-4 
            focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 
            text-center inline-flex items-center me-2"
            v-if="isFicheDetailDemandeDeStage">
            <i class="fa-solid fa-cloud-arrow-down"></i>
            Télécharger le C.V.
          </button>
        </div>
      </div>
    </div>
</template>

<script setup>
import modalSuppression from "@/components/modalSuppression.vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { computed } from "vue";
import { useDemandesDeStages } from "@/composables/demandeDeStage";
import { useOffreDeStages } from "@/composables/offreDeStage";

const route = useRoute();
let isFicheDetailDemandeDeStage = ref(true);

const informationDemandeDeStage = computed(() => [
  {
    title: "Programme de formation",
    content: demandeDeStageResult.skills[0] || "secteur activite",
  },
  {
    title: "Secteur d'activité",
    content: demandeDeStageResult.sector || "secteur activite",
  },
  {
    title: "Compétences",
    content: demandeDeStageResult.slice(0, 4).join(", ") || "competences",
  },
  {
    title: "Établissement d'enseignement",
    content: demandeDeStageResult.candidate?.address || "Établissement d'enseignement inconnu",
  },
  {
    title: "Ville",
    content: demandeDeStageResult.candidate?.city || "Ville inconnue",
  },
  {
    title: "Région",
    content: demandeDeStageResult.province?.value || "Région inconnue",
  },
]);

const informationOffreDeStage = computed(() => [
  {
    title: "Formation demandées", 
    content: offreDeStagesResult.requestedTraining || "Aucune donnée de formation demandée",
  },
  {
    title: "Exigences",
    content: offreDeStagesResult.requirements || "Aucune donnée d'exigence",
  },
]);

const commonInfos = computed(() => [
  {
    title: "Type de stage",
    content: isFicheDetailDemandeDeStage ? 
    demandeDeStageResult.internshipType?.value + " TIME" : 
    offreDeStagesResult.internshipType?.value + " TIME"
  },
  {
    title: "Nombre d'heures par semaine",
    content: 
    isFicheDetailDemandeDeStage ? 
    demandeDeStageResult.weeklyWorkHours + " Heures/semaine" : 
    offreDeStagesResult.weeklyWorkHours + " Heures/semaine"
  },
  {
    title: "Rémunération",
    content: 
    isFicheDetailDemandeDeStage ? 
    demandeDeStageResult.compensation:
    offreDeStagesResult.compensation
  },
  {
    title: "Date de début",
    content: 
    isFicheDetailDemandeDeStage ? 
    demandeDeStageResult.startDate:
    offreDeStagesResult.startDate
  },
  {
    title: "Date de fin",
    content: 
    isFicheDetailDemandeDeStage ? 
    demandeDeStageResult.endDate:
    offreDeStagesResult.endDate
  },
]);

// Configuration affichage des informations detailler selon l'identifiant

const { demandeDeStageResult, getDemandeDeStagesById } = useDemandesDeStages();
let demandeDeStageId = ref(null);

const { offreDeStagesResult, getOffreDeStageById } = useOffreDeStages();
let offreDeStageId = ref(null);

onMounted(async () => {
  const urlString = window.location.href;

  if (urlString.includes("pagedetaildemandedestage")) {
    isFicheDetailDemandeDeStage.value = true;
    demandeDeStageId.value = route.params.id;
    await getDemandeDeStagesById(demandeDeStageId.value);
    console.log(demandeDeStageResult);
  } else if (urlString.includes("pagedetailoffredestage")) {
    isFicheDetailDemandeDeStage.value = false;
    offreDeStageId.value = route.params.id;
    await getOffreDeStageById(offreDeStageId.value);
    console.log(offreDeStagesResult);
  }
});

// Configuration Modal de suppression
const modalSuppressionVisible = ref(false);

const toggleModalSuppression = () =>
  (modalSuppressionVisible.value = !modalSuppressionVisible.value);

const suppressionAnnulee = () => {
  console.log("Suppresion annuler");
  modalSuppressionVisible.value = false;
};

const confirmationSuppression = () => {
  console.log("Suppression confirmer");
  modalSuppressionVisible.value = false;
};
</script>

<style>
.ficheDetaillee {
  max-width: 1100px;
  margin: auto;
}
.ficheDetaillee__container-titres-entete {
  display: flex;
}
.ficheDetaillee__container-titres-entete .ficheDetaillee__sous-titre {
  color: rgb(115 115 115);
  font-size: 15px;
}
.ficheDetaillee__container-titres-entete .ficheDetaillee__titre {
  color: rgb(115 115 115);
  font-size: 35px;
  font-weight: 600;
}
.containerIcones .ficheDetaillee__conteneur-icônes-mode {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 600;
}
.containerIcones .ficheDetaillee__conteneur-icônes-mode .ficheDetaillee__icône-consulter {
  margin-left: 10px;
  margin-right: 10px;
  color: #2ecc71;
}
.containerIcones .ficheDetaillee__conteneur-icônes-mode .ficheDetaillee__icône-editer {
  margin-left: 10px;
  margin-right: 10px;
  color: #3498db;
}
.containerIcones .ficheDetaillee__conteneur-icônes-mode .ficheDetaillee__icône-supprimer {
  margin-left: 10px;
  margin-right: 10px;
  color: rgb(153 27 27);
}

.ficheDetaillee__card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 80px 80px 80px 80px;
  height: 1300px;
  overflow: auto;
}

.ficheDetaillee__card::-webkit-scrollbar {
  display: none;
}

.ficheDetaillee__conteneur-titres {
  margin-bottom: 50px;
}

.ficheDetaillee__conteneur-titres .ficheDetaillee__nom-personne {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 50px;
}

.ficheDetaillee__conteneur-titres p {
  color: rgb(115 115 115);
}

.ficheDetaillee__conteneur-informations-generales-stage,
.ficheDetaillee__conteneur-informations-generales-offre,
.ficheDetaillee__conteneur-informations-specifiques {
  display: flex;
  flex-wrap: wrap;
}

.ficheDetaillee__conteneur-informations-generales-stage,
.ficheDetaillee__conteneur-informations-generales-offre,
.ficheDetaillee__conteneur-informations-specifiques,
.ficheDetaillee__conteneur-informations-supplementaires {
  margin-bottom: 40px;
}

.ficheDetaillee__conteneur-information {
  display: flex;
  flex: 0 0 calc(50% - 20px);
  margin-bottom: 40px;
}

.ficheDetaillee__conteneur-information .ficheDetaillee__bloc-style {
  width: 10px;
  height: 55px;
  background-color: rgb(115 115 115);
  margin-right: 5px;
}

.ficheDetaillee__infos {
}

.ficheDetaillee__titre-info {
  color: rgb(115 115 115);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
}
.ficheDetaillee__conteneur-titre {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 30px;
}
.ficheDetaillee__titre-info-stage {
  font-weight: 600;
}
.ficheDetaillee__conteneur-informations-supplementaires {
  overflow: auto;
}
.ficheDetaillee__conteneur-informations-supplementaires:-webkit-scrollbar {
  display: none;
}

.ficheDetaillee__conteneur-informations-supplementaires h2 {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 40px;
}
.ficheDetaillee__conteneur-informations-supplementaires p {
  margin-bottom: 40px;
}
.ficheDetaillee__conteneur-informations-supplementaires button {
  background-color: rgb(20 184 166);
  font-weight: 600;
  font-size: 20px;
  padding: 15px 10px 15px 10px;
}
.ficheDetaillee__conteneur-informations-supplementaires i {
}
</style>
