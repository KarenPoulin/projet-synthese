<template>
  <main>
    <!-- Entête -->
    <h1>Ajouter une demande</h1>
    <h1>Offre de stage</h1>


    <!-- Formulaire  -->
    <form class="max-w-2xl mx-auto mt-10" @submit.prevent="validationFormulaire">

      <div class="max-w-2xl mx-auto mt-10">
        <div>
          <button class="bg-blue-500 text-white px-4 py-2 m-1 rounded">Annuler</button>
          <button class="bg-blue-500 text-white px-4 py-2 m-1 rounded"><img src="../assets/icons/update-disk-30.png"
              alt="Image de disquette">Sauvegarder</button>
        </div>

        <label for="titre" class="block mb-2">Titre</label>
        <input id="titre" v-model="titre" type="text" class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="erreurs.titre" class="text-red-500">{{ erreurs.titre}}</span>
      </div>



      <div>
        <label for="nomComplet" class="block mb-2">Nom et prénom</label>
        <input id="nomComplet" v-model="nomComplet" class="border border-gray-300 p-2 w-full mb-6"></input>
        <span v-if="erreurs.nomComplet" class="text-red-500">{{ erreurs.nomComplet }}</span>

        <label for="presentation" class="block mb-2">Présensention</label>
        <textarea id="presentation" v-model="presentation" class="border border-gray-300 p-2 w-full mb-6"></textarea>
        <span v-if="erreurs.presentation" class="text-red-500">{{ erreurs.presentation }}</span>

        <div>
          <label for="programme" class="block mb-2">Programme de formation</label>
          <input id="programme" v-model="programme" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <span v-if="erreurs.programme" class="text-red-500">{{ erreurs.programme }}</span>

          <label for="etablissement" class="block mb-2">Établissement scolaire</label>
          <input id="etablissement" v-model="etablissement" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <span v-if="erreurs.etablissement" class="text-red-500">{{ erreurs.etablissement }}</span>

          <label for="secteurActivite" class="block mb-2">Secteur d'activité</label>
          <Select id="secteurActivite" v-model="secteurActivite" type="text"
            class="border border-gray-300 p-2 w-full mb-6">
            <option>Sélectionner une option</option>
            <option>Technologie de l'information</option>
            <option>Santé</option>
            <option>Finance</option>
            <option>Éducation</option>
            <option>Transport et logistique</option>
            <option>Immoblier</option>
            <option>Tourisme</option>
            <option>Manufacture</option>
            <option>Énergie</option>
            <option>Commerce au détail</option>
          </select>
        </div>

        <label for="ville" class="block mb-2">Ville</label>
        <input id="ville" v-model="ville" class="border border-gray-300 p-2 w-full mb-6"></input>
        <span v-if="erreurs.ville" class="text-red-500">{{ erreurs.ville }}</span>

        <label for="region" class="block mb-2">Région</label>
        <Select id="region" v-model="region" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <option>Sélectionner une option</option>
          <option>Québec</option>
          <option>Trois-Rivière</option>
          <option>Montréal</option>
          <option>Sherbrooke</option>
          <option>Gatineau</option>
        </select>
      </div>

      <label for="competences" class="block mb-2">Compétences</label>
      <textarea id="competences" v-model="competences" class="border border-gray-300 p-2 w-full mb-6"></textarea>
      <span v-if="erreurs.competences" class="text-red-500">{{ erreurs.competences }}</span>

      <h2 class="p-2 w-full mb-6">Information sur le stage</h2>
      <label for="typeStage" class="block mb-2">Type de stage</label>
      <select id="typeStage" v-model="typeStage" class="border border-gray-300 p-2 w-full mb-6">
        <option value="option1">Sélectionner une option</option>
        <option value="option2">Temps plein</option>
        <option value="option3">Temps partiel</option>
      </select>

      <label for="dateDebut" class="block mb-2">Date de début</label>
      <input id="dateDebut" v-model="dateDebut" type="date" class="border border-gray-300 p-2 w-full mb-6">
      <span v-if="erreurs.dateDebut" class="text-red-500">{{ erreurs.dateDebut }}</span>

      <label for="heuresSemaine" class="block mb-2">Nombre d'heures par semaine</label>
      <input id="heuresSemaine" v-model="heuresSemaine" type="number" class="border border-gray-300 p-2 w-full mb-6">
      <span v-if="erreurs.heuresSemaine" class="text-red-500">{{ erreurs.heuresSemaine}}</span>

      <label for="dateFin" class="block mb-2">Date de fin</label>
      <input id="dateFin" v-model="dateFin" type="date" class="border border-gray-300 p-2 w-full mb-6">
      <span v-if="erreurs.dateFin" class="text-red-500">{{ erreurs.dateFin}}</span>

      <h2 class="p-2 w-full mb-2">Rémumération</h2>
      <input id="aDiscuter" type="checkbox" class="mr-2">
      <label for="aDiscuter">À discuter</label><br>
      <input id="remunere" type="checkbox" class="mr-2">
      <label for="remunere">Stage rémunéré</label><br>
      <input id="nonRemunere" type="checkbox" class="mr-2">
      <label for="nonRemunere">Stage non rémunéré</label><br>

      <label for="infoSupplementaire" class="p-2 w-full mb-2">Information supplémentaire</label>
      <textarea id="infoSupplementaire" v-model="infoSupplementaire"
        class="border border-gray-300 p-2 w-full mb-6"></textarea>






      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="file_input_help" id="file_input" type="file">







      <div>
        <button class="bg-blue-500 text-white px-4 py-2 m-1 rounded">Annuler</button>
        <button class="bg-blue-500 text-white px-4 py-2 m-1 rounded"><img src="../assets/icons/update-disk-30.png"
            alt="Image de disquette">Sauvegarder</button>
      </div>

    </form>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue'
