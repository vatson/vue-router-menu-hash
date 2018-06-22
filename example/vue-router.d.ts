import 'vue-router';

declare module 'vue-router/types/router' {
  interface RouteConfig {
    title?: string,
    anchors?: {[propName: string]: string}
  }
}
