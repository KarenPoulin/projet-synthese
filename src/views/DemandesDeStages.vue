<template>
  <h1>Demande de stage</h1>
  <div class="flex">
    <button class="my-3  bg-teal-500 text-white px-4 py-2  rounded hover:bg-teal-600" @click="goToFormDO('request')">
      Ajouter une demande
    </button>
  </div>

  <RouterLink to="/app/formulaireDo"
    class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-consulter fa fa-check"></i>
  </RouterLink>
  <RouterLink to="/app/formulaireDo"
    class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-editer fas fa-edit"></i>
  </RouterLink>
</template>

<script setup>
import { useRouter } from 'vue-router'

// Fonction pour émettre les routes dynamiques vers le formulaireDO pour une demande
const router = useRouter()
const goToFormDO = type => {
  router.push({ name: 'formulairedo', params: { type } })
}
</script>
