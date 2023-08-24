import { createRouter, createWebHistory } from 'vue-router'

// Views Components
import LandingPage from '@/pages/LandingPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFoundPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
