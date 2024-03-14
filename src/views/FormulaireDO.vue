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
        <span v-if="champsFormulaire.titre !== ''" class="pt-2 text-xs text-red-700">{{ champsFormulaire.titre }}</span>

<!-- 
        <label for="entreprises" class="block mb-2">Entreprise: </label>
        <Select id="entreprises" v-model="entreprises" type="text" class="border border-gray-300 p-2 w-full mb-6">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select> -->

      </div>



      <div>
        <label for="nomComplet" class="block mb-2">Nom et prénom</label>
        <input id="nomComplet" v-model="nomComplet" class="border border-gray-300 p-2 w-full mb-6"></input>



        <label for="presentation" class="block mb-2">Présensention</label>
        <textarea id="presentation" v-model="presentation" class="border border-gray-300 p-2 w-full mb-6"></textarea>
       


        <div>
          <label for="programme" class="block mb-2">Programme de formation</label>
          <input id="programme" v-model="programme" type="text" class="border border-gray-300 p-2 w-full mb-6">
        


   <!--        <label for="exigences" class="block mb-2">Exigences</label>
          <textarea id="exigences" v-model="exigences" class="border border-gray-300 p-2 w-full mb-6"></textarea> -->
       


          <label for="etablissement" class="block mb-2">Établissement scolaire</label>
          <input id="etablissement" v-model="etablissement" type="text" class="border border-gray-300 p-2 w-full mb-6">
 


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

        </div>

        <label for="ville" class="block mb-2">Ville</label>
        <input id="ville" v-model="ville" class="border border-gray-300 p-2 w-full mb-6"></input>



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

      <label for="competences" class="block mb-2">Compétences</label>
      <textarea id="competences" v-model="competences" class="border border-gray-300 p-2 w-full mb-6"></textarea>
     


      <h2 class="p-2 w-full mb-6">Information sur le stage</h2>
      <label for="typeStage" class="block mb-2">Type de stage</label>
      <select id="typeStage" v-model="typeStage" class="border border-gray-300 p-2 w-full mb-6">
        <option value="option1"></option>
        <option value="option2">Temps plein</option>
        <option value="option3">Temps partiel</option>
      </select>
  


      <label for="dateDebut" class="block mb-2">Date de début</label>
      <input id="dateDebut" v-model="dateDebut" type="date" class="border border-gray-300 p-2 w-full mb-6">
      


      <label for="heuresSemaine" class="block mb-2">Nombre d'heures par semaine</label>
      <input id="heuresSemaine" v-model="heuresSemaine" type="number" class="border border-gray-300 p-2 w-full mb-6">


      <label for="dateFin" class="block mb-2">Date de fin</label>
      <input id="dateFin" v-model="dateFin" type="date" class="border border-gray-300 p-2 w-full mb-6">
 


      <h2 class="p-2 w-full mb-2">Rémumération</h2>
      <input id="aDiscuter" v-model="aDiscuter" type="checkbox" class="mr-2">
      <label for="aDiscuter">À discuter</label><br>
      <input id="remunere" v-model="remunere" type="checkbox" class="mr-2">
      <label for="remunere">Stage rémunéré</label><br>
      <input id="nonRemunere" v-model="nonRemunere" type="checkbox" class="mr-2">
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
import { reactive, ref } from 'vue';
// Création des variables requises pour la validation du formulaire

const informationFormulaire = reactive({
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

const erreurMessage = reactive({
  vide: 'Le champ ne peut pas être vide',
  minCaracteres: 'Le champ doit avoir au moins 5 caractères',
  maxCaracteres: 'Le champ ne peut pas dépasser 100 caractères',
  choixAFaire: '',
  unChoixSeulement: ''
});

const champsFormulaire = reactive({
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

let formulaireValide = ref(false)

// Fonction pour valider les champs de type input 

function validationChampInput(input, nomInput) {
  if (input === '') {
    informationFormulaire[nomInput] = erreurMessage.vide;
    return;
  }
  if (input.length < 5) {
    informationFormulaire[nomInput] = erreurMessage.minCaracteres;
    return;
  }
  if (input.length > 100) {
    informationFormulaire[nomInput] = erreurMessage.maxCaracteres;
    return;
  }
  informationFormulaire[nomInput] = '';
}

// Fonction pour soumettre le formulaire 

const soumettreFormulaireDO = () => {
  event.preventDefault();
  validationChampInput(champsFormulaire.titre, 'titre');
  validationChampInput(champsFormulaire.nomComplet, 'nomComplet');
  validationChampInput(champsFormulaire.presentation, 'presentation');
  validationChampInput(champsFormulaire.programme, 'programme');
  validationChampInput(champsFormulaire.etablissement, 'etablissement');
  validationChampInput(champsFormulaire.ville, 'ville');
  validationChampInput(champsFormulaire.competences, 'competences');
  validationChampInput(champsFormulaire.exigences, 'exigences');
  validationChampInput(champsFormulaire.infoSupplementaire, 'infoSupplementaire');

  if (
    informationFormulaire.titre === '' && 
    informationFormulaire.nomComplet === '' && 
    informationFormulaire.presentation === '' && 
    informationFormulaire.presentation === '' &&
    informationFormulaire.programme === '' && 
    informationFormulaire.etablissement === '' &&
    informationFormulaire.ville === '' && 
    informationFormulaire.competences === '' && 
    informationFormulaire.exigences === '' &&
    informationFormulaire.infoSupplementaire === ''  
     ) {
      formulaireValide = true;
     } else {
      formulaireValide = false;
     }
};

</script>

<style></style>