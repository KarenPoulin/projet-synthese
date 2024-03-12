<template>
    <main>
      <h1>Ajouter une demande</h1>
      <h1>Offre de stage</h1>
  
      <div>
  
      </div>
  
      <div class="max-w-2xl mx-auto mt-10">
        <label for="titre" class="block mb-2">Titre</label>
        <input id="titre" type="text" class="border border-gray-300 p-2 w-full mb-6">
      </div>
  
  
      <form class="max-w-2xl mx-auto mt-10">
  
        <label for="nomComplet" class="block mb-2">Nom et prénom</label>
        <input id="nomComplet" class="border border-gray-300 p-2 w-full mb-6"></input>
  
        <label for="presentation" class="block mb-2">Présensention</label>
        <textarea id="presentation" class="border border-gray-300 p-2 w-full mb-6"></textarea>
  
        <div>
          <label for="programme" class="block mb-2">Programme de formation</label>
          <input id="programme" type="text" class="border border-gray-300 p-2 w-full mb-6">
  
          <label for="etablissement" class="block mb-2">Établissement scolaire</label>
          <Select id="etablissement" type="text" class="border border-gray-300 p-2 w-full mb-6">
            <option>Sélectionner une option</option>
            <option>Développement web</option>
            <option>Design et intération web</option>
            <option>Comptabilité et gestion</option>
            <option>Courtage immobilier</option>
            <option>Génie civil</option>
          </select>
  
          <label for="ville" class="block mb-2">Ville</label>
          <input id="ville" class="border border-gray-300 p-2 w-full mb-6"></input>
  
          <label for="region" class="block mb-2">Région</label>
          <Select id="region" type="text" class="border border-gray-300 p-2 w-full mb-6">
            <option>Sélectionner une option</option>
            <option>Québec</option>
            <option>Trois-Rivière</option>
            <option>Montréal</option>
            <option>Sherbrooke</option>
            <option>Gatineau</option>
          </select>
        </div>
  
        <label for="competences" class="block mb-2">Compétences</label>
        <textarea id="competences" class="border border-gray-300 p-2 w-full mb-6"></textarea>
  
        <h2 class="p-2 w-full mb-6">Information sur le stage</h2>
        <label for="typeStage" class="block mb-2">Type de stage</label>
        <select id="typeStage" class="border border-gray-300 p-2 w-full mb-6">
          <option value="option1">Sélectionner une option</option>
          <option value="option2">Temps plein</option>
          <option value="option3">Temps partiel</option>
        </select>
  
        <label for="dateDebut" class="block mb-2">Date de début</label>
        <input id="dateDebut" type="date" class="border border-gray-300 p-2 w-full mb-6">
  
        <label for="heuresSemaine" class="block mb-2">Nombre d'heures par semaine</label>
        <input id="heuresSemaine" type="number" class="border border-gray-300 p-2 w-full mb-6">
  
        <label for="dateFin" class="block mb-2">Date de fin</label>
        <input id="dateFin" type="date" class="border border-gray-300 p-2 w-full mb-6">
  
        <h2 class="p-2 w-full mb-2">Rémumération</h2>
        <input id="remunerationADiscuter" type="checkbox" class="mr-2">
        <label for="remunerationADiscuter">À discuter</label><br>
        <input id="remunerationRemunere" type="checkbox" class="mr-2">
        <label for="remunerationRemunere">Stage rémunéré</label><br>
        <input id="remunerationNonRemunere" type="checkbox" class="mr-2">
        <label for="remunerationNonRemunere">Stage non rémunéré</label><br>
  
        <h2 class="p-2 w-full mb-2">Information supplémentaire</h2>
        <textarea id="comptences" class="border border-gray-300 p-2 w-full mb-6"></textarea>
  
        <div>
          <button class="bg-blue-500 text-white px-4 py-2 m-1 rounded">Annuler</button>
          <button class="bg-blue-500 text-white px-4 py-2 m-1 rounded"><img src="../src/assets/icons/update-disk-30.png"alt="">Sauvegarder</button>
        </div>
  
  
      </form>
  
  
  
    </main>
  </template>
  
  <script setup>
  
  </script>

  <style>

 </style>