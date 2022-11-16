Map 组件
===

Map 组件是其他组件的基础，Map 组件会给所有的子组件注入两个属性 **`map`**，**`container`** 和 **`BMap`**，在 `v2.3.0+` 版本支持使用 `useMapContext` 获取它们。

🚧 注意

> 1. 组件 `<Map>` 必须包裹在 `<APILoader>` 组件内，该组件作用是加载百度地图 SDK。  
> 2. 其他地图组件必须作为 `<Map>` 的子组件使用；
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 3px;-->

<!--rehype-->
```jsx
import { Map, useMap, APILoader, Provider, useMapContext } from '@uiw/react-baidu-map';
// 或者单独安装使用
import Map, { useMap, APILoader, Provider, useMapContext } from '@uiw/react-baidu-map-map';
```

🚧  注意：需要使用到 `<Provider>`，新的封装 `Marker` 组建使用了 `Context` 来避免 `map` 对象传来传去。

### 基本用法

Map 的父组件必须具有宽度和高度；

```jsx mdx:preview
import React from 'react';
import { Map, APILoader } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <Map />
    </APILoader>
  </div>
);
export default Demo;
```

### 小工具

百度地图上负责与地图交互的UI元素称为控件。百度地图API中提供了丰富的控件，您还可以通过 Control 类来实现自定义控件，[`百度控件文档`](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget)。

```jsx mdx:preview
import React from 'react';
import { Map, APILoader } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <Map
        ref={(props) => {
          if (props && props.map) {
            // 启用滚轮放大缩小，默认禁用
            props.map.enableScrollWheelZoom();
          }
        }}
        widget={[
          'GeolocationControl',
          {
            name: 'OverviewMapControl',
            options: {
              isOpen: true,
            }
          },
          {
            name: 'CopyrightControl',
            control: (BMap, map) => {
              // 设置版权控件位置
              const cr = new BMap.CopyrightControl({ anchor: BMAP_ANCHOR_TOP_RIGHT });
              // 返回地图可视区域
              const bs = map.getBounds();
              cr.removeCopyright(1);
              cr.addCopyright({
                id: 1,
                content: "<a href='#' style='font-size:20px;background:yellow'>我是自定义版权控件呀</a>",
                // bounds: bs,
              });
              return cr;
            },
          },
          {
            name: 'NavigationControl',
            options: (BMap) => {
              return {
                offset: new BMap.Size(150, 5),
                showZoomInfo: false,
                enableGeolocation: true,
              }
            }
          }
        ]}
      />
    </APILoader>
  </div>
);
export default Demo;
```

### useMapContext & Provider

通过 React 的 Context 提供了一个`无需`为每层组件手动注入 ~~`map`~~，~~`container`~~ 和 ~~`BMap`~~ 三个属性 `props`，就能在组件树间进行传递。

> 🚧 在 `v2.3.0+` 版本支持
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 10px;-->

```jsx mdx:preview
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Map, APILoader, useMap, Provider, useMapContext } from '@uiw/react-baidu-map';

const Marker = () => {
  const { map } = useMapContext();
  const container = useRef(null);
  const { setContainer } = useMap({
    zoom: 3,
    widget: ['GeolocationControl', 'NavigationControl']
  });

  useEffect(() => {
    if (container.current) {
      setContainer(container.current);
    }
  }, [container.current]);

  useEffect(() => {
    if (map) {
      // 创建点标记
      const marker1 = new BMap.Marker(new BMap.Point(116.404, 39.925));
      const marker2 = new BMap.Marker(new BMap.Point(116.404, 39.915));
      const marker3 = new BMap.Marker(new BMap.Point(116.395, 39.935));
      const marker4 = new BMap.Marker(new BMap.Point(116.415, 39.931));
      // 在地图上添加点标记
      map.addOverlay(marker1);
      map.addOverlay(marker2);
      map.addOverlay(marker3);
      map.addOverlay(marker4);
    }
  }, [map]);
  return (
    <div ref={container} style={{ height: 300 }} />
  );
}

const Demo = () => {
  return (
    <div style={{ width: '100%', height: '300px', overflow: 'auto' }}>
      <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
        <Provider>
          <div>
            <Marker />
          </div>
        </Provider>
      </APILoader>
    </div>
  );
}
export default Demo;
```

```js
import { useMapContext, Provider } from '@uiw/react-baidu-map';

const { BMap, map, container, state, dispatch } = useMapContext();
// => state.BMap
// => state.map
// => state.container
```

### 可控属性

