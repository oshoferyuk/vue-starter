import Home from '../spa/home/Home'
import Basic from '../spa/home/Basic'
import Other from '../spa/home/Other'

import Login from '../spa/login/Login'
import NotFound from '../spa/NotFound'
export const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/basic',
        component: Basic
      },
      {
        path: '/other',
        component: Other
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    component: NotFound
  }
]

export const VueRouterObject = {
  routes,
  mode: 'history',
  saveScrollPosition: true
}

export default VueRouter => new VueRouter(VueRouterObject)
