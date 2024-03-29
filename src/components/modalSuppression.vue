<template>
  <div class="modal-container">
    <div class="modal-content">
      <p>Voulez-vous vraiment supprimer cette entrée ?</p>
      <div class="donnees">
        <h4>{{ title }}</h4>
        <h4>{{ firstName }} {{ lastName }}</h4>
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

const { title, firstName, lastName, modalSuppressionVisible } = defineProps({
  modalSuppressionVisible: Boolean,
  title: String,
  firstName: String,
  lastName: String
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
