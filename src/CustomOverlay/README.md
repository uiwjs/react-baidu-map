CustomOverlay 自定义覆盖物
===

表示地图上一个图像标注。

```jsx
import { CustomOverlay, useCustomOverlay } from '@uiw/react-baidu-map';
```

### 基本用法

<!--DemoStart,bgWhite--> 
```jsx
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
    <div style={{ width: '100%', height: '350px' }}>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <Map widget={['NavigationControl']} zoom={13}>
          <Marker position={{ lng: 121.466008, lat: 31.220001 }} />
          <CustomOverlay
            ref={markerRef}
            position={{ lng: 121.466008, lat: 31.220001 }} 
            style={{ whiteSpace: 'nowrap', transform: `translateX(-50%)` }}
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
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 使用 hooks

`portal`, `setPortal`, `customOverlay`, `setCustomOverlay`

<!--DemoStart,bgWhite--> 
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, useMarker, useCustomOverlay } from '@uiw/react-baidu-map';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

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

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| strokeColor |  折线颜色 | String | - |
| strokeWeight |  折线的宽度，以像素为单位 | Number | - |
| strokeOpacity |  折线的透明度，取值范围0 - 1 | Number | - |
| strokeStyle |  折线的样式，solid或dashed | String | - |
| enableMassClear |  是否在调用map.clearOverlays清除此覆盖物，默认为true | Boolean | - |
| enableEditing |  是否启用线编辑，默认为false | Boolean | - |
| enableClicking |  是否响应点击事件，默认为true | Boolean | - |
| icons | 配置贴合折线的图标 | IconSequence[] | - |