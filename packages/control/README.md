Control 自定义控件
===

您可以通过此组件来实现自定义控件。同时你可以使用 `Map` 组件 `widget` 属性来更方便，设置自带默认控件。

```jsx
import { Control, useControl } from '@uiw/react-baidu-map';
// 或者单独安装使用
import Control, { useControl } from '@uiw/react-baidu-map-control';
```

### 基本用法

```jsx mdx:preview
import React, { useState, useRef } from 'react';
import { Map, Control, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [count, setCount] = useState(0);
  const map = useRef(null);
  return (
    <Map zoom={13} ref={map} widget={['NavigationControl']} style={{ height: 350 }}>
      <Control
        ref={(instance) => {
          if (instance && instance.control) {
            instance.control.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);
          }
        }}
      >
        <div
          style={{ background: 'gray', padding: '10px', fontSize: 12 }}
          onClick={() => setCount(count + 1)}
        >
          Current Count: {count}
        </div>
      </Control>
      <Control anchor={BMAP_ANCHOR_TOP_RIGHT}>
        <div
          style={{ background: 'gray', padding: '10px', fontSize: 12, display: 'inline-block' }}
          onClick={() => {
            const instanceMap = map.current.map
            if (instanceMap) {
              instanceMap.setZoom(instanceMap.getZoom() + 2);
            }
          }}
        >
          放大2级
        </div>
        <div
          style={{ background: 'gray', padding: '10px', fontSize: 12, display: 'inline-block', color: '#fff' }}
          onClick={() => {
            const instanceMap = map.current.map
            if (instanceMap) {
              instanceMap.setZoom(instanceMap.getZoom() - 2);
            }
          }}
        >
          缩小2级
        </div>
      </Control>
    </Map>
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

`control`, `setControl`

```jsx mdx:preview
import React from 'react';
import { useMemo, useRef, useEffect, useState } from 'react';
import { Map, Provider, APILoader, useMap, useControl, useMapContext } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [count, setCount] = useState(4);
  const { map } = useMapContext();
  const { ControlPortal } = useControl({ anchor: BMAP_ANCHOR_TOP_RIGHT });
  const { ControlPortal: ControlPortal2 } = useControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT });
  return (
    <>
      <ControlPortal>
        <div style={{ background: 'gray', padding: '10px' }}>
          <button
            onClick={() => {
              setCount(count + 1);
              map.setZoom(map.getZoom() + 1);
            }}
          >
            放大1级 {count}
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
              map.setZoom(map.getZoom() - 2);
            }}
          >
            缩小1级 {count}
          </button>
        </div>
      </ControlPortal>
      <ControlPortal2>
        <div
          style={{ background: 'gray', padding: '10px', fontSize: 12 }}
          onClick={() => setCount(count + 1)}
        >
          Current Count: {count}
        </div>
      </ControlPortal2>
    </>
  )
}

const Demo = () => (
  <div style={{ width: '100%' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <Provider>
        <Map zoom={13} widget={['NavigationControl']} style={{ height: 350 }}>
          <Example />
        </Map>
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
| anchor | 控件的停靠位置。| `ControlAnchor` | `BMAP_ANCHOR_TOP_LEFT` |
| offset | 控件的位置偏移值。 | `BMap.Size` | `new BMap.Size(10, 10)` |
| children | 展示控件内容。 | `JSX.Element` | - |

### ControlAnchor

此常量表示控件的定位。

| 常量 | 值 | 描述 |
| ----- | ----- | ----- |
| BMAP_ANCHOR_TOP_LEFT | `0` | `↖` 控件将定位到地图的左上角 |
| BMAP_ANCHOR_TOP_RIGHT | `1` | `↗` 控件将定位到地图的右上角 |
| BMAP_ANCHOR_BOTTOM_LEFT | `2` | `↙` 控件将定位到地图的左下角 |
| BMAP_ANCHOR_BOTTOM_RIGHT | `3` | `↘` 控件将定位到地图的右下角 |
