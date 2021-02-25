CopyrightControl 版权控件
===

版权控件，您可以在地图上添加自己的版权信息。你也可以使用 `Map` 组件 `widget` 属性来设置控件更方便。

```jsx
import { CopyrightControl, useCopyrightControl } from '@uiw/react-baidu-map';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codeSandbox-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, CopyrightControl } from '@uiw/react-baidu-map';

const Example = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const map = useRef(null);
  const bounds = new BMap.Bounds(new BMap.Point(121.412972,31.245691), new BMap.Point(121.53083,31.185407));
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <Map zoom={13} ref={map} widget={['NavigationControl']}>
        <CopyrightControl offset={new BMap.Size(10, 30)} anchor={BMAP_ANCHOR_TOP_RIGHT}>
          <CopyrightControl.Item bounds={bounds}>
            <span style={{ color: 'red', backgroundColor: '#fff', padding: 3 }}>自定义版权只在上海地区可见</span>
          </CopyrightControl.Item>
          {show && (
            <CopyrightControl.Item>在任何区域都可见</CopyrightControl.Item>
          )}
        </CopyrightControl>
        <CopyrightControl offset={new BMap.Size(40, 10)} anchor={BMAP_ANCHOR_BOTTOM_RIGHT}>
          {show && (
            <CopyrightControl.Item bounds={bounds}>
              <span style={{ color: 'red' }}>自定义版权只在上海地区可见</span>
            </CopyrightControl.Item>
          )}
          <CopyrightControl.Item>在任何区域都可见</CopyrightControl.Item>
        </CopyrightControl>
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

`portal`, `setPortal`, `copyrightControl`, `setCopyrightControl`

<!--DemoStart,bgWhite,codePen,codeSandbox-->
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, useCopyrightControl } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [count, setCount] = useState(0);
  const { setContainer, map } = useMap({ zoom: 13, center: '上海', widget: ['NavigationControl'] });
  const { portal, copyrightControl } = useCopyrightControl({ map });

  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  }, [map]);

  useEffect(() => {
    if (portal && copyrightControl) {
      copyrightControl.removeCopyright(111);
      copyrightControl.addCopyright({
        id: 111,
        content: `<a href='#' style='font-size:20px;background:yellow'>我是自定义版权控件呀${count}</a>`,
        bounds: new BMap.Bounds(new BMap.Point(121.412972,31.245691), new BMap.Point(121.53083,31.185407)),
      });
    }
  }, [copyrightControl, count]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        更改版权信息 {count}
      </button>
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

### CopyrightControl

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| anchor | 控件的位置偏移值。| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |
| offset | 控件的水平偏移值。 | `BMap.Size` | - |

### CopyrightControl.Item

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| bounds | 该版权信息所适用的地理区域 | `BMap.Bounds(sw: Point, ne: Point)` | - |
| children | 该版权的文本信息，用于显示在地图上，支持HTML内容。 | `React.ReactNode` | - |

```js
const bounds = new BMap.Bounds(
  new BMap.Point(121.412972,31.245691),
  new BMap.Point(121.53083,31.185407)
);
```