import Vue from 'vue'
import VueRouter from 'vue-router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/css/font-face.css';
import '@/assets/css/all.min.css';

import '@/assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
import '@/assets/vendor/font-awesome-5/css/fontawesome-all.min.css';

import '@/assets/vendor/mdi-font/css/material-design-iconic-font.min.css';

import '@/assets/css/theme.css';


import App from './App.vue'

// Router
Vue.use(VueRouter)

// Routes
const routes = [
  {
      path: '/home', name:'home',
      component: () => import('./components/BookBooks.vue')
  },
  {
      path: '/books', name:'books',
      component: () => import('./components/BookBooks.vue')
  },
  {
      path: '/books/:bookId', name:'bookDetails',
      component: () => import('./components/BookBookDetails.vue')
  },
  {
      path: '/genres', name:'genres',
      component: () => import('./components/BookGenres.vue')
  },
  {
      path: '/admin', name:'admin',
      component: () => import('./components/BookAdmin.vue')
  },
  {
      path: '/admin/books', name:'adminBooks',
      component: () => import('./components/BookAdminBooks.vue')
  },
  {
      path: '/admin/book', name:'adminBookEdit',
      component: () => import('./components/BookAdminBookEdit.vue')
  },
  {
      path: '/admin/genre', name:'adminGenreEdit',
      component: () => import('./components/BookAdminGenreEdit.vue')
  }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
