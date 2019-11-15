import React from 'react';
import loadable from "@loadable/component";

const options = {
  fallback: <div>loading</div>
}

export type Routes = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
}[]

export const routes: Routes = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import('./pages/home'), options),
  },
  {
    path: "/apiloader",
    component: loadable(() => import('./pages/apiloader'), options),
  },
  {
    path: "/map",
    component: loadable(() => import('./pages/map'), options),
  },
  {
    path: "/marker",
    component: loadable(() => import('./pages/marker'), options),
  },
];


export const menus = [
  {
    label: '基本介绍',
    path: '/',
  },
  {
    label: 'APILoader 组件',
    path: '/apiloader',
  },
  {
    label: 'Map 组件',
    path: '/map',
  },
  {
    label: 'Marker 点标注组件',
    path: '/marker',
  },
]