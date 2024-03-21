<template>

    <template v-if="isCandidate && candidateResult">
        <div class="titre_barre mb-20">
            <p class="text-neutral-500 text-sm font-semibold">Candidat</p>
            <h1 :class="{'text-neutral-500 text-3xl font-bold mb-5': isCandidate}">{{ candidateResult.firstName }}
                {{ candidateResult.lastName }}</h1>
            <h2 class="bg-white text-neutral-500 font-semibold text-lg w-60 text-center p-2">Développeur Front-End</h2>
        </div>
        <div class="bg-white p-16">
            <h3 class="text-3xl text-fuchsia-800 font-bold mb-12">Courte présentation</h3>
            <p class="text-neutral-500 text-sm mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem,
                nam reprehenderit hic dolores iste minima laboriosam. Nam maiores hic blanditiis necessitatibus
                suscipit, quod minima nostrum perspiciatis, odit iusto quas! Quasi magni veniam, repudiandae minus
                similique nihil facere voluptatum beatae ducimus neque et culpa id, deleniti dicta, dolorem saepe ab
                itaque dolorum! Magni a quae voluptatem illum, minima dolorem eum labore asperiores neque impedit
                suscipit amet esse nostrum delectus excepturi.</p>
            <h4 class="text-md text-fuchsia-800 font-bold mb-10">Informations personnelles</h4>
            <div class="grid grid-cols-2">
                <div>
                    <div class="titre_barre2 mb-5">                                                          
                        <h5 class="text-md font-bold text-neutral-500 mb-3">Adresse</h5>
                        <p :class="{'text-neutral-500 text-sm': isCandidate}">{{ candidateResult.address }}</p>
                    </div>
                    <div class="titre_barre2 mb-5">
                        <h5 class="text-md font-bold text-neutral-500 mb-3">Ville</h5>
                        <p :class="{'text-neutral-500 text-sm': isCandidate}">{{ candidateResult.city }}</p>
                    </div>
                    <div class="titre_barre2 mb-5">
                        <h5 class="text-md font-bold text-neutral-500 mb-3">Province</h5>
                        <p :class="{'text-neutral-500 text-sm': isCandidate}">{{ candidateResult.province.value }}</p>
                    </div>
                    <div class="titre_barre2 mb-5">
                        <h5 class="text-md font-bold text-neutral-500 mb-3">Code postal</h5>
                        <p :class="{'text-neutral-500 text-sm': isCandidate}">{{ candidateResult.postalCode }}</p>
                    </div>
                </div>
                <div>
                    <div class="titre_barre2 mb-5">
                        <h5 class="text-md font-bold text-neutral-500 mb-3">Téléphone</h5>
                        <p :class="{'text-neutral-500 text-sm': isCandidate}">{{ candidateResult.phone }}</p>
                    </div>
                    <div class="titre_barre2">
                        <h5 class="text-md font-bold text-neutral-500 mb-3">Courriel</h5>
                        <p :class="{'text-neutral-500 text-sm': isCandidate}">{{ candidateResult.email }}</p>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <template v-else-if="!isCandidate && enterpriseResult">
        <h2 :class="{'text-teal-600': !isCandidate}">{{ enterpriseResult.name }}</h2>
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

<style scoped>
    .titre_barre {
        position: relative;
        padding-left: 24px;
    }

    .titre_barre::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 8px;
        height: 120px;
        background-color: rgb(134, 25, 143);
    }

    .titre_barre2 {
        position: relative;
        padding-left: 16px;
    }

    .titre_barre2::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 8px;
        height: 55px;
        background-color: rgb(115, 115, 115);
    }
</style>