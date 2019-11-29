Marker 点标注组件
===

表示地图上一个图像标注。

```jsx
import { Marker, useMarker } from '@uiw/react-baidu-map';
```

### 基本用法

<!--DemoStart,bgWhite-->
```jsx
import { Map, Marker, APILoader } from '@uiw/react-baidu-map';

const Demo = () => {
  function markerRef(props) {
    if (props && props.marker) {
      console.log('marker::', props.marker, props.map, props.BMap);
    }
  }
  return (
    <div style={{ width: '100%', height: '350px' }}>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map widget={['NavigationControl']} zoom={13}>
          <Marker ref={markerRef} animation={2} position={{ lng: 121.411535, lat: 31.222965 }} />
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

### 添加事件

<!--DemoStart,bgWhite-->
```jsx
const CustomIcon = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('请点击标注点，小箭头!')
  const [addEvent, setAddEvent] = useState(false);
  const icon = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157));
  function clickHandle({ type, target}) {
    console.log('~~~~~clickHandle~~~~~', type, target);
    setMessage('啊哈哈！你真的点击了！');
    setCount(count + 1);
  }
  return (
    <>
      <div>{message} {count}</div>
      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>
        <Marker onClick={clickHandle} position={{ lng: 121.466008, lat: 31.220001 }}  />
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
  const [postion, setPostion] = useState();
  const [isAddEvent, setIsAddEvent] = useState(false);
  const iconfox = new BMap.Icon('http://developer.baidu.com/map/jsdemo/img/fox.gif', new BMap.Size(300, 157));
  const iconfox1 = new BMap.Icon('http://api0.map.bdimg.com/images/copyright_logo.png', new BMap.Size(300, 157));
  const [icon, setIcon] = useState(iconfox);
  function markerRef(props) {
    if (props && props.marker && !isAddEvent) {
      setIsAddEvent(true)
      props.marker.removeEventListener('dragend', dragendHandle);
      props.marker.addEventListener('dragend', dragendHandle);
    }
  }
  function dragendHandle({ type, target, pixel, point }) {
    console.log('dragendHandle', type, target, pixel, point);
    setPostion(JSON.stringify(point));
  }
  return (
    <>
      <button onClick={() => setEnableDragging(!enableDragging)}>{enableDragging ? '禁用拖拽' : '启用拖拽'}</button>
      <button onClick={() => setIcon(iconfox1)}>设置icon</button>
      <button onClick={() => setIcon(iconfox)}>设置icon</button>
      {postion && <span>{postion}</span>}
      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>
        <Marker
          ref={markerRef}
          enableDragging={enableDragging}
          position={{ lng: 121.466008, lat: 31.220001 }} icon={icon}
        />
        <Marker
          ref={markerRef}
          enableDragging={enableDragging}
          position={{ lng: 121.458534, lat: 31.224942}} type="start"
        />
        <Marker
          ref={markerRef}
          enableDragging={enableDragging}
          position={{ lng: 121.434962, lat: 31.200729 }} type="end"
        />
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


### 矢量图标

百度地图[官方实例](http://lbsyun.baidu.com/jsdemo.htm#c1_20)。

<!--DemoStart,bgWhite-->
```jsx
import { Map, Marker, APILoader } from '@uiw/react-baidu-map';

const CustomIcon = () => {
  const [visiable, setVisiable] = useState(true);
  const icon = new BMap.Symbol('m0.5,48.67105l106.55963,0m-53.03642,45.73853l52.06349,51.09042m-52.06349,-51.57716l-48.65731,51.57716m48.41391,-112.39955l0,60.82238m16.17517,-77.24814c0,8.93415 -7.24208,16.17461 -16.17517,16.17461c-8.93307,0 -16.17464,-7.24046 -16.17464,-16.17461c0,-8.93309 7.24156,-16.1747 16.17464,-16.1747c8.93309,0 16.17517,7.24161 16.17517,16.1747z', {
    rotation: 0, // 顺时针旋转40度
    fillColor: 'green',
    fillOpacity: 0.8,
    strokeColor: '#555',
    strokeWeight: 3 // 线宽
  });
  const iconForwardClosedArrow = new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {
    scale: 5,
    strokeWeight: 1,
    rotation: 0, // 顺时针旋转30度
    fillColor: 'red',
    fillOpacity: 0.8
  });
  const iconBackwardClosedArrow = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW, {
    scale: 5,
    strokeWeight: 1,
    rotation: 180,
    fillColor: 'gold',
    fillOpacity: 0.8
  });
  const iconShapePoint = new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
    scale: 2, // 图标缩放大小
    fillColor: "orange", // 填充颜色
    fillOpacity: 0.8, // 填充透明度
  });
  return (
    <>
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}</button>
      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>
        <Marker visiable={visiable} position={{ lng: 121.466008, lat: 31.220001 }} icon={icon} />
        <Marker visiable={visiable} position={{ lng: 121.458534, lat: 31.224942}} icon={iconForwardClosedArrow} />
        <Marker visiable={visiable} position={{ lng: 121.434962, lat: 31.200729 }} icon={iconBackwardClosedArrow} />
        <Marker visiable={visiable} position={{ lng: 121.437962, lat: 31.200729 }} icon={iconShapePoint} />
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
import { Map, APILoader, useMarker } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const { setContainer, map } = useMap({ widget: ['GeolocationControl', 'NavigationControl'], zoom: 8 });
  const { setType, marker } = useMarker({ map, position: { lng: 121.444017, lat: 31.237787 } });
  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  });
  return (
    <>
      <button onClick={() => setType('red2')}>设置 red2</button>
      <button onClick={() => setType('loc_blue')}>设置 loc_blue</button>
      <button onClick={() => marker.setPosition(new BMap.Point(121.497197, 31.232847))}>设置坐标点</button>
      <button onClick={() => marker.setAnimation(2)}>设置动画</button>
      <button onClick={() => marker.setAnimation(null)}>取消动画</button>
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
| visiable | 覆盖物是否可见。 | `boolean` | - |
| enableDragging | 是否启用拖拽 | `boolean` | `false` |
| enableClicking | 是否响应点击事件 | `boolean` | `true` |
| enableMassClear | 允许覆盖物在map.clearOverlays方法中被清除 | `boolean` | `true` |
| raiseOnDrag | 拖拽标注时，标注是否开启离开地图表面效果。 | `boolean` | `false` |
| draggingCursor | 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范 | `string` | - |
| rotation | 是否响应点击事件 | `number` | - |
| shadow | 阴影图标 | `Icon` | - |
| title | 鼠标移到 marker 上的显示内容 | `string` | - |

### 事件

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| onClick | 点击标注图标后会触发此事件 | (event: { type: string, target: any }): void; | - |
| onDblClick | 双击标注图标后会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |
| onMouseDown | 鼠标在标注图上按下触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |
| onMouseUp | 鼠标在标注图上释放触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |
| onMouseOut | 鼠标离开标注时触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |
| onMouseOver | 当鼠标进入标注图标区域时会触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |
| onRemove | 移除标注时触发 | (event: { type: string, target: any }): void; | - |
| onInfowindowClose | 信息窗在此标注上关闭时触发此事件 | (event: { type: string, target: any }): void; | - |
| onInfowindowOpen | 信息窗在此标注上打开时触发此事件 | (event: { type: string, target: any }): void; | - |
| onDragStart | 开始拖拽标注时触发此事件 | (event: { type: string, target: any }): void; | - |
| onDragging | 拖拽标注过程中触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |
| onDragEnd | 拖拽结束时触发此事件 | (event: { type: string, target: any, point: Point, pixel: Pixel }): void; | - |
| onRightClick | 右键点击标注时触发此事件 | (event: { type: string, target: any }): void; | - |

### ShapeType

| 常量 | 描述 |
| ---- | ---- |
| BMAP_ANIMATION_DROP | 坠落动画 |
| BMAP_ANIMATION_BOUNCE | 跳动动画 |
