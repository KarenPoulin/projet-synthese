<template>
    <tr v-if="element" class="border-b-4 border-neutral-200">
        <td class="">
            <div class="my-5 pl-4 flex flex-row items-center border-l-4" :class="{
        'border-neutral-500': !isActive && !isTableauDeBord && !isDemandes,
        'border-yellow-600': isDemandes,
        'border-red-800/[0.85]': !isDemandes
    }">
                <div v-if="isDemandes && isActive" class="p-3 bg-yellow-600/[.5] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-mortarboard-fill text-yellow-800" viewBox="0 0 16 16">
                        <path
                            d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                        <path
                            d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                    </svg>
                </div>
                <div v-if="!isDemandes && isActive" class="p-3 bg-red-800/[0.85] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-briefcase-fill text-red-300" viewBox="0 0 16 16">
                        <path
                            d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                        <path
                            d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                    </svg>
                </div>
                <div v-if="isDemandes && !isActive" class="p-3 bg-neutral-500 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-mortarboard-fill text-neutral-900" viewBox="0 0 16 16">
                        <path
                            d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                        <path
                            d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                    </svg>
                </div>
                <div v-if="!isDemandes && !isActive" class="p-3 bg-neutral-500 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-briefcase-fill text-neutral-900" viewBox="0 0 16 16">
                        <path
                            d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                        <path
                            d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                    </svg>
                </div>
                <div class="ml-3 flex flex-col">
                    <p class="text-sm font-bold" :class="{'text-red-700': !isActive}">{{isDemandes ? "Intégrateur Web" : element.title }}</p>
                    <p class="text-sm">{{ isDemandes ? element.candidate.firstName + ' ' + element.candidate.lastName :
        element.enterprise.name }}</p>
                </div>
            </div>
        </td>
        <td v-if="isDemandes && isTableauDeBord">
            <p class="my-5 text-sm">Cégep de Trois-Rivières </p>
        </td>
        <td v-if="!isDemandes && isTableauDeBord">
            <p class="my-5 text-sm">Trois-Rivières</p>
        </td>
        <td v-if="!isTableauDeBord && !isDemandes && activitySectorResult">
            <p class="my-5 text-sm">{{ activitySectorResult.value }}</p>
        </td>
        <td v-if="!isTableauDeBord && isDemandes">
            <p class="my-5 text-sm">Nouvelles technologies</p>
        </td>
        <td v-if="!isTableauDeBord">
            <p class="my-5 text-sm">Mauricie</p>
        </td>
        <td>
            <p class="my-5 text-sm">{{ isDemandes ? "2022-03-02" : formatDate(element.startDate) }}</p>
        </td>
        <td>
            <div class="my-5 flex flex-row items-center justify-between">
                <button v-if="isTableauDeBord"
                    class="mr-4 py-2 px-3 bg-green-200/[.6] hover:bg-green-200 focus:bg-green-200 text-green-500 text-sm font-medium rounded-lg">Accepter</button>
                <div class="flex flex-row justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-eye-fill text-teal-500 hover:text-teal-600 focus:text-teal-600"
                        viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-pencil-square mx-2.5 text-yellow-600 hover:text-yellow-900 focus:text-yellow-900"
                        viewBox="0 0 16 16">
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-trash-fill text-red-800 hover:text-red-950 focus:text-red-950" viewBox="0 0 16 16">
                        <path
                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                    </svg>
                </div>
            </div>
        </td>
    </tr>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useActivitySector } from '@/composables/secteurActivites';


let isActive = ref(true);

const props = defineProps({
    isDemandes: Boolean,
    isTableauDeBord: Boolean,
    element: Object
})

const { activitySectorResult, getActivitySectorById } = useActivitySector();
let activitySectorId = ref(null);

/* Format de date 'année-mois-jours' */
const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Ajout de 1 puisque le mois commence à 0
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
};

onMounted(async () => {
    if (props.element.enterprise) {
        activitySectorId = props.element.enterprise.activitySector;
        await getActivitySectorById(activitySectorId);

        if (props.element.isActive) {
            isActive = true;
        } else {
            isActive = false;
        }
    }
})

</script>