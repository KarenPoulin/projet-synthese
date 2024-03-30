<template>
  <div class="modal-container">
    <div class="modal-content">
      <p>Voulez-vous vraiment supprimer cette entrée ?</p>

        <div class="donnees" v-if="isFicheDetailDemandeDeStage">
          <h4>Titre du stage : {{ titleDuStage }}</h4>
          <h4>Prénom: {{ prenomDuStagiaire }}</h4>
          <h4>Nom: {{ monDuStagiaire }}</h4>
        </div>

        <div class="donnees" v-if="!isFicheDetailDemandeDeStage" >
          <h4>Titre de l'offre de stage : {{ titleDeOffre }}</h4>
          <h4>Nom de l'entreprise : {{ nomDeEntreprise }}</h4>
        </div>
        
      <div class="button-container">
        <button class="cancel-button" @click="annulerSuppression">Annuler</button>
        <button class="delete-button" @click="confirmerSuppression">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const { titleDuStage, 
        prenomDuStagiaire,
        monDuStagiaire, 
        titleDeOffre,
        nomDeEntreprise, 
        modalSuppressionVisible,
        isFicheDetailDemandeDeStage } = defineProps({
  titleDuStage: String,
  prenomDuStagiaire: String,
  monDuStagiaire: String,
  titleDeOffre: String,
  nomDeEntreprise: String,
  modalSuppressionVisible: Boolean,
  isFicheDetailDemandeDeStage: Boolean
});

const emits = defineEmits(['suppressionAnnulee', 'confirmationSuppression']);

const annulerSuppression = () => {
  emits('suppressionAnnulee');
};

const confirmerSuppression = () => {
  emits('confirmationSuppression');
};
</script>

<style scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
}

.donnees {
  margin-bottom: 20px;
  margin-top: 50px;
}

.button-container {
  text-align: right;
}

.cancel-button {
  background-color: #ccc;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
}

.cancel-button:hover {
  background-color: #999;
}

.delete-button {
  background-color: red;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.delete-button:hover {
  background-color: darkred;
}
</style>
