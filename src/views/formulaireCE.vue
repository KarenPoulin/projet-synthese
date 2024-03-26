<template>
    <div>
        <div v-if="!showCandidateForm">
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
                        <router-link to="/app/candidats">
                            <button type="submit"
                                class="btn-primary focus:outline-none text-white bg-fuchsia-800  hover:bg-fuchsia-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex"
                                :disabled="!isFormValid">
                                <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                        clip-rule="evenodd" />
                                </svg>
                                {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>
                        </router-link>
                    </div>

                    <div class="nom_poste mb-4">
                        <label for="fullName" class="block mb-1  text-neutral-500 font-bold">Nom et prénom </label>
                        <input type="text" id="fullName" v-model="formData.fullName" @input="validateFullName"
                            class="w-full border-gray-300 rounded-md p-2">
                        <span class="text-red-500">{{ fullNameError }}</span>
                    </div>
                    <div class="nom_poste mb-4">
                        <label for="position" class="block mb-1  text-neutral-500 font-bold">Poste</label>
                        <input type="text" id="position" v-model="formData.position" @input="validatePosition"
                            class="w-full border-gray-300 rounded-md p-2">
                        <span class="text-red-500">{{ positionError }}</span>
                    </div>
                    <div class="block_info-perso my-9">
                        <div class="mb-4">
                            <label for="description" class="block mb-4">
                                <h2 class="text-teal-500 text-lg font-bold">Courte présentation</h2>
                            </label>
                            <textarea id="description" v-model="formData.description" @input="validateDescription"
                                class="block  w-full border-gray-300 rounded-md p-2"></textarea>
                            <span class="text-red-500">{{ descriptionError }}</span>
                        </div>
                        <h3 class="  my-8 text-teal-500  font-bold">Information personnelle</h3>
                        <div class="block_info-perso-all">
                            <div class="block_info-perso-adresse">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="address" class="block mb-1 text-neutral-500 font-bold">Adresse</label>
                                    <input type="text" id="address" v-model="formData.address" @input="validateAddress"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!addressError" class="text-red-500">{{ addressError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="city" class="block mb-1  text-neutral-500 font-bold">Ville</label>
                                    <input type="text" id="city" v-model="formData.city" @input="validateCity"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!cityError" class="text-red-500">{{ cityError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="province"
                                        class="block mb-1  text-neutral-500 font-bold">Province</label>
                                    <select id="province" v-model="formData.provinceId" @change="validateProvince"
                                        class="w-full border-gray-300 rounded-md p-2">
                                        <option value="" disabled selected>Choisissez une province</option>
                                        <option v-for="province in provinces" :value="province._id" :key="province._id">
                                            {{ province.value }}
                                        </option>
                                    </select>
                                    <span v-if="!phoneError" class="text-red-500">{{ provinceError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="postalCode" class="block mb-1  text-neutral-500 font-bold">Code
                                        postal</label>
                                    <input type="text" id="postalCode" v-model="formData.postalCode"
                                        @input="validatePostalCode" class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!postalCodeError" class="text-red-500">{{ postalCodeError }}</span>
                                </div>
                            </div>
                            <div class="block_info-perso-contact">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="phone" class="block mb-1  text-neutral-500 font-bold">Téléphone</label>
                                    <input type="text" id="phone" v-model="formData.phone" @input="validatePhone"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!phoneError" class="text-red-500">{{ phoneError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="email" class="block mb-1  text-neutral-500 font-bold">Courriel</label>
                                    <input type="email" id="email" v-model="formData.email" @input="validateEmail"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!emailError" class="text-red-500">{{ emailError }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <router-link to="/app/candidats">
                            <button type="button"
                                class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                @click="cancelForm">Annuler</button>
                        </router-link>
                        <router-link to="/app/candidats">
                            <button type="submit"
                                class="btn-primary focus:outline-none text-white bg-fuchsia-800  hover:bg-fuchsia-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex"
                                :disabled="!isFormValid">
                                <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                        clip-rule="evenodd" />
                                </svg>
                                {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
        <div v-else>
            <div class="p-4">
                <div class="flex justify-between items-center mb-4">
                    <h1 class="titre_barre text-lg font-bold text-neutral-500 mb-9">
                        {{ editing ? '' : 'Ajouter une entreprise' }}</h1>
                    <div v-if="editing">
                        <div class="titre_barre-modifier">
                            <div class="titre_modifer">
                                <p class="text-neutral-500">Entreprise</p>
                                <h1 class="text-neutral-500">{{ formData.name }}</h1>
                                <p class="poste text-neutral-500">{{ formData.image }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="flex justify-end my-10">
                        <router-link to="/app/Entreprises">
                            <button type="button"
                                class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                @click="cancelForm">Annuler</button>
                        </router-link>
                        <router-link to="/app/Entreprises">
                            <button type="submit"
                                class="btn-primary focus:outline-none text-white bg-fuchsia-800  hover:bg-fuchsia-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex"
                                :disabled="!isFormValid">
                                <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                        clip-rule="evenodd" />
                                </svg>
                                {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}</button>
                        </router-link>
                    </div>

                    <div class="nom_poste mb-4">
                        <label for="name" class="block mb-1  text-neutral-500 font-bold">Nom </label>
                        <input type="text" id="name" v-model="formData.name" @input="validateName"
                            class="w-full border-gray-300 rounded-md p-2">
                        <span class="text-red-500">{{ nameError }}</span>
                    </div>
                    <div class="nom_poste mb-4">
                        <label for="image" class="block mb-1 text-neutral-500 font-bold">Logo</label>
                        <div class="flex items-center">

                            <input type="text " id="image" v-model="formData.image" @input="validateLogo"
                                class="w-full border-gray-300 rounded-md p-2">
                            <label for="image"
                                class="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                Parcourir
                            </label>

                        </div>
                        <span class="text-red-500">{{ logoError }}</span>
                    </div>

                    <div class="block_info-perso my-9">
                        <div class="mb-4">
                            <label for="description" class="block mb-4">
                                <h2 class="text-teal-500 text-lg font-bold">Courte présentation</h2>
                            </label>
                            <textarea id="description" v-model="formData.description" @input="validateDescription"
                                class="block  w-full border-gray-300 rounded-md p-2"></textarea>
                            <span class="text-red-500">{{ descriptionError }}</span>
                        </div>
                        <div class="mb-4 input_barre-modifier">
                            <label for="contact" class="block mb-1 text-neutral-500 font-bold">Personne Contact</label>
                            <input type="text" id="contact" v-model="formData.contact" @input="validateName"
                                class="w-full border-gray-300 rounded-md p-2">
                            <span v-if="!nameError" class="text-red-500">{{ nameError }}</span>
                        </div>
                        <h3 class="  my-8 text-teal-500  font-bold">Information de contact</h3>
                        <div class="block_info-perso-all">
                            <div class="block_info-perso-adresse">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="address" class="block mb-1 text-neutral-500 font-bold">Adresse</label>
                                    <input type="text" id="address" v-model="formData.address" @input="validateAddress"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!addressError" class="text-red-500">{{ addressError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="city" class="block mb-1  text-neutral-500 font-bold">Ville</label>
                                    <input type="text" id="city" v-model="formData.city" @input="validateCity"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!cityError" class="text-red-500">{{ cityError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="province"
                                        class="block mb-1  text-neutral-500 font-bold">Province</label>
                                    <select id="province" v-model="formData.provinceId" @change="validateProvince"
                                        class="w-full border-gray-300 rounded-md p-2">
                                        <option value="" disabled selected>Choisissez une province</option>
                                        <option v-for="province in provinces" :value="province._id" :key="province._id">
                                            {{ province.value }}
                                        </option>
                                    </select>
                                    <span v-if="!provinceError" class="text-red-500">{{ provinceError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="postalCode" class="block mb-1  text-neutral-500 font-bold">Code
                                        postal</label>
                                    <input type="text" id="postalCode" v-model="formData.postalCode"
                                        @input="validatePostalCode" class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!postalCodeError" class="text-red-500">{{postalCodeError }}</span>
                                </div>
                            </div>
                            <div class="block_info-perso-contact">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="phone" class="block mb-1  text-neutral-500 font-bold">Téléphone</label>
                                    <input type="text" id="phone" v-model="formData.phone" @input="validatePhone"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!phoneError" class="text-red-500">{{ phoneError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="email" class="block mb-1  text-neutral-500 font-bold">Courriel</label>
                                    <input type="email" id="email" v-model="formData.email" @input="validateEmail"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!emailError" class="text-red-500">{{ emailError }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <router-link to="/app/Entreprises">
                            <button type="button"
                                class="btn-secondary mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                @click="cancelForm">Annuler</button>
                        </router-link>
                        <router-link to="/app/Entreprises">

                            <button type="submit"
                                class="btn-primary focus:outline-none text-white bg-fuchsia-800  hover:bg-fuchsia-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 inline-flex"
                                :disabled="!isFormValid">
                                <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                                        clip-rule="evenodd" />
                                </svg>
                                {{ editing ? 'Mettre à jour' : 'Sauvegarder' }}
                            </button>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>


</template>

<script>
    import {
        ref,
        reactive,
        computed,
        onMounted
    } from 'vue'
    import axios from 'axios'
    import {
        useRouter
    } from 'vue-router'



    export default {
        props: {
            type: {
                type: String,
                required: true
            },
            candidateId: {
                type: String,
                required: false
            },
            entrepriseId: {
                type: String,
                required: false
            }
        },
        
        setup(props) {
            const router = useRouter();
            const editing = ref(false);
            const showCandidateForm = ref(false);
            const isCandidat = computed(() => props.type === 'candidat')

            const formData = reactive({
                fullName: '',
                position: '',
                description: '',
                address: '',
                phone: '',
                city: '',
                email: '',
                provinceId: '',
                provinceValue: '',
                postalCode: '',
                skills: [],
                name: '',
                image: '',
                contact: '',
                activitySector: {

                    _id: '65f8df6040965a2e23d73271',
                    value: 'Technologies',
                },
                website: 'test.com',
            });
            const errors = reactive({
                fullName: '',
                position: '',
                description: '',
                address: '',
                phone: '',
                city: '',
                email: '',
                province: '',
                postalCode: '',
                name: '',
                logo: ''
            })
            const fullNameError = ref(null)
            const positionError = ref(null)
            const descriptionError = ref(null)
            const addressError = ref(null)
            const phoneError = ref(null)
            const cityError = ref(null)
            const emailError = ref(null)
            const provinceError = ref(null)
            const postalCodeError = ref(null)
            const nameError = ref(null)
            const logoError = ref(null)

            const validateFullName = () => {
                fullNameError.value = ''
                const fullNameTrimmed = formData.fullName.trim()
                const fullNameWords =
                    fullNameTrimmed.split(' ')
                if (
                    fullNameWords.length !== 2) {
                    fullNameError.value =
                        'Le nom complet doit contenir exactement deux mots.'
                    return false
                }
                if (fullNameTrimmed.length < 3 ||
                    fullNameTrimmed.length > 50) {
                    fullNameError.value =
                        'Le nom complet doit contenir entre 3 et 50 caractères.'
                    return false
                }
                return true
            }
            const validatePosition = () => {
                positionError.value = ''
                const positionTrimmed = formData.position.trim()
                if (positionTrimmed.length < 3 || positionTrimmed
                    .length > 50) {
                    positionError.value = 'Le poste doit contenir entre 3 et 50 caractères.'
                    return false
                }
                return true
            }
            const validateDescription = () => {
                descriptionError.value = ''
                const descriptionTrimmed = formData.description.trim()
                if (descriptionTrimmed.length < 3 || descriptionTrimmed.length > 250) {
                    descriptionError.value = 'La description doit contenir entre 3 et 250 caractères.'
                    return false
                }
                return true
            }
            const validateAddress = () => {
                addressError.value = ''
                const addressTrimmed = formData.address.trim()
                if (!addressTrimmed) {
                    addressError.value = 'Veuillez entrer votre adresse.'
                    return false;
                }
                const containsNumber = /\d/.test(addressTrimmed);
                const containsWord = /[a-zA-Z]/.test(addressTrimmed);
                if (!containsNumber || !containsWord) {
                    addressError.value = "L'adresse doit contenir à la fois un nombre et un mot."
                    return false;
                }
                return true;
            };
            const validatePhone = () => {
                phoneError.value = ''
                const phoneTrimmed = formData.phone.trim()
                const phoneRegex = /^\d{3}-\d{3}-\d{4}$/
                if (!phoneTrimmed) {
                    phoneError.value = 'Veuillez entrer votre numéro de téléphone.'
                    return false
                } else if (!phoneRegex.test(phoneTrimmed)) {
                    phoneError.value = 'Veuillez entrer un numéro de téléphone valide au format 514-555-5555.'
                    return false
                }
                return true
            }
            const validateCity = () => {
                cityError.value = ''
                const cityTrimmed = formData.city.trim()
                if (!cityTrimmed) {
                    cityError.value = 'Veuillez entrer votre ville.'
                    return false
                }
                if (cityTrimmed.length < 3 || cityTrimmed.length > 50) {
                    cityError.value = 'La ville doit contenir entre 3 et 50 caractères.'
                    return false
                }
                return true
            }
            const validateEmail = () => {
                emailError.value = ''
                if (!formData.email.trim()) {
                    emailError.value = 'Veuillez entrer votre adresse e-mail.'
                    return false
                } else if (!isEmailValid(formData.email)) {
                    emailError.value = 'Veuillez entrer une adresse e-mail valide.'
                    return false
                }
                return true
            }
            const validateProvince = () => {
                provinceError.value = ''
                if (!formData.provinceId) {
                    provinceError.value = 'Veuillez sélectionner une province.'
                    return false
                }
                return true
            }

            const formatPostalCode = (postalCode) => {
                const formattedPostalCode = postalCode.trim().toUpperCase();
                return formattedPostalCode.substring(0, 3) + " " + formattedPostalCode.substring(3);
            };
            const validatePostalCode = () => {
                postalCodeError.value = ''
                if (!formData.postalCode.trim()) {
                    postalCodeError.value = 'Veuillez entrer votre code postal.'
                    return false
                } else if (!isPostalCodeValid(formData.postalCode)) {
                    postalCodeError.value = 'Veuillez entrer un code postal valide.'
                    return false
                }
                return true
            }
            const validateName = () => {
                nameError.value = ''
                const nameTrimmed = formData.name.trim()
                if (nameTrimmed.length < 3 || nameTrimmed.length > 50) {
                    nameError.value = 'Le nom complet doit contenir entre 3 et 50 caractères.'
                    return false
                }
                return true
            }
            const validateLogo = () => {
                logoError.value = ''
                const logoTrimmed = formData.image.trim()
                const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/
                if (!urlRegex.test(logoTrimmed)) {
                    logoError.value = 'Veuillez entrer une URL valide pour le logo.'
                    return false
                }
                return true
            }
            const isEmailValid = (email) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                return emailRegex.test(email)
            }
            const isPostalCodeValid = (postalCode) => {
                const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
                return postalCodeRegex.test(postalCode)
            }
            const isFormValid = computed(() => {
                if (isCandidat.value) {
                    return (validateFullName() &&
                        validatePosition() &&
                        validateDescription() &&
                        validateAddress() &&
                        validatePhone() &&
                        validateCity() &&
                        validateEmail() &&
                        validateProvince() &&
                        validatePostalCode())
                } else {
                    return (validateName() &&
                        validateLogo() &&
                        validateDescription() &&
                        validateAddress() &&
                        validatePhone() &&
                        validateCity() &&
                        validateEmail() &&
                        validateProvince() &&
                        validatePostalCode())
                }
            })
            const submitForm = async () => {
                if (isFormValid.value) {
                    const formData = {
                        description: formData.description,
                        email: formData.email,
                        address: formData.address,
                        phone: formData.phone,
                        city: formData.city,
                        province: {
                            _id: formData.provinceId,
                            value: provinces.value.find((province) => province._id === formData.provinceId)
                                .value,
                        },
                        postalCode: formatPostalCode(formData.postalCode),
                    }
                    if (isCandidat.value) {
                        const [firstName, lastName] = formData.fullName.split(' ')
                        formData.firstName =
                            firstName
                        formData.lastName = lastName
                        formData.skills = formData.skills
                        try {
                            const url = editing.value ?
                                `https://api-4.fly.dev/candidates/${props.candidateId}` :
                                'https://api-4.fly.dev/candidates';
                            const method = editing.value ? 'put' : 'post';
                            const response = await axios({
                                method: method,
                                url: url,
                                data: formData
                            });
                            console.log(response)
                        } catch (error) {
                            console.error(error)
                        }
                    } else {
                        formData.name = formData.name
                        formData.image = formData.image
                        formData.contact = formData.contact
                        formData.activitySector = formData.activitySector
                        formData.website = formData.website
                        try {
                            let activitySector = null
                            const activitySectorsResponse = await axios.get(
                                'https://api-4.fly.dev/activity-sectors');
                            const activitySectors = activitySectorsResponse.data;
                            activitySectors.forEach((activity) => {
                                if (activity.value === formData.activitySector.value) {
                                    activitySector = activity;
                                }
                            });
                            if (!activitySector) {
                                throw new Error('Secteur d\'activité non trouvé');
                            }
                            const url = editing.value ?
                                `https://api-4.fly.dev/enterprises/${props.enterpriseId}` :
                                'https://api-4.fly.dev/enterprises';
                            const method = editing.value ? 'put' : 'post';
                            const response = await axios({
                                method: method,
                                url: url,
                                data: formData
                            });
                            console.log(response)
                        } catch (error) {
                            console.error(error)
                        }
                    }
                }
            }
            const fetchEnterprise = async (enterpriseId) => {
                try {
                    const response = await axios.get(`https://api-4.fly.dev/enterprises/${enterpriseId}`);
                    const enterprise = response.data;
                    formData.name = enterprise.name;
                    formData.image = enterprise.image;
                    formData.description = enterprise.description;
                    formData.address = enterprise.address;
                    formData.phone = enterprise.phone;
                    formData.city = enterprise.city;
                    formData.email = enterprise.email;
                    formData.provinceId = enterprise.province._id;
                    formData.postalCode = enterprise.postalCode;
                    formData.website = enterprise.website;
                    formData.activitySector = enterprise.activitySector;
                } catch (error) {
                    console.error(error);
                }
            }
            const fetchCandidate = async (candidateId) => {
                try {
                    const response = await axios.get(`https://api-4.fly.dev/candidates/${candidateId}`);
                    const candidate = response.data;
                    console.log(candidate);
                    formData.fullName = `${candidate.firstName} ${candidate.lastName}`;
                    formData.description = candidate.description;
                    formData.address = candidate.address;
                    formData.phone = candidate.phone;
                    formData.city = candidate.city;
                    formData.email = candidate.email;
                    formData.provinceId = candidate.province._id;
                    formData.postalCode = candidate.postalCode;
                    formData.skills = candidate.skills;
                } catch (error) {
                    console.error(error);
                }
            }
            const cancelForm = () => {
                formData.fullName = ''
                formData.position = ''
                formData.description = ''
                formData.address = ''
                formData.phone = ''
                formData.city = ''
                formData.email = ''
                formData.provinceId = ''
                formData.postalCode = ''
                formData.skills = []
                formData.name = ''
                formData.image = ''
                formData.contact = ''
                formData.activitySector = {
                    _id: '65f8df6040965a2e23d73271',
                    value: 'Technologies',
                }
                formData.website = ''
            }
            const provinces = ref([])
            const fetchProvinces = async () => {
                try {
                    const response = await axios.get('https://api-4.fly.dev/provinces')
                    provinces.value = response.data
                } catch (error) {
                    console.error(error)
                }
            }
            onMounted(() => {
                const type = router.currentRoute.value.params.type; 
                if (type === 'entreprises') {
                    showCandidateForm.value = true;
                }


                fetchProvinces();
                if (!isCandidat.value && props.enterpriseId) {
                    fetchEnterprise(props.enterpriseId)
                }
                if (isCandidat.value && props.candidateId) {
                    fetchCandidate(props.candidateId);
                }
            })
            return {
                formData,
                errors,
                fullNameError,
                positionError,
                descriptionError,
                addressError,
                phoneError,
                cityError,
                emailError,
                provinceError,
                postalCodeError,
                nameError,
                logoError,
                isFormValid,
                isCandidat,
                submitForm,
                cancelForm,
                formatPostalCode,
                validateFullName,
                validatePosition,
                validateDescription,
                validateAddress,
                validatePhone,
                validateCity,
                validateEmail,
                validateProvince,
                validatePostalCode,
                validateName,
                validateLogo,
                provinces,
                editing,
                showCandidateForm

            }
        },
    }
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
        background-color: rgb(115 115 115);
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