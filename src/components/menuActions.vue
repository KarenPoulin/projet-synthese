<template>


  <header class="bg-white ml-0.5">
    <!-- Icône Menu -->
    <div class="flex flex-col md:flex-row items-center justify-between h-auto md:h-24 p-5">

      <div class="flex items-center px-3 py-2 rounded text-gray-800 border-gray-800 mb-4 md:mb-0">
        <svg class="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Icône "bars-sort" -->
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5 4h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0 6h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0 6h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z"
            fill="currentColor" />
        </svg>
      </div>


      <nav class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3 mb-4 md:mb-0">
        <!-- Bouton "Ajouter une offre de stage" -->
        <button @click="goToFormDO('offer')"
          class="ripple inline-block rounded border border-red-800 bg-white px-2 py-1 text-center text-xs font-medium leading-6 text-red-800 shadow transition hover:bg-red-50 hover:shadow-lg focus:outline-none">
          <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
            </path>
          </svg>
          Ajouter une offre de stage
        </button>


        <!-- Bouton "Ajouter une demande de stage" -->
        <button @click="goToFormDO('request')"
          class="ripple inline-block rounded border border-yellow-600 bg-white px-2 py-1 text-center text-xs font-medium leading-6 text-yellow-600 shadow transition hover:bg-yellow-50 hover:shadow-lg focus:outline-none">
          <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
            </path>
          </svg>
          Ajouter une demande de stage
        </button>


        <!-- Bouton "Ajouter une entreprise" -->
        <button
          class="ripple inline-block rounded border border-blue-400 bg-white px-2 py-1 text-center text-xs font-medium leading-6 text-blue-400 shadow transition hover:bg-blue-50 hover:shadow-lg focus:outline-none">
          <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Ajouter une entreprise
        </button>
        <!-- Bouton "Ajouter un candidat" -->

        <RouterLink to="/app/formulairecandidat">
          <button
            class="ripple inline-block rounded border border-fuchsia-800 bg-white px-2 py-1 text-center text-xs font-medium leading-6 text-fuchsia-800 shadow transition hover:bg-fuchsia-50 hover:shadow-lg focus:outline-none">
            <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
              </path>
            </svg>
            Ajouter un candidat
          </button>
        </RouterLink>
      </nav>


      <!-- Carte utilisateur -->
      <div class="flex flex-col md:flex-row items-center space-x-2">
        <!-- Icône utilisateur -->
        <img src="../assets/icons/candidate-48.png" alt="Photo de profil" class="h-8 w-8 rounded-full bg-gray-300" />
        <div>
          <p class="text-xs text-black">{{ adminStore.state.nomEtPrenom }}</p>
          <p class="text-xs text-gray-600">Admin</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { useAdminStore } from '@/stores/admin';

const adminStore = useAdminStore();

// Fonction pour émettre les routes dynamiques vers le formulaireDO selon si c'est une offre ou un demande
const router = useRouter();
const goToFormDO = type => {
  router.push({ name: 'formulairedo', params: { type } })
}

</script>
