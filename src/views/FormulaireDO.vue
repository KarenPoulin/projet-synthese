<template>
  <div class="bg-neutral-100 w-full mx-auto">
    <!-------------------- Entête -------------------->
       <h1 class="text-4xl font-bold text-neutral-500 m-10 p-5">{{ isRequest ? 'Ajouter une demande de stage' : 'Offre de stage' }}</h1>



    <!-------------------- Formulaire  ---------------------->
    <form class="m-[25px]">
      <div>
        <div class="flex justify-end items-center px-2">
          <button class="bg-neutral-300 text-white px-4 py-2 m-1 rounded hover:bg-neutral-400"
            @click="resetForm">Annuler</button>
          <button
            :class="isRequest ? 'bg-teal-500 text-white px-4 py-2 m-1 rounded hover:bg-teal-600' : 'bg-red-800 text-white px-4 py-2 m-1 rounded hover:bg-red-900'"
            @click="submitForm">{{ isAdding ? 'Sauvegarder' : 'Mettre à jour' }}</button>

        </div>

        <div>
          <div class="flex items-baseline mt-5">
            <label for="title" class="text-base text-center font-bold text-neutral-500 block mr-4">Titre: </label>
            <input id="title" v-model="formFieldsLinkedWithApi.title" @input="validateInput('title')" type="text"
              class="border border-gray-300  w-full  rounded">
          </div>
          <span v-if="fieldsToValidate.title !== ''" class="text-xs font-semibold text-red-700">{{
              fieldsToValidate.title }}</span>
        </div>

        <div v-if="!isRequest">
          <div class="flex items-baseline mt-5">
            <label for="enterprise" class="text-base font-bold text-neutral-500 block mr-4">Entreprise: </label>
            <Select id="enterprise" v-model="formFieldsLinkedWithApi.enterprise" @input="validateInput('enterprise')"
              type="text" class="border border-gray-300 p-2 w-full  rounded">
              <option></option>
              <option>Entreprise 1</option>
              <option>Entreprise 2</option>
            </select>
          </div>
          <span v-if="fieldsToValidate.enterprise !== ''" class="text-xs font-semibold mb-2 text-red-700">{{
              fieldsToValidate.enterprise }}</span>
        </div>

      </div>



      <div class="bg-[#ffffff] p-10 mt-10">
        <div v-if="isRequest" class="m-2">
          <label for="nomComplet" class="text-sm font-bold text-neutral-500  block">Nom et prénom</label>
          <input id="nomComplet" v-model="formFieldsLinkedWithApi.nomComplet" @input="validateInput('nomComplet')"
            class="border border-gray-300 p-2 w-full rounded"></input>
          <span v-if="fieldsToValidate.nomComplet !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.nomComplet
            }}</span>
        </div>


        <div v-if="isRequest" class="m-2">
          <label for="description" class="text-sm font-bold text-neutral-500  block">Présensention</label>
          <textarea id="description" v-if="isRequest" v-model="formFieldsLinkedWithApi.description"
            @input="validateInput('description')" class="border border-gray-300 p-2 w-full  rounded"></textarea>
          <span v-if="fieldsToValidate.description !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.description }}</span>
        </div>


        <div v-if="!isRequest" class="m-2">
          <h2 class="text-xl font-bold text-red-800 py-4">Description de la tâche</h2>
          <textarea id="taskDescription" v-model="formFieldsLinkedWithApi.taskDescription"
            @input="validateInput('taskDescription')" class="border border-gray-300 p-2 w-full rounded"></textarea>
          <span v-if="fieldsToValidate.taskDescription !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.taskDescription }}</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="programme" class="text-sm font-bold text-neutral-500 block ml-3">Programme de formation</label>
            <input id="programme" v-model="formFieldsLinkedWithApi.programme" @input="validateInput('programme')"
              type="text" class="border border-gray-300 p-2 w-full rounded mt-1 ml-3">
            <span v-if="fieldsToValidate.programme !== ''" class="text-xs font-semibold text-red-700">{{
              fieldsToValidate.programme }}</span>
          </div>


          <div v-if="isRequest" class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="etablissement" class="text-sm font-bold text-neutral-500 block ml-3">Établissement
              scolaire</label>
            <input id="etablissement" v-model="formFieldsLinkedWithApi.etablissement"
              @input="validateInput('etablissement')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3">
            <span v-if="fieldsToValidate.etablissement !== ''" class="text-xs font-semibold text-red-700 p-2">{{
              fieldsToValidate.etablissement }}</span>
          </div>


          <div v-if="isRequest" class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="activitySector" class="text-sm font-bold text-neutral-500 block ml-3">Secteur
              d'activité</label>
            <select id="activitySector" v-model="formFieldsLinkedWithApi.activitySector"
              @change="validateSelect(formFieldsLinkedWithApi.activitySector, 'activitySector')"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3">
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
            <span v-if="fieldsToValidate.activitySector !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.activitySector }}</span>
          </div>

          <div v-if="isRequest" class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="city" class="text-sm font-bold text-neutral-500 block ml-3">Ville</label>
            <input id="city" v-model="formFieldsLinkedWithApi.city" @input="validateInput('city')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3">
            <span v-if="fieldsToValidate.city !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.city }}</span>
          </div>


          <div v-if="isRequest" class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="region" class="text-sm font-bold text-neutral-500 block ml-3">Région</label>
            <select id="region" v-model="formFieldsLinkedWithApi.region"
              @change="validateSelect(formFieldsLinkedWithApi.region, 'region')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3">
              <option value="option1"></option>
              <option value="option2">Québec</option>
              <option value="option3">Trois-Rivière</option>
              <option value="option4">Montréal</option>
              <option value="option5">Sherbrooke</option>
              <option value="option6">Gatineau</option>
            </select>
            <span v-if="fieldsToValidate.region !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.region }}</span>
          </div>
        </div>

        <div v-if="!isRequest" class="m-2 relative">
          <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
          <label for="requiredSkills" class="text-sm font-bold text-neutral-500 block ml-3">Exigences</label>
          <textarea id="requiredSkills" v-model="formFieldsLinkedWithApi.requiredSkills"
            @input="validateInput('requiredSkills')"
            class="border border-gray-300 p-2 w-full rounded mt-1 ml-3"></textarea>
          <span v-if="fieldsToValidate.requiredSkills !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.requiredSkills }}</span>
        </div>




        <div v-if="isRequest" class="m-2 relative">
          <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
          <label for="skills" class="text-sm font-bold text-neutral-500 block ml-3">Compétences</label>
          <textarea id="skills" v-if="isRequest" v-model="formFieldsLinkedWithApi.skills"
            @input="validateInput('skills')" class="border border-gray-300 p-2 w-full rounded mt-1 ml-3"></textarea>
          <span v-if="fieldsToValidate.skills !== ''" class="text-xs font-semibold text-red-700">{{
              fieldsToValidate.skills }}</span>
        </div>



        <p class=" text-base font-bold px-4 py-2 m-1" :class="isRequest ? ' text-teal-500' : 'text-red-800'">
          Information sur le stage</p>

        <div class="grid grid-cols-2 gap-4 items-baseline">
          <div class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="internshipType" class="text-sm font-bold text-neutral-500 block ml-3">Type de stage</label>
            <select id="internshipType" v-model="formFieldsLinkedWithApi.internshipType"
              @change="validateSelect(formFieldsLinkedWithApi.internshipType, 'internshipType')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3">
              <option value="option1"></option>
              <option value="option2">Temps plein</option>
              <option value="option3">Temps partiel</option>
            </select>
            <span v-if="fieldsToValidate.internshipType !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.internshipType }}</span>
          </div>




          <div class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="startDate" class="text-sm font-bold text-neutral-500 block ml-3">Date de début</label>
            <input id="startDate" v-model="formFieldsLinkedWithApi.startDate"
              @input="validateDate(formFieldsLinkedWithApi.startDate, 'startDate')" type="date"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3">
            <span v-if="fieldsToValidate.startDate !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.startDate }}</span>
          </div>


          <div class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="weeklyWorkHours" class="text-sm font-bold text-neutral-500 block ml-3">Nombre d'heures par
              semaine</label>
            <input id="weeklyWorkHours" v-model="formFieldsLinkedWithApi.weeklyWorkHours"
              @input="validateNumber(formFieldsLinkedWithApi.weeklyWorkHours, 'weeklyWorkHours')" type="number"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3">
            <span v-if="fieldsToValidate.weeklyWorkHours !== ''" class="p-2 font-semibold text-xs text-red-700">{{
              fieldsToValidate.weeklyWorkHours }}</span>
          </div>


          <div class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="endDate" class="text-sm font-bold text-neutral-500 block ml-3">Date de fin</label>
            <input id="endDate" v-model="formFieldsLinkedWithApi.endDate"
              @input="validateDate(formFieldsLinkedWithApi.endDate, 'endDate')" type="date"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3">
            <span v-if="fieldsToValidate.endDate !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.endDate }}</span>
          </div>

        </div>

        <div class="m-2 relative">
          <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
          <label class="text-sm font-bold text-neutral-500 block mb-2 ml-3">Rémunération</label>
          <input id="discretionary" v-model="formFieldsLinkedWithApi.paid" value="DISCRETIONARY" type="checkbox"
            class="mr-2 ml-3">
          <label for="discretionary">À discuter</label><br>
          <input id="paid" v-model="formFieldsLinkedWithApi.paid" value="PAID" type="checkbox" class="mr-2 ml-3">
          <label for="paid">Stage rémunéré</label><br>
          <input id="unpaid" v-model="formFieldsLinkedWithApi.paid" value="UNPAID" type="checkbox" class="mr-2 ml-3">
          <label for="unpaid">Stage non rémunéré</label><br>
          <span v-if="fieldsToValidate.paid !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.paid }}</span>
        </div>




        <div class="m-2">
          <label for="additionalInformation" class="text-sm font-bold"
            :class="isRequest ? ' text-teal-500' : 'text-red-800'">Information supplémentaire</label>
          <textarea id="additionalInformation" v-model="formFieldsLinkedWithApi.additionalInformation"
            class="border border-gray-300 p-2 w-full  rounded"></textarea>
          <span v-if="fieldsToValidate.additionalInformation !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.additionalInformation }}</span>
        </div>

        <div v-if="isRequest" class="m-2">
          <input
            class=" block w-full text-sm text-neutral-950-text-color border border-neutral-300-border-color rounded-lg cursor-pointer bg-neutral-100-color dark:text-neutral-100-dark-text-color focus:outline-none dark:bg-neutral-300-background-color dark:bg-neutral-300-background-color dark:placeholder-neutral-950-dark-placeholder-color"
            id="file_input" type="file">
        </div>



        <div class="flex justify-end my-5 pb-10">
          <button class="bg-neutral-300 text-white px-4 py-2 m-1 rounded hover:bg-neutral-400"
            @click="resetForm">Annuler</button>
          <button
            :class="isRequest ? 'bg-teal-500 text-white px-4 py-2 m-1 rounded hover:bg-teal-600' : 'bg-red-800 text-white px-4 py-2 m-1 rounded hover:bg-red-900'"
            @click="submitForm">{{ isAdding ? 'Sauvegarder' : 'Mettre à jour' }}</button>

        </div>

      </div>

    </form>
  </div>

</template>

<script setup>
import { reactive, ref } from 'vue';

//Variable pour déterminer si c'est un ajout ou une modification 
let isAdding = ref(true);

// Variable pour déterminer si c'est une demande ou une offre 
let isRequest = ref(true);

// Création des variables requises pour la validation du formulaire

const formFieldsLinkedWithApi = reactive({
  title: '',
  enterprise: '',
  taskDescription: '',
  nomComplet: '',
  description: '',
  programme: '',
  requiredSkills: '',
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
  enterprise: '',
  taskDescription: '',
  nomComplet: '',
  description: '',
  programme: '',
  requiredSkills: '',
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
const submitForm = (e) => {
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
  fieldsToValidate.enterprise = validateSelect(formFieldsLinkedWithApi.enterprise, 'enterprise');
  fieldsToValidate.taskDescription = validateInput(formFieldsLinkedWithApi.taskDescription, 'taskDescription');
  fieldsToValidate.requiredSkills = validateInput(formFieldsLinkedWithApi.requiredSkills, 'requiredSkills');


  isFormValid.value = Object.values(fieldsToValidate).every(value => value === '');
  if (isFormValid.value) {
    for (let key in fieldsToValidate) {
      fieldsToValidate[key] = '';
    }
  }
};



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