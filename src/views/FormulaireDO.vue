<template>
  <div class="bg-neutral-100 w-full">
    <!-- ENTÊTE -->
    <!-- ENTÊTE POUR LES AJOUTS  -->
    <h1 v-if="isAdding" class=" items-center text-4xl font-bold text-neutral-500   border-l-4 border-yellow-800 pl-2 my-5">{{ isRequest ? 'Ajouter une demande de stage' : 'Ajouter une offre de stage' }}</h1>
     <!-- ENTÊTE POUR LES MODIFICATIONS -->
    <div v-if="!isAdding" class="grid grid-cols-1 border-l-4 border-yellow-800 pl-2 my-5 ">
      <p class=" text-base font-bold text-neutral-500">
        {{ isRequest ? 'Demande de stage' : 'Offre de stage' }}</p>
    <h1 class="text-4xl font-bold text-neutral-500">Type/Enteprises</h1>
   
    </div>
    


    <!-- FORMULAIRE  -->
    <form class="m-[25px]">
      <!-- BOUTONS D'ACTION -->
      <div>
        <div class="flex justify-end items-center px-2">
          <button class="bg-neutral-300 text-white px-4 py-2 m-1 rounded hover:bg-neutral-400"
          @click="resetForm(isRequest)">Annuler</button>
          <button
            :class="isRequest ? 'bg-teal-500 text-white px-4 py-2 m-1 rounded hover:bg-teal-600' : 'bg-red-800 text-white px-4 py-2 m-1 rounded hover:bg-red-900'"
            @click="submitForm"><i class="fa-solid fa-floppy-disk p-1"></i>{{ isAdding ? 'Sauvegarder' : 'Mettre à jour'
            }}</button>
        </div>
        <div>

          <!-- CHAMP TITRE POUR LES DEMANDES ET OFFRES -->
          <div v-if="isAdding" class="flex items-baseline mt-5">
            <label for="title" class="text-base text-center font-bold text-neutral-500 block mr-4">Titre: </label>
            <input id="title" v-model="formFieldsLinkedWithApi.title"
              @input="validateInput(formFieldsLinkedWithApi.title, 'title')" type="text"
              class="border border-gray-300 p-2 w-full rounded focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
          </div>
          <span v-if="fieldsToValidate.title !== ''" class="text-xs font-semibold text-red-700">{{
              fieldsToValidate.title }}</span>
        </div>

        <!-- CHAMP ENTREPRISE POUR LES OFFRES  -->
        <div v-if="!isRequest">
          <div class="flex items-baseline mt-5">
            <label for="enterprise" class="text-base font-bold text-neutral-500 block mr-4">Entreprise: </label>
            <select id="enterprise" v-model="formFieldsLinkedWithApi.enterprise"
              @change="validateSelect(formFieldsLinkedWithApi.enterprise, 'enterprise')" type="text"
              class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option v-for="enterprise in allEnterprisesResults" :key="enterprise._id" :value="enterprise.name">{{
              enterprise.name
            }}</option>
            </select>
          </div>
          <span v-if="fieldsToValidate.enterprise !== ''" class="text-xs font-semibold mb-2 text-red-700">{{
              fieldsToValidate.enterprise }}</span>
        </div>
      </div>

      <!-- CHAMP NOM COMPLET  POUR LES DEMANDES ET LES OFFRES -->
      <div class="bg-white p-10 mt-10">
        <div v-if="isRequest" class="border-l-4 border-gray-800 pl-2 m-2">
          <label for="fullName" class="text-sm font-bold text-neutral-500  block">Nom et prénom</label>
          <select id="title" v-model="formFieldsLinkedWithApi.fullName"
            @change="validateSelect(formFieldsLinkedWithApi.fullName, 'fullName')" type="text"
            class="border border-gray-300 p-2 w-full rounded focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <option v-for="candidate in allCandidatesResults" :key="candidate._id"
              :value="candidate.firstName & candidate.lastName">{{
              candidate.firstName }} {{ candidate.lastName }}</option>
          </select>
          <span v-if="fieldsToValidate.fullName !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.fullName
            }}</span>
        </div>

        <!-- CHAMP PRÉSENTATION POUR LES DEMANDES  -->
        <div v-if="isRequest" class="grid grid-cols-1 border-l-4 border-gray-800 pl-2 m-2">
          <label for="description" class="text-sm font-bold text-neutral-500  block">Présentation</label>
          <textarea id="description" v-if="isRequest" v-model="formFieldsLinkedWithApi.description"
            @change="validateInput(formFieldsLinkedWithApi.description, 'description')"
            class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.description !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.description }}</span>
        </div>

        <!-- CHAMP DESCRIPTION DES TÂCHES POUR LES OFFRES  -->
        <div v-if="!isRequest" class="grid grid-cols-1 border-l-4 border-gray-800 pl-2 m-2">
          <p class="text-4xl font-bold text-red-800">Description des tâches</p>
          <textarea id="taskDescription" v-model="formFieldsLinkedWithApi.taskDescription"
            @change="validateInput(formFieldsLinkedWithApi.taskDescription, 'taskDescription')"
            class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.taskDescription !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.taskDescription }}</span>
        </div>

        <!-- CHAMP PROGRAMME DE FORMATION  POUR LES DEMANDES ET OFFRES  -->
        <div class="grid grid-cols-2 gap-4">
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="programme" class="text-sm font-bold text-neutral-500 block">Programme de formation</label>
            <input id="programme" v-model="formFieldsLinkedWithApi.programme"
              @input="validateInput(formFieldsLinkedWithApi.programme, 'programme')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1   focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.programme !== ''" class="text-xs font-semibold text-red-700 p-2">{{
              fieldsToValidate.programme }}</span>
          </div>

          <!-- CHAMP ÉTABLISSEMENT  POUR LES DEMANDES  -->
          <div v-if="isRequest" class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="etablissement" class="text-sm font-bold text-neutral-500 block">Établissement
              scolaire</label>
            <input id="etablissement" v-model="formFieldsLinkedWithApi.etablissement"
              @input="validateInput(formFieldsLinkedWithApi.etablissement, 'etablissement')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.etablissement !== ''" class="text-xs font-semibold text-red-700 p-2">{{
              fieldsToValidate.etablissement }}</span>
          </div>

          <!-- CHAMP SECTEUR D'ACTIVITÉS POUR LES DEMANDES -->
          <div v-if="isRequest" class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="activitySector" class="text-sm font-bold text-neutral-500 block ml-3   focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">Secteur
              d'activité</label>
            <select id="activitySector" v-model="formFieldsLinkedWithApi.activitySector"
              @change="validateSelect(formFieldsLinkedWithApi.activitySector, 'activitySector')"
              class="border border-gray-300 p-2 w-full rounded mt-1 focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option v-for="sector in allActivitySectorsResults" :key="sector._id" :value="sector.id">{{ sector.value
                }}</option>
            </select>
            <span v-if="fieldsToValidate.activitySector !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.activitySector }}</span>
          </div>

          <!-- CHAMP VILLE POUR LES DEMANDES -->
          <div v-if="isRequest" class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="city" class="text-sm font-bold text-neutral-500 block">Ville</label>
            <input id="city" v-model="formFieldsLinkedWithApi.city"
              @input="validateInput(formFieldsLinkedWithApi.city, 'city')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1  focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.city !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.city }}</span>
          </div>

          <!-- CHAMP PROVINCES POUR LES DEMANDES -->
          <div v-if="isRequest" class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="region" class="text-sm font-bold text-neutral-500 block">Province</label>
            <select id="region" v-model="formFieldsLinkedWithApi.region"
              @change="validateSelect(formFieldsLinkedWithApi.region, 'region')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1  focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option v-for="province in allProvincesResults" :key="province._id" :value="province.id">{{ province.value
                }}</option>
            </select>
            <span v-if="fieldsToValidate.region !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.region }}</span>
          </div>
        </div>

        <!-- CHAMP EXIGENCES POUR LES OFFRES -->
        <div v-if="!isRequest" class="grid grid-cols-1 border-l-4 border-gray-800 pl-2 m-2">
          <label for="requiredSkills" class="text-sm font-bold text-neutral-500 block">Exigences</label>
          <textarea id="requiredSkills" v-model="formFieldsLinkedWithApi.requiredSkills"
            @change="validateInput(formFieldsLinkedWithApi.requiredSkills, 'requiredSkills')"
            class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.requiredSkills !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.requiredSkills }}</span>
        </div>

        <!-- CHAMP COMPÉTENCES POUR LES DEMANDES -->
        <div v-if="isRequest" class="grid grid-cols-1 border-l-4 border-gray-800 pl-2 m-2">
          <label for="skills" class="text-sm font-bold text-neutral-500 block">Compétences</label>
          <textarea id="skills" v-if="isRequest" v-model="formFieldsLinkedWithApi.skills"
            @change="validateInput(formFieldsLinkedWithApi.skills, 'skills')"
            class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
            :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.skills !== ''" class="text-xs font-semibold text-red-700">{{
              fieldsToValidate.skills }}</span>
        </div>
        
        <!-- SECTION INFORMATION SUR LE STAGE  POUR LES DEMANDES ET LES OFFRES -->
        <p class=" text-base font-bold px-4 py-2 m-1" :class="isRequest ? ' text-teal-500' : 'text-red-800'">
          Information sur le stage</p>

        <!-- CHAMP TYPE DE STAGE  POUR LES DEMANDES ET LES OFFRES -->
        <div class="grid grid-cols-2 gap-4 items-baseline">
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="internshipType" class="text-sm font-bold text-neutral-500 block">Type de stage</label>
            <select id="internshipType" v-model="formFieldsLinkedWithApi.internshipType"
              @change="validateSelect(formFieldsLinkedWithApi.internshipType, 'internshipType')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1    focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option v-for="intership in allIntershipTypesResults" :key="intership._id" :value="intership.id">{{
              intership.value }}
              </option>
            </select>
            <span v-if="fieldsToValidate.internshipType !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.internshipType }}</span>
          </div>

          <!-- CHAMP DATE DE DÉBUT  POUR LES DEMANDES ET LES OFFRES -->
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="startDate" class="text-sm font-bold text-neutral-500 block">Date de début</label>
            <input id="startDate" v-model="formFieldsLinkedWithApi.startDate"
              @input="validateDate(formFieldsLinkedWithApi.startDate, 'startDate')" type="date"
              class="border border-gray-300 p-2 w-full rounded mt-1    focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.startDate !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.startDate }}</span>
          </div>

          <!-- CHAMP NOMBRE D'HEURES PAR SEMAINES LES DEMANDES ET LES OFFRES -->
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="weeklyWorkHours" class="text-sm font-bold text-neutral-500 block">Nombre d'heures par
              semaine</label>
            <input id="weeklyWorkHours" v-model="formFieldsLinkedWithApi.weeklyWorkHours"
              @input="validateNumber(formFieldsLinkedWithApi.weeklyWorkHours, 'weeklyWorkHours')" type="number"
              class="border border-gray-300 p-2 w-full rounded mt-1    focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.weeklyWorkHours !== ''" class="p-2 font-semibold text-xs text-red-700">{{
              fieldsToValidate.weeklyWorkHours }}</span>
          </div>

          <!-- CHAMP DATE DE FIN POUR LES DEMANDES ET LES OFFRES -->
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="endDate" class="text-sm font-bold text-neutral-500 block">Date de fin</label>
            <input id="endDate" v-model="formFieldsLinkedWithApi.endDate"
              @input="validateDate(formFieldsLinkedWithApi.endDate, 'endDate')" type="date"
              class="border border-gray-300 p-2 w-full rounded mt-1    focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.endDate !== ''" class="p-2 text-xs font-semibold text-red-700">{{
              fieldsToValidate.endDate }}</span>
          </div>
        </div>

        <!-- CHAMP RÉNUMÉRATION POUR LES DEMANDES ET LES OFFRES -->
        <div class="border-l-4 border-gray-800 pl-2 m-2">
          <label class="text-sm font-bold text-neutral-500 block mb-2">Rémunération</label>
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

        <!-- CHAMP INFORMATION SUPPLÉMENTAIRES POUR LES DEMANDES ET LES OFFRES -->
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

        <!-- SECTION TÉLÉCHARGEMENT POUR LES DEMANDES  -->
        <div v-if="isRequest" class="m-2  flex justify-between items-center">
          <div class="w-1/2 flex items-center">
            <input class="h-10 border border-gray-300 py-3 w-full rounded  hover:bg-teal-100  focus:bg-white">
            <button
              class="h-10 bg-neutral-300 text-white px-4 py-1 rounded hover:bg-neutral-400 text-center">Parcourir</button>
          </div>
          <button v-if="!isAdding" class="bg-teal-500 text-white p-2 m-1 rounded hover:bg-teal-600  focus:bg-white"><i
              class="fa-solid fa-cloud-arrow-down p-1"></i>Télécharger le C.V. </button>
        </div>

        <!-- BOUTONS D'ACTION  -->
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
import { reactive, ref, onMounted } from 'vue';
import { defineProps } from 'vue';
import { useActivitySectors } from '@/composables/secteurActivites';
import { useIntershipTypes } from '@/composables/typeStage';
import { useProvinces } from '@/composables/provinces';
import { useAllCandidates } from '@/composables/candidats';
import { useAllEnterprises } from '@/composables/entreprises';
import { useDemandesDeStages } from '@/composables/demandeDeStage';
import  router  from '../router/index';


