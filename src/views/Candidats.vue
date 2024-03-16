<template>
    <main>
      <h1 class="text-4xl font-bold mb-20">Candidats</h1>
      <div>
        <button class="bg-fuchsia-800 text-white text-xs font-bold p-4 rounded-xl mb-16">Ajouter un candidat</button>
        <carteCandidatEtEntreprise :isCandidat="true"/>
      </div>
    </main>
  </template>
  
  <script setup>
  import carteCandidatEtEntreprise from '../components/carteCandidatEtEntreprise.vue'
  </script>