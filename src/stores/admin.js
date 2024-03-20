import { defineStore } from 'pinia';

export const useAdminStore = defineStore('admin', () => {
    const state = {
        nomEtPrenom: '',
    };

    const setNomEtPrenom = (nomEtPrenom) => {
        state.nomEtPrenom = nomEtPrenom;
    };

    return {
        state,
        setNomEtPrenom,
    };
});
