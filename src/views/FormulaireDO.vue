<template>
  <main>
    <!-- Entête -->
    <h1>Ajouter une demande</h1>
    <h1>Offre de stage</h1>


    <!-- Formulaire  -->
    <form class="max-w-2xl mx-auto mt-10" @submit.prevent="soumettreFormulaireDO">

      <div class="max-w-2xl mx-auto mt-10">
        <div>
          <button class="bg-blue-500 text-white px-4 py-2 m-1 rounded">Annuler</button>
          <button class="bg-blue-500 text-white px-4 py-2 m-1 rounded"><img src="../assets/icons/update-disk-30.png"
              alt="Image de disquette">Sauvegarder</button>
        </div>

        <label for="titre" class="block mb-2">Titre: </label>
        <input id="titre" v-model="titre" type="text" class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>

        <label for="entreprises" class="block mb-2">Entreprise: </label>
        <Select id="entreprises" v-model="entreprises" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>
      </div>



      <div>
        <label for="nomComplet" class="block mb-2">Nom et prénom</label>
        <input id="nomComplet" v-model="nomComplet" class="border border-gray-300 p-2 w-full mb-6"></input>
        <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


        <label for="presentation" class="block mb-2">Présensention</label>
        <textarea id="presentation" v-model="presentation" class="border border-gray-300 p-2 w-full mb-6"></textarea>
        <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


        <div>
          <label for="programme" class="block mb-2">Programme de formation</label>
          <input id="programme" v-model="programme" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


          <label for="exigences" class="block mb-2">Exigences</label>
          <textarea id="exigences" v-model="exigences" class="border border-gray-300 p-2 w-full mb-6"></textarea>
          <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


          <label for="etablissement" class="block mb-2">Établissement scolaire</label>
          <input id="etablissement" v-model="etablissement" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


          <label for="secteurActivite" class="block mb-2">Secteur d'activité</label>
          <Select id="secteurActivite" v-model="secteurActivite" type="text"
            class="border border-gray-300 p-2 w-full mb-6">
            <option value="option1"></option>
            <option value="option2">Technologie de l'information</option>
            <option value="option3">Santé</option>
            <option value="option4">Finance</option>
            <option value="option5">Éducation</option>
            <option value="option6">Transport et logistique</option>
            <option value="option7">Immoblier</option>
            <option value="option8">Tourisme</option>
            <option value="option9">Manufacture</option>
            <option value="option10">Énergie</option>
            <option value="option11">Commerce au détail</option>
          </select>
          <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>
        </div>

        <label for="ville" class="block mb-2">Ville</label>
        <input id="ville" v-model="ville" class="border border-gray-300 p-2 w-full mb-6"></input>
        <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


        <label for="region" class="block mb-2">Région</label>
        <Select id="region" v-model="region" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <option value="option1"></option>
          <option value="option2">Québec</option>
          <option value="option3">Trois-Rivière</option>
          <option value="option4">Montréal</option>
          <option value="option5">Sherbrooke</option>
          <option value="option6">Gatineau</option>
        </select>
        <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>
      </div>

      <label for="competences" class="block mb-2">Compétences</label>
      <textarea id="competences" v-model="competences" class="border border-gray-300 p-2 w-full mb-6"></textarea>
      <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


      <h2 class="p-2 w-full mb-6">Information sur le stage</h2>
      <label for="typeStage" class="block mb-2">Type de stage</label>
      <select id="typeStage" v-model="typeStage" class="border border-gray-300 p-2 w-full mb-6">
        <option value="option1"></option>
        <option value="option2">Temps plein</option>
        <option value="option3">Temps partiel</option>
      </select>
      <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


      <label for="dateDebut" class="block mb-2">Date de début</label>
      <input id="dateDebut" v-model="dateDebut" type="date" class="border border-gray-300 p-2 w-full mb-6">
      <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


      <label for="heuresSemaine" class="block mb-2">Nombre d'heures par semaine</label>
      <input id="heuresSemaine" v-model="heuresSemaine" type="number" class="border border-gray-300 p-2 w-full mb-6">
      <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


      <label for="dateFin" class="block mb-2">Date de fin</label>
      <input id="dateFin" v-model="dateFin" type="date" class="border border-gray-300 p-2 w-full mb-6">
      <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


      <h2 class="p-2 w-full mb-2">Rémumération</h2>
      <input id="aDiscuter" v-model="aDiscuter" type="checkbox" class="mr-2">
      <label for="aDiscuter">À discuter</label><br>
      <input id="remunere" v-model="remunere" type="checkbox" class="mr-2">
      <label for="remunere">Stage rémunéré</label><br>
      <input id="nonRemunere" v-model="nonRemunere" type="checkbox" class="mr-2">
      <label for="nonRemunere">Stage non rémunéré</label><br>
      <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


      <label for="infoSupplementaire" class="p-2 w-full mb-2">Information supplémentaire</label>
      <textarea id="infoSupplementaire" v-model="infoSupplementaire"
        class="border border-gray-300 p-2 w-full mb-6"></textarea>
        <span v-if="!formulaireValide" class="text-red-700">{{ erreurFormulaire }}</span>


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
import { ref } from 'vue'
// Création des variables réactives 
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
const formulaireValide = ref(true);
const erreurFormulaire = ref('')




