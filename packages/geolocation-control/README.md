GeolocationControl 定位控件
===

负责进行地图定位的控件，使用html5浏览器定位功能。你也可以使用 `Map` 组件 `widget` 属性来设置控件更方便。


```jsx
import { GeolocationControl, useGeolocationControl } from '@uiw/react-baidu-map';
// 或者单独安装使用
import GeolocationControl, { useGeolocationControl } from '@uiw/react-baidu-map-geolocation-control';
```

### 基本用法

```jsx mdx:preview
import React, { useState, useRef } from 'react';
import { Map, APILoader, GeolocationControl } from '@uiw/react-baidu-map';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <Map zoom={13} style={{ height: 350 }}>
        {show && (
          <GeolocationControl
            onLocationSuccess={(e) => {
              let address = '';
              address += e.addressComponent.province;
              address += e.addressComponent.city;
              address += e.addressComponent.district;
              address += e.addressComponent.street;
              address += e.addressComponent.streetNumber;
              alert("当前定位地址为：" + address);
              console.log('address', address, e);
            }}
          />
        )}
        <GeolocationControl
          offset={new BMap.Size(40, 40)}
          anchor={BMAP_ANCHOR_TOP_RIGHT}
          visiable={show}
          onLocationSuccess={(opt) => {
            console.log('opt', opt);
          }}
          onLocationError={(StatusCode) => {
            console.log('StatusCode', StatusCode);
          }}
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

`geolocationControl`, `setGeolocationControl`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, useGeolocationControl } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [show, setShow] = useState(true);
  const { setContainer, map } = useMap();
  const { geolocationControl } = useGeolocationControl({
    map, anchor: BMAP_NAVIGATION_CONTROL_LARGE, visiable: show
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
| showAddressBar | 是否显示定位信息面板。默认显示定位信息面板。 | `boolean` | - |
| enableAutoLocation | 添加控件时是否进行定位。默认添加控件时不进行定位。 | `boolean` | - |
| locationIcon | 可自定义定位中心点的 `Icon` 样式。 | `Icon` | - |

### 事件

| 参数 | 说明 | 类型 |
| ----- | ----- | ----- |
| onLocationSuccess | 定位成功后触发此事件 | (event: { point: BMap.Point, addressComponent: BMap.AddressComponent }) => void; |
| onLocationError | 定位失败后触发此事件 | (event: { statusCode: BMap.StatusCode }) => void; |

### NavigationControlType

| 常量 | 值 | 描述 |
| ----- | ----- | ----- |
| BMAP_NAVIGATION_CONTROL_LARGE | `0` | 标准的平移缩放控件（包括平移、缩放按钮和滑块） |
| BMAP_NAVIGATION_CONTROL_SMALL | `1` | 仅包含平移和缩放按钮 |
| BMAP_NAVIGATION_CONTROL_PAN | `2` | 仅包含平移按钮 |
| BMAP_NAVIGATION_CONTROL_ZOOM | `3` | 仅包含缩放按钮 |