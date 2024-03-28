<template>
  <div class="bg-neutral-100 w-full">
    <!-- ENTÊTE -->
    <!-- ENTÊTE POUR LES AJOUTS  -->
    <h1 v-if="isAdding" class="text-4xl font-bold text-neutral-500 "
      :class="{ 'border-l-4 pl-2 my-5 border-yellow-600': isRequest, 'border-l-4 pl-2 my-5 border-red-800': !isRequest }">
      {{ isRequest ? 'Ajouter une demande de stage' : 'Ajouter une offre de stage' }}</h1>
    <!-- ENTÊTE POUR LES MODIFICATIONS -->
    <div v-if="!isAdding" class="grid grid-cols-1 "
      :class="{ 'border-l-4 pl-2 my-5 border-yellow-600': isRequest, ' border-l-4 pl-2 my-5 border-red-800': !isRequest }">
      <p class=" text-base font-bold text-neutral-500">
        {{ isRequest ? 'Demande de stage' : 'Offre de stage' }}</p>
      <p class="text-4xl font-bold text-neutral-500">Titre</p>
      <p class="font-extrabold  text-neutral-500 bg-white p-2 m-1 w-fit rounded" v-if="!isRequest">Entreprise</p>
    </div>
    <!-- FORMULAIRE  -->
    <form class="m-[25px]">
      <!-- BOUTONS D'ACTION -->
      <div>
        <div class="flex justify-end items-center px-2">
          <button class="bg-neutral-300 text-white px-4 py-2 m-1 rounded hover:bg-neutral-400"
            @click="resetForm(isRequest)">Annuler</button>
          <button
            :class="isRequest ? 'bg-yellow-600 text-white px-4 py-2 m-1 rounded hover:bg-yellow-700' : 'bg-red-800 text-white px-4 py-2 m-1 rounded hover:bg-red-900'"
            @click="submitForm"><i class="fa-solid fa-floppy-disk p-1"></i>{{ isAdding ? 'Sauvegarder' : 'Mettre à jour'
            }}</button>
        </div>
        <div>

          <!-- CHAMP TITRE POUR LES DEMANDES ET OFFRES -->
          <div v-if="isAdding" class="flex items-baseline mt-5">
            <label for="title" class="text-base text-center font-bold text-neutral-500 block mr-4">Titre: </label>
            <input id="title" v-model="dataToSendToAPI.title" @input="validateInput(dataToSendToAPI.title, 'title')"
              type="text" class="border border-gray-300 p-2 w-full rounded focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
          </div>
          <span v-if="fieldsToValidate.title !== ''" class="text-xs font-semibold text-red-700">{{
      fieldsToValidate.title }}</span>
        </div>

        <!-- CHAMP ENTREPRISE POUR LES OFFRES  -->
        <div v-if="!isRequest && isAdding">
          <div class="flex items-baseline mt-5">
            <label for="enterprise" class="text-base font-bold text-neutral-500 block mr-4">Entreprise: </label>
            <select id="enterprise" v-model="dataToSendToAPI.enterprise"
              @change="validateSelect(dataToSendToAPI.enterprise, 'enterprise')" type="text"
              class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
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
        <div class="py-2">
          <div v-if="isRequest && isAdding" class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="candidateName" class="text-sm font-bold text-neutral-500  block">Nom et prénom</label>
            <select id="title" v-model="dataToSendToAPI.selectedCandidateId" @change="handleCandidateChange" type="text"
              class="border border-gray-300 p-2 w-full rounded focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option v-for="candidate in allCandidatesResults" :key="candidate._id" :value="candidate._id">{{
      candidate.firstName }} {{ candidate.lastName }}</option>
            </select>
            <span v-if="fieldsToValidate.selectedCandidateId !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.candidateName
    }}</span>
          </div>
        </div>


        <!-- CHAMP CANDIDAT POUR LES DEMANDES EN MODIFICATION -->
        <div v-if="isRequest && !isAdding" class="border-l-4 border-gray-800 pl-2 m-2">
          <label for="candidateName" class="text-sm font-bold text-neutral-500  block">Candidat</label>
          <input id="title" class="border border-gray-300 p-2 w-full rounded focus:bg-white">
        </div>

        <!-- CHAMP PRÉSENTATION POUR LES DEMANDES  -->
        <div v-if="isRequest" class="grid grid-cols-1 border-l-4 border-gray-800 pl-2 m-2">
          <label for="description" class="text-sm font-bold text-neutral-500  block">Présentation</label>
          <textarea id="description" v-if="isRequest" v-model="dataToSendToAPI.description"
            @change="validateInput(dataToSendToAPI.description, 'description')"
            class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
            :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.description !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.description }}</span>
        </div>

        <!-- CHAMP DESCRIPTION DES TÂCHES POUR LES OFFRES  -->
        <div v-if="!isRequest" class="grid grid-cols-1 border-l-4 border-gray-800 pl-2 m-2">
          <p class="text-4xl font-bold text-red-800">Description des tâches</p>
          <textarea id="taskDescription" v-model="dataToSendToAPI.taskDescription"
            @change="validateInput(dataToSendToAPI.taskDescription, 'taskDescription')"
            class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
            :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.taskDescription !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.taskDescription }}</span>
        </div>

        <!-- CHAMP PROGRAMME DE FORMATION  POUR LES DEMANDES ET OFFRES  -->
        <div class="grid grid-cols-2 gap-4">
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="programme" class="text-sm font-bold text-neutral-500 block">Programme de formation</label>
            <input id="programme" v-model="dataToSendToAPI.programme"
              @input="validateInput(dataToSendToAPI.programme, 'programme')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1   focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.programme !== ''" class="text-xs font-semibold text-red-700 p-2">{{
      fieldsToValidate.programme }}</span>
          </div>

          <!-- CHAMP ÉTABLISSEMENT  POUR LES DEMANDES  -->
          <div v-if="isRequest" class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="etablissement" class="text-sm font-bold text-neutral-500 block">Établissement
              scolaire</label>
            <input id="etablissement" v-model="dataToSendToAPI.etablissement"
              @input="validateInput(dataToSendToAPI.etablissement, 'etablissement')" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.etablissement !== ''" class="text-xs font-semibold text-red-700 p-2">{{
      fieldsToValidate.etablissement }}</span>
          </div>

          <!-- CHAMP SECTEUR D'ACTIVITÉS POUR LES DEMANDES -->
          <div v-if="isRequest" class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="activitySector" class="text-sm font-bold text-neutral-500 block ml-3   focus:bg-white"
              :class="{ 'hover:bg-teal-100': isRequest, 'hover:bg-red-100': !isRequest }">Secteur
              d'activité</label>
            <select id="activitySector" v-model="dataToSendToAPI.activitySector"
              @change="validateSelect(dataToSendToAPI.activitySector, 'activitySector')"
              class="border border-gray-300 p-2 w-full rounded mt-1 focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option v-for="sector in allActivitySectorsResults" :key="sector._id" :value="sector.id">{{ sector.value
                }}</option>
            </select>
            <span v-if="fieldsToValidate.activitySector !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.activitySector }}</span>
          </div>

          <!-- CHAMP VILLE POUR LES DEMANDES -->
          <div v-if="isRequest" class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="city" class="text-sm font-bold text-neutral-500 block">Ville</label>
            <input id="city" v-model="dataToSendToAPI.city" @input="validateInput(dataToSendToAPI.city, 'city')"
              type="text" class="border border-gray-300 p-2 w-full rounded mt-1  focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.city !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.city }}</span>
          </div>


          <!-- CHAMP PROVINCES POUR LES DEMANDES -->
          <div v-if="isRequest" class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="province" class="text-sm font-bold text-neutral-500 block">Province</label>
            <select id="province" v-model="dataToSendToAPI.province" @change="handleProvinceChange" type="text"
              class="border border-gray-300 p-2 w-full rounded mt-1 focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option v-for="province in allProvincesResults" :key="province._id" :value="province._id">{{ province.value }}</option>
            </select>
            <span v-if="fieldsToValidate.province !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.province }}</span>
          </div>
        </div>

        <!-- CHAMP EXIGENCES POUR LES OFFRES -->
        <div v-if="!isRequest" class="grid grid-cols-1 border-l-4 border-gray-800 pl-2 m-2">
          <label for="requiredSkills" class="text-sm font-bold text-neutral-500 block">Exigences</label>
          <textarea id="requiredSkills" v-model="dataToSendToAPI.requiredSkills"
            @change="validateInput(dataToSendToAPI.requiredSkills, 'requiredSkills')"
            class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
            :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.requiredSkills !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.requiredSkills }}</span>
        </div>

        <!-- CHAMP COMPÉTENCES POUR LES DEMANDES -->
        <div v-if="isRequest" class="grid grid-cols-1 border-l-4 border-gray-800 pl-2 m-2">
          <label for="skills" class="text-sm font-bold text-neutral-500 block">Compétences</label>
          <textarea id="skills" v-if="isRequest" v-model="dataToSendToAPI.skills"
            @change="validateInput(dataToSendToAPI.skills, 'skills')"
            class="border border-gray-300 p-2 w-full rounded  focus:bg-white"
            :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.skills !== ''" class="text-xs font-semibold text-red-700">{{
      fieldsToValidate.skills }}</span>
        </div>

        <!-- SECTION INFORMATION SUR LE STAGE  POUR LES DEMANDES ET LES OFFRES -->
        <p class=" text-base font-bold px-4 py-2 m-1" :class="isRequest ? ' text-yellow-600' : 'text-red-800'">
          Information sur le stage</p>

        <!-- CHAMP TYPE DE STAGE  POUR LES DEMANDES ET LES OFFRES -->
        <div class="grid grid-cols-2 gap-4 items-baseline">
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="internshipType" class="text-sm font-bold text-neutral-500 block">Type de stage</label>
            <select id="internshipType" v-model="dataToSendToAPI.internshipType" @change="handleInternshipTypeChange"
              type="text" class="border border-gray-300 p-2 w-full rounded mt-1 focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
              <option v-for="intership in  allIntershipTypesResults" :key="intership._id" :value="intership._id"
                :data-id="intership.id">{{ intership.value }}</option>
            </select>
            <span v-if="fieldsToValidate.internshipType !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.internshipType }}</span>
          </div>

          <!-- CHAMP DATE DE DÉBUT  POUR LES DEMANDES ET LES OFFRES -->
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="startDate" class="text-sm font-bold text-neutral-500 block">Date de début</label>
            <input id="startDate" v-model="dataToSendToAPI.startDate"
              @input="validateDate(dataToSendToAPI.startDate, 'startDate')" type="date"
              class="border border-gray-300 p-2 w-full rounded mt-1    focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.startDate !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.startDate }}</span>
          </div>

          <!-- CHAMP NOMBRE D'HEURES PAR SEMAINES LES DEMANDES ET LES OFFRES -->
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="weeklyWorkHours" class="text-sm font-bold text-neutral-500 block">Nombre d'heures par
              semaine</label>
            <input id="weeklyWorkHours" v-model="dataToSendToAPI.weeklyWorkHours"
              @input="validateNumber(dataToSendToAPI.weeklyWorkHours, 'weeklyWorkHours')" type="number"
              class="border border-gray-300 p-2 w-full rounded mt-1    focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.weeklyWorkHours !== ''" class="p-2 font-semibold text-xs text-red-700">{{
      fieldsToValidate.weeklyWorkHours }}</span>
          </div>

          <!-- CHAMP DATE DE FIN POUR LES DEMANDES ET LES OFFRES -->
          <div class="border-l-4 border-gray-800 pl-2 m-2">
            <label for="endDate" class="text-sm font-bold text-neutral-500 block">Date de fin</label>
            <input id="endDate" v-model="dataToSendToAPI.endDate"
              @input="validateDate(dataToSendToAPI.endDate, 'endDate')" type="date"
              class="border border-gray-300 p-2 w-full rounded mt-1    focus:bg-white"
              :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
            <span v-if="fieldsToValidate.endDate !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.endDate }}</span>
          </div>
        </div>

        <!-- CHAMP RÉNUMÉRATION POUR LES DEMANDES ET LES OFFRES -->
        <div class="border-l-4 border-gray-800 pl-2 m-2">
          <label class="text-sm font-bold text-neutral-500 block mb-2">Rémunération</label>
          <input id="discretionary" v-model="dataToSendToAPI.paid" @change="validatePaid(dataToSendToAPI.paid, 'paid')"
            value="DISCRETIONARY" type="radio" class="mr-2 ml-3 rounded "
            :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
          <label for="discretionary">À discuter</label><br>
          <input id="paid" v-model="dataToSendToAPI.paid" @change="validatePaid(dataToSendToAPI.paid, 'paid')"
            value="PAID" type="radio" class="mr-2 ml-3 rounded 0 "
            :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
          <label for="paid">Stage rémunéré</label><br>
          <input id="unpaid" v-model="dataToSendToAPI.paid" @change="validatePaid(dataToSendToAPI.paid, 'paid')"
            value="UNPAID" type="radio" class="mr-2 ml-3 rounded  "
            :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }">
          <label for="unpaid">Stage non rémunéré</label><br>
          <span v-if="fieldsToValidate.paid !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.paid }}</span>
        </div>

        <!-- CHAMP INFORMATION SUPPLÉMENTAIRES POUR LES DEMANDES ET LES OFFRES -->
        <div class="m-2">
          <label for="additionalInformation" class="text-sm font-bold"
            :class="isRequest ? ' text-yellow-600' : 'text-red-800'">Information supplémentaire</label>
          <textarea id="additionalInformation" v-model="dataToSendToAPI.additionalInformation"
            @change="validateInput(dataToSendToAPI.additionalInformation, 'additionalInformation')"
            class="border border-gray-300 p-2 w-full  rounded   focus:bg-white"
            :class="{ 'hover:bg-yellow-100': isRequest, 'hover:bg-red-100': !isRequest }"></textarea>
          <span v-if="fieldsToValidate.additionalInformation !== ''" class="p-2 text-xs font-semibold text-red-700">{{
      fieldsToValidate.additionalInformation }}</span>
        </div>

        <!-- SECTION TÉLÉCHARGEMENT POUR LES DEMANDES  -->
        <div v-if="isRequest" class="m-2  flex justify-between items-center">
          <div class="w-1/2 flex items-center">
            <input class="h-10 border border-gray-300 py-3 w-full rounded  hover:bg-yellow-100  focus:bg-white">
            <button
              class="h-10 bg-neutral-300 text-white px-4 py-1 rounded hover:bg-neutral-400 text-center">Parcourir</button>
          </div>
          <button v-if="!isAdding"
            class="bg-yellow-600 text-white p-2 m-1 rounded hover:bg-yellow-700  focus:bg-white"><i
              class="fa-solid fa-cloud-arrow-down p-1"></i>Télécharger le C.V. </button>
        </div>

        <!-- BOUTONS D'ACTION  -->
        <div class="flex justify-end my-5 pb-10">
          <button class="bg-neutral-300 text-white px-4 py-2 m-1 rounded hover:bg-neutral-400"
            @click="resetForm">Annuler</button>
          <button
            :class="isRequest ? 'bg-yellow-600 text-white px-4 py-2 m-1 rounded hover:bg-yellow-700' : 'bg-red-800 text-white px-4 py-2 m-1 rounded hover:bg-red-900'"
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
import { useAllCandidates, useCandidate } from '@/composables/candidats';
import { useAllEnterprises } from '@/composables/entreprises';
import router from '../router/index';
import { useRoute } from 'vue-router'
import axios from 'axios'