//Fonction pour valider les champs du formulaire
const soumettreFormulaireDO = () => {
  if (
    // Vérification des champs obligatoires
    titre.value.trim() === '' ||
    nomComplet.value.trim() === '' ||
    presentation.value.trim() === '' ||
    programme.value.trim() === '' ||
    competences.value.trim() === '' ||
    etablissement.value.trim() === '' ||
    ville.value.trim() === '' ||
    dateDebut.value === '' ||
    heuresSemaine.value === '' ||
    dateFin.value === '' ||
    secteurActivite.value === 'option1' ||
    region.value === 'option1'
  ) {
    formulaireValide.value = false;
    erreurFormulaire.value = "Le champ est obligatoire.";
  } else if (
    // Vérification de la longueur des champs
    titre.value.trim() !== '' && (titre.value.length < 5 || titre.value.length > 100) ||
    nomComplet.value.trim() !== '' && (nomComplet.value.length < 5 || nomComplet.value.length > 100) ||
    presentation.value.trim() !== '' && (presentation.value.length < 5 || presentation.value.length > 100) ||
    programme.value.trim() !== '' && (programme.value.length < 5 || programme.value.length > 100) ||
    competences.value.trim() !== '' && (competences.value.length < 5 || competences.value.length > 100) ||
    etablissement.value.trim() !== '' && (etablissement.value.length < 5 || etablissement.value.length > 100) ||
    ville.value.trim() !== '' && (ville.value.length < 5 || ville.value.length > 100) ||
    competences.value.trim() !== '' && (competences.value.length < 5 || competences.value.length > 100) ||
    !/^\d+$/.test(heuresSemaine.value)
  ) {
    formulaireValide.value = false;
    erreurFormulaire.value = "Le champ doit avoir entre 5 et 100 caractères.";
    if (!/^\d+$/.test(heuresSemaine.value)) {
      erreurFormulaire.value = "Seuls les chiffres sont autorisés dans ce champs.";
    }
  } else if (
    (aDiscuter.value && (remunere.value || nonRemunere.value)) ||
    (remunere.value && (aDiscuter.value || nonRemunere.value)) ||
    (nonRemunere.value && (aDiscuter.value || remunere.value))
  ) {
    formulaireValide.value = false;
    erreurFormulaire.value = "Veuillez sélectionner une seule option de rémunération.";
  } else {
    formulaireValide.value = true;
    erreurFormulaire.value = '';
  }
}












</script>

<style></style>