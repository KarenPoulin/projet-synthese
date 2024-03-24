<template>
  <div class="ficheDetaillee">

    <div v-if="isEnteteDemandeDeStage" class="ficheDetaillee__conteneur-titres-entete">
      <div class="ficheDetaillee__bloc-style" :class="{'colorBgYellow': isEnteteDemandeDeStage}"></div>
      <div class="ficheDetaillee__titre">
        <span class="ficheDetaillee__sous-titre">Demande de stage</span>
        <h1 class="ficheDetaillee__titre">{{ enteteDemandeStage.title }}</h1>
      </div>
    </div>

    <div v-else-if="isEnteteOffreDeStage" class="ficheDetaillee__conteneur-titres-entete">
      <div class="ficheDetaillee__titre">
        <div class="ficheDetaillee__bloc-style" :class="{'colorBgRed': isEnteteOffreDeStage}"></div>
        <span class="ficheDetaillee__sous-titre">Offre de stage</span>
        <h1 class="ficheDetaillee__titre">{{ enteteOffreStage.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isEnteteDemandeDeStage: Boolean,
  isEnteteOffreDeStage: Boolean,
  enteteDemandeStage: Object,
  enteteOffreStage: Object,
});
</script>

<style scoped>
.colorBgBlue {
  background-color: rgb(20 184 166);
}
.colorBgRed {
  background-color: rgb(153 27 27);
}
.colorBgYellow {
  background-color: rgb(202 138 4);
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
