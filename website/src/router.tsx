import React, { lazy } from 'react';

export type Routes = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
}[];

export const routes: Routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/api-loader',
    component: lazy(() => import('./pages/api-loader')),
  },
  {
    path: '/with-map',
    component: lazy(() => import('./pages/with-map')),
  },
  {
    path: '/control',
    component: lazy(() => import('./pages/control')),
  },
  {
    path: '/copyright-control',
    component: lazy(() => import('./pages/copyright-control')),
  },
  {
    path: '/map',
    component: lazy(() => import('./pages/map')),
  },
  {
    path: '/marker',
    component: lazy(() => import('./pages/marker')),
  },
  {
    path: '/navigation-control',
    component: lazy(() => import('./pages/navigation-control')),
  },
  {
    path: '/geolocation-control',
    component: lazy(() => import('./pages/geolocation-control')),
  },
  {
    path: '/ground-overlay',
    component: lazy(() => import('./pages/ground-overlay')),
  },
  {
    path: '/overview-map-control',
    component: lazy(() => import('./pages/overview-map-control')),
  },
  {
    path: '/scale-control',
    component: lazy(() => import('./pages/scale-control')),
  },
  {
    path: '/map-type-control',
    component: lazy(() => import('./pages/map-type-control')),
  },
  {
    path: '/panorama-control',
    component: lazy(() => import('./pages/panorama-control')),
  },
  {
    path: '/info-window',
    component: lazy(() => import('./pages/info-window')),
  },
  {
    path: '/label',
    component: lazy(() => import('./pages/label')),
  },
  {
    path: '/point-collection',
    component: lazy(() => import('./pages/point-collection')),
  },
  {
    path: '/polyline',
    component: lazy(() => import('./pages/polyline')),
  },
  {
    path: '/curve-line',
    component: lazy(() => import('./pages/curve-line')),
  },
  {
    path: '/drawing-manager',
    component: lazy(() => import('./pages/drawing-manager')),
  },
  {
    path: '/polygon',
    component: lazy(() => import('./pages/polygon')),
  },
  {
    path: '/circle',
    component: lazy(() => import('./pages/circle')),
  },
  {
    path: '/canvas-layer',
    component: lazy(() => import('./pages/canvas-layer')),
  },
  {
    path: '/custom-overlay',
    component: lazy(() => import('./pages/custom-overlay')),
  },
  {
    path: '/require-script',
    component: lazy(() => import('./pages/require-script')),
  },
  {
    path: '/tile-layer',
    component: lazy(() => import('./pages/tile-layer')),
  },
  {
    path: '/map-types',
    component: lazy(() => import('./pages/map-types')),
  },
  {
    path: '/utils',
    component: lazy(() => import('./pages/utils')),
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
    label: 'Support TypeScript',
    path: '/map-types',
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
    label: 'utils 工具',
    path: '/utils',
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
