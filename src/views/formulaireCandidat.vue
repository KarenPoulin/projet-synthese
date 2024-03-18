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
    <form @submit.prevent="submitForm">
      <div class="flex justify-end my-10">
        <a href="/app/candidats">
          <button type="button"
            class="btn-secondary mr-2  text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            @click="cancelForm">Annuler</button>
        </a>
        <button type="submit"
          class="btn-primary focus:outline-none text-white   bg-fuchsia-800  hover:bg-fuchsia-900  focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex"
          :disabled="!isFormValid">
          <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
              clip-rule="evenodd" />
          </svg>
          {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>
      </div>

      <div class="nom_poste mb-4">
        <label for="fullName" class="block mb-1">Nom et prénom </label>
        <input type="text" id="fullName" v-model="form.fullName" class="w-full border-gray-300 rounded-md p-2">
        <span v-if="fullNameError" class="text-red-500">{{ fullNameError }}</span>
      </div>
      <div class="nom_poste mb-4">
        <label for="posistion" class="block mb-1">Poste</label>
        <input type="text" id="position" v-model="form.position" class="w-full border-gray-300 rounded-md p-2">
        <span v-if="positionError" class="text-red-500">{{ positionError }}</span>
      </div>
      <div class="block_info-perso my-9">
        <div class="mb-4">
          <label for="description" class="block mb-4">
            <h2 class="text-neutral-500 text-lg font-bold">Courte présentation</h2>
          </label>
          <textarea id="description" v-model="form.description"
            class="block  w-full border-gray-300 rounded-md p-2"></textarea>
          <span v-if="descriptionError" class="text-red-500">{{ descriptionError }}</span>
        </div>
        <h3 class=" text-neutral-500  my-8 m">Information personnelle</h3>
        <div class="block_info-perso-all">
          <div class="block_info-perso-adresse">
            <div class="mb-4 input_barre-modifier">
              <label for="address" class="block mb-1">Adresse</label>
              <input type="text" id="address" v-model="form.address" class="w-full border-gray-300 rounded-md p-2">
              <span v-if="addressError" class="text-red-500">{{ addressError }}</span>
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="city" class="block mb-1">Ville</label>
              <input type="text" id="city" v-model="form.city" class="w-full border-gray-300 rounded-md p-2">
              <span v-if="cityError" class="text-red-500">{{ cityError }}</span>
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="province" class="block mb-1">Province</label>
              <select id="province" v-model="form.province" class="w-full border-gray-300 rounded-md p-2">
                <option value="" disabled selected>Choisissez une province</option>
                <option v-for="province in provinces" :value="province.value" :key="province._id">{{ province.value }}
                </option>
              </select>
              <span v-if="provinceError" class="text-red-500">{{ provinceError }}</span>
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="postalCode" class="block mb-1">Code postal</label>
              <input type="text" id="postalCode" v-model="form.postalCode"
                class="w-full border-gray-300 rounded-md p-2">
              <span v-if="postalCodeError" class="text-red-500">{{ postalCodeError }}</span>
            </div>
          </div>
          <div class="block_info-perso-contact">
            <div class="mb-4 input_barre-modifier">
              <label for="phone" class="block mb-1">Téléphone</label>
              <input type="text" id="phone" v-model="form.phone" class="w-full border-gray-300 rounded-md p-2">
              <span v-if="phoneError" class="text-red-500">{{ phoneError }}</span>
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="email" class="block mb-1">Courriel</label>
              <input type="email" id="email" v-model="form.email" class="w-full border-gray-300 rounded-md p-2">
              <span v-if="emailError" class="text-red-500">{{ emailError }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <a href="/app/candidats">
          <button type="button"
            class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            @click="cancelForm">Annuler</button>
        </a>
        <button type="submit"
          class="btn-primary focus:outline-none text-white bg-fuchsia-800  hover:bg-fuchsia-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex"
          :disabled="!isFormValid">
          <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
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
  import {
    reactive,
    computed,
    onMounted,
    ref
  } from 'vue';

  export default {
    props: {
      candidateId: {
        type: String,
        required: false
      }
    },
    setup(props) {
      const form = reactive({
        fullName: '',
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

      const provinces = [{
          _id: '1',
          value: 'Alberta'
        },
        {
          _id: '2',
          value: 'Colombie-Britannique'
        },
        {
          _id: '3',
          value: 'Manitoba'
        },
        {
          _id: '4',
          value: 'Nouveau-Brunswick'
        },
        {
          _id: '5',
          value: 'Terre-Neuve-et-Labrador'
        },
        {
          _id: '6',
          value: 'Nouvelle-Écosse'
        },
        {
          _id: '7',
          value: 'Ontario'
        },
        {
          _id: '8',
          value: 'Île-du-Prince-Édouard'
        },
        {
          _id: '9',
          value: 'Québec'
        },
        {
          _id: '10',
          value: 'Saskatchewan'
        }
      ];

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
      const phoneRegex = /^\d{10}$/;

      const formatPostalCode = (input) => {
        input = input.toUpperCase();

        if (!/\s/.test(input.charAt(3))) {
          input = input.slice(0, 3) + ' ' + input.slice(3);
        }

        return input;
      };

      const validateCanadianPhoneNumber = (input) => {
        const sanitizedInput = input.replace(/-/g, '');
        const formattedInput = '1' + sanitizedInput;
        const regexPattern = /^1\d{9}$/;
        return regexPattern.test(formattedInput);
      };


      const fullNameError = ref('');
      const positionError = ref('');
      const descriptionError = ref('');
      const addressError = ref('');
      const phoneError = ref('');
      const cityError = ref('');
      const emailError = ref('');
      const provinceError = ref('');
      const postalCodeError = ref('');

      const validateForm = () => {
        validateFullName();
        validatePosition();
        validateDescription();
        validateAddress();
        validatePhone();
        validateCity();
        validateEmail();
        validateProvince();
        validatePostalCode();
      };

      const validateFullName = () => {
        fullNameError.value = '';

        if (!form.fullName.trim()) {
          fullNameError.value = 'Veuillez entrer votre nom complet.';
          return false;
        }
        return true;
      };

      const validatePosition = () => {
        positionError.value = '';

        if (!form.position.trim()) {
          positionError.value = 'Veuillez entrer votre poste.';
          return false;
        }
        return true;
      };

      const validateDescription = () => {
        descriptionError.value = '';

        if (!form.description.trim()) {
          descriptionError.value = 'Veuillez entrer une courte présentation.';
          return false;
        }
        return true;
      };

      const validateAddress = () => {
        addressError.value = '';

        if (!form.address.trim()) {
          addressError.value = 'Veuillez entrer votre adresse.';
          return false;
        }
        return true;
      };

      const validatePhone = () => {
        phoneError.value = '';

        if (!form.phone.trim()) {
          phoneError.value = 'Veuillez entrer votre numéro de téléphone.';
          return false;
        } else if (!validateCanadianPhoneNumber(form.phone)) {
          phoneError.value = 'Veuillez entrer un numéro de téléphone valide.';
          return false;

        }
        return true;
      };

      const validateCity = () => {


        cityError.value = '';

        if (!form.city.trim()) {
          cityError.value = 'Veuillez entrer votre ville.';
          return false;
        }
        return true;
      };

      const validateEmail = () => {
        emailError.value = '';

        if (!form.email.trim()) {
          emailError.value = 'Veuillez entrer votre adresse e-mail.';
          return false;
        } else if (!isEmailValid(form.email)) {
          emailError.value = 'Veuillez entrer une adresse e-mail valide.';
          return false;
        }
        return true;
      };

      const validateProvince = () => {
        provinceError.value = '';

        if (!form.province.trim()) {
          provinceError.value = 'Veuillez sélectionner une province.';
          return false;
        }
        return true;
      };

      const validatePostalCode = () => {
        postalCodeError.value = '';

        if (!form.postalCode.trim()) {
          postalCodeError.value = 'Veuillez entrer votre code postal.';
          return false;
        } else if (!isCanadianPostalCodeValid(form.postalCode)) {
          postalCodeError.value = 'Veuillez entrer un code postal valide.';
          return false;
        }
        return true;
      };

      const isCanadianPhoneNumberValid = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
      };

      
      const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

     
      const isCanadianPostalCodeValid = (postalCode) => {
        const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        return postalCodeRegex.test(postalCode);
      };



      const isFormValid = computed(() => {
        return !fullNameError.value &&
          !positionError.value &&
          !descriptionError.value &&
          !addressError.value &&
          !phoneError.value &&
          !cityError.value &&
          !emailError.value &&
          !provinceError.value &&
          !postalCodeError.value;
      });


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
              postalCode: formatPostalCode(form.postalCode)
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
  isFormValid,
  fullNameError,
  positionError,
  descriptionError,
  addressError,
  phoneError,
  cityError,
  emailError,
  provinceError,
  postalCodeError
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
    gap: 0.3rem;
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

  @media (max-width: 768px) {
    .block_info-perso-all {
      display: flex;
      flex-direction: column;
    }
  }
</style>