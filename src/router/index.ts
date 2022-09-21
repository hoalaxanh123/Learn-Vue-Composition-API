import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import JobPage from '../views/Jobs/JobPage.vue'
import JobDetail from '../views/Jobs/JobDetail.vue'
import NotFound from '../views/NotFound.vue'
import CrashPage from '../views/CrashPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/job',
    name: 'jobs',
    component: JobPage,
  },

  {
    path: '/job/:id(\\d+)',
    name: 'job-detail',
    component: JobDetail,
    props: true,
  },

  {
    path: '/crash',
    name: 'crash',
    component: CrashPage,
  },

  // will match everything and put it under `$route.params.pathMatch`
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(),
  routes,
})

export default router
