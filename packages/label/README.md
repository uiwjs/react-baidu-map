Label 文本标注
===

表示地图上包含信息的窗口。

```jsx
import { Label, useLabel } from '@uiw/react-baidu-map';
// 或者单独安装使用
import Label, { useLabel } from '@uiw/react-baidu-map-label';
```

### 基本用法

官方原生 JS 实例：https://lbsyun.baidu.com/jsdemo.htm#c1_14

```jsx mdx:preview
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
      <Map zoom={13} widget={['NavigationControl']} style={{ height: 350 }} >
        <Label visiable={visiable} content={content} position={{ lng: 121.436256, lat: 31.246926 }} />
        <Label
          ref={labelRef}
          title="wwww"
          content={content}
          position={{ lng: 121.501365, lat: 31.224942 }}
          onClick={() => setContent('您！点击了文本标注！')}
        />
        <div>
          <Label content="test" visiable={visiable} title="wwww" position={{ lng: 121.501365, lat: 31.234942 }}>
            children - 2<br /> 上海市 <del>青浦区</del> 徐泾镇盈港东路
          </Label>
        </div>
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

`label`, `setLabel`

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, Provider, useMap, useLabel, useMapContext } from '@uiw/react-baidu-map';

const Example = () => {
  const [zoom, setZoom] = useState(15)
  const divElm = useRef(null);
  const { map } = useMapContext();
  const { label, Portal } = useLabel({
    content: '徐泾镇',
    position: { lng: 121.501365, lat: 31.224942 },
    onClick: () => {
      console.log('点击事件！');
    }
  });

  useEffect(() => {
    if (map) {
      // 启用滚轮放大缩小，默认禁用
      map.setZoom(zoom);
    }
  }, [zoom, map]);
  
  let counts = zoom || 15;
  return (
    <>
      <button onClick={() => setZoom(counts-1)}>-</button>
      <span>{zoom || 10}</span>
      <button onClick={() => setZoom(counts+1)}>+</button>
      <Portal><div>xxxxxx</div></Portal>
    </>
  )
}

const Demo = () => (
  <div style={{ width: '100%' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <Map zoom={9} widget={['NavigationControl']} style={{ height: 350 }} >
        <Example />
      </Map>
    </APILoader>
  </div>
);
export default Demo;
```

使用 Provider

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, APILoader, useMap, Provider, useLabel } from '@uiw/react-baidu-map';

const Example = () => {
  const [zoom, setZoom] = useState(15)
  const divElm = useRef(null);
  const { map, setContainer } = useMap({
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
    if (map) {
      // 启用滚轮放大缩小，默认禁用
      map.setZoom(zoom);
    }
  }, [zoom, map]);

  useEffect(() => {
    if (divElm.current) {
      setContainer(divElm.current);
    }
  }, [divElm.current]);
  let counts = zoom || 15;
  return (
    <>
      <button onClick={() => setZoom(counts-1)}>-</button>
      <span>{zoom || 15}</span>
      <button onClick={() => setZoom(counts+1)}>+</button>
      <div ref={divElm} style={{ height: 350 }} />
    </>
  )
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
| content | 文本标注内容 | `string` | - |
| children | 展示文本标注内容，_🚧  添加 `children` 的时候 `content` 将失效_<!--rehype:style=background-color: #ffe56440;-->。 | `JSX.Element` | - |
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