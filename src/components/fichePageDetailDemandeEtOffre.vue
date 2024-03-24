<template>
  <div class="ficheDetaillee">
  <!-- Icones -->
  <div class="ficheDetaillee__conteneur-icônes-mode">
    <i class="ficheDetaillee__icône-consulter fa fa-check" aria-hidden="true" @click="emitConsulter"></i>
    <!-- <RouterLink v-if="isFicheDetailDemandeDeStage " :to="{ name: 'formulairedo', params: { id } }">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </RouterLink> -->
    <!-- <RouterLink v-else-if="isFicheDetailDemandeOffre && !isFicheDetailDemandeDeStage" :to="{ name: 'formulairedo', params: { id } }">
          <i class="ficheDetaillee__icône-editer fas fa-trash"></i>
        </RouterLink> -->
        <i class="ficheDetaillee__icône-editer fa-regular fa-pen-to-square"></i>
    <i class="ficheDetaillee__icône-supprimer fas fa-trash" @click="emitSupprimer"></i>
  </div>

  <div class="ficheDetaillee__card">
    <!-- Titre et description -->
    <div class="ficheDetaillee__conteneur-titres">
      <h2
        class="ficheDetaillee__nom-personne"
        :class="{ colorBlue: isFicheDetailDemandeDeStage }"
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
            : "Nom Prenom"
        }}
      </p>
    </div>

    <!-- Conteneurs d'informations générales demande de stage-->
    <div
      class="ficheDetaillee__conteneur-informations-generales-stage"
      v-if="isFicheDetailDemandeDeStage"
    >
      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">Programme de formation</h3>
          <span>
            {{
              ficheDemandeStage.skills[0]
                ? ficheDemandeStage.skills[0]
                : "secteur activite"
            }}
          </span>
        </div>
      </div>

      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">Secteur d'activité</h3>
          <span class="ficheDetaillee__contenu-info">
            {{
              ficheDemandeStage.skills[0]
                ? ficheDemandeStage.skills[0]
                : "secteur activite"
            }}
          </span>
        </div>
      </div>

      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">Compétences</h3>
          <span>
            {{
              ficheDemandeStage.skills[(0, 1, 2, 3)]
                ? ficheDemandeStage.skills[(0, 1, 2, 3)]
                : "competences"
            }}
          </span>
        </div>
      </div>

      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">
            Établissement d'enseignement
          </h3>
          <span class="ficheDetaillee__contenu-info">
            {{
              ficheDemandeStage.candidate.adress
                ? ficheDemandeStage.candidate.adress
                : "Établissement d'enseignement inconnu"
            }}
          </span>
        </div>
      </div>

      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">Ville</h3>
          <span class="ficheDetaillee__contenu-info">
            {{
              ficheDemandeStage.candidate.city
                ? ficheDemandeStage.candidate.city
                : "Ville inconnue"
            }}
          </span>
        </div>
      </div>

      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">Région</h3>
          <span class="ficheDetaillee__contenu-info">
            {{
              ficheDemandeStage.province.value
                ? ficheDemandeStage.province.value
                : "Région inconnue"
            }}
          </span>
        </div>
      </div>
    </div>

    <div class="ficheDetaillee__conteneur-titre">
      <h2
        v-if="isFicheDetailDemandeDeStage"
        class="ficheDetaillee__titre-info-stage"
        :class="{ colorBlue: isFicheDetailDemandeDeStage }"
      >
        Informations sur le stage recherché
      </h2>
    </div>

    <div
      class="ficheDetaillee__conteneur-informations-generales-offre"
      v-if="isFicheDetailOffreDeStage"
    >
      <div class="ficheDetaillee__conteneur-informations-generales-offre">
        <div class="ficheDetaillee__conteneur-information">
          <div class="ficheDetaillee__bloc-style"></div>
          <div class="ficheDetaillee__infos">
            <h3 class="ficheDetaillee__titre-info">Formation demandées</h3>
            <span class="ficheDetaillee__contenu-info">{{
              ficheOffreStage
                ? ficheOffreStage
                : "Aucune donnée de formation demander"
            }}</span>
          </div>
        </div>

        <div class="ficheDetaillee__conteneur-information">
          <div class="ficheDetaillee__bloc-style"></div>
          <div class="ficheDetaillee__infos">
            <h3 class="ficheDetaillee__titre-info">Exigences</h3>
            <span class="ficheDetaillee__contenu-info">{{
              ficheOffreStage ? ficheOffreStage : "Aucune donnée dexigence"
            }}</span>
          </div>
        </div>
        <div class="ficheDetaillee__conteneur-titre">
          <h2
            v-if="isFicheDetailOffreDeStage"
            class="ficheDetaillee__titre-info-stage"
            :class="{ colorBlue: isFicheDetailOffreDeStage }"
          >
            Informations sur le stage
          </h2>
        </div>
      </div>
    </div>

    <!-- Conteneurs d'informations spécifiques sur demande de stage et offre de stage-->
    <div
      class="ficheDetaillee__conteneur-informations-specifiques"
      v-if="isFicheDetailDemandeDeStage || isFicheDetailOffreDeStage"
    >
      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">Type de stage</h3>
          <span class="ficheDetaillee__contenu-info">
            {{
              ficheDemandeStage.internshipType.value
                ? ficheDemandeStage.internshipType.value + " " + "TIME"
                : "Type de stage inconnu"
            }}
          </span>
        </div>
      </div>
      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">
            Nombre d'heures par semaine
          </h3>
          <span class="ficheDetaillee__contenu-info">
            {{
              ficheDemandeStage.weeklyWorkHours
                ? ficheDemandeStage.weeklyWorkHours + " " + "Heures/semaine"
                : "Nombre d'heures de travail hebdomadaire non spécifié"
            }}
          </span>
        </div>
      </div>
      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">Rémunération</h3>
          <span class="ficheDetaillee__contenu-info">
            {{
              ficheDemandeStage.province
                ? ficheDemandeStage.province
                : "Région inconnue"
            }}
          </span>
        </div>
      </div>
      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">Date de début</h3>
          <span class="ficheDetaillee__contenu-info">
            {{
              ficheDemandeStage.startDate
                ? ficheDemandeStage.startDate
                : "Région inconnue"
            }}
          </span>
        </div>
      </div>
      <div class="ficheDetaillee__conteneur-information">
        <div class="ficheDetaillee__bloc-style"></div>
        <div class="ficheDetaillee__infos">
          <h3 class="ficheDetaillee__titre-info">Date de fin</h3>
          <span class="ficheDetaillee__contenu-info">
            {{
              ficheDemandeStage.endDate
                ? ficheDemandeStage.endDate
                : "Province inconnue"
            }}
          </span>
        </div>
      </div>
    </div>
    <!-- Conteneur information supplementaire -->
    <div class="ficheDetaillee__conteneur-informations-supplementaires">
      <h2>Information supplementaires</h2>
      <p>
        {{
          ficheDemandeStage.additionalInformation
            ? ficheDemandeStage.additionalInformation
            : "Pas dinformations supplementaires"
        }}
      </p>
      <button>
        <i>Telechager CV</i>
      </button>
    </div>
  </div>
