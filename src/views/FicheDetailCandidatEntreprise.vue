<template>

    <template v-if="isCandidate && candidateResult || enterpriseResult">
        <div class="flex mb-20">
            <div>
                <img v-if="!isCandidate" src="../assets/img/enterprises.png" alt="logo-entreprises" class="w-40 mr-5">
            </div>
            <div :class="{'border-l-8 border-fuchsia-800': isCandidate, 'border-l-8 border-blue-400': !isCandidate}">
                <p v-if="isCandidate" class="text-neutral-500 text-md font-semibold ml-5">Candidat</p>
                <p v-if="!isCandidate" class="text-neutral-500 text-md font-semibold ml-5">Entreprise</p>
                <h1 class='text-neutral-500 text-4xl font-bold mb-5 ml-5'>{{ isCandidate ? candidateResult.firstName + ' ' + candidateResult.lastName : enterpriseResult.name }}</h1>
                <h2 v-if="isCandidate"class="bg-white text-neutral-500 font-semibold text-xl inline-block text-center p-2 ml-5">Développeur Front-End</h2>
            </div>
        </div>
        <div class="bg-white p-8 lg:p-16 rounded-xl">
            <h3 class="text-3xl md:text-4xl font-bold mb-5 lg:mb-10" :class="{'text-blue-400': !isCandidate, 'text-fuchsia-800': isCandidate}">Courte présentation</h3>
            <p class="text-neutral-500 text-md mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem,
                nam reprehenderit hic dolores iste minima laboriosam. Nam maiores hic blanditiis necessitatibus
                suscipit, quod minima nostrum perspiciatis, odit iusto quas! Quasi magni veniam, repudiandae minus
                similique nihil facere voluptatum beatae ducimus neque et culpa id, deleniti dicta, dolorem saepe ab
                itaque dolorum! Magni a quae voluptatem illum, minima dolorem eum labore asperiores neque impedit
                suscipit amet esse nostrum delectus excepturi.</p>
            <h4 v-if="!isCandidate" class="text-lg text-blue-400 font-bold mb-5">Personne contact</h4>
            <p v-if="!isCandidate" class="text-2xl font-bold text-neutral-500 mb-8">Pierre Boivin</p>
            <h4 class="text-lg font-bold mb-10" :class="{'text-blue-400': !isCandidate, 'text-fuchsia-800': isCandidate}">Informations personnelles</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                <div>
                    <div class="border-l-8 border-neutral-500 mb-5">                                                          
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Adresse</h5>
                        <p class='text-neutral-500 text-sm ml-2'>{{ isCandidate ? candidateResult.address : enterpriseResult.address }}</p>
                    </div>
                    <div class="border-l-8 border-neutral-500 mb-5">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Ville</h5>
                        <p class='text-neutral-500 text-sm ml-2'>{{ isCandidate ? candidateResult.city : enterpriseResult.city }}</p>
                    </div>
                    <div class="border-l-8 border-neutral-500 mb-5">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Province</h5>
                        <p class='text-neutral-500 text-sm ml-2'>{{ isCandidate ? candidateResult.province.value : enterpriseResult.province.value }}</p>
                    </div>
                    <div class="border-l-8 border-neutral-500 mb-5 md:mb-0">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Code postal</h5>
                        <p class='text-neutral-500 text-sm ml-2'>{{ isCandidate ? candidateResult.postalCode : enterpriseResult.postalCode }}</p>
                    </div>
                </div>
                <div>
                    <div class="border-l-8 border-neutral-500 mb-5">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Téléphone</h5>
                        <p class='text-neutral-500 text-sm ml-2'>{{ isCandidate ? candidateResult.phone : enterpriseResult.phone }}</p>
                    </div>
                    <div class="border-l-8 border-neutral-500">
                        <h5 class="text-lg font-bold text-neutral-500 mb-3 ml-2">Courriel</h5>
                        <p class='text-neutral-500 text-sm ml-2'>{{ isCandidate ? candidateResult.email : enterpriseResult.email }}</p>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <p>Loading...</p>
    </template>
</template>

<script setup>
    import {
        onMounted,
        ref
    } from 'vue';
    import {
        useRoute
    } from 'vue-router';
    import {
        useCandidate
    } from '@/composables/candidats';
    import {
        useEnterprise
    } from '@/composables/entreprises';

    const route = useRoute();

    const isCandidate = ref(true);

    const {
        candidateResult,
        getCandidateById
    } = useCandidate();
    let candidateId = ref(null);

    const {
        enterpriseResult,
        getEnterpriseById
    } = useEnterprise();
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
