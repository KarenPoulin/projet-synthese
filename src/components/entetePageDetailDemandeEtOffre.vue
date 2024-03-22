<template>
    <div class="ficheDetaillee">
      <div class="ficheDetaillee__conteneur-titres-principaux">
        <div class="ficheDetaillee__bloc-style" 
          :class="{
            'colorBgBlue': isEnteteDemandeDeStage , 
            'colorBgRed': isEnteteDemandeOffre
          }">
        </div>
  
        <div class="ficheDetaillee__titre" v-if="isEnteteDemandeDeStage">
          <span class="ficheDetaillee__sous-titre">{{ enteteDemandeStage.sousTitre }}</span>
          <h1 class="ficheDetaillee__titre">{{ enteteDemandeStage.mainTitre }}</h1>
        </div>

        <div class="ficheDetaillee__titre" v-if="isEnteteDemandeOffre">
          <span class="ficheDetaillee__sous-titre">{{ enteteDemandeOffre.sousTitre }}</span>
          <h1 class="ficheDetaillee__titre">{{ enteteDemandeOffre.mainTitre }}</h1>
        </div>

      </div>
    </div>
  </template>  
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    isEnteteDemandeDeStage: Boolean,
    isEnteteDemandeOffre: Boolean,
    enteteDemandeStage: Object,
    enteteDemandeOffre: Object,
  })
  </script>
  