<template>
    <div>
      <span class="close" @click="annulerSuppression">&times;</span>
      <p>Voulez-vous vraiment supprimer cette entrée ?</p>
      <div class="donnees">
        <h4>{{ title }}</h4>
        <h4>{{ firstName }} {{ lastName }}</h4>
      </div>
      <button @click="annulerSuppression">Annuler</button>
      <button @click="confirmerSuppression">Supprimer</button>
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
