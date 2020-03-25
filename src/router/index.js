import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    
        {
          path: '/',
          name: 'Inicio',
          component: () => import('../views/Inicio.vue')
        },
        {
          path: 'menu',
          name: 'Menu',
          component: () => import('../views/Menu.vue')
        },
        {
          path: 'hubicacion',
          name: 'Hubicacion',
          component: () => import('../views/Hubicacion.vue')
        }, 
        {
          path: 'nosotros',
          name: 'Nosotros',
          component: () => import('../views/Nosotros.vue')
        },
        {
          path: '/ventas',
          name: 'Ventas',
          component: () => import(/* webpackChunkName: "about" */ '../views/Ventas.vue')
        }
                
      ]
 
  
})

export default router
