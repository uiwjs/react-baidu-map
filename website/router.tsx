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
    path: "/with-map",
    component: loadable(() => import('./pages/with-map'), options),
  },
  {
    path: "/control",
    component: loadable(() => import('./pages/control'), options),
  },
  {
    path: "/copyright-control",
    component: loadable(() => import('./pages/copyright-control'), options),
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
    path: "/curve-line",
    component: loadable(() => import('./pages/curve-line'), options),
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
  {
    path: "/custom-overlay",
    component: loadable(() => import('./pages/custom-overlay'), options),
  },
];


export const menus = [
  {
    label: '快速开始',
    path: '/',
  },
  {
    divider: true,
    label: '容器',
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
    label: 'withMap',
    path: '/with-map',
  },
  {
    divider: true,
    label: '控件',
  },
  {
    label: 'Control 自定义控件',
    path: '/control',
  },
  {
    label: 'CopyrightControl 版权控件',
    path: '/copyright-control',
  },
  {
    divider: true,
    label: '覆盖物',
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
    label: 'PointCollection 加载海量点',
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
  {
    label: 'CustomOverlay 自定义覆盖物',
    path: '/custom-overlay',
  },
  {
    divider: true,
    label: '第三方组件',
  },
  {
    label: 'CurveLine 弧线组件',
    path: '/curve-line',
  },
  {
    divider: true,
    label: '其它',
  },
  {
    label: '百度拾取坐标系统',
    target: '__blank',
    path: 'https://api.map.baidu.com/lbsapi/getpoint/index.html',
  },
  {
    label: '百度地图官方 Demo 示例',
    target: '__blank',
    path: 'https://lbsyun.baidu.com/jsdemo.htm',
  },
  {
    label: '百度地图 API v3.0',
    target: '__blank',
    path: 'https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html',
  },
  {
    label: '源码 Github 仓库',
    target: '__blank',
    path: 'https://github.com/uiwjs/react-baidu-map',
  },
  {
    label: '源码 Gitee 仓库',
    target: '__blank',
    path: 'https://gitee.com/uiw/react-baidu-map',
  },
]