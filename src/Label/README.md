Label 文本标注
===

表示地图上包含信息的窗口。

### 基本用法

<!--DemoStart,bgWhite--> 
```jsx
import React, { useState } from 'react';
import { Map, Label, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [ content, setContent ] = useState('上海市 <del>青浦区</del> 徐泾镇盈港东路');
  return (
    <>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <Map zoom={13} widget={['NavigationControl']}>
        <Label content={content} position={{ lng: 121.436256, lat: 31.246926 }}/>
        <Label
          content={content}
          position={{ lng: 121.501365, lat: 31.224942 }}
          onClick={() => setContent('您！点击了文本标注！')}
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

`label`, `setLabel`, `content`, `setContent`, `style`, `setStyle`, `position`, `setPosition`

<!--DemoStart,bgWhite--> 
```jsx
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, useLabel } from '@uiw/react-baidu-map';

const Example = () => {
  const divElm = useRef(null);
  const { map, setContainer, zoom, setZoom, center } = useMap({
    zoom: 9,
    widget: ['GeolocationControl', 'NavigationControl']
  });
  const { label } = useLabel({ map,
    content: '徐泾镇',
    position: { lng: 121.436256, lat: 31.246926 },
    onClick: () => {
      console.log('点击事件！');
    }
  });

  useEffect(() => {
    if (divElm.current) {
      setContainer(divElm.current);
    }
  });
  let counts = zoom || 15;
  return (
    <>
      <button onClick={() => setZoom(counts-1)}>-</button>
      <span>{zoom || 15}</span>
      <button onClick={() => setZoom(counts+1)}>+</button>
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
| content | 文本标注内容 | `string` | - |
| offset | 文本标注的位置偏移值 | `Size` | - |
| position | 文本标注的地理位置 | `Point` | - |
| style | 文本标注样式，该样式将作用于文本标注的容器元素上，如：`{ color : "red", fontSize : "12px" }`。 | `Style` | - |

### 事件

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| onClick | 点击文本标注后会触发此事件 | (event: { type: string, target: any }) => void; | - |
| onDblClick | 双击文本标注后会触发此事件 | (event: { type: string, target: any }) => void; | - |
| onMouseDown | 鼠标在文本标注上按下触发此事件 | (event: { type: string, target: any }) => void; | - |
| onMouseUp | 鼠标在文本标注释放触发此事件 | (event: { type: string, target: any }) => void; | - |
| onMouseOout | 鼠标离开文本标注时触发此事件 | (event: { type: string, target: any }) => void; | - |
| onMouseOver | 当鼠标进入文本标注区域时会触发此事件 | (event: { type: string, target: any }) => void; | - |
| onRemove | 移除文本标注时触发 | (event: { type: string, target: any }) => void; | - |
| onRightClick | 右键点击标注时触发此事件 | (event: { type: string, target: any }) => void; | - |