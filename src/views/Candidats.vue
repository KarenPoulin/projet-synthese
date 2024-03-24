<template>
      <h1 class="text-5xl font-bold mb-20 text-neutral-500">Candidats</h1>
      <div>
        <button @click="goToAddForm" class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">Ajouter un candidat</button>
        <div class="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 gap-10 mt-16">
          <template v-if="allCandidatesResults" v-for="candidat in allCandidatesResults" :key="candidat._id">
              <RouterLink :to="{name:'fichedetailcandidat', params:{id: candidat._id}}">
                <carteCandidatEtEntreprise :candidate="candidat" :isCandidat="true"/>
              </RouterLink>
          </template>
        </div>
      </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { RouterLink } from 'vue-router';
  import { useRouter } from 'vue-router'

  import carteCandidatEtEntreprise from '../components/carteCandidatEtEntreprise.vue'
  import { useAllCandidates } from '@/composables/candidats';

  const {allCandidatesResults, getAllCandidates} = useAllCandidates();

  const router = useRouter()
  const goToAddForm = type => {
    router.push({ name: 'formulaireCE', params: { type } })
  }

  onMounted(async () => {
    await getAllCandidates();
    console.log(allCandidatesResults);
  })
  </script>