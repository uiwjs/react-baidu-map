import React from 'react';
import loadable from '@loadable/component';

const options = {
  fallback: <div>loading</div>,
};

export type Routes = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
}[];

export const routes: Routes = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('./pages/home'), options),
  },
  {
    path: '/api-loader',
    component: loadable(() => import('./pages/api-loader'), options),
  },
  {
    path: '/with-map',
    component: loadable(() => import('./pages/with-map'), options),
  },
  {
    path: '/control',
    component: loadable(() => import('./pages/control'), options),
  },
  {
    path: '/copyright-control',
    component: loadable(() => import('./pages/copyright-control'), options),
  },
  {
    path: '/map',
    component: loadable(() => import('./pages/map'), options),
  },
  {
    path: '/marker',
    component: loadable(() => import('./pages/marker'), options),
  },
  {
    path: '/navigation-control',
    component: loadable(() => import('./pages/navigation-control'), options),
  },
  {
    path: '/geolocation-control',
    component: loadable(() => import('./pages/geolocation-control'), options),
  },
  {
    path: '/ground-overlay',
    component: loadable(() => import('./pages/ground-overlay'), options),
  },
  {
    path: '/overview-map-control',
    component: loadable(() => import('./pages/overview-map-control'), options),
  },
  {
    path: '/scale-control',
    component: loadable(() => import('./pages/scale-control'), options),
  },
  {
    path: '/map-type-control',
    component: loadable(() => import('./pages/map-type-control'), options),
  },
  {
    path: '/panorama-control',
    component: loadable(() => import('./pages/panorama-control'), options),
  },
  {
    path: '/info-window',
    component: loadable(() => import('./pages/info-window'), options),
  },
  {
    path: '/label',
    component: loadable(() => import('./pages/label'), options),
  },
  {
    path: '/point-collection',
    component: loadable(() => import('./pages/point-collection'), options),
  },
  {
    path: '/polyline',
    component: loadable(() => import('./pages/polyline'), options),
  },
  {
    path: '/curve-line',
    component: loadable(() => import('./pages/curve-line'), options),
  },
  {
    path: '/drawing-manager',
    component: loadable(() => import('./pages/drawing-manager'), options),
  },
  {
    path: '/polygon',
    component: loadable(() => import('./pages/polygon'), options),
  },
  {
    path: '/circle',
    component: loadable(() => import('./pages/circle'), options),
  },
  {
    path: '/canvas-layer',
    component: loadable(() => import('./pages/canvas-layer'), options),
  },
  {
    path: '/custom-overlay',
    component: loadable(() => import('./pages/custom-overlay'), options),
  },
  {
    path: '/require-script',
    component: loadable(() => import('./pages/require-script'), options),
  },
  {
    path: '/tile-layer',
    component: loadable(() => import('./pages/tile-layer'), options),
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
    label: 'NavigationControl 平移缩放控件',
    path: '/navigation-control',
  },
  {
    label: 'GeolocationControl 定位控件',
    path: '/geolocation-control',
  },
  {
    label: 'OverviewMapControl 缩略地图',
    path: '/overview-map-control',
  },
  {
    label: 'ScaleControl 比例尺控件',
    path: '/scale-control',
  },
  {
    label: 'MapTypeControl 地图类型控件',
    path: '/map-type-control',
  },
  {
    label: 'PanoramaControl 全景地图控件',
    path: '/panorama-control',
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
    label: 'GroundOverlay 地面叠加层',
    path: '/ground-overlay',
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
    label: 'TileLayer 地图图层',
    path: '/tile-layer',
  },
  {
    divider: true,
    label: '第三方组件',
  },
  {
    label: 'RequireScript 加载第三方包',
    path: '/require-script',
  },
  {
    label: 'CurveLine 弧线组件',
    path: '/curve-line',
  },
  {
    label: 'DrawingManager 鼠标绘制工具',
    path: '/drawing-manager',
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
  {
    label: '国内镜像 🇨🇳',
    target: '__blank',
    path: 'https://uiw.gitee.io/react-baidu-map',
  },
  {
    divider: true,
    label: '相关连接',
  },
  {
    label: '高德地图 React 组件',
    target: '__blank',
    path: 'https://uiwjs.github.io/react-amap/',
  },
];
