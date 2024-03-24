import { reactive, ref } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";

// https://api-4.fly.dev/internship-offers
export function useAllOffreDeStages() {
    const allOffreDeStagesResults = reactive([]);

    const getAllOffreDeStages = () => {
        return axios.get(`${baseUrl}internship-offers`)
        .then((res) => allOffreDeStagesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allOffreDeStagesResults,
        getAllOffreDeStages
    }
}


// https://api-4.fly.dev/internship-offers/65f8e7c27e8a7a318bf937cf
export function useOffreDeStages() {
    const offreDeStagesResult = ref(null);

    const getOffreDeStageById = (id) => {
        return axios.get(`${baseUrl}internship-offers/${id}`)
        .then((res) => offreDeStagesResult.value = res.data)
        .catch((error) => console.log(error))
    }

    return {
        offreDeStagesResult,
        getOffreDeStageById
    }
}