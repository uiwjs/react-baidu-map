PanoramaControl 全景地图控件
===

全景地图控件。

```jsx
import { PanoramaControl, usePanoramaControl } from '@uiw/react-baidu-map';
// 或者单独安装使用
import PanoramaControl, { usePanoramaControl } from '@uiw/react-baidu-map-panorama-control';
```

### 基本用法

```jsx mdx:preview
import React, { useState } from 'react';
import { Map, APILoader, PanoramaControl } from '@uiw/react-baidu-map';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <Map zoom={13} style={{ height: 300 }}>
        {show && (
          <PanoramaControl />
        )}
        <PanoramaControl visiable={show} />
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

`panoramaControl`, `setPanoramaControl`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, usePanoramaControl } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [show, setShow] = useState(true);
  const { setContainer, map } = useMap();
  const { panoramaControl } = usePanoramaControl({
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
| ~~anchor~~ | **`无效`** 控件的位置偏移值。| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |
| ~~offset~~ | **`无效`** 控件的水平偏移值。 | `BMap.Size` | - |
