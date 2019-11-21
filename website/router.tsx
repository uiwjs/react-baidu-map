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
    path: "/api-loader",
    component: loadable(() => import('./pages/api-loader'), options),
  },
  {
    path: "/map",
    component: loadable(() => import('./pages/map'), options),
  },
  {
    path: "/marker",
    component: loadable(() => import('./pages/marker'), options),
  },
  {
    path: "/info-window",
    component: loadable(() => import('./pages/info-window'), options),
  },
  {
    path: "/label",
    component: loadable(() => import('./pages/label'), options),
  },
  {
    path: "/point-collection",
    component: loadable(() => import('./pages/point-collection'), options),
  },
  {
    path: "/polyline",
    component: loadable(() => import('./pages/polyline'), options),
  },
  {
    path: "/polygon",
    component: loadable(() => import('./pages/polygon'), options),
  },
  {
    path: "/circle",
    component: loadable(() => import('./pages/circle'), options),
  },
  {
    path: "/canvas-layer",
    component: loadable(() => import('./pages/canvas-layer'), options),
  },
];


export const menus = [
  {
    label: '基本介绍',
    path: '/',
  },
  {
    label: 'APILoader 组件',
    path: '/api-loader',
  },
  {
    label: 'Map 组件',
    path: '/map',
  },
  {
    label: 'Marker 点标注',
    path: '/marker',
  },
  {
    label: 'InfoWindow 信息窗口',
    path: '/info-window',
  },
  {
    label: 'Label 文本标注',
    path: '/label',
  },
  {
    label: 'PointCollection 海量点标注',
    path: '/point-collection',
  },
  {
    label: 'Polyline 折线组件',
    path: '/polyline',
  },
  {
    label: 'Polygon 多边形组件',
    path: '/polygon',
  },
  {
    label: 'Circle 圆',
    path: '/circle',
  },
  {
    label: 'CanvasLayer 自定义Canvas',
    path: '/canvas-layer',
  },
]