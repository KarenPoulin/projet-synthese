<template>
  <main class="ficheDetaillee">

    <div class="ficheDetaillee__conteneur-titres">
      <div class="ficheDetaillee__bloc-style"></div>
      <div class="ficheDetaillee__titres">
        <span class="ficheDetaillee__sous-titre">Demande de stage</span>
        <h1 class="ficheDetaillee__titre">{{ title }} title</h1>
      </div>
    </div>

    <div class="ficheDetaillee__conteneur-icônes-mode">
      <i class="ficheDetaillee__icône-consulter fas fa-eye"></i>
      <i class="ficheDetaillee__icône-editer fas fa-edit" @click="redirectionPageEdition"></i>
      <i class="ficheDetaillee__icône-supprimer fas fa-trash" @click="toggleModal"></i>
      <modalSuppression v-if="etatDuModal" 
      @suppressionAnnuleeIcone="annulerSuppressionIcone" 
      @suppressionAnnulee="annulerSuppression" 
      :title="title"
      :firstName="firstName"
      :lastName="lastName">
      </modalSuppression>
    </div>

    <div class="ficheDetaillee__card">
      <div class="ficheDetaillee__conteneur-informations">
        <h2 class="ficheDetaillee__nom-personne">{{ firstName }} firstName {{ lastName }} lastName</h2>
        <p>{{ description }} description</p>
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

        <div class="ficheDetaillee__conteneur-informations-specifiques">
          <div>
            <h2 class="ficheDetaillee__titre-info-stage">Informations sur le stage recherché</h2>
          </div>
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

      <div class="ficheDetaillee__conteneur-informations-supplementaires">
        <h2 class="ficheDetaillee__titre-info-supplementaire">Informations supplémentaires</h2>
        <p> {{ additionalInformation }} </p>
        <button type="button" class="ficheDetaillee__bouton-cta text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <i class="ficheDetaillee__icône fas fa-cloud-download-alt"></i>
          Télécharger le C.V.
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

.test{
  background-color: white;
}

  .ficheDetaillee {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  
  .ficheDetaillee__conteneur-titres {
    margin-bottom: 20px;
    display: flex;
  }
  
  .ficheDetaillee__bloc-style {
    width: 10px;
    height: 55px;
    background-color: #3498db;
  }
  
  .ficheDetaillee__sous-titre {
    color: #7f8c8d;
    font-size: 16px;
  }
  
  .ficheDetaillee__titre {
    color: #2c3e50;
    font-size: 24px;
  }
  
  .ficheDetaillee__card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .ficheDetaillee__conteneur-icônes-mode {
    text-align: right;
    margin-bottom: 20px;
  }
  
  .ficheDetaillee__icône-consulter,
  .ficheDetaillee__icône-editer,
  .ficheDetaillee__icône-supprimer {
    font-size: 20px;
    color: #2ecc71;
    margin: 0 10px;
    cursor: pointer;
  }
  
  .ficheDetaillee__conteneur-informations {
    text-align: left;
    padding: 20px;
  }
  
  .ficheDetaillee__nom-personne {
    color: #34495e;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .ficheDetaillee__conteneur-informations-générales,
  .ficheDetaillee__conteneur-informations-specifiques{
    display: flex;
    flex-wrap: wrap;
  }

  .ficheDetaillee__conteneur-information {
    display: flex;
    flex: 0 0 calc(50% - 20px);
    margin-bottom: 20px;
  }

  .ficheDetaillee__conteneur-informations
  .ficheDetaillee__bloc-style {
    width: 10px;
    height: 55px;
    background-color: #3498db;
  }

  .ficheDetaillee__infos{

  }

  .ficheDetaillee__titre-info{
    color: #3498db;
    font-size: 18px;
  }

  .ficheDetaillee__contenu-info{

  }
  .ficheDetaillee__conteneur-informations-supplementaires {
  }

  .ficheDetaillee__bouton-cta{
  }
  </style> 