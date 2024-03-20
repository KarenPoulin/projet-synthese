<template>
      <h1 class="text-5xl font-bold mb-20 text-neutral-500">Candidats</h1>
      <div>
        <RouterLink to="/app/formulaireCandidat" class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">Ajouter un candidat</RouterLink>
        <div class="grid grid-cols-4 grid-rows-4 gap-10 mt-16">
<!--           <RouterLink>
            <carteCandidatEtEntreprise :isCandidat="true"/>
          </RouterLink>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/>
          <carteCandidatEtEntreprise :isCandidat="true"/> -->
          <template v-for="candidat in allCandidatesResults" :key="candidat._id">
              <carteCandidatEtEntreprise :candidate="candidat" :isCandidat="true"/>
          </template>
        </div>
      </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import carteCandidatEtEntreprise from '../components/carteCandidatEtEntreprise.vue'
  import { useAllCandidates } from '@/composables/candidats';

  const {allCandidatesResults, getAllCandidates} = useAllCandidates();

  onMounted(() => {
    getAllCandidates();
  })
  </script>