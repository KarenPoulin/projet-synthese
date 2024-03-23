import { reactive } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";




// https://api-4.fly.dev/activity-sectors
export function useActivitySectors() {
    const allActivitySectorsResults = reactive([]);

    const getAllActivitySectors= () => {
        return axios.get(`${baseUrl}activity-sectors`)
        .then((res) => allActivitySectorsResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allActivitySectorsResults,
        getAllActivitySectors
    }
}

