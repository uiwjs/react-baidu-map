InfoWindow 信息窗口
===

表示地图上包含信息的窗口。

```jsx
import { InfoWindow } from '@uiw/react-baidu-map';
```

### 基本用法

<!--DemoStart,bgWhite,codePen--> 
```jsx
import React, { useState } from 'react';
import { Map, InfoWindow, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [ isOpen, setIsOpen ] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '显示' : '隐藏'}</button>
      <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>
        <InfoWindow
          isOpen={isOpen}
          position={{ lng: 121.501365, lat: 31.224942 }}
          content="上海市 <del>青浦区</del> 徐泾镇盈港东路"
          title="地址信息"
        />
      </Map>
    </>
  );
}

const Demo = () => (
  <div style={{ width: '100%', height: '350px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Example />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### 使用 hooks

<!--DemoStart,bgWhite,codePen--> 
```jsx
import React, { useState } from 'react';
import { Map, InfoWindow, useInfoWindow, APILoader } from '@uiw/react-baidu-map';

const Example = ({ BMap, map, isOpen }) => {
  const position = { lng: 121.501365, lat: 31.224942 }
  useInfoWindow({
    BMap, map, isOpen, position,
    content: '上海市 <del>青浦区</del> 徐泾镇盈港东路',
    title: '地址信息'
  });
  return null;
}

const Demo = () => {
  const [ isOpen, setIsOpen ] = useState(true);
  return (
    <div style={{ width: '100%', height: '350px' }}>
      <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '显示' : '隐藏'}</button>
        <Map zoom={13} center={{ lng: 121.460977, lat: 31.227906 }}>
          <Example isOpen={isOpen}/>
        </Map>
      </APILoader>
    </div>
  )
};
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| position | **`必填`** 指定的经度和纬度创建一个地理点坐标 | `Point` | - |
| isOpen | 窗口是否打开 | `Point` | - |
| width | 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整 | `number` | `true` |
| height | 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整 | `number` | - |
| maxWidth | 信息窗最大化时的宽度，单位像素。取值范围：220 - 730 | `number` | - |
| offset | 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的 infoWindowOffset 属性值，您可以为信息窗添加偏移量来改变默认位置 | `Size` | - |
| title | 信息窗标题文字，支持HTML内容 | `string` | - |
| enableAutoPan | 是否开启信息窗口打开时地图自动移动（默认开启） | `boolean` | - |
| enableCloseOnClick | 是否开启点击地图关闭信息窗口（默认开启） | `boolean` | - |
| message | 自定义部分的短信内容，可选项。完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。短信内容最长为140个字 | `string` | - |
