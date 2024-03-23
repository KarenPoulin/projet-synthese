<template>

    <div class="ficheDetaillee__conteneur-icônes-mode">

      <i class="ficheDetaillee__icône-consulter fas fa-trash"></i> 

      <RouterLink :to="{ name: {link}, params: { id } }">
        <i class="ficheDetaillee__icône-editer fas fa-trash"></i>
      </RouterLink>

      <i class="ficheDetaillee__icône-supprimer fas fa-trash" @click="toggleModalSuppression"></i>

      <!-- <modalSuppression 
      :etatDuModal="etatDuModal"
      :title="title"
      :firstName="firstName"
      :lastName="lastName"
      @confirmationSuppression="confirmationSuppression"
      @suppressionAnnulee="suppressionAnnulee"
      /> -->
    </div>

    <div class="ficheDetaillee__card"  v-if="isFicheDetailDemandeDeStage || isFicheDetailDemandeOffre">
      <div class="ficheDetaillee__conteneur-informations">

      <div class="ficheDetaillee__conteneur-titre" >
        <h2 class="ficheDetaillee__nom-personne"  
          :class="{
            'colorBlue': isFicheDetailDemandeDeStage, 
            'colorRed': isFicheDetailDemandeOffre }">
          {{ ficheTitreOne }} {{ ficheTitreTwo }}
        </h2>
        <p>{{ ficheDescription }}</p> 
      </div>


        <div class="ficheDetaillee__conteneur-informations-générales" v-if="isFicheDetailDemandeDeStage">

          <div class="ficheDetaillee__conteneur-titre">
          <h2 class="ficheDetaillee__titre-info-stage" :class="{'colorBlue':  isFicheDetailDemandeDeStage}">
           Informations sur le stage 
          </h2>
          </div>
          
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Programme de formation</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.programmeDeFormation }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Secteur d'activité</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.secteurDeActiviter }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Compétences</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.competence }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Établissement d'enseignement</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.etablissementEnseignement }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Ville</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.ville }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Région</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStage.region }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-informations-supplementaires">
            <button type="button" class="ficheDetaillee__bouton-cta">
             <i class="ficheDetaillee__icône fas fa-cloud-download-alt"></i>
            <span>
             Télécharger le C.V.
            </span>
            </button>
          </div>
        </div>

<div class="ficheDetaillee__conteneur-titre" v-if="isFicheDetailDemandeOffre">

<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Formation demandees</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheDemandeOffre.programmeDeFormation }}</span>
  </div>
</div>
<div class="ficheDetaillee__conteneur-information">
  <div class="ficheDetaillee__bloc-style"></div>
  <div class="ficheDetaillee__infos">
    <h3 class="ficheDetaillee__titre-info">Exigences</h3>
    <span class="ficheDetaillee__contenu-info">{{ ficheDemandeOffre.secteurDeActiviter }}</span>
  </div>
</div>
        

      <div class="ficheDetaillee__conteneur-informations-specifiques" v-if="isFicheDetailDemandeDeStage || isFicheDetailDemandeOffre"> 

        <div class="ficheDetaillee__conteneur-titre" v-if="isFicheDetailDemandeDeStage">
          <h2 class="ficheDetaillee__titre-info-stage" :class="{'colorRed': isFicheDetailDemandeDeStage}">
           Informations sur le stage
          </h2>
        </div>

        <div class="ficheDetaillee__conteneur-titre" v-if="isFicheDetailDemandeOffre">
          <h2 class="ficheDetaillee__titre-info-stage" :class="{'colorRed': isFicheDetailDemandeOffre}">
           Informations sur le stage recherché
          </h2>
        </div>

          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Type de stage</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStageEtOffre.typeDeStage }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Nombre d'heures par semaine</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStageEtOffre.nombreHeures }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Rémunération</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStageEtOffre.remuneration }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Date de début</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStageEtOffre.dateDeDebut }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Date de fin</h3>
              <span class="ficheDetaillee__contenu-info">{{ ficheDemandeStageEtOffre.dateDeFin }}</span>
            </div> 
          </div>
        </div>


      <div class="ficheDetaillee__conteneur-titre" v-if=" isFicheDetailDemandeDeStage || isFicheDetailDemandeOffre">
        <h2 class="ficheDetaillee__titre-info-supplementaire" 
          :class="{
            'colorBlue': isFicheDetailDemandeDeStage,
            'colorRed': isFicheDetailDemandeOffre}">
          Informations supplémentaires
        </h2>
        <p> {{ informationsSupplémentairesText.ficheDemandeStageEtOffre }} </p> 
      </div>
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
  ficheDemandeOffre: Object,
  ficheDemandeStageEtOffre: Object,
  link: String,
  id: String
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

.ficheDetaillee {
  max-width: 1100px;
  margin: auto;
}

.ficheDetaillee__conteneur-titres-principaux {
  margin-bottom: 100px;
  display: flex;
}

.ficheDetaillee__conteneur-titres-principaux
.ficheDetaillee__bloc-style {
  width: 10px;
  height: 75px;
  margin-right: 10px;
}

.ficheDetaillee__conteneur-titres-principaux
.ficheDetaillee__sous-titre {
  color:  rgb(115 115 115);
  font-size: 16px;
}

.ficheDetaillee__conteneur-titres-principaux
.ficheDetaillee__titre {
  color:  rgb(115 115 115);
  font-size: 40px;
  font-weight: 600;
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

.ficheDetaillee__card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 80px 80px 80px 80px;
  height: 1550px;
}

.ficheDetaillee__conteneur-informations {
}

.ficheDetaillee__conteneur-informations-générales{

}

.ficheDetaillee__conteneur-informations-specifiques{

}

.ficheDetaillee__conteneur-informations-supplementaires{
  
}

.ficheDetaillee__conteneur-titre{
  margin-bottom: 60px;
}

.ficheDetaillee__conteneur-titre
.ficheDetaillee__nom-personne {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;
}

.ficheDetaillee__conteneur-titre
.ficheDetaillee__titre-info-stage{
  font-size: 20px;
  font-weight: 600;
}

.ficheDetaillee__conteneur-titre p{
  color:  rgb(115 115 115);
}

.ficheDetaillee__conteneur-titre
.ficheDetaillee__titre-info-supplementaire{
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
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

.ficheDetaillee__contenu-info {
  color:  rgb(115 115 115);
}

.ficheDetaillee__conteneur-informations-générales,
.ficheDetaillee__conteneur-informations-specifiques {
  display: flex;
  flex-wrap: wrap;
}

.ficheDetaillee__conteneur-informations-générales,
.ficheDetaillee__conteneur-informations-specifiques,
.ficheDetaillee__conteneur-informations-supplementaires {
  margin-bottom: 40px;
}

.ficheDetaillee__conteneur-informations-supplementaires {
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
}
</style>