// DÉCLARATION DES VARIABLES REQUISES POUR LES ROUTES ET LA RÉUTILISATION DU FORMULAIRE
// Props pour utiliser dans les routes vers le formulaire selon si c'est une demande ou un offre
const props = defineProps(['isRequest'])


//Variable pour déterminer si c'est un ajout ou une modification 
let isAdding = ref(true);

// UTILISATION DES COMPOSABLES POUR L'AFFICHAGE DES DONNÉES VENANT DE L'API //
//Fonction pour afficher les candidats venant de l'api
const { allCandidatesResults, getAllCandidates } = useAllCandidates();

onMounted(async () => {
  await getAllCandidates();
  console.log(allCandidatesResults);
})

//Fonction pour afficher les entreprises venant de l'api
const { allEnterprisesResults, getAllEnterprises } = useAllEnterprises();

onMounted(async () => {
  await getAllEnterprises();
  console.log(allEnterprisesResults);
})


//Fonction pour afficher les secteurs d'activités venant de l'api
const { allActivitySectorsResults, getAllActivitySectors } = useActivitySectors();

onMounted(async () => {
  await getAllActivitySectors();
  console.log(allActivitySectorsResults);
})


//Fonction pour afficher les provinces venant de l'api
const { allProvincesResults, getAllProvinces } = useProvinces();