```jsx mdx:preview
import React from 'react';
import { useState } from 'react';
import { Map, APILoader } from '@uiw/react-baidu-map';

const Demo = () => {
  const [center, setCenter] = useState('北京');
  const [enableScrollWheelZoom, setEnableScrollWheelZoom] = useState(true);
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <button onClick={() => setCenter('北京')}>北京</button>
      <button onClick={() => setCenter('上海')}>上海</button>
      <button onClick={() => setEnableScrollWheelZoom(!enableScrollWheelZoom)}>{enableScrollWheelZoom ? '禁用': '启用'}滚轮放大缩小</button>
      <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
        <Map enableScrollWheelZoom={enableScrollWheelZoom} zoom={10}  center={center}/>
      </APILoader>
    </div>
  );
}
export default Demo;
```

### 使用 hooks

`map`, `setMap`, `container`, `setContainer`, `zoom`, `setZoom`, `setCenter`, `autoLocalCity`, `setAutoLocalCity`,

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef();
  const [zoom, setZoom] = useState(15)
  const { setContainer, map, center, setCenter, setAutoLocalCity } = useMap({
    enableScrollWheelZoom: true, // 启用滚轮放大缩小，默认禁用
    center: '北京',
    widget: ['GeolocationControl', 'NavigationControl']
  });
  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  });

  useEffect(() => {
    if (map) {
      // 启用滚轮放大缩小，默认禁用
      map.setZoom(zoom);
    }
  }, [zoom, map]);
  
  return (
    <>
      <button onClick={() => setZoom(zoom-1)}>-</button>
      <span>{zoom || 15}</span>
      <button onClick={() => setZoom(zoom+1)}>+</button>
      <button onClick={() => setCenter('北京')}>北京</button>
      <button onClick={() => setCenter('上海')}>上海</button>
      <button onClick={() => setAutoLocalCity(true)}>IP定位</button>
      <div ref={divElm} style={{ height: 350 }} />
    </>
  )
}

