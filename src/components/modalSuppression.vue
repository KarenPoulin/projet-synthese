<template>
  <div
    class="fixed inset-0 flex items-center justify-center modal-container z-50 bg-transparent"
    style="background-color: rgba(0, 0, 0, 0.75)"
  >
    <div class="modal-content bg-white p-8 rounded-lg shadow-lg max-w-md">
      <!-- Message d'acceuil du modal -->
      <div class="donnees">
        <p v-if="isFicheDetailDemandeDeStage" class="text-red-600 text-xl mb-6">
          Voulez-vous vraiment supprimer cette demande de stage ?
        </p>

        <p
          v-else-if="isCandidate && !isFicheDetailDemandeDeStage"
          class="text-red-600 text-xl mb-6"
        >
          Voulez-vous vraiment supprimer ce candidat ou cette candidate ?
        </p>

        <p
          v-else-if="!isFicheDetailDemandeDeStage && !isCandidate"
          class="text-red-600 text-xl mb-6"
        >
          Voulez-vous vraiment supprimer cette entreprise ?
        </p>

        <p v-else class="text-red-600 text-xl mb-6">
          Voulez-vous vraiment supprimer cette offre de stage ?
        </p>

        <!-- Information du modal  -->
        <div>
          <dl class="mb-6">
            <div v-if="isFicheDetailDemandeDeStage">
              <dt class="font-bold text-gray-600">Titre du stage</dt>
              <dd>{{ titleDuStage }}</dd>
              <dt class="font-bold text-gray-600">Prénom du stagiaire</dt>
              <dd>{{ prenomDuStagiaire }}</dd>
              <dt class="font-bold text-gray-600">Nom du stagiaire</dt>
              <dd>{{ nomDuStagiaire }}</dd>
            </div>

            <div v-else-if="isCandidate && !isFicheDetailDemandeDeStage">
              <dt class="font-bold text-gray-600">
                Prénom du candidat ou de la candidate
              </dt>
              <dd>{{ prenomCandidate }}</dd>
              <dt class="font-bold text-gray-600">
                Nom du candidat ou de la candidate
              </dt>
              <dd>{{ nomCandidate }}</dd>
            </div>

            <div v-else-if="!isFicheDetailDemandeDeStage && !isCandidate">
              <dt class="font-bold text-gray-600">Nom de l'entreprise</dt>
              <dd>{{ nomDeEntreprise }}</dd>
            </div>

            <div v-else>
              <dt class="font-bold text-gray-600">Titre de l'offre</dt>
              <dd>{{ titleDeOffre }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="flex justify-end gap-5 mt-15 button-container">
        <button
          class="cancel-button bg-transparent border-none text-gray-700 hover:bg-gray-200 hover:text-gray-600 px-4 py-2 rounded-md text-base transition-colors duration-300"
          @click="annulerSuppression"
        >
          Annuler
        </button>
        <button
          class="delete-button bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded-md text-base transition-colors duration-300"
          @click="confirmerSuppression"
        >
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const {
  titleDuStage,
  prenomDuStagiaire,
  nomDuStagiaire,
  prenomCandidate,
  nomCandidate,
  etablissementEnseignement,
  titleDeOffre,
  nomDeEntreprise,
  modalSuppressionVisible,
  isCandidate,
  isFicheDetailDemandeDeStage,
} = defineProps({
  titleDuStage: String,
  prenomDuStagiaire: String,
  nomDuStagiaire: String,
  prenomCandidate: String,
  nomCandidate: String,
  etablissementEnseignement: String,
  titleDeOffre: String,
  nomDeEntreprise: String,
  modalSuppressionVisible: Boolean,
  isCandidate: Boolean,
  isFicheDetailDemandeDeStage: Boolean,
});

const emits = defineEmits(["suppressionAnnulee", "confirmationSuppression"]);

const annulerSuppression = () => {
  emits("suppressionAnnulee");
};

const confirmerSuppression = () => {
  emits("confirmationSuppression");
};
</script>
