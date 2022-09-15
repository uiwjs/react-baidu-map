Polygon 多边形组件
===

表示一个多边形覆盖物。

```jsx
import { Polygon, usePolygon } from '@uiw/react-baidu-map';
// 或者单独安装使用
import Polygon, { usePolygon } from '@uiw/react-baidu-map-polygon';
```

### 基本用法

```jsx mdx:preview
import React, { useState } from 'react';
import { Map, Polygon, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [enableEditing, setEnableEditing] = useState(false);
  const [strokeOpacity, setStrokeOpacity] = useState(0.9);
  return (
    <>
      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '取消编辑' : '编辑'}</button>
      <button onClick={() => setStrokeOpacity(0.7)}>透明度0.7</button>
      <button onClick={() => setStrokeOpacity(0.2)}>透明度0.2</button>
      <Map zoom={13} center="北京" widget={['NavigationControl']} style={{ height: 350 }}>
        <Polygon
          enableEditing={enableEditing}
          strokeOpacity={strokeOpacity}
          path={[
            { lng: 116.399, lat: 39.910 },
            { lng: 116.405, lat: 39.920 },
            { lng: 116.423493, lat: 39.907445 },
          ]}
        />
        <Polygon
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

`polygon`, `setPolygon`, `path`, `setPath`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, Provider, useMap, APILoader, usePolygon } from '@uiw/react-baidu-map';

const Example = () => {
  const [enableEditing, setEnableEditing] = useState(false);
  const [strokeOpacity, setStrokeOpacity] = useState(0.9);
  const divElm = useRef(null);
  const { setContainer, map } = useMap({
    zoom: 13,
    center: '北京',
    widget: ['GeolocationControl', 'NavigationControl']
  });
  const { polygon } = usePolygon({ map,
    enableEditing, strokeOpacity,
    path: [
      { lng: 116.387112, lat: 39.920977 },
      { lng: 116.385243, lat: 39.913063 },
      { lng: 116.394226, lat: 39.917988 },
      { lng: 116.401772, lat: 39.921364 },
      { lng: 116.41248, lat: 39.927893 },
    ],
  });
  usePolygon({ map,
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
    if (map && polygon) {
      if (enableEditing) {
        polygon.setFillColor('red');
        polygon.enableEditing();
      } else {
        polygon.setFillColor('transparent');
        polygon.disableEditing();
      }
    }
  }, [enableEditing]);

  useEffect(() => {
    if (map && polygon) {
      polygon.setStrokeOpacity(strokeOpacity);
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
| fillColor |  填充颜色。当参数为空时，折线覆盖物将没有填充效果 | String | - |
| strokeWeight |  折线的宽度，以像素为单位 | Number | - |
| strokeOpacity |  折线的透明度，取值范围 0 - 1 | Number | - |
| fillOpacity |  填充的透明度，取值范围 0 - 1 | Number | - |
| strokeStyle |  折线的样式，solid或dashed | String | - |
| enableMassClear |  是否在调用map.clearOverlays清除此覆盖物，默认为true | Boolean | - |
| enableEditing |  是否启用线编辑，默认为false | Boolean | - |
| enableClicking |  是否响应点击事件，默认为true | Boolean | - |

### 事件

| 参数 | 说明 | 类型 |
| ----- | ----- | ----- |
| onClick | 点击多边形后会触发此事件 | (event: { type: string, target: any }) => void |
| onDoubleClick | 双击多边形后会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }) => void |
| onMouseDown | 鼠标在多边形上按下触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }) => void |
| onMouseUp | 鼠标在多边形释放触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }) => void |
| onMouseOut | 鼠标离开多边形时触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }) => void |
| onMouseOver | 当鼠标进入多边形区域时会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }) => void |
| onRemove | 移除多边形时触发 | (event: { type: string, target: any }) => void |
| onLineUpdate | 覆盖物的属性发生变化时触发 | (event: { type: string, target: any }) => void |
