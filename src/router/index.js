import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import i18n from '../i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}`
  },
  {
    path: '/projects',
    redirect: `/${i18n.locale}/projects`
  },
  {
    path: '/:lang',
    component: {
      render: c => c('router-view')
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
