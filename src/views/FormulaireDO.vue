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
            @click="submitForm"><i class="fa-solid fa-floppy-disk p-1"></i>{{ isAdding ? 'Sauvegarder' : 'Mettre à jour'
            }}</button>

        </div>

        <div>
          <div class="flex items-baseline mt-5">
            <label for="title" class="text-base text-center font-bold text-neutral-500 block mr-4">Titre: </label>
            <input id="title" v-model="formFieldsLinkedWithApi.title"
              @input="validateInput(formFieldsLinkedWithApi.title, 'title')" type="text"
              class="border border-gray-300 p-2 w-full rounded hover:bg-teal-100 focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">

          </div>
          <span v-if="fieldsToValidate.title !== ''" class="text-xs font-semibold text-red-700">{{
              fieldsToValidate.title }}</span>
        </div>


        <div v-if="!isRequest">
          <div class="flex items-baseline mt-5">
            <label for="enterprise" class="text-base font-bold text-neutral-500 block mr-4">Entreprise: </label>
            <Select id="enterprise" v-model="formFieldsLinkedWithApi.enterprise"
              @change="validateSelect(formFieldsLinkedWithApi.enterprise, 'enterprise')" type="text"
              class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option>Entreprise 1</option>
              <option>Entreprise 2</option>
            </select>
          </div>
          <span v-if="fieldsToValidate.enterprise !== ''" class="text-xs font-semibold mb-2 text-red-700">{{
              fieldsToValidate.enterprise }}</span>
        </div>

      </div>



      <div class="bg-white p-10 mt-10">
        <div v-if="isRequest" class="m-2">
          <label for="nomComplet" class="text-sm font-bold text-neutral-500  block">Nom et prénom</label>
          <input id="title" v-model="formFieldsLinkedWithApi.nomComplet"
          @input="validateInput(formFieldsLinkedWithApi.nomComplet, 'nomComplet')" type="text"
            class="border border-gray-300 w-full rounded focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
          <span v-if="fieldsToValidate.nomComplet !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.nomComplet
            }}</span>
        </div>


        <div v-if="isRequest" class="m-2">
          <label for="description" class="text-sm font-bold text-neutral-500  block">Présensention</label>
          <textarea id="description" v-if="isRequest" v-model="formFieldsLinkedWithApi.description"
            @change="validateInput(formFieldsLinkedWithApi.description, 'description')"
            class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.description !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.description }}</span>
        </div>


        <div v-if="!isRequest" class="m-2">
          <h2 class="text-xl font-bold text-red-800 py-4">Description de la tâche</h2>
          <textarea id="taskDescription" v-model="formFieldsLinkedWithApi.taskDescription"
            @change="validateInput(formFieldsLinkedWithApi.taskDescription, 'taskDescription')"
            class="border border-gray-300 p-2 w-full rounded   focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.taskDescription !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.taskDescription }}</span>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="programme" class="text-sm font-bold text-neutral-500 block ml-3">Programme de formation</label>
            <input id="programme" v-model="formFieldsLinkedWithApi.programme"
            @input="validateInput(formFieldsLinkedWithApi.programme, 'programme')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3   focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.programme !== ''" class="text-xs font-semibold text-red-700 p-2">{{
              fieldsToValidate.programme }}</span>
          </div>


          <div v-if="isRequest" class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="etablissement" class="text-sm font-bold text-neutral-500 block ml-3 ">Établissement
              scolaire</label>
            <input id="etablissement" v-model="formFieldsLinkedWithApi.etablissement"
            @input="validateInput(formFieldsLinkedWithApi.etablissement, 'etablissement')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3  focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.etablissement !== ''" class="text-xs font-semibold text-red-700 p-2">{{
              fieldsToValidate.etablissement }}</span>
          </div>


          <div v-if="isRequest" class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="activitySector" class="text-sm font-bold text-neutral-500 block ml-3   focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">Secteur
              d'activité</label>
            <select id="activitySector" 
              v-model="formFieldsLinkedWithApi.activitySector"
              @change="validateSelect(formFieldsLinkedWithApi.activitySector, 'activitySector')"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3 focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option value="option1">Technologie de l'information</option>
              <option value="option2">Santé</option>
              <option value="option3">Finance</option>
              <option value="option4">Éducation</option>
              <option value="option5">Transport et logistique</option>
              <option value="option6">Immoblier</option>
              <option value="option7">Tourisme</option>
              <option value="option8">Manufacture</option>
              <option value="option9">Énergie</option>
              <option value="option10">Commerce au détail</option>
            </select>
            <span v-if="fieldsToValidate.activitySector !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.activitySector }}</span>
          </div>

          <div v-if="isRequest" class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="city" class="text-sm font-bold text-neutral-500 block ml-3 ">Ville</label>
            <input id="city" v-model="formFieldsLinkedWithApi.city"
              @input="validateInput(formFieldsLinkedWithApi.city, 'city')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3 focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.city !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.city }}</span>
          </div>


          <div v-if="isRequest" class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="region" class="text-sm font-bold text-neutral-500 block ml-3 ">Région</label>
            <select id="region" v-model="formFieldsLinkedWithApi.region"
              @change="validateSelect(formFieldsLinkedWithApi.region, 'region')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3 focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option value="option1">Québec</option>
              <option value="option2">Trois-Rivière</option>
              <option value="option3">Montréal</option>
              <option value="option4">Sherbrooke</option>
              <option value="option5">Gatineau</option>
            </select>
            <span v-if="fieldsToValidate.region !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.region }}</span>
          </div>
        </div>

        <div v-if="!isRequest" class=" m-2 relative">
          <div class="h-[98px] w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
          <label for="requiredSkills" class="text-sm font-bold text-neutral-500 block ml-3 ">Exigences</label>
          <textarea id="requiredSkills" v-model="formFieldsLinkedWithApi.requiredSkills"
            @change="validateInput(formFieldsLinkedWithApi.requiredSkills, 'requiredSkills')"
            class="border border-gray-300 p-3 w-full rounded mt-1 ml-3   focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.requiredSkills !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.requiredSkills }}</span>
        </div>




        <div v-if="isRequest" class="m-2 relative">
          <div class="h-[90px] w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
          <label for="skills" class="text-sm font-bold text-neutral-500 block ml-3">Compétences</label>
          <textarea id="skills" v-if="isRequest" v-model="formFieldsLinkedWithApi.skills"
            @change="validateInput(formFieldsLinkedWithApi.skills, 'skills')"
            class="border border-gray-300 p-2 w-full rounded mt-1 ml-3  focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
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
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3   focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option value="option1">Temps plein</option>
              <option value="option2">Temps partiel</option>
            </select>
            <span v-if="fieldsToValidate.internshipType !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.internshipType }}</span>
          </div>




          <div class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="startDate" class="text-sm font-bold text-neutral-500 block ml-3">Date de début</label>
            <input id="startDate" v-model="formFieldsLinkedWithApi.startDate"
              @input="validateDate(formFieldsLinkedWithApi.startDate, 'startDate')" type="date"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3   focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.startDate !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.startDate }}</span>
          </div>


          <div class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="weeklyWorkHours" class="text-sm font-bold text-neutral-500 block ml-3">Nombre d'heures par
              semaine</label>
            <input id="weeklyWorkHours" v-model="formFieldsLinkedWithApi.weeklyWorkHours"
              @input="validateNumber(formFieldsLinkedWithApi.weeklyWorkHours, 'weeklyWorkHours')" type="number"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3   focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.weeklyWorkHours !== ''" class="p-2 font-semibold text-xs text-red-700">{{
              fieldsToValidate.weeklyWorkHours }}</span>
          </div>


          <div class="m-2 relative">
            <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
            <label for="endDate" class="text-sm font-bold text-neutral-500 block ml-3">Date de fin</label>
            <input id="endDate" v-model="formFieldsLinkedWithApi.endDate"
              @input="validateDate(formFieldsLinkedWithApi.endDate, 'endDate')" type="date"
              class="border border-gray-300 p-2 w-full rounded mt-1 ml-3   focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.endDate !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.endDate }}</span>
          </div>

        </div>

        <div class="m-2 relative">
          <div class="h-full w-1.5 bg-neutral-800 absolute inset-y-0 left-0"></div>
          <label class="text-sm font-bold text-neutral-500 block mb-2 ml-3">Rémunération</label>
          <input id="discretionary" v-model="formFieldsLinkedWithApi.paid"
            @change="validatePaid(formFieldsLinkedWithApi.paid, 'paid')" value="DISCRETIONARY" type="radio"
            class="mr-2 ml-3 rounded " :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
          <label for="discretionary">À discuter</label><br>
          <input id="paid" v-model="formFieldsLinkedWithApi.paid"
            @change="validatePaid(formFieldsLinkedWithApi.paid, 'paid')" value="PAID" type="radio"
            class="mr-2 ml-3 rounded 0 " :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
          <label for="paid">Stage rémunéré</label><br>
          <input id="unpaid" v-model="formFieldsLinkedWithApi.paid"
            @change="validatePaid(formFieldsLinkedWithApi.paid, 'paid')" value="UNPAID" type="radio"
            class="mr-2 ml-3 rounded  " :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
          <label for="unpaid">Stage non rémunéré</label><br>
          <span v-if="fieldsToValidate.paid !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.paid }}</span>
        </div>




        <div class="m-2">
          <label for="additionalInformation" class="text-sm font-bold"
            :class="isRequest ? ' text-teal-500' : 'text-red-800'">Information supplémentaire</label>
          <textarea id="additionalInformation" v-model="formFieldsLinkedWithApi.additionalInformation"
            @change="validateInput(formFieldsLinkedWithApi.additionalInformation, 'additionalInformation')"
            class="border border-gray-300 p-2 w-full  rounded   focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.additionalInformation !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.additionalInformation }}</span>
        </div>

        <div v-if="isRequest" class="m-2  flex justify-between items-center">

          <div class="w-1/2 flex items-center">
            <input class="h-10 border border-gray-300 py-3 w-full rounded  hover:bg-teal-100  focus:bg-white">
            <button
              class="h-10 bg-neutral-300 text-white px-4 py-1 rounded hover:bg-neutral-400 text-center">Parcourir</button>
          </div>


          <button class="bg-teal-500 text-white p-2 m-1 rounded hover:bg-teal-600  focus:bg-white"><i
              class="fa-solid fa-cloud-arrow-down p-1"></i>Télécharger le C.V. </button>
        </div>



        <div class="flex justify-end my-5 pb-10">
          <button class="bg-neutral-300 text-white px-4 py-2 m-1 rounded hover:bg-neutral-400"
            @click="resetForm">Annuler</button>
          <button
            :class="isRequest ? 'bg-teal-500 text-white px-4 py-2 m-1 rounded hover:bg-teal-600' : 'bg-red-800 text-white px-4 py-2 m-1 rounded hover:bg-red-900'"
            @click="submitForm"><i class="fa-solid fa-floppy-disk p-1"></i>{{ isAdding ? 'Sauvegarder' : 'Mettre à jour'
            }}</button>

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
  radio: 'Le champ doit avoir au moins un choix.',
  letterOnly: 'Le champ doit comporter que des lettres minuscule ou majuscules.',
  maxHours: "Le nombre d'heures maximum est de 40."
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
    fieldsToValidate[field] = errorMessage.empty;
    return errorMessage.empty;
  }
  if (input.length < 5) {
    fieldsToValidate[field] = errorMessage.minCharacters;
    return errorMessage.minCharacters;
  }
  if (input.length > 300) {
    fieldsToValidate[field] = errorMessage.maxCharacters;
    return errorMessage.maxCharacters;
  }


  fieldsToValidate[field] = "";
  return '';
}

// Fonction pour valider le champ de type select
function validateSelect(select, field) {
  if (select.trim() === "") {
    fieldsToValidate[field] = errorMessage.option;
    return errorMessage.option;

  } fieldsToValidate[field] = "";
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
  }
  fieldsToValidate[field] = "";
  return '';
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
  if (parseFloat(input) > 40) {
    fieldsToValidate[field] = errorMessage.maxHours;
    return errorMessage.maxHours;
  }
  fieldsToValidate[field] = "";
  return '';
}



// Fonction pour valider les champs de type radio
function validatePaid(value) {
  if (value !== 'DISCRETIONARY' && value !== 'PAID' && value !== 'UNPAID') {
    fieldsToValidate.paid = errorMessage.radio;
    return errorMessage.radio;
  }
  fieldsToValidate.paid = "";
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
  fieldsToValidate.paid = validatePaid(formFieldsLinkedWithApi.paid, 'paid');
  fieldsToValidate.additionalInformation = validateInput(formFieldsLinkedWithApi.additionalInformation, 'additionalInformation');
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

<style scoped>
saveIcon {
  width: 1px;
  height: 1px;
}
</style>