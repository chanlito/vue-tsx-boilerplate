import { RouteConfig } from 'vue-router';

import { SecretGuard } from './guards';

export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'app' },
    component: loadView('Home'),
  },
  {
    path: '/about',
    name: 'about',
    meta: { layout: 'default' },
    component: loadView('About'),
  },
  {
    path: '/secret',
    name: 'secret',
    meta: { layout: 'app' },
    component: loadView('Secret'),
    beforeEnter: SecretGuard,
  },
];

function loadView(view: string) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}`);
}
