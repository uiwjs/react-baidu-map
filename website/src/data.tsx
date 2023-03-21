import { Outlet, IndexRouteObject, NonIndexRouteObject } from 'react-router-dom';
import Layout from './Layout';
import Preview from './components/Preview';

export interface MenuRouteObject
  extends Omit<IndexRouteObject, 'children' | 'index'>,
    Omit<NonIndexRouteObject, 'children' | 'index'> {
  index?: boolean;
  menu?: string;
  editorUrl?: string;
  children?: MenuRouteObject[];
}

export const routesConfig: MenuRouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        menu: '快速开始',
        editorUrl: '/packages/baidu-map/README.md',
        element: <Preview path={() => import('@uiw/react-baidu-map/README.md')} />,
      },
      {
        menu: '容器',
        element: <Outlet />,
        children: [
          {
            path: 'api-loader',
            menu: 'APILoader 组件',
            editorUrl: '/packages/api-loader/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-api-loader/README.md')} />,
          },
          {
            path: 'map',
            menu: 'Map 组件',
            editorUrl: '/packages/map/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-map/README.md')} />,
          },
          {
            path: 'with-map',
            menu: 'withMap',
            editorUrl: '/packages/with-map/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-with-map/README.md')} />,
          },
          {
            path: 'map-types',
            menu: 'Support TypeScript',
            editorUrl: '/packages/map-types/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-types/README.md')} />,
          },
        ],
      },
      {
        menu: '控件',
        element: <Outlet />,
        children: [
          {
            menu: 'Control 自定义控件',
            path: 'control',
            editorUrl: '/packages/control/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-control/README.md')} />,
          },
          {
            menu: 'CopyrightControl 版权控件',
            path: 'copyright-control',
            editorUrl: '/packages/copyright-control/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-copyright-control/README.md')} />,
          },
          {
            menu: 'NavigationControl 平移缩放控件',
            path: 'navigation-control',
            editorUrl: '/packages/navigation-control/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-navigation-control/README.md')} />,
          },
          {
            menu: 'GeolocationControl 定位控件',
            path: 'geolocation-control',
            editorUrl: '/packages/geolocation-control/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-geolocation-control/README.md')} />,
          },
          {
            menu: 'OverviewMapControl 缩略地图',
            path: 'overview-map-control',
            editorUrl: '/packages/overview-map-control/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-overview-map-control/README.md')} />,
          },
          {
            menu: 'ScaleControl 比例尺控件',
            path: 'scale-control',
            editorUrl: '/packages/scale-control/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-scale-control/README.md')} />,
          },
          {
            menu: 'MapTypeControl 地图类型控件',
            path: 'map-type-control',
            editorUrl: '/packages/map-type-control/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-type-control/README.md')} />,
          },
          {
            menu: 'PanoramaControl 全景地图控件',
            path: 'panorama-control',
            editorUrl: '/packages/panorama-control/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-panorama-control/README.md')} />,
          },
        ],
      },
      {
        menu: '覆盖物',
        element: <Outlet />,
        children: [
          {
            menu: 'Marker 点标注',
            path: 'marker',
            editorUrl: '/packages/marker/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-marker/README.md')} />,
          },
          {
            menu: 'InfoWindow 信息窗口',
            path: 'info-window',
            editorUrl: '/packages/info-window/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-info-window/README.md')} />,
          },
          {
            menu: 'Label 文本标注',
            path: 'label',
            editorUrl: '/packages/label/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-label/README.md')} />,
          },
          {
            menu: 'PointCollection 加载海量点',
            path: 'point-collection',
            editorUrl: '/packages/point-collection/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-point-collection/README.md')} />,
          },
          {
            menu: 'Polyline 折线组件',
            path: 'polyline',
            editorUrl: '/packages/polyline/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-polyline/README.md')} />,
          },
          {
            menu: 'Polygon 多边形组件',
            path: 'polygon',
            editorUrl: '/packages/polygon/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-polygon/README.md')} />,
          },
          {
            menu: 'Circle 圆',
            path: 'circle',
            editorUrl: '/packages/circle/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-circle/README.md')} />,
          },
          {
            menu: 'GroundOverlay 地面叠加层',
            path: 'ground-overlay',
            editorUrl: '/packages/ground-overlay/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-ground-overlay/README.md')} />,
          },
          {
            menu: 'CanvasLayer 自定义Canvas',
            path: 'canvas-layer',
            editorUrl: '/packages/canvas-layer/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-canvas-layer/README.md')} />,
          },
          {
            menu: 'CustomOverlay 自定义覆盖物',
            path: 'custom-overlay',
            editorUrl: '/packages/custom-overlay/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-custom-overlay/README.md')} />,
          },
          {
            menu: 'TileLayer 地图图层',
            path: 'tile-layer',
            editorUrl: '/packages/tile-layer/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-tile-layer/README.md')} />,
          },
        ],
      },
      {
        menu: '第三方组件',
        element: <Outlet />,
        children: [
          {
            menu: 'RequireScript 加载第三方包',
            path: 'require-script',
            editorUrl: '/packages/require-script/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-require-script/README.md')} />,
          },
          {
            menu: 'CurveLine 弧线组件',
            path: 'curve-line',
            editorUrl: '/packages/curve-line/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-curve-line/README.md')} />,
          },
          {
            menu: 'DrawingManager 鼠标绘制工具',
            path: 'drawing-manager',
            editorUrl: '/packages/drawing-manager/README.md',
            element: <Preview path={() => import('@uiw/react-baidu-map-drawing-manager/README.md')} />,
          },
        ],
      },
      {
        menu: '其它',
        element: <Outlet />,
        children: [
          {
            menu: '百度拾取坐标系统',
            path: 'https://api.map.baidu.com/lbsapi/getpoint/index.html',
          },
          {
            menu: '百度地图官方 Demo 示例',
            path: 'https://lbsyun.baidu.com/jsdemo.htm',
          },
          {
            menu: '百度地图 API v3.0',
            path: 'https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html',
          },
          {
            menu: '百度地图 WebGL v1.0 类参考',
            path: 'https://mapopen-pub-jsapi.bj.bcebos.com/jsapi/reference/jsapi_webgl_1_0.html#a2b7',
          },
          {
            menu: '源码 Github 仓库',
            path: 'https://github.com/uiwjs/react-baidu-map',
          },
          {
            menu: '源码 Gitee 仓库',
            path: 'https://gitee.com/uiw/react-baidu-map',
          },
          {
            menu: '国内镜像 🇨🇳',
            path: 'https://uiw.gitee.io/react-baidu-map',
          },
        ],
      },
      {
        menu: '相关连接',
        element: <Outlet />,
        children: [
          {
            menu: '百度官方 React-BMapGL 组件',
            path: 'https://lbsyun.baidu.com/solutions/reactBmapDoc',
          },
          {
            menu: '高德地图 React 组件',
            path: 'https://uiwjs.github.io/react-amap/',
          },
        ],
      },
    ],
  },
];
