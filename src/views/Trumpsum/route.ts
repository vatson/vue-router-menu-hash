import { RouteConfig } from 'vue-router';
import Trumpsum from './Trumpsum.vue';

export const TrumpsumRoute = {
  path: 'trumpsum',
  component: Trumpsum,
  anchors: { 'a word hero': 'hero' },
} as RouteConfig;
