<template>
  <div class="modal-container" v-show="modalSuppressionVisible">
    <div class="modal-content">
      <div class="donnees" v-if="isFicheDetailDemandeDeStage">
        <p>Voulez-vous vraiment supprimer cette demande de stage ?</p>
        <dl>
          <div>
            <dt>Titre du stage </dt>
            <dd>{{ titleDuStage }}</dd>
          </div>
          <div>
            <dt>Prénom du stagiaire </dt>
            <dd>{{ prenomDuStagiaire }}</dd>
          </div>
          <div>
            <dt>Nom du stagiaire </dt>
            <dd>{{ monDuStagiaire }}</dd>
          </div>
        </dl>
      </div>

      <div class="donnees" v-else>
        <p>Voulez-vous vraiment supprimer cette offre de stage ?</p>
        <dl>
          <div>
            <dt>Titre de l'offre </dt>
            <dd>{{ titleDeOffre }}</dd>
          </div>
          <div>
            <dt>Nom de l'entreprise </dt>
            <dd>{{ nomDeEntreprise }}</dd>
          </div>
        </dl>
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
        etablissementEnseignement, 
        titleDeOffre,
        nomDeEntreprise, 
        modalSuppressionVisible,
        isFicheDetailDemandeDeStage } = defineProps({
  titleDuStage: String,
  prenomDuStagiaire: String,
  monDuStagiaire: String,
  etablissementEnseignement: String,
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
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Assure que la modal soit au premier plan */
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  max-width: 90%; /* Réduire la largeur du modal */
  width: auto; /* Ajuster la largeur automatiquement */
  margin: 0 auto; /* Ajouter une marge automatique horizontale */
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.donnees p {
  margin-bottom: 30px;
  color: rgb(153 27 27);
  font-size: 20px;
}

.donnees dl {
  margin-bottom: 20px;
}

.donnees dl div {
  margin-bottom: 10px;
}

.donnees dt {
  font-weight: bold;
  color: #666;
}

.donnees dd {
  margin-left: 10px;
  color: #333;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.cancel-button,
.delete-button {
  background-color: transparent;
  border: none;
  color: #333;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.cancel-button:hover,
.delete-button:hover {
  background-color: #eee;
  color: #555;
}

.delete-button {
  background-color: rgb(153 27 27);
  color: white;
}

.delete-button:hover {
  background-color: rgb(153 27 27);
}
</style>
