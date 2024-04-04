import { reactive, ref } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";

// https://api-4.fly.dev/internship-requests

export function useAllDemandeDeStages() {
    const allDemandeDeStagesResults = reactive([]);

    const getAllDemandeDeStages = async () => {
        try {
            const res = await axios.get(`${baseUrl}internship-requests`);
            allDemandeDeStagesResults.push(...res.data)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        allDemandeDeStagesResults,
        getAllDemandeDeStages
    }
}

export function useAllDemandeDeStagesInactive() {
    let allDemandeDeStagesInactiveResults = reactive([]);

    const getAllDemandeDeStagesInactive = async () => {
        try {
            const res = await axios.get(`${baseUrl}internship-requests?isActive=false`);
            allDemandeDeStagesInactiveResults.push(...res.data)
        } catch (error) {
            console.log(error);
        }
    }

    return {
        allDemandeDeStagesInactiveResults,
        getAllDemandeDeStagesInactive
    }
}


// https://api-4.fly.dev/internship-requests/65fce770f433c3500b32f6be
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