<template>
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold">{{ editing ? 'Modifier le candidat' : 'Ajouter un candidat' }}</h2>
        <div v-if="editing">
          <p>{{ candidate.firstName }} {{ candidate.lastName }} - {{ candidate.poste }}</p>
        </div>
      </div>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="firstName" class="block mb-1">Prénom</label>
          <input type="text" id="firstName" v-model="form.firstName" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div class="mb-4">
          <label for="lastName" class="block mb-1">Nom</label>
          <input type="text" id="lastName" v-model="form.lastName" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div class="mb-4">
          <label for="poste" class="block mb-1">Poste</label>
          <input type="text" id="poste" v-model="form.poste" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div class="mb-4">
          <label for="description" class="block mb-1">Courte présentation</label>
          <textarea id="description" v-model="form.description" class="w-full border-gray-300 rounded-md p-2"></textarea>
        </div>
        <h3 class="text-lg font-bold mb-2">Information personnelle</h3>
        <div class="mb-4">
          <label for="address" class="block mb-1">Adresse</label>
          <input type="text" id="address" v-model="form.address" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div class="mb-4">
          <label for="phone" class="block mb-1">Téléphone</label>
          <input type="text" id="phone" v-model="form.phone" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div class="mb-4">
          <label for="city" class="block mb-1">Ville</label>
          <input type="text" id="city" v-model="form.city" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-1">Courriel</label>
          <input type="email" id="email" v-model="form.email" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div class="mb-4">
          <label for="province" class="block mb-1">Province</label>
          <select id="province" v-model="form.province" class="w-full border-gray-300 rounded-md p-2">
            <option value="" disabled selected>Choisissez une province</option>
            <option v-for="province in provinces" :value="province.value" :key="province._id">{{ province.value }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="postalCode" class="block mb-1">Code postal</label>
          <input type="text" id="postalCode" v-model="form.postalCode" class="w-full border-gray-300 rounded-md p-2">
        </div>
        <div class="flex justify-end">
          <button type="button" class="btn-secondary mr-2" @click="cancelForm">Annuler</button>
          <button type="submit" class="btn-primary">{{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      candidateId: {
        type: String,
        required: false
      }
    },
    data() {
      return {
        editing: false,
        form: {
          firstName: '',
          lastName: '',
          position: '',
          description: '',
          address: '',
          phone: '',
          city: '',
          email: '',
          province: '',
          postalCode: ''
        },
        candidate: {},
        provinces: [
          { _id: '1', value: 'Alberta' },
          { _id: '2', value: 'Colombie-Britannique' },
          { _id: '3', value: 'Manitoba' },
          { _id: '4', value: 'Nouveau-Brunswick' },
          { _id: '5', value: 'Terre-Neuve-et-Labrador' },
          { _id: '6', value: 'Nouvelle-Écosse' },
          { _id: '7', value: 'Ontario' },
          { _id: '8', value: 'Île-du-Prince-Édouard' },
          { _id: '9', value: 'Québec' },
          { _id: '10', value: 'Saskatchewan' }
        ]
      };
    },
    methods: {
        methods: {
  async fetchCandidate() {
    try {
      const response = await fetch(`https://api-4.fly.dev/api/candidates/${this.candidateId}`);
      if (!response.ok) {
        throw new Error('Impossible de récupérer les détails du candidat');
      }
      this.candidate = await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  async submitForm() {
    try {
      const url = this.editing ? `https://api-4.fly.dev/api/candidates/${this.candidateId}` : 'https://api-4.fly.dev/api/candidates';
      const method = this.editing ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
      });
      if (!response.ok) {
        throw new Error('Échec de la soumission du formulaire');
      }
    } catch (error) {
      console.error(error);
    }
  }
}

      cancelForm() {
        
        this.editing = false;
        this.form = {
          firstName: '',
          lastName: '',
          position: '',
          description: '',
          address: '',
          phone: '',
          city: '',
          email: '',
          province: '',
          postalCode: ''
        };
      }
    },
    mounted() {
      if (this.candidateId) {
        this.editing = true;
        this.fetchCandidate();
      }
    }
  };
  </script>
  
  <style scoped>
  
  </style>
  