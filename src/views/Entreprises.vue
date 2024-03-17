<template>
    <main class="pl-40 pr-40 pt-24 pb-24">
      <h1 class="text-5xl font-bold mb-20">Entreprises</h1>
      <div>
        <button class="bg-blue-400 text-white text-sm font-bold p-4 rounded-xl mb-16">Ajouter une entreprise</button>
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
  