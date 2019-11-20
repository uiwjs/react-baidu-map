Marker 点标注组件
===

表示地图上一个图像标注。

```jsx
import { Marker } from '@uiw/react-baidu-map';
```

### 基本用法

<!--DemoStart,bgWhite-->
```jsx
import { Map, Marker, APILoader } from '@uiw/react-baidu-map';

const Demo = () => {
  return (
    <div style={{ width: '100%', height: '350px' }}>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map
          widget={['NavigationControl']}
          zoom={13}
          // center="上海"
          center={{ lng: 121.460977, lat: 31.227906 }}
        >
          <Marker position={{ lng: 121.411535, lat: 31.222965 }} animation={2} />
          <Marker position={{ lng: 121.465145, lat: 31.241245 }} />
          <Marker position={{ lng: 121.466008, lat: 31.220001 }} type="loc_red" /> 
          <Marker position={{ lng: 121.501365, lat: 31.224942 }} type="simple_blue" />
          <Marker position={{ lng: 121.464858, lat: 31.202705 }} type="simple_red" />
          <Marker position={{ lng: 121.458534, lat: 31.224942}} type="start" />
          <Marker position={{ lng: 121.434962, lat: 31.200729 }} type="end" />
          <Marker position={{ lng: 121.478943, lat: 31.2531 }} type="location" />
          <Marker position={{ lng: 121.516888, lat: 31.249149 }} type="red1" />
          <Marker position={{ lng: 121.512576, lat: 31.240504 }} type="red2" />
          <Marker position={{ lng: 121.513726, lat: 31.233588}} type="blue3" />
          <Marker position={{ lng: 121.520912, lat: 31.234576}} type="blue4" />
          <Marker position={{ lng: 121.491879, lat: 31.195045}} type="dot_red" />
          <Marker position={{ lng: 121.485555, lat: 31.195045}} type="dot_blue" />
        </Map>
      </APILoader>
    </div>
  );
};
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 自定义标点

<!--DemoStart,bgWhite-->
```jsx
const CustomIcon = () => {
  const [position, setPosition] = useState({ lng: 121.466008, lat: 31.220001 });
  const icon = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157));
  return (
    <>
      <button onClick={() => setPosition({lng: 121.545202, lat: 31.246679})}>设置 position</button>
      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>
        <Marker position={position} icon={icon} animation={2} />
      </Map>
    </>
  );
}

const Demo = () => (
  <div style={{ width: '100%', height: '350px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <CustomIcon />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 可拖拽

<!--DemoStart,bgWhite-->
```jsx
import { Map, Marker, APILoader } from '@uiw/react-baidu-map';

const CustomIcon = () => {
  const [enableDragging, setEnableDragging] = useState(true);
  const icon = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157));
  return (
    <>
      <button onClick={() => setEnableDragging(!enableDragging)}>{enableDragging ? '禁用拖拽' : '启用拖拽'}</button>
      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>
        <Marker title="title" enableDragging={enableDragging} position={{ lng: 121.466008, lat: 31.220001 }} icon={icon} type="loc_red" />
        <Marker enableDragging={enableDragging} position={{ lng: 121.458534, lat: 31.224942}} type="start" />
        <Marker enableDragging={enableDragging} position={{ lng: 121.434962, lat: 31.200729 }} type="end" />
      </Map>
    </>
  );
}

const Demo = () => (
  <div style={{ width: '100%', height: '350px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <CustomIcon />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 使用 hooks

`marker`, `setMarker`, `type`, `setType`

<!--DemoStart,bgWhite-->
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMarkers } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const { container, setContainer, map } = useMap({ widget: ['GeolocationControl', 'NavigationControl'], zoom: 8 });
  const { setType, marker } = useMarkers({ map, position: { lng: 121.444017, lat: 31.237787 }, });
  useEffect(() => {
    if (divElm.current && !container) {
      setContainer(divElm.current);
    }
  });
  return (
    <>
      <button onClick={() => setType('red2')}>设置 red2</button>
      <button onClick={() => setType('loc_blue')}>设置 loc_blue</button>
      <button onClick={() => marker.setPosition(new BMap.Point(121.497197, 31.232847))}>设置坐标点</button>
      <button onClick={() => marker.setAnimation(2)}>设置动画</button>
      <button onClick={() => marker.setAnimation()}>取消动画</button>
      <div ref={divElm} style={{ height: '100%' }} />
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

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| position | **`必填`** 设置标注的地理坐标。[百度拾取坐标系统](http://api.map.baidu.com/lbsapi/getpoint/index.html) | `Point` | - |
| animation | 此常量表示标注的动画效果, `1` 坠落动画，`2` 跳动动画。 | `number` | - |
| type | 标点类型，默认自定义标点 `location`, `end`, `start`, `simple_red`, `simple_blue`, `loc_blue`, `loc_red`, `dot_red`, `dot_blue', 'red1`, `red2`, `red3`, `red4`, `red5`, `red6`, `red7`, `red8`, `red9', 'blue1`, `blue2`, `blue3`, `blue4`, `blue5`, `blue6`, `blue7`, `blue8`, `blue9`。| `string` | - |
| offset | 标注的位置偏移值 | `Size` | - |
| enableMassClear | 是否在调用 `map.clearOverlays` 清除此覆盖物 | `boolean` | `true` |
| icon | 标注所用的图标对象 | `Icon` | - |
| enableDragging | 是否启用拖拽 | `boolean` | `false` |
| enableClicking | 是否响应点击事件 | `boolean` | `true` |
| raiseOnDrag | 拖拽标注时，标注是否开启离开地图表面效果。 | `boolean` | `false` |
| draggingCursor | 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范 | `string` | - |
| rotation | 是否响应点击事件 | `number` | - |
| shadow | 阴影图标 | `Icon` | - |
| title | 鼠标移到 marker 上的显示内容 | `string` | - |

### ShapeType

| 常量 | 描述 |
| ---- | ---- |
| BMAP_ANIMATION_DROP | 坠落动画 |
| BMAP_ANIMATION_BOUNCE | 跳动动画 |
