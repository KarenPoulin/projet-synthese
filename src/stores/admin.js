import { defineStore } from 'pinia';

export const useAdminStore = defineStore('admin', () => {
    
    const state = {
        nomEtPrenom: localStorage.getItem('nomEtPrenom') || '',
        courriel: localStorage.getItem('courriel') || '',
    };

    const setNomEtPrenom = (nomEtPrenom) => {
        state.nomEtPrenom = nomEtPrenom;
        
        localStorage.setItem('nomEtPrenom', nomEtPrenom);
    };

    const setCourriel = (courriel) => {
        state.courriel = courriel;

        localStorage.setItem('courriel', courriel);
    };

    return {
        state,
        setNomEtPrenom,
        setCourriel,
    };
});
