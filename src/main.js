import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/HelloWorld.vue'
import TheBody from './views/TheBody.vue'
import { auth } from './firebaseConfig'
import TheAbout from './views/TheAbout.vue'
import TheEvent from './views/TheEvent.vue'
import TheMenu from './views/TheMenu.vue'
import TheGallery from './views/TheGallery.vue'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, far)


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
      {path: '/body', name: 'TheBody', component: () => TheBody, meta: {requiresAuth: true}},
      {path: '/about', name: 'TheAbout', component: TheAbout},
      {path: '/menu', name: 'TheMenu', component: TheMenu},
      {path: '/gallery', name: 'TheGallery', component: TheGallery},
      {path: '/event', name: 'TheEvent', component: TheEvent}
    ]
})

router.beforeEach((to, from, next) =>{
  const isAuthenticated = auth.currentUser
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)

  if (!isAuthenticated && isAuthRequired) next({ name: 'login'})

  else next()
})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
