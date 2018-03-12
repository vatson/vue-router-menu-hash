import { RouteConfig } from 'vue-router';
import Hodor from './Hodor.vue';

export const HodorRoute = {
  path: 'hodor',
  title: 'Hodor',
  anchors: { 'hdr-q9': 'hdr-q9' },
  component: Hodor,
} as RouteConfig;
