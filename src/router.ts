import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      component: Home,
      name: 'home',
      path: '/',
    },
    {
      component: () => import(/* webpackChunkName: "mesh" */ './views/projects/Mesh.vue'),
      name: 'mesh',
      path: '/projects/mesh',
    },
    {
      component: () => import(/* webpackChunkName: "hypetracker" */ './views/projects/HypeTracker.vue'),
      name: 'hypetracker',
      path: '/projects/hypetracker',
    },
    {
      component: () => import(/* webpackChunkName: "vsl" */ './views/projects/VSL.vue'),
      name: 'virtually-saving-lives',
      path: '/projects/virtually-saving-lives',
    },
    {
      component: () => import(/* webpackChunkName: "nycrime" */ './views/projects/NYCrime.vue'),
      name: 'nycrime',
      path: '/projects/nycrime',
    },
  ],
});
