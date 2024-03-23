<template>
<div class="ficheDetaillee">

    <!-- Conteneur des icônes de mode -->
    <div class="ficheDetaillee__conteneur-icônes-mode"  v-if="isFicheDetailDemandeDeStage || isFicheDetailDemandeOffre">
    <i class="ficheDetaillee__icône-consulter fas fa-trash"></i> 
    <!-- <RouterLink :to="{ name: {link}, params: { id } }">
      <i class="ficheDetaillee__icône-editer fas fa-trash"></i>
    </RouterLink> -->
    <i class="ficheDetaillee__icône-supprimer fas fa-trash" @click="toggleModalSuppression"></i>
  </div>

<div class="ficheDetaillee__card" v-if="isFicheDetailDemandeDeStage">
  <!-- Titre et description -->
  <div class="ficheDetaillee__conteneur-titres">
    <h2 class="ficheDetaillee__nom-personne" :class="{'colorBlue': isFicheDetailDemandeDeStage}">
      {{ ficheDemandeStage.candidate.firstname ? 
      ficheDemandeStage.candidate.firstname + ' ' + 
      ficheDemandeStage.candidate.lastname : 'Nom Prenom'}}
    </h2>
    <p>
      {{ ficheDemandeStage.candidate.description ?  
      ficheDemandeStage.candidate.description : 'Description'}}
    </p> 
  </div>

  <!-- Conteneurs d'informations générales demande de stage-->
  <div class="ficheDetaillee__conteneur-informations-generales-stage">
    <div class="ficheDetaillee__conteneur-information">
      <div class="ficheDetaillee__bloc-style"></div>
      <div class="ficheDetaillee__infos">
        <h3 class="ficheDetaillee__titre-info">Programme de formation</h3>
        <span v-for="(skill, index) in ficheDemandeStage.skills.slice(1, 5)" :key="index">
          {{ skill ? skill : 'skill'}}
        </span>
      </div>
    </div>

    <div class="ficheDetaillee__conteneur-information">
      <div class="ficheDetaillee__bloc-style"></div>
      <div class="ficheDetaillee__infos">
        <h3 class="ficheDetaillee__titre-info">Secteur d'activité</h3>
        <span class="ficheDetaillee__contenu-info">
          {{ ficheDemandeStage.title ?  ficheDemandeStage.title : 'secteur activite' }}
        </span>
      </div>
    </div>

    <div class="ficheDetaillee__conteneur-information">
      <div class="ficheDetaillee__bloc-style"></div>
      <div class="ficheDetaillee__infos">
        <h3 class="ficheDetaillee__titre-info">Compétences</h3>
        <span v-for="(skill, index) in ficheDemandeStage.skills.slice(1, 5)" :key="index">
          {{ skill ? skill : 'competences' }}
        </span>
      </div>
    </div>

    <div class="ficheDetaillee__conteneur-information">
      <div class="ficheDetaillee__bloc-style"></div>
      <div class="ficheDetaillee__infos">
        <h3 class="ficheDetaillee__titre-info">Établissement d'enseignement</h3>
        <span class="ficheDetaillee__contenu-info">
          {{ ficheDemandeStage.candidate.adress }}
        </span>
      </div>
    </div>

    <div class="ficheDetaillee__conteneur-information">
      <div class="ficheDetaillee__bloc-style"></div>
      <div class="ficheDetaillee__infos">
        <h3 class="ficheDetaillee__titre-info">Ville </h3>
        <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.candidate.city }}</span>
      </div>
    </div>

    <div class="ficheDetaillee__conteneur-information">
      <div class="ficheDetaillee__bloc-style"></div>
      <div class="ficheDetaillee__infos">
        <h3 class="ficheDetaillee__titre-info">Région</h3>
        <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.candidate.province.value }}</span>
      </div>
    </div>
  </div>
    <!-- Conteneurs d'informations spécifiques sur demande de stage -->
<div class="ficheDetaillee__conteneur-informations-specifiques">

<div class="ficheDetaillee__conteneur-titre" v-if="isFicheDetailDemandeDeStage">
  <h2 class="ficheDetaillee__titre-info-stage" :class="{'colorRed': isFicheDetailDemandeDeStage}">
    Informations sur le stage recherché
  </h2>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Type de stage</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.province }}</span>
  </div>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Nombre d'heures par semaine</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.weeklyWorkHours }}</span>
  </div>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Rémunération</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.province  }}</span>
  </div>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Date de début</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.province  }}</span>
  </div>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Date de fin</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.province  }}</span>
  </div>
</div>
</div>

<div class="ficheDetaillee__conteneur-informations-supplementaires">
          <h2>{{ ficheDemandeStage.province  }}</h2>
          <p>{{ ficheDemandeStage.province  }}</p>
          <button>
            <i>Telechager CV</i>
          </button>
</div>


