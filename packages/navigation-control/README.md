NavigationControl 平移缩放控件
===

地图的平移缩放控件，可以对地图进行上下左右四个方向的平移和缩放操作。你也可以使用 `Map` 组件 `widget` 属性来设置控件更方便。

```jsx
import { NavigationControl, useNavigationControl } from '@uiw/react-baidu-map';
// 或者单独安装使用
import NavigationControl, { useNavigationControl } from '@uiw/react-baidu-map-navigation-control';
```

### 基本用法

```jsx
import React, { useState } from 'react';
import { Map, APILoader, NavigationControl } from '@uiw/react-baidu-map';

const Example = () => {
  const [show, setShow] = useState(true);
  const [type, setType] = useState(BMAP_NAVIGATION_CONTROL_LARGE);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_PAN)}>
        平移按钮
      </button>
      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_ZOOM)}>
        缩放按钮
      </button>
      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_SMALL)}>
        平移和缩放按钮
      </button>
      <button onClick={() => setType(BMAP_NAVIGATION_CONTROL_LARGE)}>
        恢复默认
      </button>
      <Map zoom={13} style={{ height: 350 }}>
        {show && (
          <NavigationControl type={type} enableGeolocation showZoomInfo />
        )}
        <NavigationControl
          offset={new BMap.Size(40, 40)}
          anchor={BMAP_ANCHOR_TOP_RIGHT}
          visiable={show} 
          type={BMAP_NAVIGATION_CONTROL_PAN}
          enableGeolocation
          showZoomInfo
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

`navigationControl`, `setNavigationControl`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, useNavigationControl } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const { setContainer, map } = useMap();
  const { navigationControl } = useNavigationControl({
    type: BMAP_NAVIGATION_CONTROL_SMALL
  });

  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  }, [map]);
  return (
    <>
      <button onClick={() => navigationControl.setType(BMAP_NAVIGATION_CONTROL_PAN)}>
        平移按钮
      </button>
      <button onClick={() => navigationControl.setType(BMAP_NAVIGATION_CONTROL_LARGE)}>
        平移、缩放按钮和滑块
      </button>
      <div ref={divElm} style={{ height: 350 }} />
    </>
  );
}

const Demo = () => (
  <div style={{ width: '100%' }}>
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
| type | 平移缩放控件的类型。 | `NavigationControlType` | `BMAP_NAVIGATION_CONTROL_LARGE` |
| showZoomInfo | 是否显示级别提示信息。 | `boolean` | - |
| enableGeolocation | 控件是否集成定位功能。 | `boolean` | `false` |

### NavigationControlType

| 常量 | 值 | 描述 |
| ----- | ----- | ----- |
| BMAP_NAVIGATION_CONTROL_LARGE | `0` | 标准的平移缩放控件（包括平移、缩放按钮和滑块） |
| BMAP_NAVIGATION_CONTROL_SMALL | `0` | 仅包含平移和缩放按钮 |
| BMAP_NAVIGATION_CONTROL_PAN | `0` | 仅包含平移按钮 |
| BMAP_NAVIGATION_CONTROL_ZOOM | `0` | 仅包含缩放按钮 |