onMounted(async () => {
  await getAllProvinces();
  console.log(allProvincesResults);
})

//Fonction pour afficher les types de stage venant de l'api
const { allIntershipTypesResults, getAllIntershipTypes } = useIntershipTypes();

onMounted(async () => {
  await getAllIntershipTypes();
  console.log(allIntershipTypesResults);
})
//Fonction pour afficher le nom et le titre de la demande venant de l'api
const {  demandeDeStageResult, getDemandeDeStagesById } = useDemandesDeStages();

onMounted(async () => {
  await getDemandeDeStagesById ();
  console.log(   demandeDeStageResult);
})

// REQUÊTE POUR ENVOYER LES DONNÉES À L'API
// Création des variables dans les formulaires à envoyer à l'api 
const formFieldsLinkedWithApi = reactive({
  title: '',
  enterprise: '',
  taskDescription: '',
  fullName: '',
  description: '',
  programme: '',
  requiredSkills: '',
  skills: '',
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
  additionalInformation: '',
});


// VALIDATION DES CHAMPS DES FORMULAIRES
//Variable pour effectuer la validation avant la soumission
let isFormValid = ref(false);

// Variables pour des messages d'erreur des formulaires 
const errorMessage = reactive({
  empty: 'Le champ ne peut pas être vide',
  minCharacters: 'Le champ doit avoir au moins 5 caractères',
  maxCharacters: 'Le champ ne peut pas dépasser 500 caractères',
  option: 'Le champ doit avoir une option valide',
  date: 'Le champ doit avoir une date valide.',
  pastDate: 'La date ne doit pas être dans le passé.',
  endDate: 'La date de fin ne peut pas être avant la date de début.',
  number: 'Le champ doit avoir une nombre positif valide.',
  radio: 'Le champ doit avoir au moins un choix.',
  letterOnly: 'Le champ doit comporter que des lettres minuscule ou majuscules.',
  maxHours: "Le nombre d'heures maximum est de 40."
});

