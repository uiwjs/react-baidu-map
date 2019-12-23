ScaleControl 比例尺控件
===

比例尺控件。你也可以使用 `Map` 组件 `widget` 属性来设置控件更方便。

```jsx
import { ScaleControl, useScaleControl } from '@uiw/react-baidu-map';
```

### 基本用法

<!--DemoStart,bgWhite,noScroll--> 
```jsx
import React, { useState, useRef } from 'react';
import { Map, APILoader, ScaleControl } from '@uiw/react-baidu-map';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <Map zoom={13}>
        {show && (
          <ScaleControl />
        )}
        <ScaleControl
          visiable={show}
          offset={new BMap.Size(40, 40)}
          anchor={BMAP_ANCHOR_TOP_RIGHT}
        />
      </Map>
    </>
  );
}

ReactDOM.render((
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Example />
    </APILoader>
  </div>
), _mount_);
```
<!--End-->


### 使用 hooks

`scaleControl`, `setScaleControl`

<!--DemoStart,bgWhite--> 
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, useScaleControl } from '@uiw/react-baidu-map';

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
| anchor | 控件的位置偏移值。| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |
| offset | 控件的水平偏移值。 | `BMap.Size` | - |
| unit | 设置比例尺单位制 | `BMap.LengthUnit` | - |
