<template>
    <main class="pl-32 pt-20 pb-20">
      <h1 class="text-5xl font-bold mb-20 text-neutral-500">Entreprises</h1>
      <div>
        <button class="bg-blue-400 hover:bg-blue-500 hover:text-white text-gray-600 text-sm font-bold p-4 rounded-xl mb-16">Ajouter une entreprise</button>
        <div class="grid grid-cols-2 grid-rows-4 gap-12">
          <carteCandidatEtEntreprise :isEntreprise="true"/>
          <carteCandidatEtEntreprise :isEntreprise="true"/>
          <carteCandidatEtEntreprise :isEntreprise="true"/>
          <carteCandidatEtEntreprise :isEntreprise="true"/>
          <carteCandidatEtEntreprise :isEntreprise="true"/>
          <carteCandidatEtEntreprise :isEntreprise="true"/>
          <carteCandidatEtEntreprise :isEntreprise="true"/>
          <carteCandidatEtEntreprise :isEntreprise="true"/>
        </div>
      </div>
      
    </main>
  </template>
  
  <script setup>
import carteCandidatEtEntreprise from '../components/carteCandidatEtEntreprise.vue'

  
  </script>
  