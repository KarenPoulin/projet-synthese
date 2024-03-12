import { createRouter, createWebHistory } from 'vue-router'
import Identification from '../views/Identification.vue'
import Layout from '../components/layout.vue'
import TableauDeBord from '../views/TableauDeBord.vue'
import DemandesDeStages from '../views/DemandesDeStages.vue'
import OffresDeStages from '../views/OffresDeStages.vue'
import Candidats from '../views/Candidats.vue'
import Entreprises from '../views/Entreprises.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Identification
    },
    {
      path: '/app',
      component: Layout,
      children: [
        {
          path: 'tableaudebord',
          name: 'tableaudebord',
          component: TableauDeBord
        },
        {
          path: 'demandesdestages',
          name: 'demandesdestages',
          component: DemandesDeStages
        },
        {
          path: 'offresdestages',
          name: 'offresdestages',
          component: OffresDeStages
        },
        {
          path: 'candidats',
          name: 'candidats',
          component: Candidats
        },
        {
          path: 'entreprises',
          name: 'entreprises',
          component: Entreprises
        },
      ]
    }
  ]
})

export default router