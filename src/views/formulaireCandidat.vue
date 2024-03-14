<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="titre_barre text-lg font-bold text-neutral-500 mb-9">
        {{ editing ? '' : 'Ajouter un Candidat' }}</h1>
      <div v-if="editing">
        <div class="titre_barre-modifier">
          <div class="titre_modifier">
            <p class="text-neutral-500">Candidat</p>
            <h1 class="text-neutral-500">{{ candidate.firstName }} {{ candidate.lastName }}</h1>
            <p class="poste text-neutral-500">{{ candidate.position }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end my-10">
      <button type="button"
        class="btn-secondary mr-2  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        @click="cancelForm">Annuler</button>
      <button type="submit"
        class="btn-primary focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex"
        > 
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
            clip-rule="evenodd" />
        </svg>
        {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>
    </div>
    <form @submit.prevent="submitForm">
      <div class="nom_poste mb-4">
        <label for="fullName" class="block mb-1">Nom et prénom:</label>
        <input type="text" id="fullName" v-model="fullName" class="w-full border-gray-300 rounded-md p-2">
        
      </div>
      <div class="nom_poste mb-4">
        <label for="posistion" class="block mb-1">Poste</label>
        <input type="text" id="position" v-model="form.position" class="w-full border-gray-300 rounded-md p-2">
      </div>
      <div class="block_info-perso my-9">
        <div class="mb-4">
          <label for="description" class="block mb-4">
            <h2 class="text-neutral-500 text-lg font-bold">Courte présentation</h2>
          </label>
          <textarea id="description" v-model="form.description"
            class="block  w-full border-gray-300 rounded-md p-2"></textarea>
        </div>
        <h3 class=" text-neutral-500  my-8 m">Information personnelle</h3>
        <div class="block_info-perso-all">
          <div class="block_info-perso-adresse">
            <div class="mb-4 input_barre-modifier">
              <label for="address" class="block mb-1">Adresse</label>
              <input type="text" id="address" v-model="form.address" class="w-full border-gray-300 rounded-md p-2">
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="city" class="block mb-1">Ville</label>
              <input type="text" id="city" v-model="form.city" class="w-full border-gray-300 rounded-md p-2">
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="province" class="block mb-1">Province</label>
              <select id="province" v-model="form.province" class="w-full border-gray-300 rounded-md p-2">
                <option value="" disabled selected>Choisissez une province</option>
                <option v-for="province in provinces" :value="province.value" :key="province._id">{{ province.value }}
                </option>
              </select>
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="postalCode" class="block mb-1">Code postal</label>
              <input type="text" id="postalCode" v-model="form.postalCode"
                class="w-full border-gray-300 rounded-md p-2">
            </div>
          </div>
          <div class="block_info-perso-contact">
            <div class="mb-4 input_barre-modifier">
              <label for="phone" class="block mb-1">Téléphone</label>
              <input type="text" id="phone" v-model="form.phone" class="w-full border-gray-300 rounded-md p-2">
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="email" class="block mb-1">Courriel</label>
              <input type="email" id="email" v-model="form.email" class="w-full border-gray-300 rounded-md p-2">
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button type="button"
          class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          @click="cancelForm">Annuler</button>
        <button type="submit"
          class="btn-primary focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex"
          > 
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
              clip-rule="evenodd" />
          </svg>
          {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue';

export default {
  props: {
    candidateId: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const form = reactive({
      fullName: '', // Champ pour le nom complet
      position: '',
      description: '',
      address: '',
      phone: '',
      city: '',
      email: '',
      province: '',
      postalCode: ''
    });

    const editing = computed(() => !!props.candidateId);

    const candidate = reactive({});

    const provinces = [
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
    ];

    // Validation du formulaire
    const isFullNameValid = computed(() => !!form.fullName.trim());
    const isPositionValid = computed(() => !!form.position.trim());
    const isDescriptionValid = computed(() => !!form.description.trim());
    const isAddressValid = computed(() => !!form.address.trim());
    const isPhoneValid = computed(() => !!form.phone.trim());
    const isCityValid = computed(() => !!form.city.trim());
    const isEmailValid = computed(() => !!form.email.trim());
    const isProvinceValid = computed(() => !!form.province.trim());
    const isPostalCodeValid = computed(() => !!form.postalCode.trim());

    // Combinez toutes les validations
    const isFormValid = computed(() =>
      isFullNameValid.value &&
      isPositionValid.value &&
      isDescriptionValid.value &&
      isAddressValid.value &&
      isPhoneValid.value &&
      isCityValid.value &&
      isEmailValid.value &&
      isProvinceValid.value &&
      isPostalCodeValid.value
    );

    const fetchCandidate = async () => {
      try {
        const response = await fetch(`https://api-4.fly.dev/api/candidates/${props.candidateId}`);
        if (!response.ok) {
          throw new Error('Impossible de récupérer les détails du candidat');
        }
        candidate = await response.json();

        form.fullName = `${candidate.firstName} ${candidate.lastName}`;
      } catch (error) {
        console.error(error);
      }
    };

    const submitForm = async () => {
      const [firstName, lastName] = form.fullName.split(' ');
      try {
        const url = editing.value ? `https://api-4.fly.dev/api/candidates/${props.candidateId}` :
          'https://api-4.fly.dev/api/candidates';
        const method = editing.value ? 'PUT' : 'POST';
        const response = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            position: form.position,
            description: form.description,
            address: form.address,
            phone: form.phone,
            city: form.city,
            email: form.email,
            province: form.province,
            postalCode: form.postalCode
          })
        });
        if (!response.ok) {
          throw new Error('Échec de la soumission du formulaire');
        }
      } catch (error) {
        console.error(error);
      }
    };

    const cancelForm = () => {
      form.fullName = '';
      form.position = '';
      form.description = '';
      form.address = '';
      form.phone = '';
      form.city = '';
      form.email = '';
      form.province = '';
      form.postalCode = '';
    };

    onMounted(() => {
      if (props.candidateId) {
        fetchCandidate();
      }
    });

    return {
      form,
      editing,
      candidate,
      provinces,
      fetchCandidate,
      submitForm,
      cancelForm,
      isFullNameValid,
      isPositionValid,
      isDescriptionValid,
      isAddressValid,
      isPhoneValid,
      isCityValid,
      isEmailValid,
      isProvinceValid,
      isPostalCodeValid,
      isFormValid
    };
  }
};
</script>



<style scoped>
  .titre_barre {
    position: relative;
    padding-left: 10px;
  }

  .titre_barre::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 20px;
    background-color: rgb(1, 26, 56);
  }

  .titre_barre-modifier {
    position: relative;
    padding-left: 10px;
  }

  .titre_barre-modifier::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 100px;
    background-color: rgb(1, 26, 56);
  }

  .input_barre-modifier {
    position: relative;
    padding-left: 10px;
  }

  .input_barre-modifier::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 4px;
    height: 70px;
    background-color: rgb(1, 26, 56);
  }

  .titre_modifer {
    display: flex;
    flex-direction: column;
  }

  .poste {
    background-color: white;
  }

  .nom_poste {
    display: grid;
    grid-template-columns: 1fr 4fr;
    justify-content: space-between;
  }

  .block_info-perso {
    background-color: white;
    padding: 2rem;
  }

  .block_info-perso-all {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
</style>
