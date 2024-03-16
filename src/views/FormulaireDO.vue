<template>
  <main>
    <!-- Entête -->
    <h1>{{ isRequest ? 'Ajouter une demande' : 'Ajouter une offre' }}</h1>



    <!-- Formulaire  -->
    <form class="max-w-2xl mx-auto mt-10" @submit="submitRequest">

      <div class="max-w-2xl mx-auto mt-10">
        <div class="flex justify-end">
          <button class="bg-neutral-300 text-white px-4 py-2 m-1 rounded" @click="resetForm">Annuler</button>
          <button
            :class="isRequest ? 'bg-teal-500 text-white px-4 py-2 m-1 rounded' : 'bg-red-800 text-white px-4 py-2 m-1 rounded'"
            @click="cancelRequest">Sauvegarder</button>
        </div>

        <label for="title" class="block mb-2">Titre: </label>
        <input id="title" v-model="formFieldsLinkedWithApi.title" @input="validateInput('title')" type="text"
          class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="fieldsToValidate.title !== ''" class="pt-2 text-xs text-red-700">{{ fieldsToValidate.title }}</span>

        <div v-if="!isRequest">
          <label for="enterprise" class="block mb-2">Entreprise: </label>
          <Select id="enterprise" v-model="enterprise" type="text" class="border border-gray-300 p-2 w-full mb-6">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>



      <div>
        <div v-if="isRequest">
          <label for="nomComplet" class="block mb-2">Nom et prénom</label>
          <input id="nomComplet" v-model="formFieldsLinkedWithApi.nomComplet" @input="validateInput('nomComplet')"
            class="border border-gray-300 p-2 w-full mb-6"></input>
          <span v-if="fieldsToValidate.nomComplet !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.nomComplet
    }}</span>
        </div>


        <div v-if="isRequest">
          <label for="description" class="block mb-2">Présensention</label>
          <textarea id="description" v-if="isRequest" v-model="formFieldsLinkedWithApi.description"
            @input="validateInput('description')" class="border border-gray-300 p-2 w-full mb-6"></textarea>
          <span v-if="fieldsToValidate.description !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.description }}</span>
        </div>
      </div>
      
      <div v-if="!isRequest">
        <h2>Description de la tâche</h2>
        <textarea id="taskDescription" v-model="taskDescription"
          class="border border-gray-300 p-2 w-full mb-6"></textarea> =
      </div>

      <div>
        <div v-if="isRequest"></div>
        <label for="programme" class="block mb-2">Programme de formation</label>
        <input id="programme" v-model="formFieldsLinkedWithApi.programme" @input="validateInput('programme')"
          type="text" class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="fieldsToValidate.programme !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.programme }}</span>
      </div>


      <div v-if="!isRequest">
        <label for="requiredSkills" class="block mb-2">Exigences</label>
        <textarea id="requiredSkills" v-model="requiredSkills"
          class="border border-gray-300 p-2 w-full mb-6"></textarea> =
      </div>




      <div v-if="isRequest">
        <label for="etablissement" class="block mb-2">Établissement scolaire</label>
        <input id="etablissement" v-if="isRequest" v-model="formFieldsLinkedWithApi.etablissement"
          @input="validateInput('etablissement')" type="text" class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="fieldsToValidate.etablissement !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.etablissement }}</span>
      </div>

      <div v-if="isRequest">
        <label for="region" class="block mb-2">Secteur d'activité</label>
        <select id="activitySector" v-if="isRequest" v-model="formFieldsLinkedWithApi.activitySector"
          @change="validateSelect(formFieldsLinkedWithApi.activitySector, 'activitySector')"
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
      </div>

      <div v-if="isRequest">
        <label for="city" class="block mb-2">Ville</label>
        <input id="city" v-if="isRequest" v-model="formFieldsLinkedWithApi.city" @input="validateInput('city')"
          class="border border-gray-300 p-2 w-full mb-6"></input>
        <span v-if="fieldsToValidate.city !== ''" class="pt-2 text-xs text-red-700">{{ fieldsToValidate.city }}</span>
      </div>


      <div v-if="isRequest">
        <label for="region" class="block mb-2">Région</label>
        <Select id="region" v-if="isRequest" v-model="formFieldsLinkedWithApi.region"
          @change="validateSelect(formFieldsLinkedWithApi.region, 'region')" type="text"
          class="border border-gray-300 p-2 w-full mb-6">
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


      <div v-if="isRequest">
        <label for="skills" class="block mb-2">Compétences</label>
        <textarea id="skills" v-if="isRequest" v-model="formFieldsLinkedWithApi.skills" @input="validateInput('skills')"
          class="border border-gray-300 p-2 w-full mb-6"></textarea>
        <span v-if="fieldsToValidate.skills !== ''" class="pt-2 text-xs text-red-700">{{ fieldsToValidate.skills
          }}</span>
      </div>


      <div>
        <h2 class="p-2 w-full mb-6">Information sur le stage</h2>
        <label for="intershipType" class="block mb-2">Type de stage</label>
        <select id="intershipType" v-model="formFieldsLinkedWithApi.internshipType"
          @change="validateSelect(formFieldsLinkedWithApi.internshipType, 'nternshipType')" type="text"
          class="border border-gray-300 p-2 w-full mb-6">class="border border-gray-300 p-2 w-full mb-6">
          <option value="option1"></option>
          <option value="option2">Temps plein</option>
          <option value="option3">Temps partiel</option>
        </select>
        <span v-if="fieldsToValidate.internshipType !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.internshipType }}</span>
      </div>



      <div>
        <label for="startDate" class="block mb-2">Date de début</label>
        <input id="startDate" v-model="formFieldsLinkedWithApi.startDate"
          @input="validateDate(formFieldsLinkedWithApi.startDate, 'startDate')" type="date"
          class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="fieldsToValidate.startDate !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.startDate }}</span>
      </div>


      <div>
        <label for="weeklyWorkHours" class="block mb-2">Nombre d'heures par semaine</label>
        <input id="weeklyWorkHours" v-model="formFieldsLinkedWithApi.weeklyWorkHours"
          @input="validateNumber(formFieldsLinkedWithApi.weeklyWorkHours, 'weeklyWorkHours')" type="number"
          class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="fieldsToValidate.weeklyWorkHours !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.weeklyWorkHours }}</span>
      </div>


      <div>
        <label for="endDate" class="block mb-2">Date de fin</label>
        <input id="endDate" v-model="formFieldsLinkedWithApi.endDate"
          @input="validateDate(formFieldsLinkedWithApi.endDate, 'endDate')" type="date"
          class="border border-gray-300 p-2 w-full mb-6">
        <span v-if="fieldsToValidate.endDate !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.endDate }}</span>
      </div>

      <div>
        <label class="block mb-2">Rémunération</label>
        <input id="discretionary" v-model="formFieldsLinkedWithApi.paid" value="DISCRETIONARY" type="radio"
          class="mr-2">
        <label for="discretionary">À discuter</label><br>
        <input id="paid" v-model="formFieldsLinkedWithApi.paid" value="PAID" type="radio" class="mr-2">
        <label for="paid">Stage rémunéré</label><br>
        <input id="unpaid" v-model="formFieldsLinkedWithApi.paid" value="UNPAID" type="radio" class="mr-2">
        <label for="unpaid">Stage non rémunéré</label><br>
        <span v-if="fieldsToValidate.paid !== ''" class="pt-2 text-xs text-red-700">{{ fieldsToValidate.paid }}</span>
      </div>



      <div>
        <label for="additionalInformation" class="p-2 w-full mb-2">Information supplémentaire</label>
        <textarea id="additionalInformation" v-model="formFieldsLinkedWithApi.additionalInformation"
          class="border border-gray-300 p-2 w-full mb-6"></textarea>
        <span v-if="fieldsToValidate.additionalInformation !== ''" class="pt-2 text-xs text-red-700">{{
      fieldsToValidate.additionalInformation }}</span>
      </div>



      <div>
        <div class="relative w-full">
          <input class="absolute inset-0 opacity-0 w-full h-full cursor-pointer" aria-describedby="file_input_help"
            id="file_input" type="file">
          <label for="file_input"
            class="block w-full text-sm text-neutral-950 border border-neutral-300 rounded-lg cursor-pointer bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 py-2 px-4">
            Choisir un fichier
          </label>
        </div>

      </div>



      <div class="flex justify-end">
        <button class="bg-neutral-300 text-white px-4 py-2 m-1 rounded" @click="resetForm">Annuler</button>
        <button
          :class="isRequest ? 'bg-teal-500 text-white px-4 py-2 m-1 rounded' : 'bg-red-800 text-white px-4 py-2 m-1 rounded'"
          @click="cancelRequest">Sauvegarder</button>
      </div>

    </form>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue';
