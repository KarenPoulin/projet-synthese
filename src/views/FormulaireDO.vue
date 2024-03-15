<template>
  <main>
    <!-- Entête -->
    <h1>Ajouter une demande</h1>
    <h1>Offre de stage</h1>


    <!-- Formulaire  -->
    <form class="max-w-2xl mx-auto mt-10" @submit="submitRequest">

      <div class="max-w-2xl mx-auto mt-10">
        <div class="flex justify-end">
          <button class="bg-neutral-300  text-white px-4 py-2 m-1 rounded" @click="cancelRequest">Annuler</button>
          <button class="bg-teal-500  text-white px-4 py-2 m-1 rounded">Sauvegarder</button>
        </div>

        <label for="title" class="block mb-2">Titre: </label>
        <input id="title" v-model="formFieldsLinkedWithApi.title" @input="validateInput('title')" type="text"
          class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="fieldsToValidate.title !== ''" class="pt-2 text-xs text-red-700">{{ fieldsToValidate.title }}</span>



        <!-- 
        <label for="enterprise" class="block mb-2">Entreprise: </label>
        <Select id="enterprise" v-model="enterprise" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select> -->

      </div>



      <div>
        <label for="nomComplet" class="block mb-2">Nom et prénom</label>
        <input id="nomComplet" v-model="formFieldsLinkedWithApi.nomComplet" @input="validateInput('nomComplet')"
          class="border border-gray-300 p-2 w-full mb-6"></input>
        <span v-if="fieldsToValidate.nomComplet !== ''" class="pt-2 text-xs text-red-700">{{ fieldsToValidate.nomComplet
          }}</span>



        <label for="description" class="block mb-2">Présensention</label>
        <textarea id="description" v-model="formFieldsLinkedWithApi.description" @input="validateInput('description')"
          class="border border-gray-300 p-2 w-full mb-6"></textarea>
        <span v-if="fieldsToValidate.description !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.description }}</span>
      </div>


      <div>
        <label for="programme" class="block mb-2">Programme de formation</label>
        <input id="programme" v-model="formFieldsLinkedWithApi.programme" @input="validateInput('programme')"
          type="text" class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="fieldsToValidate.programme !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.programme }}</span>



        <!--        <label for="requiredSkills" class="block mb-2">Exigences</label>
          <textarea id="requiredSkills" v-model="requiredSkills" class="border border-gray-300 p-2 w-full mb-6"></textarea> -->



        <label for="etablissement" class="block mb-2">Établissement scolaire</label>
        <input id="etablissement" v-model="formFieldsLinkedWithApi.etablissement"
          @input="validateInput('etablissement')" type="text" class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="fieldsToValidate.etablissement !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.etablissement }}</span>


        <label for="region" class="block mb-2">Secteur d'activité</label>
        <select id="activitySector" v-model="formFieldsLinkedWithApi.activitySector"
          @onchange="validateSelect(formFieldsLinkedWithApi.activitySector, 'activitySector')"
          class="border border-gray-300 p-2 w-full mb-6">
          <option value="">Sélectionner une option</option>
          <option value="Technologie de l'information">Technologie de l'information</option>
          <option value="Santé">Santé</option>
          <option value="Finance">Finance</option>
          <option value="Éducation">Éducation</option>
          <option value="Transport et logistique">Transport et logistique</option>
          <option value="Immoblier">Immoblier</option>
          <option value="Tourisme">Tourisme</option>
          <option value="Manufacture">Manufacture</option>
          <option value="Énergie">Énergie</option>
          <option value="Commerce au détail">Commerce au détail</option>
        </select>
        <span v-if="fieldsToValidate.activitySector !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.activitySector }}</span>


        <label for="city" class="block mb-2">Ville</label>
        <input id="city" v-model="formFieldsLinkedWithApi.city" @input="validateInput('city')"
          class="border border-gray-300 p-2 w-full mb-6"></input>
        <span v-if="fieldsToValidate.city !== ''" class="pt-2 text-xs text-red-700">{{ fieldsToValidate.city }}</span>




        <label for="region" class="block mb-2">Région</label>
        <Select id="region"  v-model="formFieldsLinkedWithApi.region"
          @onchange="validateSelect(formFieldsLinkedWithApi.region, 'region')" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <option value="option1"></option>
          <option value="option2">Québec</option>
          <option value="option3">Trois-Rivière</option>
          <option value="option4">Montréal</option>
          <option value="option5">Sherbrooke</option>
          <option value="option6">Gatineau</option>
        </select>
        <span v-if="fieldsToValidate.region !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.region }}</span>
      </div>
      
      <label for="skills" class="block mb-2">Compétences</label>
      <textarea id="skills " v-model="formFieldsLinkedWithApi.skills" @input="validateInput('skills')"
        class="border border-gray-300 p-2 w-full mb-6"></textarea>
      <span v-if="fieldsToValidate.skills !== ''" class="pt-2 text-xs text-red-700">{{ fieldsToValidate.skills
        }}</span>



      <h2 class="p-2 w-full mb-6">Information sur le stage</h2>
      <label for="intershipType" class="block mb-2">Type de stage</label>
      <select id="intershipType"  v-model="formFieldsLinkedWithApi.internshipType"
          @onchange="validateSelect(formFieldsLinkedWithApi.internshipType, 'nternshipType')" type="text" class="border border-gray-300 p-2 w-full mb-6">class="border border-gray-300 p-2 w-full mb-6">
        <option value="option1"></option>
        <option value="option2">Temps plein</option>
        <option value="option3">Temps partiel</option>
      </select>
      <span v-if="fieldsToValidate.internshipType !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.internshipType }}</span>
  



      <label for="startDate" class="block mb-2">Date de début</label>
      <input id="startDate" v-model="startDate" type="date" class="border border-gray-300 p-2 w-full mb-6">



      <!--       <label for="weeklyWorkHours" class="block mb-2">Nombre d'heures par semaine</label>
      <input id="weeklyWorkHours" v-model="weeklyWorkHours" type="number"
        class="border border-gray-300 p-2 w-full mb-6"> -->



      <label for="endDate" class="block mb-2">Date de fin</label>
      <input id="endDate" v-model="endDate" type="date" class="border border-gray-300 p-2 w-full mb-6">



      <h2 class="p-2 w-full mb-2">Rémumération</h2>
      <input id="aDiscuter" v-model="aDiscuter" type="checkbox" class="mr-2">
      <label for="aDiscuter">À discuter</label><br>
      <input id="remunere" v-model="remunere" type="checkbox" class="mr-2">
      <label for="remunere">Stage rémunéré</label><br>
      <input id="nonRemunere" v-model="nonRemunere" type="checkbox" class="mr-2">
      <label for="nonRemunere">Stage non rémunéré</label><br>



      <label for="additionalInformation" class="p-2 w-full mb-2">Information supplémentaire</label>
      <textarea class="border border-gray-300 p-2 w-full mb-6"></textarea>




      <input
        class="block w-full text-sm text-neutral-950 border border-neutrla-300 rounded-lg cursor-pointer bg-neutral-100 bg-neutral-100 bg-neutral-300"
        aria-describedby="file_input_help" id="file_input" type="file">


      <div class="flex justify-end">
        <button class="bg-neutral-300 text-white px-4 py-2 m-1 rounded">Annuler</button>
        <button class="bg-teal-500 text-white px-4 py-2 m-1 rounded" @click="cancelRequest">Sauvegarder</button>
      </div>

    </form>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue';
