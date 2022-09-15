CopyrightControl 版权控件
===

版权控件，您可以在地图上添加自己的版权信息。你也可以使用 `Map` 组件 `widget` 属性来设置控件更方便。

```jsx
import { CopyrightControl, useCopyrightControl } from '@uiw/react-baidu-map';
// 或者单独安装使用
import CopyrightControl, { useCopyrightControl } from '@uiw/react-baidu-map-copyright-control';
```

### 基本用法

```jsx mdx:preview
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
      <Map zoom={13} ref={map} widget={['NavigationControl']} style={{ height: 350 }}>
        <CopyrightControl offset={new BMap.Size(10, 30)} anchor={BMAP_ANCHOR_TOP_RIGHT}>
          <CopyrightControl.Item bounds={bounds}>
            <span style={{ color: 'red', backgroundColor: '#fff', padding: 3 }}>自定义版权只在上海地区可见</span>
          </CopyrightControl.Item>
          {show && (
            <CopyrightControl.Item>在任何区域都可见</CopyrightControl.Item>
          )}
          <CopyrightControl.Item>
            <button type="button" onClick={() => setCount(count + 1)}>
              +++ {count}
            </button>
            <span style={{ color: 'red', backgroundColor: '#fff', padding: 3 }}>在任何区域都可见</span>
          </CopyrightControl.Item>
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
  <div style={{ width: '100%' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <Example />
    </APILoader>
  </div>
);
export default Demo;
```

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