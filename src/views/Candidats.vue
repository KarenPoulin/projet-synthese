<template>
      <h1 class="text-5xl font-bold mb-20 text-neutral-500">Candidats</h1>
      <div>
        <RouterLink to="/app/formulaireCandidat" class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">Ajouter un candidat</RouterLink>
        <div class="grid grid-cols-3 grid-rows-4 gap-10 mt-16">
          <carteCandidatEtEntreprise :isCandidat="true"/>
        </div>
      </div>
  </template>
  
  <script setup>
  import carteCandidatEtEntreprise from '../components/carteCandidatEtEntreprise.vue'
  </script>