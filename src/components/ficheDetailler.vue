<template>
  <main class="ficheDetaillee">
    <div class="ficheDetaillee__conteneur-titres-principaux">
      <div class="ficheDetaillee__bloc-style" 
        :class="{
          'colorBgBlue': isPageDetaillerDemandeDeStage, 
          'colorBgRed': isPageDetaillerDemandeOffre, 
          'colorBgPurple': isPageDetaillerCandidat
        }">
        </div>

      <div class="ficheDetaillee__titre">
        <span class="ficheDetaillee__sous-titre">{{ sousTitre }}</span>
        <h1 class="ficheDetaillee__titre">{{ mainTitre }}</h1>
      </div>
    </div>

    <div class="ficheDetaillee__card">
      <div class="ficheDetaillee__conteneur-informations">

      <div class="ficheDetaillee__conteneur-titre" >
        <h2 class="ficheDetaillee__nom-personne"  
          :class="{
            'colorBlue': isPageDetaillerDemandeDeStage, 
            'colorRed': isPageDetaillerDemandeOffre, 
            'colorPurple': isPageDetaillerCandidat
          }">
          {{ ficheTitreOne }} {{ ficheTitreTwo }}
        </h2>
        <p>{{ ficheDescription }}</p> 
      </div>

      <div class="ficheDetaillee__conteneur-icônes-mode">
      <i class="ficheDetaillee__icône-consulter fa fa-check"></i>
      <i class="ficheDetaillee__icône-editer fas fa-edit" @click="emitRedirectionPageEdition"></i>
      <i class="ficheDetaillee__icône-supprimer fas fa-trash" @click="emitToggleModal"></i>
      <slot></slot>
      </div>

        <div class="ficheDetaillee__conteneur-informations-générales" v-if="isPageDetaillerDemandeDeStage">
          
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Programme de formation</h3>
              <span class="ficheDetaillee__contenu-info">{{ programmeDeFormation }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Secteur d'activité</h3>
              <span class="ficheDetaillee__contenu-info">{{ secteurDeActiviter }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Compétences</h3>
              <span class="ficheDetaillee__contenu-info">{{ competence }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Établissement d'enseignement</h3>
              <span class="ficheDetaillee__contenu-info">{{ etablissementEnseignement }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Ville</h3>
              <span class="ficheDetaillee__contenu-info">{{ ville }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Région</h3>
              <span class="ficheDetaillee__contenu-info">{{ region }}</span>
            </div>
          </div>
        </div>

        <div class="ficheDetaillee__conteneur-informations-générales" v-if="!isPageDetaillerDemandeDeStage && !isPageDetaillerCandidat">
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Formation demandées</h3>
              <span class="ficheDetaillee__contenu-info">{{ diplomeDemandees }}</span>
            </div>
          </div>

          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Exigences</h3>
              <span class="ficheDetaillee__contenu-info">{{ exigencesText }}</span>
            </div>
          </div>
        </div>

        <div class="ficheDetaillee__conteneur-informations-générales" v-if="isPageDetaillerCandidat">
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Adresse</h3>
              <span class="ficheDetaillee__contenu-info">{{ adresse }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Ville</h3>
              <span class="ficheDetaillee__contenu-info">{{ ville }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Province</h3>
              <span class="ficheDetaillee__contenu-info">{{ province }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Code postal</h3>
              <span class="ficheDetaillee__contenu-info">{{ codePostal }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Telephone</h3>
              <span class="ficheDetaillee__contenu-info">{{ telephone }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Courriel</h3>
              <span class="ficheDetaillee__contenu-info">{{ courriel }}</span>
            </div>
          </div>
        </div>

        <div class="ficheDetaillee__conteneur-titre" v-if="isPageDetaillerDemandeDeStage">
          <h2 class="ficheDetaillee__titre-info-stage" :class="{'colorBlue': isPageDetaillerDemandeDeStage }">
           Informations sur le stage 
          </h2>
        </div>

        <div class="ficheDetaillee__conteneur-titre" v-if="isPageDetaillerDemandeOffre">
          <h2 class="ficheDetaillee__titre-info-stage" :class="{'colorRed': isPageDetaillerDemandeOffre}">
           Informations sur le stage recherché
          </h2>
        </div>

      <div class="ficheDetaillee__conteneur-titre" v-if="isPageDetaillerCandidat">
        <h2 class="ficheDetaillee__titre-info-stage" :class="{'colorPurple': isPageDetaillerCandidat}">
          Informations personnelles
        </h2>
      </div>

      <div class="ficheDetaillee__conteneur-informations-specifiques" v-if="isPageDetaillerDemandeDeStage || isPageDetaillerDemandeOffre"> 
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Type de stage</h3>
              <span class="ficheDetaillee__contenu-info">{{ typeDeStage }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Nombre d'heures par semaine</h3>
              <span class="ficheDetaillee__contenu-info">{{ nombreHeures }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Rémunération</h3>
              <span class="ficheDetaillee__contenu-info">{{ remuneration }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Date de début</h3>
              <span class="ficheDetaillee__contenu-info">{{ dateDeDebut }}</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Date de fin</h3>
              <span class="ficheDetaillee__contenu-info">{{ dateDeFin }}</span>
            </div> 
          </div>
        </div>


      <div class="ficheDetaillee__conteneur-titre" v-if="isPageDetaillerDemandeDeStage || isPageDetaillerDemandeOffre">
        <h2 class="ficheDetaillee__titre-info-supplementaire" 
          :class="{
            'colorBlue': isPageDetaillerDemandeDeStage,
            'colorRed': isPageDetaillerDemandeOffre}">
          Informations supplémentaires
        </h2>
        <p> {{ informationsSupplémentairesText }} </p> 
      </div>

      <div class="ficheDetaillee__conteneur-informations-supplementaires" v-if="isPageDetaillerDemandeDeStage">
        <button type="button" class="ficheDetaillee__bouton-cta">
          <i class="ficheDetaillee__icône fas fa-cloud-download-alt"></i>
          <span>
            Télécharger le C.V.
          </span>
        </button>
      </div>
      </div>
    </div>
</main>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  sousTitre: String,
  mainTitre: String,
  ficheTitreOne: String,
  ficheTitreTwo: String,
  ficheDescription: String,
  programmeDeFormation: String,
  secteurDeActiviter: String,
  competence: String,
  etablissementEnseignement: String,
  ville: String,
  region: String,
  diplomeDemandees: String,
  exigencesText: String,
  adresse: String,
  province: String,
  codePostal: String,
  telephone: String,
  courriel: String,
  typeDeStage: String,
  nombreHeures: String,
  remuneration: String,
  dateDeDebut: String,
  dateDeFin: String,
  informationsSupplémentairesText: String,
  isPageDetaillerDemandeDeStage: Boolean,
  isPageDetaillerDemandeOffre: Boolean,
  isPageDetaillerCandidat: Boolean,
});
// Définition des émetteurs pour les icônes
const emits = defineEmits([
  'redirectionPageEdition',
  'toggleModal',
  'annulerSuppressionIcone',
  'annulerSuppression'
]);

// Émetteur pour rediriger icone edition vers une autre page
const emitRedirectionPageEdition = () => {
  emits('redirectionPageEdition');
}

// Émetteur pour activer/désactiver le modal
const emitToggleModal = () => {
  emits('toggleModal');
}
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
  border: 2px solid red;
  max-width: 1100px;
  margin: auto;
}

.ficheDetaillee__conteneur-titres-principaux {
  border: 2px solid blue;
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