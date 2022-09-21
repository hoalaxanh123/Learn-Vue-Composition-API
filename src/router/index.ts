import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import JobPage from '../views/Jobs/JobPage.vue'
import JobDetail from '../views/Jobs/JobDetail.vue'
import JobDescription from '../views/Jobs/JobDescription.vue'
import NotFound from '../views/NotFound.vue'
import CrashPage from '../views/CrashPage.vue'

import UsersPage from '../views/Users/UsersPage.vue'
import UserProfile from '../views/Users/UserProfile.vue'
import UserPost from '../views/Users/UserPost.vue'

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
    children: [
      {
        path: '/job/:id(\\d+)',
        name: 'job-detail',
        component: JobDetail,
        props: true,
        children: [
          {
            path: 'description',
            name: 'job-description',
            component: JobDescription,
          },
        ],
      },
    ],
  },

  {
    path: '/users/:username',
    component: UsersPage,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      { path: '', component: UserProfile },

      // UserProfile will be rendered inside User's <router-view>
      // when /users/:username/profile is matched
      { path: 'profile', component: UserProfile },

      // UserPosts will be rendered inside User's <router-view>
      // when /users/:username/posts is matched
      { path: 'posts', component: UserPost },
    ],
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
