ScaleControl 比例尺控件
===

比例尺控件。你也可以使用 `Map` 组件 `widget` 属性来设置控件更方便。

```jsx
import { ScaleControl, useScaleControl } from '@uiw/react-baidu-map';
// 或者单独安装使用
import ScaleControl, { useScaleControl } from '@uiw/react-baidu-map-scale-control';
```

### 基本用法

```jsx mdx:preview
import React, { useState, useRef } from 'react';
import { Map, APILoader, ScaleControl } from '@uiw/react-baidu-map';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <Map zoom={13} style={{ height: 350 }}>
        {show && (
          <ScaleControl />
        )}
        <ScaleControl visiable={show} offset={new BMap.Size(40, 40)} anchor={BMAP_ANCHOR_TOP_RIGHT} />
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

`scaleControl`, `setScaleControl`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, useScaleControl } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [show, setShow] = useState(true);
  const { setContainer, map } = useMap();
  const { scaleControl } = useScaleControl({
    map, anchor: BMAP_NAVIGATION_CONTROL_LARGE, visiable: show,
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
| unit | 设置比例尺单位制 | `BMap.LengthUnit` | - |

### LengthUnit

常量表示长度单位制。

| 常量 | 值 | 描述 |
| ----- | ----- | ----- |
| BMAP_UNIT_METRIC | `0` | 公制单位 |
| BMAP_UNIT_IMPERIAL | `1` | 英制单位 |
