<template>
  <div>
    <div class="modal-content">
      <span class="close" @click="modalFermetureIcone">&times;</span>
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
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
