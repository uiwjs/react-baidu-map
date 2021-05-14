Label 文本标注
===

表示地图上包含信息的窗口。

```jsx
import { Label, useLabel } from '@uiw/react-baidu-map';
```

### 基本用法

官方原生 JS 实例：https://lbsyun.baidu.com/jsdemo.htm#c1_14

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { Map, Label, APILoader } from '@uiw/react-baidu-map';

const Example = () => {
  const [visiable, setVisiable] = useState(true);
  const [content, setContent] = useState('上海市 <del>青浦区</del> 徐泾镇盈港东路');
  function labelRef(props) {
    if (props && props.label) {
      console.log('label:', props.label, props.map, props.BMap);
    }
  }
  return (
    <>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}</button>
      <Map zoom={13} widget={['NavigationControl']}>
        <Label visiable={visiable} content={content} position={{ lng: 121.436256, lat: 31.246926 }}/>
        <Label
          ref={labelRef}
          title="wwww"
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

`label`, `setLabel`

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
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
| title | 文本标注的标题 | `string` | - |
| zIndex | 设置覆盖物的 zIndex | `number` | - |
| style | 文本标注样式，该样式将作用于文本标注的容器元素上，如：`{ color : "red", fontSize : "12px" }`。 | `Style` | - |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| enableMassClear | 允许覆盖物在 map.clearOverlays 方法中被清除 | `boolean` | - |

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