// DÉCLARATION DES VARIABLES REQUISES POUR LES ROUTES ET LA RÉUTILISATION DU FORMULAIRE
// Props pour utiliser dans les routes vers le formulaire selon si c'est une demande ou un offre
const props = defineProps(['isRequest'])


//Variable pour déterminer si c'est un ajout ou une modification 
let isAdding = ref(true);

//Variable pour utliser dans les routes et configurer avec un paramèteres
const route = useRoute();


// UTILISATION DES COMPOSABLES POUR L'AFFICHAGE DES DONNÉES VENANT DE L'API OU LEUR ENVOI À L'API //
const { allCandidatesResults, getAllCandidates } = useAllCandidates();
const { candidateResult, getCandidateById } = useCandidate();
const { allEnterprisesResults, getAllEnterprises } = useAllEnterprises();
const { allActivitySectorsResults, getAllActivitySectors } = useActivitySectors();
const { allProvincesResults, getAllProvinces } = useProvinces();
const { allIntershipTypesResults, getAllIntershipTypes } = useIntershipTypes();

// si on veut réutiliser l'id partout dans le code déclarer une variable ici 


onMounted(async () => {
  //lorsqu'on passera un id en param passer le tout ici  
  const id = route.params.id;

  if (props.isRequest) {
    await getAllCandidates();
    console.log(allCandidatesResults);
    await getAllActivitySectors();
    console.log(allActivitySectorsResults);
    await getAllProvinces();
    console.log(allProvincesResults);
    await getAllIntershipTypes();
    console.log(allIntershipTypesResults);

  } else {
    await getAllEnterprises();
    console.log(allEnterprisesResults);
    await getAllActivitySectors();
    console.log(allActivitySectorsResults);
    await getAllProvinces();
    console.log(allProvincesResults);
    await getAllIntershipTypes();
    console.log(allIntershipTypesResults);
  }
})