const Demo = () => (
  <div style={{ width: '100%' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <Example />
    </APILoader>
  </div>
);
export default Demo;
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| widget | 百度地图上负责与地图交互的UI元素称为控件，实例参考。[百度控件文档](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget) | `string[]`/`object[]` | `[]` |
| center | 定位, 可使用如 `上海市青浦区` 的地区字符串，也可以使用对象如 `{lng: 121.424333, lat: 31.228604}` 表示经纬度。[百度拾取坐标系统](http://api.map.baidu.com/lbsapi/getpoint/index.html) | Point,String | `上海市` |
| autoLocalCity | 设为 `true`, IP定位获取当前城市，进行自动定位 | boolean | - |
| zoom | 缩放等级，如果 `center` 类型为 `Point` 时，zoom必须赋值，范围 `3-19` 级， 若调用高清底图（针对移动端开发）时，zoom 可赋值范围为 `3-18` 级。 如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据 `center` 适配最佳 `zoom` 级别 | `number` | - |
| minZoom | 地图允许展示的最小级别 | `number` | - |
| maxZoom | 地图允许展示的最大级别 | `number` | - |
| mapType | 地图类型 | MapType | `BMAP_NORMAL_MAP` |
| mapStyle | 设置地图样式 | `MapStyle` | - |
| defaultCursor | 设置地图默认的鼠标指针样式。参数 `cursor` 应符合 CSS 的 `cursor` 属性规范 | `string` | - |
| draggingCursor | 设置拖拽地图时的鼠标指针样式。参数 `cursor` 应符合 CSS 的 `cursor` 属性规范 | `string` | - |
| panorama | 将全景实例与Map类进行绑定 | `Panorama` | - |
| currentCity | 设置地图城市，注意当地图初始化时的类型设置为 `BMAP_NORMAL_MAP` 时，需要在调用 `centerAndZoom` 之前调用此方法设置地图所在城市。例如： `var map = new BMap.Map(“container”, {mapType: BMAP_NORMAL_MAP}); map.setCurrentCity(“北京市”); map.centerAndZoom(new BMap.Point(116.404, 39.915), 18);` 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。 | string | - |
| viewport | 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标 | `(view: Array<Point> \| Viewport, viewportOptions: ViewportOptions)` | - |
| mapStyleV2 | 设置地图样式的个性化地图服务V2，使用对象字面量形式表示，样式Json，通过[编辑器生成](http://lbsyun.baidu.com/apiconsole/custommap)。(支持Canvas) | `{ styleJson: MapStyleItem[] }` / `{styleId: string}` | - |
| enableHighResolution | 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4 默认为开启状态 | boolean | - |
| enableAutoResize | 是否启用自动适应容器尺寸变化，默认启用 | boolean | `true` |
| enableMapClick | 是否开启底图可点功能 | boolean | `true` |
| enableDragging | 启用地图拖拽，默认启用 | boolean | - |
| enableScrollWheelZoom | 启用滚轮放大缩小，默认禁用 | boolean | - |
| enableDoubleClickZoom | 启用双击放大，默认启用 | boolean | `true` |
| enableInertialDragging | 启用地图惯性拖拽，默认禁用 | boolean | - |
| enableContinuousZoom | 启用连续缩放效果，默认禁用 | boolean | - |
| enablePinchToZoom | 启用双指操作缩放，默认启用 | boolean | `true` |
| enableKeyboard | 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级 | boolean | - |

### 事件

| 参数 | 说明 | 类型 |
| ----- | ----- | ----- |
| onClick | 左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick | (event: {type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }): void; |
| onDblClick | 鼠标双击地图时会触发此事件 | (event: {type: string, target: any, pixel: Pixel, point: Point }): void; |
| onRightClick | 右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick | (event: {type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }): void; |
| onRightdblClick | 右键双击地图时触发此事件 | (event: {type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }): void; |
| onMapTypeChange | 地图类型发生变化时触发此事件 | (event: {type: string, target: any }): void; |
| onMouseMove | 鼠标在地图区域移动过程中触发此事件 | (event: {type: string, target: any, point: Point, pixel: Pixel, overlay: Overlay }): void; |
| onMouseOver | 鼠标移入地图区域时触发此事件 | (event: {type: string, target: any }): void; |
| onMouseOut | 鼠标移出地图区域时触发此事件 | (event: {type: string, target: any }): void; |
| onMoveStart | 地图移动开始时触发此事件 | (event: {type: string, target: any }): void; |
| onMoving | 地图移动过程中触发此事件 | (event: {type: string, target: any }): void; |
| onMoveEnd | 地图移动结束时触发此事件 | (event: {type: string, target: any }): void; |
| onZoomStart | 地图更改缩放级别开始时触发触发此事件 | (event: {type: string, target: any }): void; |
| onZoomEnd | 地图更改缩放级别结束时触发触发此事件 | (event: {type: string, target: any }): void; |
| onAddOverlay | 当使用 Map.addOverlay() 方法向地图中添加单个覆盖物时会触发此事件 | (event: {type: string, target: any }): void; |
| onAddControl | 当使用 Map.addControl() 方法向地图中添加单个控件时会触发此事件 | (event: {type: string, target: any }): void; |
| onRemoveControl | 当使用 Map.removeControl() 方法移除单个控件时会触发此事件 | (event: {type: string, target: any }): void; |
| onRemoveOverlay | 当使用 Map.removeOverlay() 方法移除单个覆盖物时会触发此事件 | (event: {type: string, target: any }): void; |
| onClearOverlays | 当使用 Map.clearOverlays() 方法一次性移除全部覆盖物时会触发此事件 | (event: {type: string, target: any }): void; |
| onDragStart | 开始拖拽地图时触发 | (event: {type: string, target: any, pixel: Pixel, point: Point }): void; |
| onDragging | 拖拽地图过程中触发 | (event: {type: string, target: any, pixel: Pixel, point: Point }): void; |
| onDragEnd | 停止拖拽地图时触发 | (event: {type: string, target: any, pixel: Pixel, point: Point }): void; |
| onAddTileLayer | 添加一个自定义地图图层时触发此事件 | (event: {type: string, target: any }): void; |
| onRemoveTileLayer | 移除一个自定义地图图层时触发此事件 | (event: {type: string, target: any }): void; |
| onLoad | 调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块 | (event: {type: string, target: any, pixel: Pixel, point: Point, zoom: number }): void; |
| onReSize | 地图可视区域大小发生变化时会触发此事件 | (event: {type: string, target: any, size: Size }): void; |
| onHotspotClick | 点击热区时触发此事件 | (event: {type: string, target: any, spots: HotspotOptions }): void; |
| onHotspotOver | 鼠标移至热区时触发此事件 | (event: {type: string, target: any, spots: HotspotOptions }): void; |
| onHotspotOut | 鼠标移出热区时触发此事件 | (event: {type: string, target: any, spots: HotspotOptions }): void; |
| onTilesLoaded | 当地图所有图块完成加载时触发此事件 | (event: {type: string, target: any }): void; |
| onTouchStart | 触摸开始时触发此事件，仅适用移动设备 | (event: {type: string, target: any, point: Point, pixel}): void; |
| onTouchMove | 触摸移动时触发此事件，仅适用移动设备 | (event: {type: string, target: any, point: Point, pixel}): void; |
| onTouchEnd | 触摸结束时触发此事件，仅适用移动设备 | (event: {type: string, target: any, point: Point, pixel}): void; |
| onLongPress | 长按事件，仅适用移动设备 | (event: {type: string, target: any, point: Point, pixel}): void; |
