Polyline 折线组件
===

使用浏览器的矢量制图工具（如果可用）在地图上绘制折线的地图叠加层。

```jsx
import { Polyline, usePolyline } from '@uiw/react-baidu-map';
// 或者单独安装使用
import Polyline, { usePolyline } from '@uiw/react-baidu-map-polyline';
```

### 基本用法

```jsx mdx:preview
import React, { useState } from 'react';
import { Map, Polyline, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [isHiden, setIsHiden] = useState(true);
  const [enableEditing, setEnableEditing] = useState(false);
  const [strokeOpacity, setStrokeOpacity] = useState(0.9);
  return (
    <>
      <button onClick={() => setIsHiden(!isHiden)}>{isHiden ? "隐藏" : "显示"}</button>
      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '取消编辑' : '编辑'}</button>
      <button onClick={() => setStrokeOpacity(0.7)}>透明度0.7</button>
      <button onClick={() => setStrokeOpacity(0.2)}>透明度0.2</button>
      <Map zoom={13} center="北京" widget={['NavigationControl']} style={{ height: 350 }}>
        {isHiden && (
          <Polyline
            enableEditing={enableEditing}
            strokeOpacity={strokeOpacity}
            path={[
              { lng: 116.399, lat: 39.910 },
              { lng: 116.405, lat: 39.920 },
              { lng: 116.423493, lat: 39.907445 },
            ]}
          />
        )}
        {isHiden && (
          <Polyline
            enableEditing={enableEditing}
            strokeOpacity={strokeOpacity}
            path={[
              { lng: 116.399, lat: 39.920977 },
              { lng: 116.385243, lat: 39.913063 },
              { lng: 116.394226, lat: 39.917988 },
              { lng: 116.401772, lat: 39.921364 },
              { lng: 116.41248, lat: 39.927893 },
            ]}
          />
        )}
      </Map>
    </>
  );
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

### 使用 hooks

`polyline`, `setPolyline`, `path`, `setPath`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, usePolyline } from '@uiw/react-baidu-map';

const Example = () => {
  const [enableEditing, setEnableEditing] = useState(false);
  const [strokeOpacity, setStrokeOpacity] = useState(0.9);
  const divElm = useRef(null);
  const { setContainer, map } = useMap({
    zoom: 13,
    center: '北京',
    widget: ['GeolocationControl', 'NavigationControl']
  });
  const { polyline } = usePolyline({ map,
    enableEditing, strokeOpacity,
    path: [
      { lng: 116.387112, lat: 39.920977 },
      { lng: 116.385243, lat: 39.913063 },
      { lng: 116.394226, lat: 39.917988 },
      { lng: 116.401772, lat: 39.921364 },
      { lng: 116.41248, lat: 39.927893 },
    ],
  });
  usePolyline({ map,
    path: [
      { lng: 116.399, lat: 39.910 },
      { lng: 116.405, lat: 39.920 },
      { lng: 116.423493, lat: 39.907445 },
    ],
  });
  useEffect(() => {
    if (divElm.current) {
      setContainer(divElm.current);
    }
  });
  useEffect(() => {
    if (map) {
      // 启用滚轮放大缩小，默认禁用
      map.enableScrollWheelZoom();
    }
  }, [map]);

  useEffect(() => {
    if (map && polyline) {
      if (enableEditing) {
        polyline.setFillColor('red');
        polyline.enableEditing();
      } else {
        polyline.setFillColor('transparent');
        polyline.disableEditing();
      }
    }
  }, [enableEditing]);

  useEffect(() => {
    if (map && polyline) {
      polyline.setStrokeOpacity(strokeOpacity);
    }
  }, [strokeOpacity]);

  return (
    <>
      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '取消编辑' : '编辑'}</button>
      <button onClick={() => setStrokeOpacity(0.7)}>透明度0.7</button>
      <button onClick={() => setStrokeOpacity(0.2)}>透明度0.2</button>
      <div ref={divElm} style={{ height: '100%' }} />
    </>
  )
}

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <Provider>
        <Example />
      </Provider>
    </APILoader>
  </div>
);
export default Demo;
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| strokeColor |  折线颜色 | String | - |
| strokeWeight |  折线的宽度，以像素为单位 | Number | - |
| strokeOpacity |  折线的透明度，取值范围0 - 1 | Number | - |
| strokeStyle |  折线的样式，solid或dashed | String | - |
| enableMassClear |  是否在调用map.clearOverlays清除此覆盖物，默认为true | Boolean | - |
| enableEditing |  是否启用线编辑，默认为false | Boolean | - |
| enableClicking |  是否响应点击事件，默认为true | Boolean | - |
| icons | 配置贴合折线的图标 | IconSequence[] | - |

### 事件

| 参数 | 说明 | 类型 |
| ----- | ----- | ----- |
| onClick | 点击折线后会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onDblClick | 双击折线后会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onMouseDown | 鼠标在折线上按下触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onMouseUp | 鼠标在折线释放触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onMouseOut | 鼠标离开折线时触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onMouseOver | 当鼠标进入折线区域时会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onRemove | 移除折线时触发 | (event: { type: string, target: any }): void; |
| onLineUpdate | 覆盖物的属性发生变化时触发 | (event: { type: string, target: any }): void; |