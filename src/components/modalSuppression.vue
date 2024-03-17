<template>
  <div>
    <div class="modal-content">
      <img src="../assets/icons/detail-close-24.png" alt="" class="close" @click="modalFermetureIcone">
      <p>Voulez-vous vraiment supprimer cette entrée ?</p>
      <div class="donnees">
        <h4>{{ title }}</h4>
        <h4>{{ firstName }} {{ lastName }}</h4>
      </div>
      <button @click="annulerSuppression">Annuler</button>
      <button @click="confirmerSuppression">Supprimer</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const { etatDuModal, title, firstName, lastName } = defineProps(['etatDuModal', 'title', 'firstName', 'lastName'])
const  emit  = defineEmits(['suppressionAnnuleeIcone', 'suppressionAnnulee', 'confirmationSuppression'])

const modalFermetureIcone = () => {
  emit('suppressionAnnuleeIcone')
}

const annulerSuppression = () => {
  modalFermetureIcone();
  emit('suppressionAnnulee')
}

const confirmerSuppression = () => {
  modalFermetureIcone();
  emit('confirmationSuppression')
}
</script>

<style scoped>

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-width: 600px; 
}

.close {
  font-size: 24px;
}

.donnees {
  margin-top: 20px;
}

h4 {
  margin: 5px 0;
  font-size: 18px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
  margin-right: 15px;
}

button:first-of-type {
  background-color: #ddd;
}

button:last-of-type {
  background-color: #ff5c5c;
  color: #fff;
}

button:last-of-type:hover {
  background-color: rgb(126, 16, 16);;
}
</style>
