<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="titre_barre text-lg font-bold text-neutral-500 mb-9">
        {{ editing ? '' : 'Ajouter un Candidat' }}</h1>
      <div v-if="editing">
        <div class="titre_barre-modifier">
          <div class="titre_modifer">
            <p class="text-neutral-500">Candidat</p>
            <h1 class="text-neutral-500">{{ candidate.firstName }} {{ candidate.lastName }}</h1>
            <p class="poste text-neutral-500">{{ candidate.position }}</p>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="submitForm">
      <div class="flex justify-end my-10">
        <RouterLink to="/app/Candidats">
          <button type="button"
            class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            @click="cancelForm">Annuler</button>
        </RouterLink>
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

      <div class="nom_poste mb-4">
        <label for="fullName" class="block mb-1">Nom et prénom </label>
        <input type="text" id="fullName" v-model="form.fullName" @input="validateFullName"
          class="w-full border-gray-300 rounded-md p-2">
        <span  class="text-red-500">{{ fullNameError }}</span>
      </div>
      <div class="nom_poste mb-4">
        <label for="position" class="block mb-1">Poste</label>
        <input type="text" id="position" v-model="form.position" @input="validatePosition"
          class="w-full border-gray-300 rounded-md p-2">
        <span  class="text-red-500">{{ positionError }}</span>
      </div>
      <div class="block_info-perso my-9">
        <div class="mb-4">
          <label for="description" class="block mb-4">
            <h2 class="text-neutral-500 text-lg font-bold">Courte présentation</h2>
          </label>
          <textarea id="description" v-model="form.description" @input="validateDescription"
            class="block  w-full border-gray-300 rounded-md p-2"></textarea>
          <span  class="text-red-500">{{ descriptionError }}</span>
        </div>
        <h3 class=" text-neutral-500  my-8 m">Information personnelle</h3>
        <div class="block_info-perso-all">
          <div class="block_info-perso-adresse">
            <div class="mb-4 input_barre-modifier">
              <label for="address" class="block mb-1">Adresse</label>
              <input type="text" id="address" v-model="form.address" @input="validateAddress"
                class="w-full border-gray-300 rounded-md p-2">
              <span v-if="!isAddressValid" class="text-red-500">{{ addressError }}</span>
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="city" class="block mb-1">Ville</label>
              <input type="text" id="city" v-model="form.city" @input="validateCity"
                class="w-full border-gray-300 rounded-md p-2">
              <span v-if="!isCityValid" class="text-red-500">{{ cityError }}</span>
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="province" class="block mb-1">Province</label>
              <select id="province" v-model="form.province" @change="validateProvince"
                class="w-full border-gray-300 rounded-md p-2">
                <option value="" disabled  selected>Choisissez une province</option>
                <option v-for="province in provinces" :value="province.value" :key="province._id">{{ province.value }}
                </option>
              </select>
              <span v-if="!isProvinceValid" class="text-red-500">{{ provinceError }}</span>
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="postalCode" class="block mb-1">Code postal</label>
              <input type="text" id="postalCode" v-model="form.postalCode" @input="validatePostalCode"
                class="w-full border-gray-300 rounded-md p-2">
              <span v-if="!isPostalCodeValid" class="text-red-500">{{ postalCodeError }}</span>
            </div>
          </div>
          <div class="block_info-perso-contact">
            <div class="mb-4 input_barre-modifier">
              <label for="phone" class="block mb-1">Téléphone</label>
              <input type="text" id="phone" v-model="form.phone" @input="validatePhone"
                class="w-full border-gray-300 rounded-md p-2">
              <span v-if="!isPhoneValid" class="text-red-500">{{ phoneError }}</span>
            </div>
            <div class="mb-4 input_barre-modifier">
              <label for="email" class="block mb-1">Courriel</label>
              <input type="email" id="email" v-model="form.email" @input="validateEmail"
                class="w-full border-gray-300 rounded-md p-2">
              <span v-if="!isEmailValid" class="text-red-500">{{ emailError }}</span>
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
        postalCode: '',
        skills:['skill1', 'skill2', 'skill3']
      });

      const provinces = ref([]);

      const fetchProvinces = async () => {
        try {
          const response = await fetch('https://api-4.fly.dev/provinces');
          if (!response.ok) {
            throw new Error('Impossible de récupérer les provinces');
          }
          provinces.value = await response.json();
        } catch (error) {
          console.error(error);
        }
      };

      onMounted(fetchProvinces);

      const editing = computed(() => !!props.candidateId);

      const fullNameError = ref('');
      const positionError = ref('');
      const descriptionError = ref('');
      const addressError = ref('');
      const phoneError = ref('');
      const cityError = ref('');
      const emailError = ref('');
      const provinceError = ref('');
      const postalCodeError = ref('');

      const validateFullName = () => {
        fullNameError.value = '';

        const fullNameTrimmed = form.fullName.trim();
        const fullNameWords = fullNameTrimmed.split(' ');

        if (fullNameWords.length !== 2) {
          fullNameError.value = 'Le nom complet doit contenir exactement deux mots.';
          return false;
        }

        if (fullNameTrimmed.length < 3 || fullNameTrimmed.length > 50) {
          fullNameError.value = 'Le nom complet doit contenir entre 3 et 50 caractères.';
          return false;
        }

        return true;
      };

      const validatePosition = () => {
        positionError.value = '';

        const positionTrimmed = form.position.trim();

        if (positionTrimmed.length < 3 || positionTrimmed.length > 50) {
          positionError.value = 'Le poste doit contenir entre 3 et 50 caractères.';
          return false;
        }

        return true;
      };

      const validateDescription = () => {
        descriptionError.value = '';

        const descriptionTrimmed = form.description.trim();

        if (descriptionTrimmed.length < 3 || descriptionTrimmed.length > 250) {
          descriptionError.value = 'La description doit contenir entre 3 et 250 caractères.';
          return false;
        }

        return true;
      };

      const validateAddress = () => {
        addressError.value = '';

        const addressTrimmed = form.address.trim();

        if (!addressTrimmed) {
          addressError.value = 'Veuillez entrer votre adresse.';
          return false;
        }

        const containsNumber = /\d/.test(addressTrimmed);
        const containsWord = /[a-zA-Z]/.test(addressTrimmed);

        if (!containsNumber || !containsWord) {
          addressError.value = 'L\'adresse doit contenir à la fois un nombre et un mot.';
          return false;
        }

        return true;
      };

      const validatePhone = () => {
  phoneError.value = '';

  const phoneTrimmed = form.phone.trim();

  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

  if (!phoneTrimmed) {
    phoneError.value = 'Veuillez entrer votre numéro de téléphone.';
    return false;
  } else if (!phoneRegex.test(phoneTrimmed)) {
    phoneError.value = 'Veuillez entrer un numéro de téléphone valide au format 514-555-5555.';
    return false;
  }

  return true;
};

      const validateCity = () => {
        cityError.value = '';

        const cityTrimmed = form.city.trim();

        if (!cityTrimmed) {
          cityError.value = 'Veuillez entrer votre ville.';
          return false;
        }

        if (cityTrimmed.length < 3 || cityTrimmed.length > 50) {
          cityError.value = 'La ville doit contenir entre 3 et 50 caractères.';
          return false;
        }

        return true;
      };

      const validateSkills = () => {
        
        return true;
      };

      const formatPostalCode = (postalCode) => {
        return postalCode.trim().toUpperCase();
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

    if (!form.province) {
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
        } else if (!isPostalCodeValid(form.postalCode)) {
          postalCodeError.value = 'Veuillez entrer un code postal valide.';
          return false;
        }
        return true;
      };

      const isPhoneValid = (phone) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
      };

      const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

      const isPostalCodeValid = (postalCode) => {
        const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        return postalCodeRegex.test(postalCode);
      };

      const isFormValid = computed(() => {
        return !fullNameError.value &&
          !descriptionError.value &&
          !addressError.value &&
          !phoneError.value &&
          !cityError.value &&
          !emailError.value &&
          !provinceError.value &&
          !postalCodeError.value &&
          validateFullName() &&
          validateDescription() &&
          validateAddress() &&
          validatePhone() &&
          validateCity() &&
          validateEmail() &&          
          validatePostalCode() &&
          validateSkills();
      });

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

      const fetchCandidate = async () => {
        try {
          const response = await fetch(`https://api-4.fly.dev/candidates/${props.candidateId}`);
          if (!response.ok) {
            throw new Error('Impossible de récupérer les détails du candidat');
          }
          const candidate = await response.json();

          form.fullName = `${candidate.firstName} ${candidate.lastName}`;
        } catch (error) {
          console.error(error);
        }
      };

      const submitForm = async () => {
        const [firstName, lastName] = form.fullName.split(' ');
        try {
          const url = editing.value ? `https://api-4.fly.dev/candidates/${props.candidateId}` :
            'https://api-4.fly.dev/candidates';
          const method = editing.value ? 'PUT' : 'POST';
          const response = await fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              description: form.description,
              address: form.address,
              phone: form.phone,
              city: form.city,
              email: form.email,
              province: form.province,
              postalCode: formatPostalCode(form.postalCode),
              skills: form.skills
            })
          });
          if (!response.ok) {
            throw new Error('Échec de la soumission du formulaire');
          }
        } catch (error) {
          console.error(error);
        }
      };

      onMounted(() => {
        if (props.candidateId) {
          fetchCandidate();
        }
      });

      return {
        form,
        editing,
        provinces,
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
        postalCodeError,
        validateFullName,
        validatePosition,
        validateDescription,
        validateAddress,
        validatePhone,
        validateCity,
        validateEmail,
        validateProvince,
        validatePostalCode,
        validateSkills

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