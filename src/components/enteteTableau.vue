<template>
    <tr>
        <th>
            <p class="mr-6 pb-1 text-left text-neutral-800 border-neutral-800 border-b-4">{{ isDemandes ? 'Profil' : 'Poste'}}</p>
        </th>
<!--             <th class="text-left">Poste</th> -->
        <th v-if="isDemandes && isTableauDeBord">
            <p class="mr-6 pb-1 text-left text-neutral-800 border-neutral-800 border-b-4">Établissement</p>
        </th>
        <th v-if="!isDemandes && isTableauDeBord">
            <p class="mr-6 pb-1 text-left text-neutral-800 border-neutral-800 border-b-4">Ville</p>
        </th>
        <th v-if="!isTableauDeBord">
            <p class="mr-6 pb-1 text-left text-neutral-800 border-neutral-800 border-b-4">Secteur d'activité</p>
        </th>
        <th v-if="!isTableauDeBord">
            <p class="mr-6 pb-1 text-left text-neutral-800 border-neutral-800 border-b-4">Région</p>
        </th>
        <th>
            <p class="mr-6 pb-1 text-left text-neutral-800 border-neutral-800 border-b-4">Date d'inscription</p>
        </th>
        <th>
            <p class="pb-1 text-left text-neutral-800 border-neutral-800 border-b-4">Actions</p>
        </th>
    </tr>
</template>

<script setup>
        const props = defineProps({
        isDemandes: Boolean,
        isTableauDeBord: Boolean,
    })
</script>