import { createRouter, createWebHistory } from 'vue-router'
import Caculator from '@/views/Caculator.vue'

const routes = [
  {  
    path: '/calc',
        name: 'calc',
        component: Caculator,
        meta: {
          layout: 'clone'
        }
   },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router