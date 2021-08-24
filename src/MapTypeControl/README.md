MapTypeControl 地图类型控件
===

地图类型控件。你也可以使用 `Map` 组件 `widget` 属性来设置控件更方便。

```jsx
import { MapTypeControl, useMapTypeControl } from '@uiw/react-baidu-map';
```

⚠️ 这个类型控件是属于老的地图控件，加载新的 3D 地图控件[实例](http://lbsyun.baidu.com/jsdemo.htm#webgl2_1)，需要设置参数 `type=webgl&v=1.0` 并且需要自己实现。

```js
// <script type="text/javascript" src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=您的密钥"></script>
// GL版命名空间为 BMapGL
// 按住鼠标右键，修改倾斜角和角度
var map = new BMapGL.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
map.addControl(navi3DCtrl);
```

在组件上传递参数 `type="webgl"`，此时 `window.BMap` 对象为 `undefined`，在组件中做了自动处理 `window.BMap = window.BMapGL`。

```jsx
<APILoader
  akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f"
  type="webgl"
  version="1.0"
>
  <Map />
</APILoader>
```

### 基本用法

<!--rehype:bgWhite=true&noScroll=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState, useRef } from 'react';
import { Map, APILoader, MapTypeControl } from '@uiw/react-baidu-map';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <Map zoom={13} style={{ height: 350 }}>
        {show && (
          <MapTypeControl />
        )}
        <MapTypeControl visiable={show} offset={new BMap.Size(40, 40)} anchor={BMAP_ANCHOR_TOP_RIGHT} />
      </Map>
    </>
  );
}

ReactDOM.render((
  <div style={{ width: '100%' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Example />
    </APILoader>
  </div>
), _mount_);
```


### 使用 hooks

`mapTypeControl`, `setMapTypeControl`

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, useMapTypeControl } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [show, setShow] = useState(true);
  const { setContainer, map } = useMap();
  const { mapTypeControl } = useMapTypeControl({
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
      <div ref={divElm} style={{ height: 350 }} />
    </>
  );
}

const Demo = () => (
  <div style={{ width: '100%' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Example />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| anchor | 控件的位置偏移值。| `ControlAnchor` | `BMAP_ANCHOR_TOP_RIGHT` |
| offset | 控件的水平偏移值。 | `BMap.Size` | - |
| type | 设置比例尺单位制 | `BMap.MapTypeControlType` | - |
| mapTypes | 设置比例尺单位制 | `MapType[]` | - |

### BMap.MapTypeControlType

常量表示长度单位制。

| 常量 | 值 | 描述 |
| ----- | ----- | ----- |
| BMAP_MAPTYPE_CONTROL_HORIZONTAL | `0` | 按钮水平方式展示，默认采用此类型展示 |
| BMAP_MAPTYPE_CONTROL_DROPDOWN | `1` | 按钮呈下拉列表方式展示 |
| BMAP_MAPTYPE_CONTROL_MAP | `2` | 以图片方式展示类型控件，设置该类型后无法指定maptypes属性 |