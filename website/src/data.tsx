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
        element: (
          <Preview path={() => import('@uiw/react-baidu-map/README.md')} editor="/packages/baidu-map/README.md" />
        ),
      },
      {
        menu: '容器',
        element: <Outlet />,
        children: [
          {
            path: 'api-loader',
            menu: 'APILoader 组件',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-api-loader/README.md')}
                editor="/packages/api-loader/README.md"
              />
            ),
          },
          {
            path: 'map',
            menu: 'Map 组件',
            element: (
              <Preview path={() => import('@uiw/react-baidu-map-map/README.md')} editor="/packages/map/README.md" />
            ),
          },
          {
            path: 'with-map',
            menu: 'withMap',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-with-map/README.md')}
                editor="/packages/with-map/README.md"
              />
            ),
          },
          {
            path: 'map-types',
            menu: 'Support TypeScript',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-types/README.md')}
                editor="/packages/map-types/README.md"
              />
            ),
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
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-control/README.md')}
                editor="/packages/control/README.md"
              />
            ),
          },
          {
            menu: 'CopyrightControl 版权控件',
            path: 'copyright-control',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-copyright-control/README.md')}
                editor="/packages/copyright-control/README.md"
              />
            ),
          },
          {
            menu: 'NavigationControl 平移缩放控件',
            path: 'navigation-control',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-navigation-control/README.md')}
                editor="/packages/navigation-control/README.md"
              />
            ),
          },
          {
            menu: 'GeolocationControl 定位控件',
            path: 'geolocation-control',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-geolocation-control/README.md')}
                editor="/packages/geolocation-control/README.md"
              />
            ),
          },
          {
            menu: 'OverviewMapControl 缩略地图',
            path: 'overview-map-control',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-overview-map-control/README.md')}
                editor="/packages/overview-map-control/README.md"
              />
            ),
          },
          {
            menu: 'ScaleControl 比例尺控件',
            path: 'scale-control',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-scale-control/README.md')}
                editor="/packages/scale-control/README.md"
              />
            ),
          },
          {
            menu: 'MapTypeControl 地图类型控件',
            path: 'map-type-control',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-type-control/README.md')}
                editor="/packages/map-type-control/README.md"
              />
            ),
          },
          {
            menu: 'PanoramaControl 全景地图控件',
            path: 'panorama-control',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-panorama-control/README.md')}
                editor="/packages/panorama-control/README.md"
              />
            ),
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
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-marker/README.md')}
                editor="/packages/marker/README.md"
              />
            ),
          },
          {
            menu: 'InfoWindow 信息窗口',
            path: 'info-window',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-info-window/README.md')}
                editor="/packages/info-window/README.md"
              />
            ),
          },
          {
            menu: 'Label 文本标注',
            path: 'label',
            element: (
              <Preview path={() => import('@uiw/react-baidu-map-label/README.md')} editor="/packages/label/README.md" />
            ),
          },
          {
            menu: 'PointCollection 加载海量点',
            path: 'point-collection',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-point-collection/README.md')}
                editor="/packages/point-collection/README.md"
              />
            ),
          },
          {
            menu: 'Polyline 折线组件',
            path: 'polyline',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-polyline/README.md')}
                editor="/packages/polyline/README.md"
              />
            ),
          },
          {
            menu: 'Polygon 多边形组件',
            path: 'polygon',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-polygon/README.md')}
                editor="/packages/polygon/README.md"
              />
            ),
          },
          {
            menu: 'Circle 圆',
            path: 'circle',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-circle/README.md')}
                editor="/packages/circle/README.md"
              />
            ),
          },
          {
            menu: 'GroundOverlay 地面叠加层',
            path: 'ground-overlay',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-ground-overlay/README.md')}
                editor="/packages/ground-overlay/README.md"
              />
            ),
          },
          {
            menu: 'CanvasLayer 自定义Canvas',
            path: 'canvas-layer',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-canvas-layer/README.md')}
                editor="/packages/canvas-layer/README.md"
              />
            ),
          },
          {
            menu: 'CustomOverlay 自定义覆盖物',
            path: 'custom-overlay',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-custom-overlay/README.md')}
                editor="/packages/custom-overlay/README.md"
              />
            ),
          },
          {
            menu: 'TileLayer 地图图层',
            path: 'tile-layer',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-tile-layer/README.md')}
                editor="/packages/tile-layer/README.md"
              />
            ),
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
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-require-script/README.md')}
                editor="/packages/require-script/README.md"
              />
            ),
          },
          {
            menu: 'CurveLine 弧线组件',
            path: 'curve-line',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-curve-line/README.md')}
                editor="/packages/curve-line/README.md"
              />
            ),
          },
          {
            menu: 'DrawingManager 鼠标绘制工具',
            path: 'drawing-manager',
            element: (
              <Preview
                path={() => import('@uiw/react-baidu-map-drawing-manager/README.md')}
                editor="/packages/drawing-manager/README.md"
              />
            ),
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