</div>

  <div class="ficheDetaillee__card" v-if="isFicheDetailDemandeOffre">
  <!-- Titre et description -->
  <div class="ficheDetaillee__conteneur-titres">
    <h2 class="ficheDetaillee__nom-personne" :class="{'colorBlue': isFicheDetailDemandeDeStage}">
      {{ ficheOffreStage.province  }} {{ ficheOffreStage.province }}
    </h2>
    <p>{{ ficheOffreStage.province }}</p> 
  </div>
   <!-- Conteneurs d'informations générales offre de stage-->
   <div class="ficheDetaillee__conteneur-informations-generales-offre">
        <div class="ficheDetaillee__conteneur-information">
          <div class="ficheDetaillee__bloc-style"></div>
          <div class="ficheDetaillee__infos">
            <h3 class="ficheDetaillee__titre-info">Formation demandées</h3>
            <span class="ficheDetaillee__contenu-info">{{ ficheOffreStage.province }}</span>
          </div>
        </div>

        <div class="ficheDetaillee__conteneur-information">
          <div class="ficheDetaillee__bloc-style"></div>
          <div class="ficheDetaillee__infos">
            <h3 class="ficheDetaillee__titre-info">Exigences</h3>
            <span class="ficheDetaillee__contenu-info">{{ ficheOffreStage.province }}</span>
          </div>
        </div>
      </div>
          <!-- Conteneurs d'informations spécifiques sur offre de stage -->
<div class="ficheDetaillee__conteneur-informations-specifiques" v-if="isFicheDetailDemandeOffre">
<div class="ficheDetaillee__conteneur-titre">
  <h2 class="ficheDetaillee__titre-info-stage" :class="{'colorRed': isFicheDetailDemandeDeStage}">
    Informations sur le stage
  </h2>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Type de stage</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheOffreStage.province }}</span>
  </div>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Nombre d'heures par semaine</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheOffreStage.province }}</span>
  </div>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Rémunération</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheOffreStage.province }}</span>
  </div>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Date de début</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheOffreStage.province }}</span>
  </div>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Date de fin</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheOffreStage.province }}</span>
  </div>
</div>
</div>

<div class="ficheDetaillee__conteneur-informations-supplementaires">
          <h2>{{ ficheOffreStage.province }}</h2>
          <p>{{ ficheOffreStage.province }}</p>
</div>
</div>
</div>
</template>

<script setup>
// import modalSuppression from './modalSuppression.vue';
import { defineProps } from 'vue';

const props = defineProps({
  isFicheDetailDemandeDeStage: Boolean,
  isFicheDetailDemandeOffre: Boolean,
  ficheDemandeStage: Object,
  ficheOffreStage: Object,
  // link: String,
  // id: String
  // etatDuModal: Boolean
});

// const emits = defineEmits(['suppressionAnnulee', 'confirmationSuppression', 'toggleModalSuppression']);


// const confirmationSuppression = () => {
//   emits('confirmationSuppression');
// };

// const suppressionAnnulee = () => {
//   emits('suppressionAnnulee');
// };

// const toggleModalSuppression = () => {
//   emits('toggleModalSuppression');
// };

</script>


<style scoped>
.colorBlue{
  color: rgb(20 184 166);;
}
.colorRed{
  color: red;
}
.colorPurple{
  color: palevioletred;
}
.colorBgBlue{
  background-color: rgb(20 184 166);;
}
.colorBgRed{
  background-color: red;
}
.colorBgPurple{
  background-color: palevioletred;
}

.ficheDetaillee__card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 80px 80px 80px 80px;
  height: 1550px;
}

.ficheDetaillee__conteneur-icônes-mode {
  text-align: right;
  margin-bottom: 20px;
}

.ficheDetaillee__icône-consulter{
  font-size: 24px;
  color: #2ecc71;
  margin: 0 10px;
  cursor: pointer;
  font-weight: 600;
}
.ficheDetaillee__icône-editer{
  font-size: 20px;
  color: rgba(13, 13, 85, 0.76);
  margin: 0 10px;
  cursor: pointer;
}
.ficheDetaillee__icône-supprimer {
  font-size: 20px;
  color: rgb(126, 16, 16);
  margin: 0 10px;
  cursor: pointer;
}

.ficheDetaillee__conteneur-titres{
  margin-bottom: 60px;
}

.ficheDetaillee__conteneur-titres
.ficheDetaillee__nom-personne {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;
}

.ficheDetaillee__conteneur-titres p{
  color:  rgb(115 115 115);
}


/* .ficheDetaillee__conteneur-informations {
} */

.ficheDetaillee__conteneur-informations-generales-stage,
.ficheDetaillee__conteneur-informations-generales-offre,
.ficheDetaillee__conteneur-informations-specifiques{
  display: flex;
  flex-wrap: wrap;
}

.ficheDetaillee__conteneur-informations-generales-stage,
.ficheDetaillee__conteneur-informations-generales-offre,
.ficheDetaillee__conteneur-informations-specifiques,
.ficheDetaillee__conteneur-informations-supplementaires {
  margin-bottom: 40px;
}

.ficheDetaillee__conteneur-informations-supplementaires {
}

.ficheDetaillee__conteneur-information {
  display: flex;
  flex: 0 0 calc(50% - 20px);
  margin-bottom: 35px;
}

.ficheDetaillee__conteneur-information
.ficheDetaillee__bloc-style {
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

/* .ficheDetaillee__contenu-info {
  color:  rgb(115 115 115);
}

.ficheDetaillee__bouton-cta {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(20 184 166);
  color: rgb(245 245 245);
  border-radius: 8px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
}

.ficheDetaillee__bouton-cta i{
  margin-left: 5px;
  margin-right: 5px;
}
.ficheDetaillee__bouton-cta span{
  margin-left: 5px;
  margin-right: 5px;
} */
</style>