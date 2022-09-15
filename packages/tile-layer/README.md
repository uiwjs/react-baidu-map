TileLayer 地图图层
===

此类表示一个地图图层，您可以向地图中添加自定义图层，官方原生实例：https://lbsyun.baidu.com/jsdemo.htm#g0_2。

```jsx
import { TileLayer, useTileLayer } from '@uiw/react-baidu-map';
// 或者单独安装使用
import TileLayer, { useTileLayer } from '@uiw/react-baidu-map-tile-layer';
```

### 基本用法

```jsx mdx:preview
import React from 'react';
import { useState, useRef } from 'react';
import { Map, APILoader, TileLayer } from '@uiw/react-baidu-map';

const Example = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? '关闭' : '开启'}
      </button>
      <Map widget={['NavigationControl']} zoom={16} center={{ lng: 116.332782, lat: 40.007978 }} style={{ height: 350 }}>
        <TileLayer
          visiable={show}
          getTilesUrl={(tileCoord, zoom) => {
            const { x, y } = tileCoord;
            // 根据当前坐标，选取合适的瓦片图
            return `http://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`;
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

`tileLayer`, `setTileLayer`, `visiable`, `setVisiable`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, useTileLayer } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const [show, setShow] = useState(true);
  const { setContainer, map } = useMap({
    zoom: 16, center: { lng: 116.332782, lat: 40.007978 },
    widget: ['NavigationControl']
  });

  const { setVisiable } = useTileLayer({
    visiable: show,
    map, getTilesUrl: (tileCoord, zoom) => {
      const { x, y } = tileCoord;
      // 根据当前坐标，选取合适的瓦片图
      return `http://lbsyun.baidu.com/jsdemo/demo/tiles/${zoom}/tile${x}_${y}.png`;
    }
  });

  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
  }, [map]);
  return (
    <>
      <button onClick={() => {
        setShow(!show)
        setVisiable(!show)
      }}>
        {show ? '关闭' : '开启'}
      </button>
      <div ref={divElm} style={{ height: '100%' }} />
    </>
  );
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
| visiable | 地图图层是否可见 | `Boolean` | - |
| transparentPng | 是否使用了带有透明信息的PNG。由于IE6不支持PNG透明，因此需要特殊处理。 | `Boolean` | - |
| tileUrlTemplate | 指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：`http://yourhost/tile?x={X}&y={Y}&z={Z}.png` 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，比如： `http://yourhost/tile?x=3&y=27&z=5.png` 如果您没有提供图块网址模板，您需要实现`TileLayer.getTileUrl()` 抽象方法。 | `string` | - |
| getTilesUrl | 抽象。向地图返回地图图块的网址，图块索引由 `tileCoord` 的 `x` 和 `y` 属性在指定的缩放级别 `zoom` 提供。如果您在 `TileLayerOptions` 中提供了tileUrlTemplate参数，则可不实现此接口。| `(tileCoord: Pixel, zoom: number): string;` | - |
| getCopyright | 返回地图图层数据的版权对象 | `(): Copyright` | - |
| copyright | 地图图层的版权信息 | `Copyright` | - |
| zIndex | 图层的 `zIndex` | `number` | - |
