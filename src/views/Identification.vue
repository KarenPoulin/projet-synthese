<template>
  <main>
    <div>
      <h1><img src="/src/assets/img/logo.png" alt="logo" class="h-28"></h1>
    </div>
    <div class="flex">
      <div class="w-1/2">
        <img src="/src/assets/img/home-students.png" alt="home-students" class="w-full h-auto">
      </div>
      <div class="w-1/2 bg-gray-200 flex items-center">
        <div class="p-20">
          <h2 class="text-7xl mb-5">Identification</h2>
          <p class="w-3/4 mb-24">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet maiores neque eum quia! Quisquam, nisi voluptate.</p>
          <form @submit.prevent="acceder">
            <div class="flex flex-col mb-10">
              <input type="text" id="nomEtPrenom" v-model="nomEtPrenom" placeholder="Votre nom et prénom" class="border-teal-500 border-solid border-2 p-3 w-3/4">
              <span v-if="!nomEtPrenomValid" class="text-red-500">Veuillez entrer votre nom et prénom.</span>
            </div>
            <div class="flex flex-col mb-10">
              <input type="email" id="courriel" v-model="courriel" placeholder="Votre courriel" class="border-teal-500 border-solid border-2 p-3 w-3/4">
              <span v-if="!courrielValid" class="text-red-500">Veuillez entrer votre courriel.</span>
            </div>
            <button type="submit" class="bg-teal-500 border rounded p-5 text-white">Accéder maintenant</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const nomEtPrenom = ref('');
const courriel = ref('');
const nomEtPrenomValid = ref(true);
const courrielValid = ref(true);

const acceder = () => {
  if (!nomEtPrenom.value) {
    nomEtPrenomValid.value = false;
  } else {
    nomEtPrenomValid.value = true;
  }

  if (!courriel.value) {
    courrielValid.value = false;
  } else {
    courrielValid.value = true;
  }

  if (!nomEtPrenom.value || !courriel.value) {
    return;
  }
}
</script>
  