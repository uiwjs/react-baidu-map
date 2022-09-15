CustomOverlay 自定义覆盖物
===

用于渲染自定义的 DOM 对象。

```jsx
import { CustomOverlay, useCustomOverlay } from '@uiw/react-baidu-map';
// 或者单独安装使用
import CustomOverlay, { useCustomOverlay } from '@uiw/react-baidu-map-custom-overlay';
```

### 基本用法

官方原生 JS 实例：https://lbsyun.baidu.com/jsdemo.htm#c1_11

```jsx mdx:preview
import React, { useState } from 'react';
import { APILoader, Map, Marker, CustomOverlay } from '@uiw/react-baidu-map';

const Demo = () => {
  const [count, setCount] = useState(0);
  function markerRef(props) {
    if (props && props.customOverlay) {
      console.log('CustomOverlay::', props.customOverlay, props.map, props.BMap);
    }
  }
  function handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    setCount(count + 1);
  }
  return (
    <div style={{ width: '100%' }}>
      <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
        <Map widget={['NavigationControl']} zoom={13} style={{ height: 350 }}>
          <Marker position={{ lng: 121.466008, lat: 31.220001 }} />
          <CustomOverlay
            ref={markerRef}
            paneName="floatPane"
            position={{ lng: 121.466008, lat: 31.220001 }} 
            style={{
              whiteSpace: 'nowrap',
              // transform: `translateX(-50%)`,
            }}
          >
            <div
              style={{ backgroundColor: '#fff', padding: 5, whiteSpace: 'nowrap', transform: `translateX(-50%)` }}
            >
              <button onClick={handleClick}>点击递增{count}</button>
            </div>
          </CustomOverlay>
          <CustomOverlay position={{ lng: 121.500934, lat: 31.229882 }} zIndex={99}>
            <div style={{ backgroundColor: '#fff', padding: 5, borderRadius: 10, whiteSpace: 'nowrap', border: '1px solid #333', userSelect: 'initial' }}>
              自定义的覆盖物
            </div>
          </CustomOverlay>
          <CustomOverlay position={{ lng: 121.500934, lat: 31.23088 }}>
            <div style={{ backgroundColor: '#fff', padding: 5, borderRadius: 10, whiteSpace: 'nowrap', border: '1px solid #333' }}>
              自定义的覆盖物，第二个
            </div>
          </CustomOverlay>
        </Map>
      </APILoader>
    </div>
  );
};
export default Demo;
```

### 使用 hooks

`portal`, `setPortal`, `customOverlay`, `setCustomOverlay`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, useMarker, useCustomOverlay } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef();
  const [count, setCount] = useState(0);
  const { setContainer, map } = useMap({
    zoom: 13,
    enableScrollWheelZoom: true,
    widget: ['GeolocationControl', 'NavigationControl']
  });
  useMarker({ map, position: { lng: 121.466008, lat: 31.220001 } });

  function handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    setCount(count + 1);
  }
  const { portal } = useCustomOverlay({
    map,
    position: { lng: 121.466008, lat: 31.220001 },
    children: (
      <div style={{ backgroundColor: '#fff', padding: 5, whiteSpace: 'nowrap', transform: `translateX(-50%)` }}>
        <button onClick={handleClick}>自定义的覆盖物{count}</button>
      </div>
    ),
  });
  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  });

  return (
    <>
      <div ref={divElm} style={{ height: 350 }} />
      {portal}
    </>
  )
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
| children | 自定义 DOM 元素。 | ReactNode | - |
| position | **`必填`** 设置标注的地理坐标。[百度拾取坐标系统](http://api.map.baidu.com/lbsapi/getpoint/index.html) | `Point` | - |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| zIndex | 对应 css z-index 属性，当添加了多个 CustomOverlay 时，可以用于设置层叠顺序 | `number` | - |
| paneName | 自定义覆盖物插入的容器，[文档描述](https://github.com/uiwjs/react-baidu-map/blob/df20f20772a613770e7b2e8de319ff082fab06aa/src/types/overlay.d.ts#L1341-L1370) | `floatPane`, `markerMouseTarget`, `floatShadow`, `labelPane`, `markerPane`, `markerShadow`, `mapPane` | `markerPane` |
