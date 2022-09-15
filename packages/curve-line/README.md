CurveLine 弧线组件
===

使用浏览器的矢量制图工具（如果可用）在地图上绘制弧线的地图叠加层，当前组件自动加载 [CurveLine.min.js](https://api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js) 包，加载完成将会有个 `window.BMapLib` 的全局对象。

```jsx
import { CurveLine, useCurveLine } from '@uiw/react-baidu-map';
// 或者单独安装使用
import CurveLine, { useCurveLine } from '@uiw/react-baidu-map-curve-line';
```

### 基本用法

```jsx mdx:preview
import React, { useState } from 'react';
import { Map, CurveLine, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [enableEditing, setEnableEditing] = useState(false);
  const [strokeOpacity, setStrokeOpacity] = useState(0.5);
  function curveLineRef(props) {
    if (props && props.curveLine) {
      console.log('curveLine:', props.curveLine, props.map, props.BMapLib);
    }
  }
  return (
    <>
      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '取消编辑' : '编辑'}</button>
      <button onClick={() => setStrokeOpacity(0.7)}>透明度0.7</button>
      <button onClick={() => setStrokeOpacity(0.2)}>透明度0.2</button>
      <Map zoom={4} center="武汉" widget={['NavigationControl']} style={{ height: 350 }}>
        <CurveLine
          ref={curveLineRef}
          enableEditing={enableEditing}
          strokeOpacity={strokeOpacity}
          strokeWeight={3}
          strokeColor="blue"
          path={[
            { lng: 116.432045, lat: 39.910683 },
            { lng: 114.300404, lat: 30.63216 },
            { lng: 121.491121, lat: 25.127053 },
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

`curveLine`, `setCurveLine`, `path`, `setPath`, `BMapLib`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, useCurveLine } from '@uiw/react-baidu-map';

const Example = () => {
  const [enableEditing, setEnableEditing] = useState(false);
  const [strokeOpacity, setStrokeOpacity] = useState(0.9);
  const divElm = useRef(null);
  const { setContainer, map } = useMap({
    zoom: 8,
    enableScrollWheelZoom: true,
    widget: ['GeolocationControl', 'NavigationControl']
  });
  const { curveLine } = useCurveLine({ map,
    enableEditing, strokeOpacity,
    path: [
      { lng: 118.798544, lat: 32.076761 },
      { lng: 120.785452, lat: 30.759355 },
      { lng: 120.895835, lat: 31.974881 },
    ],
  });
  useCurveLine({ map,
    path: [
      { lng: 118.770948, lat: 30.9419 },
      { lng: 120.583081, lat: 31.313834 },
      { lng: 121.484549, lat: 31.226918 },
    ],
  });

  useEffect(() => {
    if (divElm.current) {
      setContainer(divElm.current);
    }
  });

  useEffect(() => {
    if (map && curveLine) {
      if (enableEditing) {
        curveLine.enableEditing();
      } else {
        curveLine.disableEditing();
      }
    }
  }, [enableEditing]);

  useEffect(() => {
    if (map && curveLine) {
      curveLine.setStrokeOpacity(strokeOpacity);
    }
  }, [strokeOpacity]);

  return (
    <>
      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '取消编辑' : '编辑'}</button>
      <button onClick={() => setStrokeOpacity(0.7)}>透明度0.7</button>
      <button onClick={() => setStrokeOpacity(0.2)}>透明度0.2</button>
      <div ref={divElm} style={{ height: 350 }} />
    </>
  )
}

const Demo = () => (
  <div style={{ width: '100%' }}>
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
| enableEditing |  是否启用线编辑，默认为false | Boolean | `false` |
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