<template>
       <div class="ficheDetaillee__card">
      <div class="ficheDetaillee__conteneur-informations">

        <div class="ficheDetaillee__conteneur-titre">
          <h2 class="ficheDetaillee__nom-personne">{{ firstName }} {{ lastName }}</h2> // Mettre des props  // Mettre une class de style conditionnelle
          <p>{{ description }}</p>  // Mettre des props
        </div>

        <!-- Cette div ne se repete que une fois, donc elle ne sera pas reutilisable-->
        <div class="ficheDetaillee__conteneur-informations-générales" > <!-- v-if pageDemandeDeStage -->
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Programme de formation</h3>
              <span class="ficheDetaillee__contenu-info">{{ title }} title</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Secteur dactivite</h3>
              <span class="ficheDetaillee__contenu-info">{{ title }} title</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Compétences</h3>
              <span class="ficheDetaillee__contenu-info">{{ skills }} skills</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Établissement d'enseignement</h3>
              <span class="ficheDetaillee__contenu-info">{{ address }} address</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Ville</h3>
              <span class="ficheDetaillee__contenu-info">{{ city }} city</span>
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Région</h3>
              <span class="ficheDetaillee__contenu-info">{{ province }} province</span>
            </div>
          </div>
        </div>

        <!-- Cette div se repete 2 fois, donc elle sera reutilisable-->
        <div class="ficheDetaillee__conteneur-titre">  <!-- v-if pageDemandeDeStage && pageOffreDeStage -->
            <h2 class="ficheDetaillee__titre-info-stage">Informations sur le stage recherché</h2> // props  <!--  :class="{ 'color-red-300': !pageDemandeDeStage}"-->
        </div>

        <div class="ficheDetaillee__conteneur-informations-specifiques"> 
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Type de stage</h3>
              <span class="ficheDetaillee__contenu-info">{{ internshipType }} internshipType</span> // props
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Nombre d'heures par semaine</h3>
              <span class="ficheDetaillee__contenu-info">{{ weeklyWorkHours }} weeklyWorkHours</span> props
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Rémunération</h3>
              <span class="ficheDetaillee__contenu-info">{{ weeklyWorkHours }} weeklyWorkHours</span> props
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Date de début</h3>
              <span class="ficheDetaillee__contenu-info">{{ startDate }} startDate</span> props
            </div>
          </div>
          <div class="ficheDetaillee__conteneur-information">
            <div class="ficheDetaillee__bloc-style"></div>
            <div class="ficheDetaillee__infos">
              <h3 class="ficheDetaillee__titre-info">Date de fin</h3>
              <span class="ficheDetaillee__contenu-info">{{ endDate }} endDate</span> props
            </div> 
          </div>
        </div>
      </div>

      <div class="ficheDetaillee__conteneur-titre">
        <h2 class="ficheDetaillee__titre-info-supplementaire">Informations supplémentaires</h2> // Mettre une class de style conditionnelle
        <p> {{ additionalInformation }} </p> // props 
      </div>

      <div class="ficheDetaillee__conteneur-informations-supplementaires"> // Mettre une condition
        <button type="button" class="ficheDetaillee__bouton-cta">
          <i class="ficheDetaillee__icône fas fa-cloud-download-alt"></i>
          <span>
            Télécharger le C.V.
          </span>
        </button>
      </div>
    </div>
</template>


<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  firstName: String,
  lastName: String,
  description: String,
  title: String,
  skills: String,
  address: String,
  city: String,
  province: String,
  internshipType: String,
  weeklyWorkHours: String,
  startDate: String,
  endDate: String,
  additionalInformation: String
});
</script>
