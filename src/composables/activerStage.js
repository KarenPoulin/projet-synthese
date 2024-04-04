import axios from 'axios';

const baseUrl = "https://api-4.fly.dev/";


export function useActivateIntership() {
    const activateIntership = (endpoint, id) => {
        const patchUrl = `${baseUrl}${endpoint}/${id}`;
        const patchData = {
            "isActive": true
        }

        axios.patch(patchUrl, patchData)
        .then(res => {
            console.log('Réponse:', res.data);
            
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        })
        .catch(error => {
            console.error('Erreur:', error)
        });
    }

    return {
        activateIntership
    }
}