</div>
</template>

<script setup>
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
</script>

<style scoped>
.colorBlue {
  color: rgb(20 184 166);
}
.colorRed {
  color: red;
}
.colorPurple {
  color: palevioletred;
}
.colorBgBlue {
  background-color: rgb(20 184 166);
}
.colorBgRed {
  background-color: red;
}
.colorBgPurple {
  background-color: palevioletred;
}

.ficheDetaillee {
  margin-top: 100px;
}

.ficheDetaillee__conteneur-icônes-mode{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  font-size: 20px;
}
.ficheDetaillee__conteneur-icônes-mode
.ficheDetaillee__icône-consulter{
  margin-left: 10px ;
  margin-right: 10px;

}
.ficheDetaillee__conteneur-icônes-mode
.ficheDetaillee__icône-editer {
  margin-left: 10px ;
  margin-right: 10px;
  
}
.ficheDetaillee__conteneur-icônes-mode
.ficheDetaillee__icône-supprimer {
  margin-left: 10px ;
  margin-right: 10px;
  
}

.ficheDetaillee__card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 80px 80px 80px 80px;
  height: 1550px;
}

.ficheDetaillee__conteneur-titres {
  margin-bottom: 60px;
}

.ficheDetaillee__conteneur-titres .ficheDetaillee__nom-personne {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;
}

.ficheDetaillee__conteneur-titres p {
  color: rgb(115 115 115);
}

.ficheDetaillee__conteneur-informations-generales-stage,
.ficheDetaillee__conteneur-informations-generales-offre,
.ficheDetaillee__conteneur-informations-specifiques {
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
}

.ficheDetaillee__conteneur-informations-generales-stage,
.ficheDetaillee__conteneur-informations-generales-offre,
.ficheDetaillee__conteneur-informations-specifiques,
.ficheDetaillee__conteneur-informations-supplementaires {
  border: 2px solid red;
  margin-bottom: 40px;
}

.ficheDetaillee__conteneur-information {
  display: flex;
  flex: 0 0 calc(50% - 20px);
  margin-bottom: 35px;
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
.ficheDetaillee__conteneur-titre{
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 30px;
}
.ficheDetaillee__titre-info-stage{

}
.ficheDetaillee__conteneur-informations-supplementaires{

}
.ficheDetaillee__conteneur-informations-supplementaires h2{
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 30px;
}
.ficheDetaillee__conteneur-informations-supplementaires p{
  margin-bottom: 30px;
}
.ficheDetaillee__conteneur-informations-supplementaires button{
  background-color: aqua;
  padding: 5px 10px 5px 10px;
  border-radius: 8px;
  font-size: 30px;
}
</style>
