<template>
  <div :class="{ 'modal': true, 'modal--visible': etatDuModal }">
    <div class="modal-content">
      <span class="close" @click="modalSuppressionFermeture">&times;</span>
      <p>Voulez-vous vraiment supprimer cette entrée ?</p>
      <button @click="annulerSuppression">Annuler</button>
      <button @click="confirmerSuppression">Supprimer</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const { etatDuModal } = defineProps(['etatDuModal'])
const { emit } = defineEmits(['suppressionAnnulee', 'confirmationSuppression'])

const modalSuppressionFermeture = () => {
  emit('suppressionAnnulee')
}

const annulerSuppression = () => {
  modalSuppressionFermeture();
}

const confirmerSuppression = () => {
  modalSuppressionFermeture();
  emit('confirmationSuppression')
}
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal--visible {
  display: block;
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
