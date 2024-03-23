<template>
  <h1>Demande de stage</h1>
  <div class="flex">
    <RouterLink class="my-3  bg-teal-500 text-white px-4 py-2  rounded hover:bg-teal-600" to="/app/formulairedemande">
      Ajouter une demande
    </RouterLink>
  </div>

  <RouterLink to="/app/formulaireDo"
    class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-consulter fa fa-check"></i>
  </RouterLink>
  <RouterLink to="/app/formulaireDo"
    class="bg-fuchsia-800 hover:bg-fuchsia-900 text-white text-sm font-bold p-4 rounded-xl mb-16">
    <i class="ficheDetaillee__icône-editer fas fa-edit"></i>
  </RouterLink>
</template>

<script setup>
</script>
