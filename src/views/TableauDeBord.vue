<template>
    <h1>Tableau de bord</h1>
    <table>
        <tr>
            <th class="text-left">Profil</th>
<!--             <th class="text-left">Poste</th> -->
            <th class="text-left">Secteur d'activité</th>
<!--             <th class="text-left">Établissement</th>
            <th class="text-left">Ville</th> -->
            <th class="text-left">Région</th>
            <th class="text-left">Date d'inscription</th>
            <th class="text-left">Actions</th>
        </tr>
        <tr>
            <ElementTableau />
        </tr>
    </table>
</template>

<script setup>
import ElementTableau from '../components/elementTableau.vue'
</script>