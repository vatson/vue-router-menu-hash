import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

import Home from './views/Home.vue';

import { HipsumRoute, TrumpsumRoute, HodorRoute, LoremRoute } from './views';

import { Parent } from './components';

Vue.use(Router);

const routes: RouteConfig[] = [
  {...HipsumRoute, ...{path: `/${HipsumRoute.path}`}},
  {
    path: '/ipsum',
    component: Parent,
    props: { title: 'Ipsums' },
    children: [
      {path: 'classic', title: 'Class', component: Parent, children: [LoremRoute] },
      {...TrumpsumRoute, ...{ title: 'Trump' } },
      {...HipsumRoute, ...{ title: 'Hipsum' } },
      {...HodorRoute },
    ],
  },
  {
    path: '/',
    component: Home,
  },
];

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    }
  },
});

export default router;

export {
  routes,
};