// REQUÊTE POUR ENVOYER LES DONNÉES À L'API
// Création des variables dans les formulaires à envoyer à l'api 
const dataToSendToAPI = reactive({
  title: '',
  enterprise: '',
  taskDescription: '',
  candidateName: '',
  description: '',
  programme: '',
  requiredSkills: '',
  skills: '',
  etablissement: '',
  activitySector: '',
  city: '',
  province: '',
  internshipType: '',
  startDate: '',
  weeklyWorkHours: '',
  endDate: '',
  paid: '',
  additionalInformation: '',
  selectedCandidateId: '',
});



// VALIDATION DES CHAMPS DES FORMULAIRES


// Variables pour des messages d'erreur des formulaires 
const errorMessage = reactive({
  empty: 'Le champ ne peut pas être vide',
  minCharacters: 'Le champ doit avoir au moins 5 caractères',
  maxCharacters: 'Le champ ne peut pas dépasser 500 caractères',
  option: 'Le champ doit avoir une option valide',
  province: "Veuillez sélectionner une province",
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
  candidateName: '',
  description: '',
  programme: '',
  requiredSkills: '',
  etablissement: '',
  activitySector: '',
  city: '',
  province: '',
  skills: '',
  internshipType: '',
  startDate: '',
  weeklyWorkHours: '',
  endDate: '',
  paid: '',
  additionalInformation: '',
  selectedCandidateId: '',
  selectedProvinceId: '',
  selectedInternshipTypeId: ''
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
  fieldsToValidate[field] = "";
}

// Fonction pour valider le champ de type select
// Fonction pour valider le champ de type select
function validateSelect(select, field) {
  if (select === "") {
    fieldsToValidate[field] = errorMessage.option;
    return errorMessage.option;
  }
  fieldsToValidate[field] = "";
}






// Fonction pour valider les champs de type date
function validateDate(input, field) {
  const selectedDate = new Date(input);
  const startDate = new Date(dataToSendToAPI.startDate);
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
}


// Fonction pour valider les champs de type radio
function validatePaid(value, field) {
  if (value !== 'DISCRETIONARY' && value !== 'PAID' && value !== 'UNPAID') {
    fieldsToValidate.paid = errorMessage.radio;
    return errorMessage.radio;
  }
  fieldsToValidate[field] = "";
}

//Variable pour effectuer la validation avant la soumission
let isFormValid = ref(false);

// Fonction pour effectuer toutes les validations 
const validateForm = () => {

  fieldsToValidate.title = validateInput(dataToSendToAPI.title, 'title');
  fieldsToValidate.selectedCandidateId = validateSelect(dataToSendToAPI.selectedCandidateId, 'selectedCandidateId');
  fieldsToValidate.description = validateInput(dataToSendToAPI.description, 'description');
  fieldsToValidate.programme = validateInput(dataToSendToAPI.programme, 'programme');
  fieldsToValidate.etablissement = validateInput(dataToSendToAPI.etablissement, 'etablissement');
  fieldsToValidate.city = validateInput(dataToSendToAPI.city, 'city');
  fieldsToValidate.skills = validateInput(dataToSendToAPI.skills, 'skills');
  fieldsToValidate.activitySector = validateSelect(dataToSendToAPI.activitySector, 'activitySector');
  fieldsToValidate.province = validateSelect(dataToSendToAPI.province, 'province');
  fieldsToValidate.internshipType = validateSelect(dataToSendToAPI.internshipType, 'internshipType');
  fieldsToValidate.startDate = validateDate(dataToSendToAPI.startDate, 'startDate');
  fieldsToValidate.endDate = validateDate(dataToSendToAPI.endDate, 'endDate');
  fieldsToValidate.weeklyWorkHours = validateNumber(dataToSendToAPI.weeklyWorkHours, 'weeklyWorkHours');
  fieldsToValidate.paid = validatePaid(dataToSendToAPI.paid, 'paid');
  fieldsToValidate.additionalInformation = validateInput(dataToSendToAPI.additionalInformation, 'additionalInformation');
  fieldsToValidate.enterprise = validateSelect(dataToSendToAPI.enterprise, 'enterprise');
  fieldsToValidate.taskDescription = validateInput(dataToSendToAPI.taskDescription, 'taskDescription');
  fieldsToValidate.requiredSkills = validateInput(dataToSendToAPI.requiredSkills, 'requiredSkills');

  isFormValid.value = Object.values(fieldsToValidate).every(value => value === '');
  if (isFormValid.value) {
    for (let key in fieldsToValidate) {
      fieldsToValidate[key] = '';
    }
    console.log('The form is valid!')
  }
};

//Fonction pour soumettre le formulaire 

// Initialiser les références réactives
let selectedCandidate = ref(null);
let selectedProvince = ref(null);
let selectedInternshipType = ref(null);

const handleCandidateChange = (event) => {
  const selectedCandidateId = event.target.value;

  const selectedCandidateObj = allCandidatesResults.find(candidate => candidate._id === selectedCandidateId);

  if (selectedCandidateObj) {
    selectedCandidate.value = selectedCandidateObj;
  } else {
    console.error('Candidate not found in allCandidatesResults');
  }
};

const handleProvinceChange = (event) => {
  const selectedProvinceId = event.target.value;

  const selectedProvinceObj = allProvincesResults.find(province => province._id === selectedProvinceId);

  if (selectedProvinceObj) {
    selectedProvince.value = selectedProvinceObj;
  } else {
    console.error('Province not found in allProvincesResults');
  }
};

const handleInternshipTypeChange = (event) => {
  const selectedInternshipTypeId = event.target.value;

  const selectedInternshipTypeObj = allIntershipTypesResults.find(type => type._id === selectedInternshipTypeId);

  if (selectedInternshipTypeObj) {
    selectedInternshipType.value = selectedInternshipTypeObj;
  } else {
    console.error('Intershiptype not found in allIntershipTypesResults');
  }
};



const submitForm = () => {
  event.preventDefault();
  validateForm();

  if (isFormValid) {
    handleFormData();
    console.log("Form submitted successfully");
  } else {
    console.error("Form is invalid");
  }

};




// Fonction pour envoyer les données à l'api 
const sendRequest = async (formData) => {
  try {
    const response = await axios.post('https://api-4.fly.dev/internship-requests', formData)
    console.log('Reponse:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
  //router.push(props.isRequest ? '/app/demandesdestages' : '/app/offresdestages'); 
}

const handleFormData = async () => {
  if (selectedCandidate.value) {
    const formDataRequest = {
      title: dataToSendToAPI.title,
      description: dataToSendToAPI.description,
      candidate: {
        _id: selectedCandidate.value._id,
        description: selectedCandidate.value.description,
        email: selectedCandidate.value.email,
        firstName: selectedCandidate.value.firstName,
        lastName: selectedCandidate.value.lastName,
        address: selectedCandidate.value.address,
        phone: selectedCandidate.value.phone,
        city: selectedCandidate.value.city,
        postalCode: selectedCandidate.value.postalCode,
        province: selectedCandidate.value.province,
        skills: selectedCandidate.value.skills
      },
      startDate: new Date(dataToSendToAPI.startDate).toISOString(),
      endDate: new Date(dataToSendToAPI.endDate).toISOString(),
      weeklyWorkHours: dataToSendToAPI.weeklyWorkHours,
      skills: dataToSendToAPI.skills,
      province: selectedProvince.value,
      internshipType: selectedInternshipType.value,
      additionalInformation: dataToSendToAPI.additionalInformation,
      isActive: false
    };
    await sendRequest(formDataRequest);
    console.log(formDataRequest);
  } else {
    console.error('Selected candidate is not valid');
  }
};





// Fonction pour réinitialiser le formulaire
const resetForm = () => {
  dataToSendToAPI.additionalInformation = '';
  for (let key in dataToSendToAPI) {
    dataToSendToAPI[key] = '';
  }
  for (let key in fieldsToValidate) {
    fieldsToValidate[key] = '';
  }

  router.push(props.isRequest ? '/app/demandesdestages' : '/app/offresdestages');
};
</script>

<style scoped></style>