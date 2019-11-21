CurveLine 弧线组件
===

使用浏览器的矢量制图工具（如果可用）在地图上绘制弧线的地图叠加层，当前组件自动加载 [CurveLine.min.js](https://api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js) 包，加载完成将会有个 `window.BMapLib` 的全局对象。

```jsx
import { CurveLine, useCurveLine } from '@uiw/react-baidu-map';
```

### 基本用法

<!--DemoStart,bgWhite--> 
```jsx
import React, { useState } from 'react';
import { Map, CurveLine, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [enableEditing, setEnableEditing] = useState(true);
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
      <Map zoom={4} center="武汉" widget={['NavigationControl']}>
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

`curveLine`, `setCurveLine`, `path`, `setPath`, `BMapLib`

<!--DemoStart,bgWhite--> 
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, useCurveLine } from '@uiw/react-baidu-map';

const Example = () => {
  const [enableEditing, setEnableEditing] = useState(true);
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
| visiable | 覆盖物是否可见。 | `boolean` | - |
| strokeColor |  折线颜色 | String | - |
| strokeWeight |  折线的宽度，以像素为单位 | Number | - |
| strokeOpacity |  折线的透明度，取值范围0 - 1 | Number | - |
| strokeStyle |  折线的样式，solid或dashed | String | - |
| enableMassClear |  是否在调用map.clearOverlays清除此覆盖物，默认为true | Boolean | - |
| enableEditing |  是否启用线编辑，默认为false | Boolean | - |
| enableClicking |  是否响应点击事件，默认为true | Boolean | - |
| icons | 配置贴合折线的图标 | IconSequence[] | - |
