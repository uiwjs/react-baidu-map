Circle 圆
===

表示地图上的圆覆盖物。

```jsx
import { Circle, useCircle } from '@uiw/react-baidu-map';
// 或者单独安装使用
import Circle, { useCircle } from '@uiw/react-baidu-map-circle';
```

### 基本用法

```jsx mdx:preview
import React, { useState } from 'react';
import { Map, Circle, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [visiable, setVisiable] = useState(true);
  const [enableEditing, setEnableEditing] = useState(false);
  const [strokeOpacity, setStrokeOpacity] = useState(0.9);
  function circleRef(props) {
    if (props && props.circle) {
      console.log('circle:', props.circle, props.map, props.BMap);
    }
  }
  return (
    <>
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}</button>
      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '取消编辑' : '编辑'}</button>
      <button onClick={() => setStrokeOpacity(0.7)}>透明度0.7</button>
      <button onClick={() => setStrokeOpacity(0.2)}>透明度0.2</button>
      <Map widget={['NavigationControl']} style={{ height: 350 }}>
        <Circle
          ref={circleRef}
          visiable={visiable}
          enableEditing={enableEditing}
          strokeOpacity={strokeOpacity}
          strokeWeight={1}
          center={{ lng: 121.455228, lat: 31.240257 }}
          radius={1000}
        />
        <Circle
          visiable={visiable}
          enableEditing={enableEditing}
          strokeOpacity={strokeOpacity}
          center={{ lng: 121.490298, lat: 31.229388 }}
          radius={1500}
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

`circle`, `setCircle`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, Provider, APILoader, useMap, useCircle } from '@uiw/react-baidu-map';

const Example = () => {
  const [enableEditing, setEnableEditing] = useState(false);
  const [strokeOpacity, setStrokeOpacity] = useState(0.9);
  const divElm = useRef(null);
  const { setContainer, map } = useMap({
    widget: ['GeolocationControl', 'NavigationControl']
  });
  const { circle } = useCircle({ map,
    enableScrollWheelZoom: true, // 启用滚轮放大缩小，默认禁用
    enableEditing, strokeOpacity,
    center: { lng: 121.455228, lat: 31.240257 },
    radius: 1000,
  });
  useCircle({ map,
    strokeWeight: 1,
    center: { lng: 121.490298, lat: 31.229388 },
    radius: 1500,
  });

  useEffect(() => {
    if (divElm.current) {
      setContainer(divElm.current);
    }
  });

  useEffect(() => {
    if (map && circle) {
      if (enableEditing) {
        circle.setFillColor('red');
        circle.enableEditing();
      } else {
        circle.setFillColor('transparent');
        circle.disableEditing();
      }
    }
  }, [enableEditing]);

  useEffect(() => {
    if (map && circle) {
      circle.setStrokeOpacity(strokeOpacity);
    }
  }, [strokeOpacity]);

  return (
    <>
      <button onClick={() => setEnableEditing(!enableEditing)}>{enableEditing ? '取消编辑' : '开启编辑'}</button>
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
| center | **`必填`** 圆形的中心点坐标。[百度拾取坐标系统](http://api.map.baidu.com/lbsapi/getpoint/index.html) | `Point` | - |
| radius | **`必填`** 设置圆形的半径，单位为米。 | `number` | - |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| strokeColor | 圆形边线颜色 | `String` | - |
| fillColor | 圆形填充颜色。当参数为空时，圆形将没有填充效果 | `String` | - |
| strokeWeight | 圆形边线的宽度，以像素为单位 | `Number` | - |
| strokeOpacity | 圆形边线透明度，取值范围0 - 1 | `Number` | - |
| fillOpacity | 圆形填充的透明度，取值范围0 - 1 | `Number` | - |
| strokeStyle | 圆形边线的样式，solid或dashed | `String` | - |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物。 | `Boolean` | `true` |
| enableEditing | 是否启用线编辑。 | `Boolean` | `false` |
| enableClicking | 是否响应点击事件。 | `Boolean` | `true` |

### 事件

| 参数 | 说明 | 类型 |
| ----- | ----- | ----- |
| onClick | 鼠标点击圆形后会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onDblClick | 鼠标双击圆形后会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onMouseDown | 鼠标在圆形上按下触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onMouseUp | 鼠标在圆形释放触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onMouseOut | 鼠标离开圆形时触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onMouseOver | 当鼠标进入圆形区域时会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; |
| onRemove | 移除圆形时触发此事件 | (event: { type: string, target: any }): void; |
| onLineUpdate | 圆形覆盖物的属性发生变化时触发此事件 | (event: { type: string, target: any }): void; |