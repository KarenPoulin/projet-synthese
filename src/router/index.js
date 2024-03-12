import { createRouter, createWebHistory } from 'vue-router'
import Identification from '../views/Identification.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Identification
    },

  ]
})

export default router
