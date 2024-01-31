import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ForYouView from '../views/home/ForYouView.vue'
import FollowingView from '../views/home/FollowingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'foryou',
          component: ForYouView,
        },
        {
          path: 'following',
          name: 'following',
          component: FollowingView,
        }
      ]
    }
  ]
})

export default router
