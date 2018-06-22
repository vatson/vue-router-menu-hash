import { RouteConfig } from 'vue-router';
import Lorem from './Lorem.vue';

export const LoremRoute = {
  path: 'lorem',
  component: Lorem,
  title: 'Lorem',
  anchors: { potenti: 'potenti' },
} as RouteConfig;
