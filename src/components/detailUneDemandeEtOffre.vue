<template>
  <main class="ficheDetaillee">
    <div class="ficheDetaillee__conteneur-titres">
      <div class="ficheDetaillee__bloc-style"></div>
      <div class="ficheDetaillee__titres">
        <span class="ficheDetaillee__sous-titre">Demande de stage</span>
        <h1 class="ficheDetaillee__titre">Développeur web front-end</h1>
      </div>
    </div>
    <div class="ficheDetaillee__conteneur-icônes-mode">
      <i class="ficheDetaillee__icône-consulter fas fa-eye"></i>
      <i class="ficheDetaillee__icône-editer fas fa-edit" @click="redirectionPageEdition"></i>
      <i class="ficheDetaillee__icône-supprimer fas fa-trash" @click="modalSuppressionOuverture"></i>
    </div>
    <div class="ficheDetaillee__card">
      <div class="ficheDetaillee__conteneur-informations">
        <h2 class="ficheDetaillee__nom-personne">Nom de la personne</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>

        <div class="ficheDetaillee__conteneur-informations-générales">
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Programme de formation</h3>
              <span class="ficheDetaillee__contenu-info">Développement web</span>
            </div>
          </div>
        </div>

        <div class="ficheDetaillee__conteneur-informations-specifiques">
          <h2 class="ficheDetaillee__titre-info-stage">Information sur le stage recherché</h2>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Type de stage</h3>
              <span class="ficheDetaillee__contenu-info">Temps plein</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ficheDetaillee__conteneur-informations-supplementaires">
        <h2 class="ficheDetaillee__titre-info-supplementaire">Informations supplémentaires</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <button type="button" class="ficheDetaillee__bouton-cta text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <i class="ficheDetaillee__icône fas fa-cloud-download-alt"></i>
          Télécharger le C.V.
        </button>
      </div>
      <modalSuppression :etatDuModal="etatDuModal" @confirmationSuppression="suppressionConfirmee"></modalSuppression>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import modalSuppression from './modalSuppression.vue';

const identifiant = ref(null)
const route = useRouter()

onMounted(() => {
  identifiant.value = route.params.id;
})

const redirectionPageEdition = () => {
  const editIdentifiant = `/edit-page?id=${identifiant.value}`;
  route.push(editIdentifiant)
}

const etatDuModal = ref(false)

const suppressionConfirmee = () => {
  etatDuModal.value = false
  console.log("faux")
}

const modalSuppressionOuverture = () => {
  etatDuModal.value = true
  console.log("true")
}
</script>
    
<style scoped>

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

  .ficheDetaillee__conteneur-informations-générales{
  }

  .ficheDetaillee__conteneur-information {
    display: flex;
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