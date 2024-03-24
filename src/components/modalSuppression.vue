<template>
  <div v-if="modalSuppressionVisible" class="modal">
    <div class="modal-content">
      <span class="close" @click="annulerSuppression">&times;</span>
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
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  max-width: 600px; 
  margin: auto;
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
