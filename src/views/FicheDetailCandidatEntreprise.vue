<template>
    <h1>Fiche Détail Candidat Entreprise</h1>

    <template v-if="isCandidate && candidateResult">
        <h2 :class="{'text-red-600': isCandidate}">{{ candidateResult.firstName }} {{ candidateResult.lastName }}</h2>
    </template>
    <template v-else-if="!isCandidate && enterpriseResult">
        <h2 :class="{'text-teal-600': !isCandidate}">{{ enterpriseResult.name }}</h2>
    </template>
    <template v-else>
        <p>Loading...</p>
    </template>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCandidate } from '@/composables/candidats';
import { useEnterprise } from '@/composables/entreprises';

const route = useRoute();

const isCandidate = ref(true);

const {candidateResult, getCandidateById} = useCandidate();
let candidateId = ref(null);

const {enterpriseResult, getEnterpriseById} = useEnterprise();
let enterpriseId = ref(null);

onMounted(async () => {

    // aller valider si candidat ou entreprise dans l'url
    const urlString = window.location.href;

    if (urlString.includes('candidat')) {
        isCandidate.value = true;
        candidateId = route.params.id;
        await getCandidateById(candidateId);
        console.log(candidateResult);

    } else if (urlString.includes('entreprise')) {
        isCandidate.value = false;
        enterpriseId = route.params.id;
        await getEnterpriseById(enterpriseId);
        console.log(enterpriseResult);
    }


});
</script>