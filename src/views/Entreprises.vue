<template>
      <h1 class="text-5xl font-bold mb-20 text-neutral-500">Entreprises</h1>
      <div>
        <RouterLink to="/app/formulaireCandidat" class="bg-blue-400 hover:bg-blue-500 hover:text-white text-gray-600 text-sm font-bold p-4 rounded-xl mb-16">Ajouter une entreprise</RouterLink>
        <div class="grid grid-cols-3 grid-rows-4 gap-12 mt-16">
          <carteCandidatEtEntreprise :isEntreprise="true"/>
          <carteCandidatEtEntreprise :isEntreprise="true"/>
          <carteCandidatEtEntreprise :isEntreprise="true"/>
        </div>
      </div>
      
  </template>
  
  <script setup>
import carteCandidatEtEntreprise from '../components/carteCandidatEtEntreprise.vue'

  
  </script>
  