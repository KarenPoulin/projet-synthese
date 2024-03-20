import { reactive, ref } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";




// https://api-4.fly.dev/candidates
export function useAllCandidates() {
    const allCandidatesResults = reactive([]);

    const getAllCandidates = () => {
        return axios.get(`${baseUrl}candidates`)
        .then((res) => allCandidatesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allCandidatesResults,
        getAllCandidates
    }
}