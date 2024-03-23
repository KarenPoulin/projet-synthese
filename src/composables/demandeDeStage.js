import { reactive, ref } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";

// https://api-4.fly.dev/demandeDeStages
export function useAllDemandeDeStages() {
    const allDemandeDeStagesResults = reactive([]);

    const getAllDemandeDeStages = () => {
        return axios.get(`${baseUrl}internship-requests`)
        .then((res) => allDemandeDeStagesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allDemandeDeStagesResults,
        getAllDemandeDeStages
    }
}


// https://api-4.fly.dev/demandeDeStages/65f8e7c27e8a7a318bf937cf
export function useDemandesDeStages() {
    const demandeDeStageResult = ref(null);

    const getDemandeDeStagesById = (id) => {
        return axios.get(`${baseUrl}internship-requests/${id}`)
        .then((res) => demandeDeStageResult.value = res.data)
        .catch((error) => console.log(error))
    }

    return {
        demandeDeStageResult,
        getDemandeDeStagesById
    }
}