// Variable pour déterminer si c'est une demande ou une offre 
let isRequest = true;

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
  paid: '',
  additionalInformation: ''
});

const errorMessage = reactive({
  empty: 'Le champ ne peut pas être vide',
  minCharacters: 'Le champ doit avoir au moins 5 caractères',
  maxCharacters: 'Le champ ne peut pas dépasser 300 caractères',
  option: 'Le champ doit avoir une option valide',
  date: 'Le champ doit avoir une date valide.',
  pastDate: 'La date ne doit pas être dans le passé.',
  endDate: 'La date de fin ne peut pas être avant la date de début.',
  number: 'Le champ doit avoir une nombre positif valide.',
  checkbox: 'Le champ doit avoir au moins un choix.'
});

const fieldsToValidate = reactive({
  title: '',
  enterprise:'',
  taskDescription:'',
  nomComplet: '',
  description: '',
  programme: '',
  requiredSkills:'',
  etablissement: '',
  activitySector: '',
  city: '',
  region: '',
  skills: '',
  internshipType: '',
  startDate: '',
  weeklyWorkHours: '',
  endDate: '',
  paid: '',
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
function validateDate(input, field) {
  const selectedDate = new Date(input);
  const startDate = new Date(formFieldsLinkedWithApi.startDate);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  if (input === "") {
    fieldsToValidate[field] = errorMessage.date;
    return errorMessage.date;
  } else if (selectedDate <= currentDate) {
    fieldsToValidate[field] = errorMessage.pastDate;
    return errorMessage.pastDate;
  } else if (selectedDate < startDate) {
    fieldsToValidate[field] = errorMessage.endDate;
    return errorMessage.endDate;
  } else {
    fieldsToValidate[field] = "";
    return "";
  }
}




// Fonction pour valider les champs de type nombre
function validateNumber(input, field) {
  input = String(input);
  if (input.trim() === "") {
    fieldsToValidate[field] = errorMessage.empty;
    return errorMessage.empty;
  }
  if (isNaN(parseFloat(input)) || parseFloat(input) < 0) {
    fieldsToValidate[field] = errorMessage.number;
    return errorMessage.number;
  }
  fieldsToValidate[field] = "";
  return "";
}






// Fonction pour valider les champs de type checkbox
function validatePaid(value) {
  if (value !== 'DISCRETIONARY' && value !== 'PAID' && value !== 'UNPAID') {
    return errorMessage.checkbox;
  }
  fieldsToValidate[field] = '';
  return '';
}

// Fonction pour soumettre le formulaire 
const submitRequest = (e) => {
  e.preventDefault();
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
  fieldsToValidate.startDate = validateDate(formFieldsLinkedWithApi.startDate, 'startDate');
  fieldsToValidate.endDate = validateDate(formFieldsLinkedWithApi.endDate, 'endDate');
  fieldsToValidate.weeklyWorkHours = validateNumber(formFieldsLinkedWithApi.weeklyWorkHours, 'weeklyWorkHours');
  fieldsToValidate.paid = validatePaid(formFieldsLinkedWithApi.paid);
  fieldsToValidate.additionalInformation = validateInput(formFieldsLinkedWithApi.additionalInformation);

  isFormValid.value = Object.values(fieldsToValidate).every(value => value === '');
  if (isFormValid.value) {
    for (let key in fieldsToValidate) {
      fieldsToValidate[key] = '';
    }
  }
};




// Fonction pour réinitialiser le formulaire
// Fonction pour réinitialiser le formulaire
const resetForm = (e) => {
  e.preventDefault();
  formFieldsLinkedWithApi.additionalInformation = '';
  for (let key in formFieldsLinkedWithApi) {
    formFieldsLinkedWithApi[key] = '';
  }
  for (let key in fieldsToValidate) {
    fieldsToValidate[key] = '';
  }
};






</script>

<style></style>