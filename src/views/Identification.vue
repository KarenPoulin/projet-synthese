<template>
  <main>
    <div>
      <h1><img src="/src/assets/img/logo.png" alt="logo" class="h-28"></h1>
    </div>
    <div class="flex">
      <div class="w-1/2">
        <img src="/src/assets/img/home-students.png" alt="home-students" class="w-full h-auto">
      </div>
      <div class="w-1/2 bg-gray-200">
        <div class="p-20">
          <h2 class="text-7xl mb-5">Identification</h2>
          <p class="w-3/4 mb-24">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet maiores neque eum quia! Quisquam, nisi voluptate.</p>
          <form @submit.prevent="acceder">
            <div>
              <input type="text" id="nomEtPrenom" v-model="nomEtPrenom" placeholder="Votre nom et prénom" required class="border-teal-500 border-solid border-2 p-3">
            </div>
            <div>
              <input type="email" id="courriel" v-model="courriel" placeholder="Votre courriel" required>
            </div>
            <button type="submit">Accéder maintenant</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

  <script setup>
  
  </script>
  