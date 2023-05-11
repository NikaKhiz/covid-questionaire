import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/welcome/WelcomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/welcome'
    },
    {
      name: 'welcome',
      path: '/welcome',
      component: WelcomeView
    },
    {
      name: 'identification',
      path: '/identification',
      component: null
    }
  ]
})

export default router
