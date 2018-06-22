import { RouteConfig } from 'vue-router';
import Hipsum from './Hipsum.vue';

export const HipsumRoute = {
  path: 'hipsum',
  title: 'Hipsum',
  anchors: { Aesthetic: 'aesthetic' },
  component: Hipsum,
} as RouteConfig;
