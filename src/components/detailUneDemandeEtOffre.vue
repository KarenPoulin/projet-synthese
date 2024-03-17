<template>
  <main class="ficheDetaillee" :class="{ 'modal-open': etatDuModal }">

    <div class="ficheDetaillee__conteneur-titres-principaux">
      <div class="ficheDetaillee__bloc-style"></div>
      <div class="ficheDetaillee__titres">
        <span class="ficheDetaillee__sous-titre">Demande de stage</span>
        <h1 class="ficheDetaillee__titre">{{ title }} title</h1>
      </div>
    </div>

    <div class="ficheDetaillee__conteneur-icônes-mode">
      <i class=" ficheDetaillee__icône-consulter fa fa-check"></i>
      <i class="ficheDetaillee__icône-editer fas fa-edit" @click="redirectionPageEdition"></i>
      <i class="ficheDetaillee__icône-supprimer fas fa-trash" @click="toggleModal"></i>
      <div class="modal-container" v-if="etatDuModal">
      <modalSuppression
      @suppressionAnnuleeIcone="annulerSuppressionIcone" 
      @suppressionAnnulee="annulerSuppression" 
      :title="title"
      :firstName="firstName"
      :lastName="lastName">
      </modalSuppression>
      </div>
    </div>

    <div class="ficheDetaillee__card">
      <div class="ficheDetaillee__conteneur-informations">

        <div class="ficheDetaillee__conteneur-titre">
          <h2 class="ficheDetaillee__nom-personne">{{ firstName }} firstName {{ lastName }} lastName</h2>
          <p>{{ description }} Une description de quelques mots est un résumé concis d'un sujet ou d'une idée, généralement composé de trois à cinq mots qui capturent l'essence de ce dont il est question. Elle est utilisée pour transmettre rapidement une information ou une impression sur un sujet spécifique, offrant ainsi une vue d'ensemble ou une introduction brève mais informative. Ces descriptions sont souvent utilisées dans divers contextes, tels que la présentation de produits, la catégorisation de contenu, ou même dans des conversations informelles où une explication succincte est nécessaire. Elles sont efficaces pour communiquer de manière efficace et rapide, en résumant des informations complexes ou en donnant une idée générale d'un sujet sans trop de détails.</p>
        </div>

        <div class="ficheDetaillee__conteneur-informations-générales">
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Programme de formation</h3>
              <span class="ficheDetaillee__contenu-info">{{ title }} title</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Secteur dactivite</h3>
              <span class="ficheDetaillee__contenu-info">{{ title }} title</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Compétences</h3>
              <span class="ficheDetaillee__contenu-info">{{ skills }} skills</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Établissement d'enseignement</h3>
              <span class="ficheDetaillee__contenu-info">{{ address }} address</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Ville</h3>
              <span class="ficheDetaillee__contenu-info">{{ city }} city</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Région</h3>
              <span class="ficheDetaillee__contenu-info">{{ province }} province</span>
            </div>
          </div>
        </div>

        <div class="ficheDetaillee__conteneur-titre">
            <h2 class="ficheDetaillee__titre-info-stage">Informations sur le stage recherché</h2>
        </div>

        <div class="ficheDetaillee__conteneur-informations-specifiques">
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Type de stage</h3>
              <span class="ficheDetaillee__contenu-info">{{ internshipType }} internshipType</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Nombre d'heures par semaine</h3>
              <span class="ficheDetaillee__contenu-info">{{ weeklyWorkHours }} weeklyWorkHours</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Rémunération</h3>
              <span class="ficheDetaillee__contenu-info">{{ weeklyWorkHours }} weeklyWorkHours</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Date de début</h3>
              <span class="ficheDetaillee__contenu-info">{{ startDate }} startDate</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Date de fin</h3>
              <span class="ficheDetaillee__contenu-info">{{ endDate }} endDate</span>
            </div>
          </div>
        </div>
      </div>

      <div class="ficheDetaillee__conteneur-titre">
        <h2 class="ficheDetaillee__titre-info-supplementaire">Informations supplémentaires</h2>
        <p> {{ additionalInformation }} Une description de quelques mots est un résumé concis d'un sujet ou d'une idée, généralement composé de trois à cinq mots qui capturent l'essence de ce dont il est question. Elle est utilisée pour transmettre rapidement une information ou une impression sur un sujet spécifique, offrant ainsi une vue d'ensemble ou une introduction brève mais informative. Ces descriptions sont souvent utilisées dans divers contextes, tels que la présentation de produits, la catégorisation de contenu, ou même dans des conversations informelles où une explication succincte est nécessaire. Elles sont efficaces pour communiquer de manière efficace et rapide, en résumant des informations complexes ou en donnant une idée générale d'un sujet sans trop de détails.</p>
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
  </main>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import modalSuppression from './modalSuppression.vue';
// Importer et configurer les donnees get par id de l'api.
// Importer et configurer les donnees de delete de l'api.

const identifiant = ref(null)
const route = useRouter()
const etatDuModal = ref(false)

// Appel de la fonction get par id pour afficher les detailles
// onMounted(() => {
//   identifiant.value = route.params.id;
// })

// Fonction de redirection a la page edition
// const redirectionPageEdition = () => {
//   const editIdentifiant = `/edit-page?id=${identifiant.value}`;
//   route.push(editIdentifiant)
// }

const annulerSuppressionIcone = () => {
  etatDuModal.value = false;
  console.log(etatDuModal.value)
}

const annulerSuppression = () => {
  etatDuModal.value = false;
  console.log(etatDuModal.value)
}

// Appel de la fonction supprimer de lapi avec le id a linterieur pour supprimer 
// const suppressionConfirmee = () => {
//   etatDuModal.value = false;
//   console.log(etatDuModal.value)
// }

const toggleModal = () => {
  etatDuModal.value = !etatDuModal.value;
}
</script>
    
<style scoped>

.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start; 
}

.ficheDetaillee {
  position: relative; 
  z-index: 1;
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
  background-color:rgb(133 77 14);
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
  color: rgb(20 184 166);
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 40px;
}

.ficheDetaillee__conteneur-titre
.ficheDetaillee__titre-info-stage{
  color: rgb(20 184 166);
  font-size: 20px;
  font-weight: 600;
}

.ficheDetaillee__conteneur-titre p{
  color:  rgb(115 115 115);
}

.ficheDetaillee__conteneur-titre
.ficheDetaillee__titre-info-supplementaire{
  color: rgb(20 184 166);
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
