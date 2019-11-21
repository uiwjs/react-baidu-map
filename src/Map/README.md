Map 组件
===

Map 组件是其他组件的基础，其他地图组件必须作为 Map 的子组件使用；Map 组件会给所有的子组件注入两个属性，`<Map>` 组件必须包裹在 `<APILoader>` 组件内，该组件作用是加载百度地图 SDK。

```jsx
import { Map, useMap, APILoader } from '@uiw/react-baidu-map';
```

### 基本用法

Map 的父组件必须具有宽度和高度；

<!--DemoStart,bgWhite--> 
```jsx
import { Map, APILoader } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Map />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 小工具

百度地图上负责与地图交互的UI元素称为控件。百度地图API中提供了丰富的控件，您还可以通过 Control 类来实现自定义控件，[`百度控件文档`](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget)。

<!--DemoStart,bgWhite--> 
```jsx
import { Map, APILoader } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Map
        ready={(bmap, map) => {
          console.log('准备好了！', map);
          // 启用滚轮放大缩小，默认禁用
          map.enableScrollWheelZoom();
        }}
        widget={[
          'GeolocationControl',
          {
            name: 'OverviewMapControl',
            options: {
              isOpen: true,
            }
          },
          {
            name: 'NavigationControl',
            options: (BMap) => {
              return {
                offset: new BMap.Size(150, 5),
                showZoomInfo: false,
                enableGeolocation: true,
              }
            }
          }
        ]}
      />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 可控属性

<!--DemoStart,bgWhite--> 
```jsx
import { Map, APILoader } from '@uiw/react-baidu-map';

const Demo = () => {
  const [center, setCenter] = useState('北京');
  const [enableScrollWheelZoom, setEnableScrollWheelZoom] = useState(true);
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <button onClick={() => setCenter('北京')}>北京</button>
      <button onClick={() => setCenter('上海')}>上海</button>
      <button onClick={() => setEnableScrollWheelZoom(!enableScrollWheelZoom)}>{enableScrollWheelZoom ? '禁用': '启用'}滚轮放大缩小</button>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map enableScrollWheelZoom={enableScrollWheelZoom} zoom={10}  center={center}/>
      </APILoader>
    </div>
  );
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 使用 hooks

`map`, `setMap`, `container`, `setContainer`, `zoom`, `setZoom`, `setCenter`, `autoLocalCity`, `setAutoLocalCity`,

<!--DemoStart,bgWhite--> 
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef();
  const [zoom, setZoom] = useState(15)
  const { setContainer, map, center, setCenter, setAutoLocalCity } = useMap({
    center: '北京',
    widget: ['GeolocationControl', 'NavigationControl']
  });
  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  });
  useEffect(() => {
    if (map) {
      // 启用滚轮放大缩小，默认禁用
      map.enableScrollWheelZoom();
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      // 启用滚轮放大缩小，默认禁用
      map.setZoom(zoom);
    }
  }, [zoom, map]);
  
  return (
    <>
      <button onClick={() => setZoom(zoom-1)}>-</button>
      <span>{zoom || 15}</span>
      <button onClick={() => setZoom(zoom+1)}>+</button>
      <button onClick={() => setCenter('北京')}>北京</button>
      <button onClick={() => setCenter('上海')}>上海</button>
      <button onClick={() => setAutoLocalCity(true)}>IP定位</button>
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
|--------- |-------- |--------- |-------- |
| widget | 百度地图上负责与地图交互的UI元素称为控件。[`百度控件文档`](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget) | `string[]`/`object[]` | `[]` |
| center | 定位, 可使用如 `上海市青浦区` 的地区字符串，也可以使用对象如 `{lng: 121.424333, lat: 31.228604}` 表示经纬度。[百度拾取坐标系统](http://api.map.baidu.com/lbsapi/getpoint/index.html) | Point,String | `上海市` |
| autoLocalCity | 设为 `true`, IP定位获取当前城市，进行自动定位 | boolean | - |
| zoom | 缩放等级，如果 `center` 类型为 `Point` 时，zoom必须赋值，范围 `3-19` 级， 若调用高清底图（针对移动端开发）时，zoom 可赋值范围为 `3-18` 级。 如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据 `center` 适配最佳 `zoom` 级别 | number | - |
| minZoom | 地图允许展示的最小级别 | number | - |
| maxZoom | 地图允许展示的最大级别 | number | - |
| mapType | 地图类型 | MapType | `BMAP_NORMAL_MAP` |
| enableHighResolution | 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4 默认为开启状态 | boolean | - |
| enableAutoResize | 地图允许展示的最大级别 | boolean | `true` |
| enableMapClick | 是否开启底图可点功能 | boolean | `true` |
| enableDragging | 启用地图拖拽，默认启用 | boolean | - |
| enableScrollWheelZoom | 启用滚轮放大缩小，默认禁用 | boolean | - |
| enableDoubleClickZoom | 启用双击放大，默认启用 | boolean | `true` |
| enableInertialDragging | 启用地图惯性拖拽，默认禁用 | boolean | - |
| enableContinuousZoom | 启用连续缩放效果，默认禁用 | boolean | - |
| enablePinchToZoom | 启用双指操作缩放，默认启用 | boolean | `true` |
| enableKeyboard | 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级 | boolean | - |
| ready | 地图实例加载完成执行事件 | (bmap: typeof BMap, map: BMap.Map): void | - |
