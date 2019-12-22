Control 自定义控件
===

您可以通过此组件来实现自定义控件。同时你可以使用 `Map` 组件 `widget` 属性来更方便，设置自带默认控件。

```jsx
import { Control, useControl } from '@uiw/react-baidu-map';
```

### 基本用法

<!--DemoStart,bgWhite--> 
```jsx
import React, { useState, useRef } from 'react';
import { Map, Control, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [count, setCount] = useState(0);
  const map = useRef(null);
  return (
    <Map zoom={13} ref={map}>
      <Control
        ref={(instance) => {
          if (instance && instance.control) {
            instance.control.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);
          }
        }}
      >
        <div
          style={{ background: 'gray', padding: '10px' }}
          onClick={() => setCount(count + 1)}
        >
          Current Count: {count}
        </div>
      </Control>
      <Control defaultAnchor={1}>
        <div
          style={{ background: 'gray', padding: '10px' }}
          onClick={() => {
            const instanceMap = map.current.map
            if (instanceMap) {
              instanceMap.setZoom(instanceMap.getZoom() + 2);
            }
          }}
        >
          放大2级
        </div>
      </Control>
    </Map>
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

`portal`, `setPortal`, `control`, `setControl`

<!--DemoStart,bgWhite--> 
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, useControl } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [count, setCount] = useState(0);
  const { setContainer, map } = useMap({
    zoom: 13,
    center: '北京',
    widget: ['GeolocationControl', 'NavigationControl']
  });
  const { portal } = useControl({
    map,
    anchor: 3,
    children: (
      <div style={{ background: 'gray', padding: '10px' }}>
        <button
          onClick={() => {
            setCount(count + 1);
            map.setZoom(map.getZoom() + 2);
          }}
        >
          放大2级 {count}
        </button>
      </div>
    ),
  });
  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
    if (map) {
      // 启用滚轮放大缩小，默认禁用
      map.enableScrollWheelZoom();
    }
  }, [map]);
  return (
    <>
      <div ref={divElm} style={{ height: '100%' }} />
      {portal}
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
| defaultAnchor | 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置 | `ControlAnchor` | `BMAP_ANCHOR_TOP_LEFT` |
| anchor | 控件的位置偏移值。| `ControlAnchor` | - |
| defaultOffset | 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置 | `BMap.Size` | `new BMap.Size(10, 10)` |
| offset | 覆盖物是否可见。 | `BMap.Size` | - |

### ControlAnchor

此常量表示控件的定位。

| 常量 | 值 | 描述 |
| ------- | ------- |
| BMAP_ANCHOR_TOP_LEFT | `0` | `↖` 控件将定位到地图的左上角 |
| BMAP_ANCHOR_TOP_RIGHT | `1` | `↗` 控件将定位到地图的右上角 |
| BMAP_ANCHOR_BOTTOM_LEFT | `2` | `↙` 控件将定位到地图的左下角 |
| BMAP_ANCHOR_BOTTOM_RIGHT | `3` | `↘` 控件将定位到地图的右下角 |
