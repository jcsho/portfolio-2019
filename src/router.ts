import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects/mesh',
      name: 'mesh',
      component: () => import(/* webpackChunkName: "mesh" */ './views/projects/Mesh.vue'),
    },
  ],
});
