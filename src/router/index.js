import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import bus from '../views/bus/viwePage'
import Filter from '../views/filter/filter'
import setget from '../views/set&get binding/viwe'
import Modal from '../views/modal/modal'
import Sidbar from '../views/sidbar/sidbar'
import inputBinding from '../views/inputBinding/inputViwe'
import pag1 from '../views/storApp/pag1'
import pag2 from '../views/storApp/pag2'
import User from '../views/placeholder/user'
import Post from '../views/placeholder/post'
import login from '../views/login/login'
import loginaccept from '../views/login/loginAccept'
import page1 from '../views/nestedRouter/page1'
import page2 from '../views/nestedRouter/page2'
import page3 from '../views/nestedRouter/page3'
import p1 from '../views/practic/p1'
// import p2 from '../views/practic/p2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/busEvent',
    name: 'busEvent',
    component: bus
  },
  {
    path: '/inputBinding',
    name: 'inputBinding',
    component: inputBinding
  },
  {
    path: '/setget',
    name: 'setget',
    component: setget
  },
  {
    path: '/filter',
    name: 'filter',
    component: Filter
  },
  {
    path: '/modal',
    name: 'modal',
    component: Modal
  },
  {
    path: '/sidbar',
    name: 'sidbar',
    component: Sidbar
  },
  { 
    path : '/pag1',
    component: pag1
  },
  { 
    path : '/Add',
    component: pag2
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post, 
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/loginaccept',
    name: 'loginaccept',
    component: loginaccept
  },
  {
    path: '/page1',
    component: {
      render: (c) => c('router-view'),
    },
    children:[
      {
        path: '/page1',
        name: 'page1',
        component:  page1,
      },
      {
        path: '/page2',
        redirect: '/page1/page2',
        component: {
          render: (c) => c('router-view'),
        },
        children:[
          {
            path: '/page1/page2',
            name: 'page2',
            component:  page2,
          },
          {
            path: '/page3',
            redirect: '/page1/page2/page3',
            component: {
              render: (c) => c('router-view'),
            },
            children:[    
              {
                path: '/page1/page2/page3',
                name: 'page3',
                component:  page3,
              }
            ]
          } 
        ]
      },
      {
        path: '/p1',
        component: p1
      },
      // {
      //   path: '/p2',
      //   component: p2
      // },
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
