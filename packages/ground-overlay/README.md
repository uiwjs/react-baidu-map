GroundOverlay 地面叠加层
===

地图上的地面叠加层。

```jsx
import { GroundOverlay, useGroundOverlay } from '@uiw/react-baidu-map';
// 或者单独安装使用
import GroundOverlay, { useGroundOverlay } from '@uiw/react-baidu-map-ground-overlay';
```

### 基本用法

```jsx mdx:preview
import React, { useState } from 'react';
import { Map, GroundOverlay, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [visiable, setVisiable] = useState(true);
  const bounds = new BMap.Bounds(
    new BMap.Point(116.29579,39.837146),
    new BMap.Point(116.475451,39.9764)
  );
  function groundRef(props) {
    if (props && props.groundOverlay) {
      console.log('groundOverlay:', props.groundOverlay);
    }
  }
  return (
    <>
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}</button>
      <Map center="北京" zoom={11} widget={['NavigationControl']} style={{ height: 350 }}>
        {visiable && (
          <GroundOverlay
            ref={groundRef}
            bounds={bounds}
            imageURL="http://lbsyun.baidu.com/jsdemo/img/si-huan.png"
            opacity={1}
            displayOnMinLevel={10}
            displayOnMaxLevel={14}
          />
        )}
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

`groundOverlay`, `useGroundOverlay`

> ⚠️ 不知为何 `show` 和 `hide` 方法存在但不起作用，理论上是继承 [`Overlay`](https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b0) 类就会有 `show()` 和 `hide()` 方法。

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, Provider, APILoader, useMap, useGroundOverlay } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [visiable, setVisiable] = useState(true);
  const bounds = new BMap.Bounds(
    new BMap.Point(116.29579,39.837146),
    new BMap.Point(116.475451,39.9764)
  );
  const { map, setContainer } = useMap({ center: '北京', zoom: 11, widget: ['GeolocationControl', 'NavigationControl'] });
  const { groundOverlay, setGroundOverlay } = useGroundOverlay({ map, bounds, visiable, imageURL: 'http://lbsyun.baidu.com/jsdemo/img/si-huan.png',
    onClick: () => {
      console.log('点击事件！');
    },
  });

  useEffect(() => {
    if (divElm.current) {
      setContainer(divElm.current);
    }
  });
  useEffect(() => {
    if (groundOverlay && map) {
      // 不知为何 方法存在但不起作用，
      // 理论上是继承 Overlay 类就会有 `show` 和 `hide` 方法。
      console.log('groundOverlay:hide:', visiable, groundOverlay.hide);
      console.log('groundOverlay:show:', visiable, groundOverlay.show);
      visiable ? groundOverlay.hide() : groundOverlay.show();
    }
  }, [visiable]);
  return (
    <>
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}</button>
      <div ref={divElm} style={{ height: '100%' }} />
    </>
  )
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
| bounds | **`必填`** 图层显示的矩形区域 | `BMap.Bounds(sw: Point, ne: Point)` | - |
| imageURL | **`必填`** 图层地址 | `string` | - |
| opacity | 图层透明度 | `number` | - |
| displayOnMinLevel | 图层显示的最小级别 | `number` | - |
| displayOnMaxLevel | 图层显示的最小级别 | `number` | - |

```js
const bounds = new BMap.Bounds(
  new BMap.Point(116.29579,39.837146),
  new BMap.Point(116.475451,39.9764)
);
```

### 事件

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| onClick | 鼠标点击图层后会触发此事件 | (event: { type: string, target: any }) => void; | - |
| onDblClick | 鼠标双击图层后会触发此事件 | (event: { type: string, target: any }) => void; | - |