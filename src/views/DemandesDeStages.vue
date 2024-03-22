<template>
  <RouterLink to="/app/formulaireDo" class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-consulter fa fa-check"></i>
  </RouterLink>
  <RouterLink to="/app/formulaireDo" class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-editer fas fa-edit"></i>
  </RouterLink>
  <ficheDetailler
    :isPageDetaillerDemandeDeStage="true"
    :isPageDetaillerDemandeOffre="false"
    :isPageDetaillerCandidat="false">
  </ficheDetailler>
</template>

<script setup>
import ficheDetailler from '@/components/ficheDetailler.vue';
</script>
