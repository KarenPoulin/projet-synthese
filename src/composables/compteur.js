import { ref } from "vue";
import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";

export function useCompteur() {
    const count = ref(null);

    const getDataCount = async (endpoint) => {
        try {
            const res = await axios.get(`${baseUrl}${endpoint}/count`);
            if (res) count.value = res.data;
        } catch (error) {
            console.log(error);
        }
    }
    

    return {
        count, getDataCount
    }
}