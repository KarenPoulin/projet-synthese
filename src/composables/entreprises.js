import { reactive, ref } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";




// https://api-4.fly.dev/enterprises
export function useAllEnterprises() {
    const allEnterprisesResults = reactive([]);

    const getAllEnterprises = () => {
        return axios.get(`${baseUrl}enterprises`)
        .then((res) => allEnterprisesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allEnterprisesResults,
        getAllEnterprises
    }
}