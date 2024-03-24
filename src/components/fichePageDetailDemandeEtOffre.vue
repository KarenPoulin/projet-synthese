<template>
  <div class="ficheDetaillee">
    <!-- Icones -->
    <div class="containerIcones">
      <div class="ficheDetaillee__conteneur-icônes-mode">
        <!-- Icone pour consulter -->
        <i
          class="ficheDetaillee__icône-consulter fa fa-check"
          aria-hidden="true"
          @click="emitConsulter"
        ></i>

        <!-- Icone pour éditer -->
        <!-- <RouterLink v-if="isFicheDetailDemandeDeStage || (isFicheDetailOffreDeStage && !isFicheDetailDemandeDeStage)" :to="{ name: 'formulairedo', params: { id } }">
        </RouterLink> -->
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>

        <!-- Icone pour supprimer -->
        <i
          class="ficheDetaillee__icône-supprimer fas fa-trash"
          @click="emitSupprimer"
        ></i>
      </div>
    </div>

    <div class="ficheDetaillee__card">
      <!-- Titre et description -->
      <div class="ficheDetaillee__conteneur-titres">
        <h2
          class="ficheDetaillee__nom-personne"
          :class="{
            colorBlue:
              isFicheDetailDemandeDeStage && !isFicheDetailOffreDeStage,
            colorRed: isFicheDetailOffreDeStage && !isFicheDetailDemandeDeStage,
          }"
        >
          {{
            ficheDemandeStage.candidate.firstname
              ? ficheDemandeStage.candidate.firstname +
                " " +
                ficheDemandeStage.candidate.lastname
              : "Nom Prenom"
          }}
        </h2>
        <p>
          {{
            ficheDemandeStage.candidate.description
              ? ficheDemandeStage.candidate.description
              : "Descriptiion"
          }}
        </p>
      </div>

      <!-- v-if une condition isFicheDetailDemandeDeStage -->
      <div class="containerDemandeDeStage" v-if="isFicheDetailDemandeDeStage">
        <div class="ficheDetaillee__conteneur-informations-generales-stage">
          <div
            v-for="(info, index) in informationDemandeDeStage"
            :key="index"
            class="ficheDetaillee__conteneur-information"
          >
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">{{ info.title }}</h3>
              <span class="ficheDetaillee__contenu-info">{{
                info.content
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- v-if une condition isFicheDetailOffreDeStage -->
      <div class="containerOffreDeStage" v-if="isFicheDetailOffreDeStage">
        <div class="ficheDetaillee__conteneur-informations-generales-offre">
          <div v-if="isFicheDetailOffreDeStage">
            <div
              class="ficheDetaillee__conteneur-information"
              v-for="(info, index) in informationOffreDeStage"
              :key="index"
            >
              <div class="ficheDetaillee__bloc-style"></div>
              <div class="ficheDetaillee__infos">
                <h3 class="ficheDetaillee__titre-info">{{ info.title }}</h3>
                <span class="ficheDetaillee__contenu-info">{{
                  info.content
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- v-if deux conditions isFicheDetailDemandeDeStage et isFicheDetailOffreDeStage-->
      <div
        class="containerOffreEtDemande"
        v-if="isFicheDetailDemandeDeStage || isFicheDetailOffreDeStage"
      >
        <div class="ficheDetaillee__conteneur-titres">
          <h2 class="ficheDetaillee__titre-info-stage" :class="titleClass">
            {{ title }}
          </h2>
        </div>

        <div class="ficheDetaillee__conteneur-informations-specifiques">
          <!-- Informations communes de demande et offre de stage-->
          <div
            v-for="info in commonInfos"
            :key="info.title"
            class="ficheDetaillee__conteneur-information"
          >
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">{{ info.title }}</h3>
              <span class="ficheDetaillee__contenu-info">{{
                info.content
              }}</span>
            </div>
          </div>
        </div>
        <!-- Conteneur information supplementaire -->
        <div class="ficheDetaillee__conteneur-informations-supplementaires">
          <h2
            :class="{
              colorBlue:
                isFicheDetailDemandeDeStage && !isFicheDetailOffreDeStage,
              colorRed:
                isFicheDetailOffreDeStage && !isFicheDetailDemandeDeStage,
            }"
          >
            Information supplementaires
          </h2>
          <p>
            {{
              ficheDemandeStage.additionalInformation
                ? ficheDemandeStage.additionalInformation
                : "Pas dinformations supplementaires"
            }}
          </p>
          <button
            type="button"
            class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2"
            v-if="isFicheDetailDemandeDeStage"
          >
            <i class="fa-solid fa-cloud-arrow-down"></i>
            Télécharger le C.V.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  isFicheDetailDemandeDeStage: Boolean,
  isFicheDetailOffreDeStage: Boolean,
  ficheDemandeStage: Object,
  ficheOffreStage: Object,
  id: Number,
});

const emits = defineEmits(["emitConsulter", "emitSupprimer"]);

const emitConsulter = () => {
  emits("emitConsulter");
};

const emitSupprimer = () => {
  emits("emitSupprimer");
};

const title = computed(() => {
  if (props.isFicheDetailDemandeDeStage) {
    return "Informations sur le stage recherché";
  } else if (isFicheDetailOffreDeStage.value) {
    return "Informations sur le stage";
  }
});

const titleClass = computed(() => {
  return {
    colorBlue:
      props.isFicheDetailDemandeDeStage && !props.isFicheDetailOffreDeStage,
    colorRed:
      props.isFicheDetailOffreDeStage && !props.isFicheDetailDemandeDeStage,
  };
});

const informationDemandeDeStage = computed(() => [
  {
    title: "Programme de formation",
    content: props.ficheDemandeStage.skills[0] || "secteur activite",
  },
  {
    title: "Secteur d'activité",
    content: props.ficheDemandeStage.sector || "secteur activite",
  },
  {
    title: "Compétences",
    content:
      props.ficheDemandeStage.skills.slice(0, 4).join(", ") || "competences",
  },
  {
    title: "Établissement d'enseignement",
    content:
      props.ficheDemandeStage.candidate?.address ||
      "Établissement d'enseignement inconnu",
  },
  {
    title: "Ville",
    content: props.ficheDemandeStage.candidate?.city || "Ville inconnue",
  },
  {
    title: "Région",
    content: props.ficheDemandeStage.province?.value || "Région inconnue",
  },
]);

const informationOffreDeStage = computed(() => [
  {
    title: "Formation demandées",
    content:
      props.ficheOffreStage.requestedTraining ||
      "Aucune donnée de formation demandée",
  },
  {
    title: "Exigences",
    content: props.ficheOffreStage.requirements || "Aucune donnée d'exigence",
  },
]);

const commonInfos = computed(() => [
  {
    title: "Type de stage",
    content: props.ficheDemandeStage.internshipType?.value
      ? props.ficheDemandeStage.internshipType.value + " TIME"
      : "Type de stage inconnu",
  },
  {
    title: "Nombre d'heures par semaine",
    content: props.ficheDemandeStage.weeklyWorkHours
      ? props.ficheDemandeStage.weeklyWorkHours + " Heures/semaine"
      : "Nombre d'heures de travail hebdomadaire non spécifié",
  },
  {
    title: "Rémunération",
    content: props.ficheDemandeStage.compensation
      ? props.ficheDemandeStage.compensation
      : "Rémunération inconnue",
  },
  {
    title: "Date de début",
    content: props.ficheDemandeStage.startDate
      ? props.ficheDemandeStage.startDate
      : "Date de début inconnue",
  },
  {
    title: "Date de fin",
    content: props.ficheDemandeStage.endDate
      ? props.ficheDemandeStage.endDate
      : "Date de fin inconnue",
  },
]);
</script>

<style scoped>
.colorBlue {
  color: rgb(20 184 166);
}
.colorRed {
  color: rgb(153 27 27);
}
.colorBgBlue {
  background-color: rgb(20 184 166);
}
.colorBgRed {
  background-color: rgb(153 27 27);
}
.colorBgYellow {
  background-color: rgb(202 138 4);
}
.colorGrisMoyen {
  background-color: rgb(115 115 115);
}
.colorGrisClair {
  background-color: rgb(245 245 245);
}
.colorGrisFonce {
  background-color: rgb(38 38 38);
}
.ficheDetaillee {
  margin-top: 100px;
}

.ficheDetaillee__conteneur-icônes-mode {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 600;
}
.ficheDetaillee__conteneur-icônes-mode .ficheDetaillee__icône-consulter {
  margin-left: 10px;
  margin-right: 10px;
  color: #2ecc71;
}
.ficheDetaillee__conteneur-icônes-mode .ficheDetaillee__icône-editer {
  margin-left: 10px;
  margin-right: 10px;
  color: #3498db;
}
.ficheDetaillee__conteneur-icônes-mode .ficheDetaillee__icône-supprimer {
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
