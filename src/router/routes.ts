import { RouteConfig } from 'vue-router';

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
];

function loadView(view: string) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}`);
}