// Variables des champs du formulaire pour effectuer la valifation 
const fieldsToValidate = reactive({
  title: '',
  enterprise: '',
  taskDescription: '',
  fullName: '',
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
  if (input.length > 500) {
    fieldsToValidate[field] = errorMessage.maxCharacters;
    return errorMessage.maxCharacters;
  }
  return '';
}

// Fonction pour valider le champ de type select
function validateSelect(select, field) {
  if (select.trim() === "") {
    fieldsToValidate[field] = errorMessage.option;
    return errorMessage.option;
  }
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
  return '';
}


// Fonction pour valider les champs de type radio
function validatePaid(value) {
  if (value !== 'DISCRETIONARY' && value !== 'PAID' && value !== 'UNPAID') {
    fieldsToValidate.paid = errorMessage.radio;
    return errorMessage.radio;
  }
  return '';
}


// Fonction pour soumettre le formulaire 
const submitForm = (e) => {
  e.preventDefault();
  fieldsToValidate.title = validateInput(formFieldsLinkedWithApi.title, 'title');
  fieldsToValidate.fullName = validateSelect(formFieldsLinkedWithApi.fullName, 'fullName');
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
   /*  router.push(props.isRequest ? '/app/demandesdestages' : '/app/offresdestages'); */
  }

};



// Fonction pour réinitialiser le formulaire
const resetForm = () => {
  formFieldsLinkedWithApi.additionalInformation = '';
  for (let key in formFieldsLinkedWithApi) {
    formFieldsLinkedWithApi[key] = '';
  }
  for (let key in fieldsToValidate) {
    fieldsToValidate[key] = '';
  }
 
  router.push(props.isRequest ? '/app/demandesdestages' : '/app/offresdestages');
};
</script>

<style scoped></style>