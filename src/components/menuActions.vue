<template>
    <nav class="flex items-center justify-between bg-gray-800 p-4">
  <!-- Icône Menu -->
  <div>
    <svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" fill="currentColor" />
    </svg>
  </div>

  <!-- Boutons d'actions -->
  <div class="flex items-center space-x-4">
    <!-- Bouton "Ajouter une offre de stage" -->
    <button class="ripple inline-block rounded border border-red-800 bg-white px-2 py-1 text-center text-xs font-medium leading-6 text-red-800 shadow transition hover:bg-red-100 hover:shadow-lg focus:outline-none">
      <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
      Ajouter une offre de stage
    </button>

    <!-- Autres boutons d'action similaires -->
    <button class="ripple inline-block rounded border border-yellow-600 bg-white px-2 py-1 text-center text-xs font-medium leading-6 text-yellow-600 shadow transition hover:bg-yellow-600 hover:shadow-lg focus:outline-none">
      <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
      Ajouter une demande de stage
    </button>
    <button class="ripple inline-block rounded border border-blue-400 bg-white px-2 py-1 text-center text-xs font-medium leading-6 text-blue-400 shadow transition hover:bg-blue-400 hover:shadow-lg focus:outline-none">
      <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
      Ajouter une entreprise
    </button>
    <button class="ripple inline-block rounded border border-fuchsia-800 bg-white px-2 py-1 text-center text-xs font-medium leading-6 text-fuchsia-800 shadow transition hover:bg-fuchsia-800 hover:shadow-lg focus:outline-none">
      <svg class="mr-1 inline-block h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
      Ajouter un candidat
    </button>
  </div>

  <!-- Carte utilisateur -->
  <div class="flex items-center space-x-4">
    <div>
      <p class="text-xs text-white">John Doe</p>
      <p class="text-xs text-gray-50">Amin</p>
    </div>
    <!-- Photo de profil (image codée en dur) -->
    <img src="../assets/icons/candidate-48.png" alt="Photo de profil" class="h-8 w-8 rounded-full bg-gray-300" />
  </div>
</nav>









</template>

<script setup>

</script>