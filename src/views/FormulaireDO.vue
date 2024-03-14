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

        <label for="title" class="block mb-2">Titre: </label>
        <input id="title" v-model="title" type="text" class="border border-gray-300 p-2 w-full mb-6">
      

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
        <input id="nomComplet" v-model="nomComplet" class="border border-gray-300 p-2 w-full mb-6"></input>



        <label for="description" class="block mb-2">Présensention</label>
        <textarea id="description" v-model="description" class="border border-gray-300 p-2 w-full mb-6"></textarea>
       


        <div>
          <label for="programme" class="block mb-2">Programme de formation</label>
          <input id="programme" v-model="programme" type="text" class="border border-gray-300 p-2 w-full mb-6">
        


   <!--        <label for="requiredSkills" class="block mb-2">Exigences</label>
          <textarea id="requiredSkills" v-model="requiredSkills" class="border border-gray-300 p-2 w-full mb-6"></textarea> -->
       


          <label for="etablissement" class="block mb-2">Établissement scolaire</label>
          <input id="etablissement" v-model="etablissement" type="text" class="border border-gray-300 p-2 w-full mb-6">
 


          <label for="activitySector" class="block mb-2">Secteur d'activité</label>
          <Select id="activitySector" v-model="activitySector" type="text"
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

        </div>

        <label for="city" class="block mb-2">Ville</label>
        <input id="city" v-model="city" class="border border-gray-300 p-2 w-full mb-6"></input>



        <label for="region" class="block mb-2">Région</label>
        <Select id="region" v-model="region" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <option value="option1"></option>
          <option value="option2">Québec</option>
          <option value="option3">Trois-Rivière</option>
          <option value="option4">Montréal</option>
          <option value="option5">Sherbrooke</option>
          <option value="option6">Gatineau</option>
        </select>
       
      </div>

      <label for="skills" class="block mb-2">Compétences</label>
      <textarea id="skills" v-model="skills" class="border border-gray-300 p-2 w-full mb-6"></textarea>
     


      <h2 class="p-2 w-full mb-6">Information sur le stage</h2>
      <label for="intershipType" class="block mb-2">Type de stage</label>
      <select id="intershipType" v-model="intershipType" class="border border-gray-300 p-2 w-full mb-6">
        <option value="option1"></option>
        <option value="option2">Temps plein</option>
        <option value="option3">Temps partiel</option>
      </select>
  


      <label for="startDate" class="block mb-2">Date de début</label>
      <input id="startDate" v-model="startDate" type="date" class="border border-gray-300 p-2 w-full mb-6">
      


      <label for="weeklyWorkHours" class="block mb-2">Nombre d'heures par semaine</label>
      <input id="weeklyWorkHours" v-model="weeklyWorkHours" type="number" class="border border-gray-300 p-2 w-full mb-6">


      <label for="endDate" class="block mb-2">Date de fin</label>
      <input id="endDate" v-model="endDate" type="date" class="border border-gray-300 p-2 w-full mb-6">
 


      <h2 class="p-2 w-full mb-2">Rémumération</h2>
      <input id="aDiscuter" v-model="aDiscuter" type="checkbox" class="mr-2">
      <label for="aDiscuter">À discuter</label><br>
      <input id="remunere" v-model="remunere" type="checkbox" class="mr-2">
      <label for="remunere">Stage rémunéré</label><br>
      <input id="nonRemunere" v-model="nonRemunere" type="checkbox" class="mr-2">
      <label for="nonRemunere">Stage non rémunéré</label><br>



      <label for="additionalInformatione" class="p-2 w-full mb-2">Information supplémentaire</label>
      <textarea id="additionalInformation" v-model="additionalInformation"
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
import { reactive, ref } from 'vue';
// Création des variables requises pour la validation du formulaire

const formFields = reactive({
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
  weeklyWorkHourse: '',
  endDate: '',
  aDiscuter: '',
  remunere: '',
  nonRemunere: '',
  additionalInformation: ''
});

const errorMessage = reactive({
  empty: 'Le champ ne peut pas être vide',
  minCharacters: 'Le champ doit avoir au moins 5 caractères',
  maxCharacters: 'Le champ ne peut pas dépasser 100 caractères',
});

const fieldsToValidate = reactive({
  titre: '',
  entreprise: '',
  nomComplet: '',
  presentation: '',
  programme: '',
  exigences: '',
  etablissement: '',
  secteurActivite: '',
  ville: '',
  region: '',
  competences: '',
  typeStage: '',
  dateDebut: '',
  heuresSemaine: '',
  dateFin: '',
  aDiscuter: '',
  remunere: '',
  nonRemunere: '',
  infoSupplementaire: ''
});

let validRequestForm = ref(false)

// Fonction pour valider les champs de type input 

function validateInput(input, inputName) {
  if (input === '') {
    formFields[inputName] = errorMessage.vide;
    return;
  }
  if (input.length < 5) {
    formFields[inputName] = errorMessage.minCharacters;
    return;
  }
  if (input.length > 100) {
    formFields[inputName] = errorMessage.maxCharacters;
    return;
  }
  formFields[inputName] = '';
}

// Fonction pour soumettre le formulaire 

const submitResquest = () => {
  event.preventDefault();
  validateInput(formFields.title, 'title');
  validateInput(formFields.nomComplet, 'nomComplet');
  validateInput(formFields.presentation, 'presentation');
  validateInput(formFields.programme, 'programme');
  validateInput(formFields.etablissement, 'etablissement');
  validateInput(formFields.city, 'city');
  validateInput(formFields.skills, 'skills');
  validateInput(formFields.additionalInformation, 'additionalInformation');

  if (
    fieldsToValidate.title === '' && 
    fieldsToValidate.nomComplet === '' && 
    fieldsToValidate.description=== '' && 
    fieldsToValidate.programme === '' && 
    fieldsToValidate.etablissement === '' &&
    fieldsToValidate.city=== '' && 
    fieldsToValidate.skills === '' && 
    fieldsToValidate.additionalInformation === ''  
     ) {
      fvalidRequestForm = true;
     } else {
      validRequestForm = false;
     }
};

// Fonction pour annuler le formulaire 
const cancelRequest = () => {
      
    };

</script>

<style></style>