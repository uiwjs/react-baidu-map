CanvasLayer 自定义Canvas
===

用于在地图上绘制自定义的canvas2D或WebGL图形，[百度 CanvasLayer 文档](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b28)。

```jsx
import { CanvasLayer, useCanvasLayer } from '@uiw/react-baidu-map';
```

### 基本用法

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
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
      <Map zoom={12} widget={['NavigationControl']}>
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
  <div style={{ width: '100%', height: '350px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Example />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->


### 使用 hooks

`canvasLayer`, `setCanvasLayer`

<!--rehype:bgWhite=true-->
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, useCanvasLayer } from '@uiw/react-baidu-map';

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
      <div ref={divElm} style={{ height: '100%' }} />
    </>
  )
}

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Example />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| update | 具体的绘制逻辑。通过返回参数获取当前的 canvas 对象 | `Point` | - |
| zIndex | 对应canvas的css z-index属性，当添加了多个CanvasLayer时，可以用于设置层叠顺序。 | `number` | - |
| paneName | CanvasLayer位于的覆盖物层级，例：`paneName: floatPane`。JSAPI把地图覆盖物分为了8个层级，顶层为`floatPane`， 低层为 `vertexPane`。可以通过 `Map` 实例的 `getPanes()` 方法，获取到8个层级的名称。 | `floatPane`, `floatShadow`, `labelPane`, `mapPane`, `markerMouseTarget`, `markerPane`, `markerShadow`, `vertexPane` | - |
| visiable | 覆盖物是否可见。 | `boolean` | - |