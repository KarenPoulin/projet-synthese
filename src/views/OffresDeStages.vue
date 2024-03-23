<template>
  <h1>Offres de stage</h1>
  <div class="flex">
    <button class="my-3 bg-red-800 text-white px-4 py-2  rounded hover:bg-red-900" @click="goToFormDO('offer')">Ajouter
      une offre</button>
  </div>




</template>

<script setup>
import { useRouter } from 'vue-router'

// Fonction pour émettre les routes dynamiques vers le formulaireDO pour une offre
const router = useRouter()
const goToFormDO = type => {
  router.push({ name: 'formulairedo', params: { type } })
}

</script>