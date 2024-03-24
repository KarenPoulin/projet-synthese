<template>
      <h1 class="text-5xl font-bold mb-20 text-neutral-500">Entreprises</h1>
      <div>
        <button  @click="goToAddForm" class="bg-blue-400 hover:bg-blue-500 hover:text-white text-gray-600 text-sm font-bold p-4 rounded-xl">Ajouter une entreprise</button>
        <div class="grid grid-cols-3 grid-rows-4 gap-12 mt-16">
          <template v-if="allEnterprisesResults" v-for="enterprise in allEnterprisesResults" :key="enterprise._id">
            <RouterLink :to="{name:'fichedetailentreprise', params:{id: enterprise._id}}">
                <carteCandidatEtEntreprise :enterprise="enterprise" :isEntreprise="true"/>
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
import { useAllEnterprises } from '@/composables/entreprises';

const {allEnterprisesResults, getAllEnterprises} = useAllEnterprises();

const router = useRouter()
  const goToAddForm = type => {
    router.push({ name: 'formulaireCE', params: { type } })
  }


onMounted(async () => {
  await getAllEnterprises();
  console.log(allEnterprisesResults);
})

  
</script>
  