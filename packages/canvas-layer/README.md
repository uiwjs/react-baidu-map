CanvasLayer 自定义Canvas
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm version](https://img.shields.io/npm/v/@uiw/react-baidu-map-canvas-layer.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map-canvas-layer)
[![Downloads](https://img.shields.io/npm/dm/@uiw/react-baidu-map-canvas-layer.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-baidu-map-canvas-layer)

⚠️ `BMap.CanvasLayer` API 不知道为何没有了

用于在地图上绘制自定义的canvas2D或WebGL图形，[百度 CanvasLayer 文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b28)。

```jsx
import { CanvasLayer, useCanvasLayer } from '@uiw/react-baidu-map';
// 或者单独安装使用
import CanvasLayer, { useCanvasLayer } from '@uiw/react-baidu-map-canvas-layer';
```

### 基本用法

```jsx
import React, { useState } from 'react';
import { Map, CanvasLayer, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [visiable, setVisiable] = useState(true);
  function canvasLayerRef(props) {
    if (props && props.canvasLayer) {
      console.log('canvasLayer:', props.canvasLayer, props.map, props.BMap);
    }
  }
  return (
    <>
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}</button>
      <Map zoom={12} widget={['NavigationControl']} style={{ height: 350 }}>
        <CanvasLayer
          ref={canvasLayerRef}
          visiable={visiable}
          update={({ canvas, map }) => {
            const ctx = canvas.getContext('2d');
            if (!ctx) {
              return;
            }
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            const temp = {};
            ctx.fillStyle = 'rgba(50, 50, 255, 0.7)';
            ctx.beginPath();
            const data = [
              new BMap.Point(121.434244,31.247173),
              new BMap.Point(121.450916,31.200729),
              new BMap.Point(121.519906,31.230376),
            ];

            for (let i = 0, len = data.length; i < len; i++) {
              // 绘制时需要对经纬度进行转换
              const pixel = map.pointToPixel(data[i]);
              ctx.fillRect(pixel.x, pixel.y, 30, 30);
            }
          }}
        />
      </Map>
    </>
  );
}

const Demo = () => (
  <div style={{ width: '100%' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG" version="2.0">
      <Example />
    </APILoader>
  </div>
);
export default Demo;
```


### 使用 hooks

`canvasLayer`, `setCanvasLayer`

```jsx
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, useCanvasLayer } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [visiable, setVisiable] = useState(true);
  const { setContainer, map } = useMap({
    enableScrollWheelZoom: true,
    zoom: 12, widget: ['GeolocationControl', 'NavigationControl']
  });
  useCanvasLayer({ map, visiable,
    update: ({ canvas, map }) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const temp = {};
      ctx.fillStyle = 'rgba(50, 50, 255, 0.7)';
      ctx.beginPath();
      const data = [
        new BMap.Point(121.434244,31.247173),
        new BMap.Point(121.450916,31.200729),
        new BMap.Point(121.519906,31.230376),
      ];

      for (let i = 0, len = data.length; i < len; i++) {
        // 绘制时需要对经纬度进行转换
        const pixel = map.pointToPixel(data[i]);
        ctx.fillRect(pixel.x, pixel.y, 30, 30);
      }
    }
  });

  useEffect(() => {
    if (divElm.current) {
      setContainer(divElm.current);
    }
  });

  return (
    <>
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}</button>
      <div ref={divElm} style={{ height: 350 }} />
    </>
  )
}

const Demo = () => (
  <div style={{ width: '100%' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG" version="2.0">
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
| update | 具体的绘制逻辑。通过返回参数获取当前的 canvas 对象 | `Point` | - |
| zIndex | 对应canvas的css z-index属性，当添加了多个CanvasLayer时，可以用于设置层叠顺序。 | `number` | - |
| paneName | CanvasLayer位于的覆盖物层级，例：`paneName: floatPane`。JSAPI把地图覆盖物分为了8个层级，顶层为`floatPane`， 低层为 `vertexPane`。可以通过 `Map` 实例的 `getPanes()` 方法，获取到8个层级的名称。 | `floatPane`, `floatShadow`, `labelPane`, `mapPane`, `markerMouseTarget`, `markerPane`, `markerShadow`, `vertexPane` | - |
| visiable | 覆盖物是否可见。 | `boolean` | - |
