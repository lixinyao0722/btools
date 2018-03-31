import Router from 'vue-router'
import Main from '../components/Main'
import mainRoutes from './main'


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: mainRoutes
    },
  ]
})
