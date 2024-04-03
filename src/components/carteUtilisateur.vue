<template>
<div class="flex md:flex-row items-center gap-2 p-2">
       <!-- Icône utilisateur -->


       <div>
         <p class="text-[9px] md:text-xs text-black font-medium">{{ adminStore.state.nomEtPrenom }}</p>
         <p class="text-[9px] md:text-xs text-gray-400 font-medium">Admin</p>


       </div>
       <img src="../assets/icons/candidate-48.png" alt="Photo de profil" class="h-6 w-6 md:h-10 md:w-10 rounded-full bg-gray-300 object-cover" />
     </div>


</template>

<script setup>
import { useAdminStore } from '@/stores/admin';
import { ref } from 'vue';


const adminStore = useAdminStore();



</script>