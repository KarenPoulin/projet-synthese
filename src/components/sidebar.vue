<template>
<aside class=" bg-white min-h-full flex flex-col items-center pb-2 space-y-7">

    <!-- Logo -->

        <div class="w-full flex justify-start items-start mt-0 mb-12">
      <img src="../assets/img/logo.png" alt="Logo" class="h-30 w-full">
    </div>


    <!-- Side bar -->


    <div class="w-full pr-3 flex flex-col gap-y-1 text-gray-500 fill-gray-500 text-sm">
        
  
<!--Bouton Tableau de Bord-->
<a href="/app/tableaudebord" class="w-full flex items-center gap-x-1.5 group select-none">

<div class="w-1 rounded-xl h-12 bg-transparent transition-colors duration-200 relative overflow-hidden">
<div class="absolute top-0 right-0 bg-teal-500 transition-all duration-300 group-hover:translate-y-0 translate-y-0 h-full w-3"></div>
</div>

    
<div class="bg-white/10 text-white group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
<img src="../assets/icons/sidebar-danshboard-24.png" alt="Dashboard" class="h-5 w-5 fill-teal-500 dark:fill-gray-600 transition-colors duration-200" />
        <span class="font-QuicksandMedium font-bold text-teal-500">Tableau de bord</span>
    </div>
</a>

<!--Bouton Demandes de stages-->
<a href="/app/demandesdestages" class="w-full flex items-center gap-x-1.5 group select-none">
            <div class="w-1 rounded-xl h-12 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-yellow-600 transition-all duration-300"></div>
            </div>
            <div class="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
                <img src="../assets/icons/sidebar-request-24.png" class="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200">

                </img>
                <span class="font-QuicksandMedium text-yellow-600">Demandes de stages</span>
            </div>
</a>

<!--Bouton Offres-->
<a href="/app/offresdestages" class="w-full flex items-center gap-x-1.5 group select-none">
            <div class="w-1 rounded-xl h-12 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-red-800 transition-all duration-300"></div>
            </div>
            <div class="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
                <img src="../assets/icons/sidebar-offer.png" class="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200">

                </img>
                <span class="font-QuicksandMedium text-red-800">Offres de stages</span>
            </div>
</a>
<!--Bouton Candidats-->
<a href="/app/candidats" class="w-full flex items-center gap-x-1.5 group select-none">
            <div class="w-1 rounded-xl h-12 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-fuchsia-800 transition-all duration-300"></div>
            </div>
            <div class="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
                <img src="../assets/icons/sidebar-candidate-24.png" class="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200">

                </img>
                <span class="font-QuicksandMedium text-fuchsia-800">Candidats</span>
            </div>
</a>
<!--Entreprises-->
<a href="/app/entreprises" class="w-full flex items-center gap-x-1.5 group select-none">
            <div class="w-1 rounded-xl h-12 bg-transparent transition-colors duration-200 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-blue-400 transition-all duration-300"></div>
            </div>
            <div class="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm">
                <img src="../assets/icons/sidebar-enterprise-24.png" class="h-5 w-5 group-hover:fill-red-600 dark:fill-gray-600 transition-colors duration-200">

                </img>
                <span class="font-QuicksandMedium text-blue-400">Entreprises</span>
            </div>
</a>







    </div>


</aside>

</template>

<script setup>

</script>