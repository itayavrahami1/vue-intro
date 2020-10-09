import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Season from '../views/Season.vue'
import Timer from '../views/Timer.vue'
import WhosWatch from '../views/WhosWatch.vue'
import UserDetails from '../views/UserDetails.vue'
import UserEdit from '../views/UserEdit.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/season',
    name: 'Season',
    component: Season
  },
  {
    path: '/timer',
    name: 'Timer',
    component: Timer
  },
  {
    path: '/whoswatch',
    name: 'WhosWatch',
    component: WhosWatch
  },
  {
    path: '/whoswatch/:userId',
    component: UserDetails
  },
  {
    path: '/edit/:userId?',
    component: UserEdit
  }
]
// *********************************** //
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// *********************************** //


const router = new VueRouter({
  routes
})

export default router
