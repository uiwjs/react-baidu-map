OverviewMapControl 缩略地图控件
===

缩略地图控件。你也可以使用 `Map` 组件 `widget` 属性来设置控件更方便。

```jsx
import { OverviewMapControl, useOverviewMapControl } from '@uiw/react-baidu-map';
// 或者单独安装使用
import OverviewMapControl, { useOverviewMapControl } from '@uiw/react-baidu-map-overview-map-control';
```

### 基本用法

```jsx mdx:preview
import React, { useState, useRef } from 'react';
import { Map, APILoader, OverviewMapControl } from '@uiw/react-baidu-map';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <Map zoom={13} style={{ height: 300 }}>
        {show && (
          <OverviewMapControl isOpen />
        )}
        <OverviewMapControl
          isOpen
          visiable={show}
          offset={new BMap.Size(40, 40)}
          anchor={BMAP_ANCHOR_TOP_RIGHT}
          onViewChanged={() => {
            console.log('onViewChanged ..')
          }}
        />
      </Map>
    </div>
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

`overviewMapControl`, `setGeolocationControl`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, useOverviewMapControl } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [show, setShow] = useState(true);
  const { setContainer, map } = useMap();
  const { overviewMapControl } = useOverviewMapControl({
    map, anchor: BMAP_NAVIGATION_CONTROL_LARGE, visiable: show, isOpen: true,
  });

  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  }, [map]);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <div ref={divElm} style={{ height: '100%' }} />
    </>
  );
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
| anchor | 控件的位置偏移值。| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |
| offset | 控件的水平偏移值。 | `BMap.Size` | - |
| size | 缩略地图控件的大小 | `BMap.Size` | - |
| isOpen | 缩略地图添加到地图后的开合状态，默认为关闭。 | `boolean` | - |

### 事件

| 参数 | 说明 | 类型 |
| ----- | ----- | ----- |
| onViewChanged | 缩略地图开合状态发生变化后触发此事件 | (event: { type: any, target: any, isOpen: boolean }) => void; |
| onViewChanging | 缩略地图开合状态发生变化过程中触发此事件 | (event: { type: any, target: any }) => void; |
