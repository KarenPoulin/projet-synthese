<template>
  <div class="ficheDetaillee">

    <div v-if="isEnteteDemandeDeStage" class="ficheDetaillee__conteneur-titres-entete">
      <div class="ficheDetaillee__bloc-style" :class="{'colorBgBlue': isEnteteDemandeDeStage}"></div>
      <div class="ficheDetaillee__titre">
        <span class="ficheDetaillee__sous-titre">Demande de stage</span>
        <h1 class="ficheDetaillee__titre">{{ enteteDemandeStage }}</h1>
      </div>
    </div>

    <div v-else-if="isEnteteDemandeOffre" class="ficheDetaillee__conteneur-titres-entete">
      <div class="ficheDetaillee__titre">
        <div class="ficheDetaillee__bloc-style" :class="{'colorBgRed': isEnteteDemandeOffre}"></div>
        <span class="ficheDetaillee__sous-titre">Offre de stage</span>
        <h1 class="ficheDetaillee__titre">{{ enteteDemandeOffre }}</h1>
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
});
</script>

<style scoped>
.colorBgBlue {
  background-color: blue;
}
.colorBgRed {
  background-color: red;
}
.ficheDetaillee {
  max-width: 1100px;
  margin: auto;
}
.ficheDetaillee__conteneur-titres-entete {
  display: flex;
}
.ficheDetaillee__conteneur-titres-entete .ficheDetaillee__bloc-style {
  width: 10px;
  height: 90px;
  margin-right: 10px;
}
.ficheDetaillee__conteneur-titres-entete .ficheDetaillee__sous-titre {
  color: rgb(115 115 115);
  font-size: 15px;
}
.ficheDetaillee__conteneur-titres-entete .ficheDetaillee__titre {
  color: rgb(115 115 115);
  font-size: 35px;
  font-weight: 600;
}
</style>
