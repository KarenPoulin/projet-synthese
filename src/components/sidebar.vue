<template>
    <aside class="bg-white text-white w-full min-h-screen flex flex-col">
        <div class="flex justify-center py-4">
            <!-- Logo en haut de la sidebar -->
            <img src="../assets/img/logo2.png" alt="Logo" class="h-auto mb-12">
        </div>


        <ul class="flex flex-col justify-center">
            <!--Bouton 1-->
            <li class="pt-2">
                <router-link :to="{ name: 'tableaudebord' }"
                    class="flex flex-col xl:flex-row items-center justify-center p-4 transition-all duration-300 text-teal-500 router-link"
                    active-class="active">
                    <img src="../assets/icons/sidebar-danshboard-24.png" alt="Icon 1" class="h-6 w-6 xl:mr-8">
                    <!-- Icône du bouton -->
                    <span class="link-text">Tableau de bord</span>
                    <span class="indicator w-0 h-full bg-transparent transition-all duration-300"></span>
                    <!-- Effet de survol -->
                </router-link>
            </li>
            <!--Bouton 2-->
            <li class="pt-2">
                <router-link :to="{ name: 'demandesdestages' }"
                    class="flex flex-col xl:flex-row items-center justify-center p-4 transition-all duration-300 text-yellow-600 router-link"
                    active-class="active">
                    <img src="../assets/icons/sidebar-request-24.png" alt="Icon 2" class="h-6 w-6 xl:mr-8">
                    <!-- Icône du bouton -->
                    <span class="link-text">Demandes de stages</span>
                    <span class="indicator w-0 h-full bg-transparent transition-all duration-300"></span>
                    <!-- Effet de survol -->
                </router-link>
            </li>
            <!--Bouton 3-->
            <li class="pt-2">
                <router-link :to="{ name: 'offresdestages' }"
                    class="flex flex-col xl:flex-row items-center justify-center p-4 transition-all duration-300 text-red-800 router-link"
                    active-class="active">
                    <img src="../assets/icons/sidebar-offer.png" alt="Icon 3" class="h-6 w-6 xl:mr-8">
                    <!-- Icône du bouton -->
                    <span class="link-text">Offres de stages</span>
                    <span class="indicator w-0 h-full bg-transparent transition-all duration-300"></span>
                    <!-- Effet de survol -->
                </router-link>
            </li>
            <!--Bouton 4-->
            <li class="pt-2">
                <router-link :to="{ name: 'candidats' }"
                    class="flex flex-col xl:flex-row items-center justify-center p-4 transition-all duration-300 text-fuchsia-800 router-link"
                    active-class="active">
                    <img src="../assets/icons/sidebar-candidate-24.png" alt="Icon 4" class="h-6 w-6 xl:mr-8">
                    <!-- Icône du bouton -->
                    <span class="link-text">Candidats</span>
                    <span class="indicator w-0 h-full bg-transparent transition-all duration-300"></span>
                    <!-- Effet de survol -->
                </router-link>
            </li>
            <!--Bouton 5-->
            <li class="pt-2">
                <router-link :to="{ name: 'entreprises' }"
                    class="flex flex-col xl:flex-row items-center justify-center p-4 transition-all duration-300 text-blue-400 router-link"
                    active-class="active">
                    <img src="../assets/icons/sidebar-enterprise-24.png" alt="Icon 5" class="h-6 w-6 xl:mr-8">
                    <!-- Icône du bouton -->
                    <span class="link-text">Entreprises</span>
                    <span class="indicator w-0 h-full bg-transparent transition-all duration-300"></span>
                    <!-- Effet de survol -->
                </router-link>
            </li>


        </ul>
    </aside>
</template>

<script setup>

</script>

<style scoped>
.router-link:hover .link-text,
.router-link.active .link-text {
    font-weight: bold;
}

.router-link:hover .indicator,
.router-link.active .indicator {
    width: 2px;
    background-color: currentColor;
}

.active {
    border-right: 4px solid;
}
</style>