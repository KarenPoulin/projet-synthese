<template>
    <div>
        <div v-if="!entrepriseId">
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
                        <input type="text" id="fullName" v-model="form.fullName" @input="validateFullName"
                            class="w-full border-gray-300 rounded-md p-2">
                        <span class="text-red-500">{{ fullNameError }}</span>
                    </div>
                    <div class="nom_poste mb-4">
                        <label for="position" class="block mb-1  text-neutral-500 font-bold">Poste</label>
                        <input type="text" id="position" v-model="form.position" @input="validatePosition"
                            class="w-full border-gray-300 rounded-md p-2">
                        <span class="text-red-500">{{ positionError }}</span>
                    </div>
                    <div class="block_info-perso my-9">
                        <div class="mb-4">
                            <label for="description" class="block mb-4">
                                <h2 class="text-teal-500 text-lg font-bold">Courte présentation</h2>
                            </label>
                            <textarea id="description" v-model="form.description" @input="validateDescription"
                                class="block  w-full border-gray-300 rounded-md p-2"></textarea>
                            <span class="text-red-500">{{ descriptionError }}</span>
                        </div>
                        <h3 class="  my-8 text-teal-500  font-bold">Information personnelle</h3>
                        <div class="block_info-perso-all">
                            <div class="block_info-perso-adresse">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="address" class="block mb-1 text-neutral-500 font-bold">Adresse</label>
                                    <input type="text" id="address" v-model="form.address" @input="validateAddress"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!addressError" class="text-red-500">{{ addressError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="city" class="block mb-1  text-neutral-500 font-bold">Ville</label>
                                    <input type="text" id="city" v-model="form.city" @input="validateCity"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!cityError" class="text-red-500">{{ cityError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="province"
                                        class="block mb-1  text-neutral-500 font-bold">Province</label>
                                    <select id="province" v-model="form.provinceId" @change="validateProvince"
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
                                    <input type="text" id="postalCode" v-model="form.postalCode"
                                        @input="validatePostalCode" class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!postalCodeError" class="text-red-500">{{ postalCodeError }}</span>
                                </div>
                            </div>
                            <div class="block_info-perso-contact">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="phone" class="block mb-1  text-neutral-500 font-bold">Téléphone</label>
                                    <input type="text" id="phone" v-model="form.phone" @input="validatePhone"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!phoneError" class="text-red-500">{{ phoneError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="email" class="block mb-1  text-neutral-500 font-bold">Courriel</label>
                                    <input type="email" id="email" v-model="form.email" @input="validateEmail"
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
                                <h1 class="text-neutral-500">{{ form.name }}</h1>
                                <p class="poste text-neutral-500">{{ form.image }}</p>
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
                        <input type="text" id="name" v-model="form.name" @input="validateName"
                            class="w-full border-gray-300 rounded-md p-2">
                        <span class="text-red-500">{{ nameError }}</span>
                    </div>
                    <div class="nom_poste mb-4">
                        <label for="image" class="block mb-1 text-neutral-500 font-bold">Logo</label>
                        <div class="flex items-center">

                            <input type="text " id="image" v-model="form.image" @input="validateLogo"
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
                            <textarea id="description" v-model="form.description" @input="validateDescription"
                                class="block  w-full border-gray-300 rounded-md p-2"></textarea>
                            <span class="text-red-500">{{ descriptionError }}</span>
                        </div>
                        <div class="mb-4 input_barre-modifier">
                            <label for="contact" class="block mb-1 text-neutral-500 font-bold">Personne Contact</label>
                            <input type="text" id="contact" v-model="form.contact" @input="validateName"
                                class="w-full border-gray-300 rounded-md p-2">
                            <span v-if="!nameError" class="text-red-500">{{ nameError }}</span>
                        </div>
                        <h3 class="  my-8 text-teal-500  font-bold">Information de contact</h3>
                        <div class="block_info-perso-all">
                            <div class="block_info-perso-adresse">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="address" class="block mb-1 text-neutral-500 font-bold">Adresse</label>
                                    <input type="text" id="address" v-model="form.address" @input="validateAddress"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!addressError" class="text-red-500">{{ addressError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="city" class="block mb-1  text-neutral-500 font-bold">Ville</label>
                                    <input type="text" id="city" v-model="form.city" @input="validateCity"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!cityError" class="text-red-500">{{ cityError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="province"
                                        class="block mb-1  text-neutral-500 font-bold">Province</label>
                                    <select id="province" v-model="form.provinceId" @change="validateProvince"
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
                                    <input type="text" id="postalCode" v-model="form.postalCode"
                                        @input="validatePostalCode" class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!postalCodeError" class="text-red-500">{{postalCodeError }}</span>
                                </div>
                            </div>
                            <div class="block_info-perso-contact">
                                <div class="mb-4 input_barre-modifier">
                                    <label for="phone" class="block mb-1  text-neutral-500 font-bold">Téléphone</label>
                                    <input type="text" id="phone" v-model="form.phone" @input="validatePhone"
                                        class="w-full border-gray-300 rounded-md p-2">
                                    <span v-if="!phoneError" class="text-red-500">{{ phoneError }}</span>
                                </div>
                                <div class="mb-4 input_barre-modifier">
                                    <label for="email" class="block mb-1  text-neutral-500 font-bold">Courriel</label>
                                    <input type="email" id="email" v-model="form.email" @input="validateEmail"
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
        computed,
        onMounted
    } from 'vue'
    import axios from 'axios'

    export default {
        props: ['type', 'enterpriseId', 'candidateId', 'editing'],
        setup(props) {
            const isCandidat = computed(() => props.type === 'candidat')
            const fullName = ref('')
            const position = ref('')
            const description = ref('')
            const address = ref('')
            const phone = ref('')
            const city = ref('')
            const email = ref('')
            const provinceId = ref('')
            const postalCode = ref('')
            const skills = ref([])
            const name = ref('')
            const image = ref('')
            const contact = ref('')
            const activitySector = ref({
                _id: '65f8df6040965a2e23d73271',
                value: 'Technologies',
            })
            const website = ref('')


            const fullNameError = ref('')
            const positionError = ref('')
            const descriptionError = ref('')
            const addressError = ref('')
            const phoneError = ref('')
            const cityError = ref('')
            const emailError = ref('')
            const provinceError = ref('')
            const postalCodeError = ref('')
            const nameError = ref('')
            const logoError = ref('')


            const validateFullName = () => {
                fullNameError.value = ''
                const fullNameTrimmed = fullName.value.trim()
                const fullNameWords = fullNameTrimmed.split(' ')
                if (fullNameWords.length !== 2) {
                    fullNameError.value = 'Le nom complet doit contenir exactement deux mots.'
                    return false
                }
                if (fullNameTrimmed.length < 3 || fullNameTrimmed.length > 50) {
                    fullNameError.value = 'Le nom complet doit contenir entre 3 et 50 caractères.'
                    return false
                }
                return true
            }

            const validatePosition = () => {
                positionError.value = ''
                const positionTrimmed = position.value.trim()
                if (positionTrimmed.length < 3 || positionTrimmed.length > 50) {
                    positionError.value = 'Le poste doit contenir entre 3 et 50 caractères.'
                    return false
                }
                return true
            }

            const validateDescription = () => {
                descriptionError.value = ''
                const descriptionTrimmed = description.value.trim()
                if (descriptionTrimmed.length < 3 || descriptionTrimmed.length > 250) {
                    descriptionError.value = 'La description doit contenir entre 3 et 250 caractères.'
                    return false
                }
                return true
            }

            const validateAddress = () => {
                addressError.value = ''
                const addressTrimmed = address.value.trim()
                if (!addressTrimmed) {
                    addressError.value = 'Veuillez entrer votre adresse.'
                    return false
                }
                const containsNumber = /\d/.test(addressTrimmed)
                const containsWord = /[a-zA-Z]/.test(addressTrimmed)
                if (!containsNumber || !containsWord) {
                    addressError.value = "L'adresse doit contenir à la fois un nombre et un mot."
                    return false
                }
                return true
            }

            const validatePhone = () => {
                phoneError.value = ''
                const phoneTrimmed = phone.value.trim()
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
                const cityTrimmed = city.value.trim()
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
                if (!email.value.trim()) {
                    emailError.value = 'Veuillez entrer votre adresse e-mail.'
                    return false
                } else if (!isEmailValid(email.value)) {
                    emailError.value = 'Veuillez entrer une adresse e-mail valide.'
                    return false
                }
                return true
            }

            const validateProvince = () => {
                provinceError.value = ''
                if (!provinceId.value) {
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
                if (!postalCode.value.trim()) {
                    postalCodeError.value = 'Veuillez entrer votre code postal.'
                    return false
                } else if (!isPostalCodeValid(postalCode.value)) {
                    postalCodeError.value = 'Veuillez entrer un code postal valide.'
                    return false
                }
                return true
            }

            const validateName = () => {
                nameError.value = ''
                const nameTrimmed = name.value.trim()
                if (nameTrimmed.length < 3 || nameTrimmed.length > 50) {
                    nameError.value = 'Le nom complet doit contenir entre 3 et 50 caractères.'
                    return false
                }
                return true
            }

            const validateLogo = () => {
                logoError.value = ''
                const logoTrimmed = image.value.trim()
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
                    return (
                        validateFullName() &&
                        validatePosition() &&
                        validateDescription() &&
                        validateAddress() &&
                        validatePhone() &&
                        validateCity() &&
                        validateEmail() &&
                        validateProvince() &&
                        validatePostalCode()
                    )
                } else {
                    return (
                        validateName() &&
                        validateLogo() &&
                        validateDescription() &&
                        validateAddress() &&
                        validatePhone() &&
                        validateCity() &&
                        validateEmail() &&
                        validateProvince() &&
                        validatePostalCode()
                    )
                }
            })


            const submitForm = async () => {
                if (isFormValid.value) {
                    const formData = {
                        description: description.value,
                        email: email.value,
                        address: address.value,
                        phone: phone.value,
                        city: city.value,
                        province: {
                            _id: provinceId.value,
                            value: provinces.value.find((province) => province._id === provinceId.value)
                                .value,
                        },
                        postalCode: formatPostalCode(postalCode.value),
                    }

                    if (isCandidat.value) {
                        const [firstName, lastName] = fullName.value.split(' ')
                        formData.firstName = firstName
                        formData.lastName = lastName
                        formData.skills = skills.value

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
                        formData.name = name.value
                        formData.image = image.value
                        formData.contact = contact.value
                        formData.activitySector = activitySector.value
                        formData.website = website.value

                        try {
                            let activitySector = null
                            const activitySectorsResponse = await axios.get(
                                'https://api-4.fly.dev/activity-sectors');
                            const activitySectors = activitySectorsResponse.data;
                            activitySectors.forEach((activity) => {
                                if (activity.value === activitySector.value) {
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

                    form.fullName = `${candidate.firstName} ${candidate.lastName}`;
                    form.description = candidate.description;
                    form.address = candidate.address;
                    form.phone = candidate.phone;
                    form.city = candidate.city;
                    form.email = candidate.email;
                    form.provinceId = candidate.province._id;
                    form.postalCode = candidate.postalCode;
                    form.skills = candidate.skills;
                } catch (error) {
                    console.error(error);
                }
            }



            const cancelForm = () => {
                fullName.value = ''
                position.value = ''
                description.value = ''
                address.value = ''
                phone.value = ''
                city.value = ''
                email.value = ''
                provinceId.value = ''
                postalCode.value = ''
                skills.value = []
                name.value = ''
                image.value = ''
                contact.value = ''
                activitySector.value = {
                    _id: '65f8df6040965a2e23d73271',
                    value: 'Technologies',
                }
                website.value = ''
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


            onMounted(fetchProvinces)


            onMounted(() => {
                if (!isCandidat.value && props.enterpriseId) {
                    fetchEnterprise(props.enterpriseId)
                }
                if (!isCandidat.value && props.candidateId) {
                    fetchCandidate(props.candidateId);
                }
            })


            return {
                fullName,
                position,
                description,
                address,
                phone,
                city,
                email,
                provinceId,
                postalCode,
                skills,
                name,
                image,
                contact,
                activitySector,
                website,
                provinces,
                isCandidat,
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