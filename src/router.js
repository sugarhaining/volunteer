import Vue from 'vue';
import Router from 'vue-router';
import * as Route from './utils/router-map';

Vue.use (Router);

export default new Router ({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Route.Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Route.Home,
    },
    {
      path: '/register',
      name: 'register',
      component: Route.Register,
      redirect: '/register/step1',
      children: [
        {path: 'step1', name: 'step1', component: Route.StepCode},
        {path: 'step2', name: 'step2', component: Route.StepInfo},
      ],
    },
    {
      path: '/opera',
      name: 'opera',
      component: Route.Opera,
    },
    {
      path: '/about',
      name: 'about',
      component: Route.About,
    },
    /* {
      path: '/opera',
      name: 'opera',
      route level code-splitting
      this generates a separate chunk (about.[hash].js) for this route
      which is lazy-loaded when the route is visited.
      component: () =>
        import (webpackChunkName: "about" './views/About.vue'),
    }, */
  ],
});