// Création des variables requises pour la validation du formulaire

const formFieldsLinkedWithApi = reactive({
  title: '',
  nomComplet: '',
  description: '',
  programme: '',
  etablissement: '',
  activitySector: '',
  city: '',
  region: '',
  skills: '',
  internshipType: '',
  startDate: '',
  weeklyWorkHours: '',
  endDate: '',
  aDiscuter: '',
  remunere: '',
  nonRemunere: '',
  additionalInformation: ''
});

const errorMessage = reactive({
  empty: 'Le champ ne peut pas être vide',
  minCharacters: 'Le champ doit avoir au moins 5 caractères',
  maxCharacters: 'Le champ ne peut pas dépasser 300 caractères',
  option: 'Le champ doit avoir une option valide'
});

const fieldsToValidate = reactive({
  title: '',
  nomComplet: '',
  description: '',
  programme: '',
  etablissement: '',
  activitySector: '',
  city: '',
  region: '',
  skills: '',
  internshipType: '',
  startDate: '',
  weeklyWorkHours: '',
  endDate: '',
  aDiscuter: '',
  remunere: '',
  nonRemunere: '',
  additionalInformation: ''
});

let isFormValid = ref(false);

// Fonction pour valider les champs de type input
function validateInput(input, field) {
  if (input.trim() === "") {
    return errorMessage.empty;
  }
  if (input.length < 5) {
    return errorMessage.minCharacters;
  }
  if (input.length > 300) {
    return errorMessage.maxCharacters;
  }

  // Réinitialiser le message d'erreur du champ si la validation réussit
  fieldsToValidate[field] = '';

  return '';
}

// Fonction pour valider le champ de type select
function validateSelect(select, field) {
  if (select.trim() === "") {
    return errorMessage.option;
  }

  fieldsToValidate[field] = '';

  return '';
}

// Fonction pour valider les champs de type date
// Fonction pour valider les champs de type nombre
// Fonction pour valider les champs de type checkbox


// Fonction pour soumettre le formulaire 

const submitRequest = () => {
  event.preventDefault();
  fieldsToValidate.title = validateInput(formFieldsLinkedWithApi.title, 'title');
  fieldsToValidate.nomComplet = validateInput(formFieldsLinkedWithApi.nomComplet, 'nomComplet');
  fieldsToValidate.description = validateInput(formFieldsLinkedWithApi.description, 'description');
  fieldsToValidate.programme = validateInput(formFieldsLinkedWithApi.programme, 'programme');
  fieldsToValidate.etablissement = validateInput(formFieldsLinkedWithApi.etablissement, 'etablissement');
  fieldsToValidate.city = validateInput(formFieldsLinkedWithApi.city, 'city');
  fieldsToValidate.skills = validateInput(formFieldsLinkedWithApi.skills, 'skills');
  fieldsToValidate.activitySector = validateSelect(formFieldsLinkedWithApi.activitySector, 'activitySector');
  fieldsToValidate.region = validateSelect(formFieldsLinkedWithApi.region, 'region');
   fieldsToValidate.internshipType = validateSelect(formFieldsLinkedWithApi.internshipType, 'internshipType');

  isFormValid.value = Object.values(fieldsToValidate).every(value => value === '');
};

// Fonction  sur le bouton annuler du formulaire 
const cancelRequest = () => {
  // Réinitialiser les champs du formulaire
  formFieldsLinkedWithApi.title = '';
  formFieldsLinkedWithApi.nomComplet = '';
  formFieldsLinkedWithApi.description = '';
  formFieldsLinkedWithApi.programme = '';
  formFieldsLinkedWithApi.etablissement = '';
  formFieldsLinkedWithApi.city = '';
  formFieldsLinkedWithApi.skills = '';
  formFieldsLinkedWithApi.additionalInformation = '';

  // Réinitialiser les messages d'erreur
  for (let field in fieldsToValidate) {
    fieldsToValidate[field] = '';
  }
};








</script>

<style></style>