// Création des variables réactions 
const titre = ref('');
const nomComplet = ref('');
const presentation = ref('');
const programme = ref('');
const etablissement = ref('');
const secteurActivite = ref('');
const ville = ref('');
const region = ref('');
const competences = ref('');
const typeStage = ref('');
const dateDebut = ref('');
const heuresSemaine = ref('');
const dateFin = ref('');
const aDiscuter = ref('');
const remunere = ref('');
const nonRemunere = ref('');
const infoSupplementaire = ref('');

//Création des variables pour gérer les erreurs lorsque les champs restent vides
const erreursChampsVides = reactive({
  titre: '',
  nomComplet: '',
  presentation: '',
  programme: '',
  etablissement: '',
  secteurActivite: '',
  ville: '',
  region: '',
  competences: '',
  typeStage: '',
  dateDebut: '',
  heuresSemaine: '',
  dateFin: '',
/*   aDiscuter: '',
  remunere: '',
  nonRemunere: '', */
  infoSupplementaire: '',
})

// Fonction pour valider le formulaire 
function validationFormulaire() {
  const erreurs = [];
  const regexLettresSeulement = /^[\p{L} -]+$/u;

  if (!regexLettresSeulement.test(titre.value.trim())) {
    erreursChampsVides.titre('Le champ "Titre" est obligatoire.');
  }
  if (!regexLettresSeulement.test(nomComplet.value.trim())) {
    erreursChampsVides.nomComplet('Le champ "Nom et prénom" est obligatoire.');
  }
  if (presentation.value.trim() === '') {
    erreursChampsVides.presentation('Le champ "Présentation" est obligatoire.');
  }
  if (!regexLettresSeulement.test(programme.value.trim())) {
    erreursChampsVides.programme('Le champ "Programme de formation" est obligatoire.');
  }
  if (!regexLettresSeulement.test(etablissement.value.trim())) {
    erreursChampsVides.etablissement('Le champ "Établissement scolaire" est obligatoire.');
  }
 /*  if (secteurActivite.value.trim() === '') {
    erreurs.secteurActivite.value('Le champ "Secteur d\'activité" est obligatoire.');
  } */
  if (!regexLettresSeulement.test(ville.value.trim())) {
    erreursChampsVides.ville('Le champ "Ville" est obligatoire.');
  }
  /* if (region.value.trim() === '') {
    erreurs.region.value('Le champ "Région" est obligatoire.');
  } */
  if (!regexLettresSeulement.test(competences.value.trim())) {
    erreursChampsVides.competences('Le champ "Compétences" est obligatoire.');
  }
  if (typeStage.value.trim() === '') {
    erreursChampsVides.typeStage('Le champ "Type de stage" est obligatoire.');
  }
  if (dateDebut.value.trim() === '') {
    erreursChampsVides.dateDebut('Le champ "Date de début" est obligatoire.');
  }
  if (heuresSemaine.value.trim() === '') {
    erreursChampsVides.heuresSemaine('Le champ "Nombre d\'heures par semaine" est obligatoire.');
  }
  if (dateFin.value.trim() === '') {
    erreursChampsVides.dateFin('Le champ "Date de fin" est obligatoire.');
  }
/*   if (!aDiscuter.value && !remunere.value && !nonRemunere.value) {
    erreurs.('Au moins un des champs "Rémunération" doit être sélectionné.');
  } */
  if (infoSupplementaire.value.trim() === '') {
    erreursChampsVides.infoSupplementaire.value('Le champ "Information supplémentaire" est obligatoire.');
  }

  if (erreurs.length > 0) {
    // Afficher les erreurs ou les traiter comme nécessaire
    console.log('Erreurs de validation :', erreurs);
  } else {
    // Envoyer le formulaire ou effectuer d'autres actions si la validation réussit
    console.log('Formulaire valide. Traitement en cours...');
  }
}




</script>

<style></style>