<template>
    <main class="pl-40 pr-40 pt-24 pb-24">
      <h1 class="text-5xl font-bold mb-20">Candidats</h1>
      <div>
        <button class="bg-fuchsia-800 text-white text-sm font-bold p-4 rounded-xl mb-16">Ajouter un candidat</button>
        <div class="grid grid-cols-3 grid-rows-4 gap-12">
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import carteCandidatEtEntreprise from '../components/carteCandidatEtEntreprise.vue'
  </script>