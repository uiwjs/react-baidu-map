PointCollection 加载海量点
===

表示海量点类，利用该类可同时在地图上展示万级别的点，目前仅适用于html5浏览器。

> 渲染海量点会耗费一定性能，应该注意不要频繁变动 point 数组

```jsx
import { PointCollection, usePointCollection } from '@uiw/react-baidu-map';
// 或者单独安装使用
import PointCollection, { usePointCollection } from '@uiw/react-baidu-map-point-collection';
```

### 基本用法

```jsx mdx:preview
import React from 'react';
import { useEffect, useState } from 'react';
import { Map, PointCollection, APILoader, requireScript } from '@uiw/react-baidu-map';

const Example = () => {
  const [visiable, setVisiable] = useState(true);
  const [points, setPoints] = useState([]);
  const [position, setPositon] = useState('');
  useEffect(() => {
    if(points.length === 0) {
      requireScript('https://lbsyun.baidu.com/jsdemo/data/points-sample-data.js').then(() => {
        if(window.data && window.data.data) {
          setPoints(window.data.data);
        }
      });
    }
  });
  function compRef(props) {
    if (props && props.pointCollection) {
      console.log('pointCollection::', props.pointCollection, props.map, props.BMap);
    }
  }
  return (
    <>
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}</button>
      {position && <span>标注点经纬度：{position}</span>}
      <Map widget={['NavigationControl']} zoom={5} style={{ height: 350 }}>
        <PointCollection
          ref={compRef}
          visiable={visiable}
          onClick={(e) => {
            setPositon(JSON.stringify(e.point))
          }}
          styles={{ shape: 1 }}
          points={[
            ...points
          ]}
        />
      </Map>
    </>
  )
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

可以使用 `pointCollection`, `setPointCollection`, `points`, `setPoints` 钩子函数。

> 下面实例[`来源官方网站实例`](http://lbsyun.baidu.com/jsdemo.htm#c1_19)。

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Map, useMap, Provider, APILoader, usePointCollection, requireScript } from '@uiw/react-baidu-map';

let loadData = false;
let data = []
const Example = () => {
  const divElm = useRef();
  const { setContainer, map } = useMap({ widget: ['GeolocationControl', 'NavigationControl'], zoom: 5 });
  const { points, setPoints } = usePointCollection({ map });
  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current);
    }
    if (!loadData) {
      requireScript('https://lbsyun.baidu.com/jsdemo/data/points-sample-data.js').then(() => {
        if(window.data && window.data.data) {
          if (!loadData) {
            loadData = true;
            data = window.data.data;
            setPoints(window.data.data);
          }
        }
      });
    }
  });
  return (
    <>
      <button onClick={() => setPoints(points.length > 0 ? [] : data)}>{points && points.length > 0 ? '清空标注' : '显示标注'}</button>
      <div ref={divElm} style={{ height: '100%' }} />
    </>
  )
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
| points | **`必填`** 创建海量点类。为点的坐标集合 `[[74.438,39.006,1],[74.932,38.382,1]]` | [lng: number, lat: number][] | - |
| visiable | 覆盖物是否可见。 | `boolean` | - |
| styles | 设置 `{shape,size,color}`，是一个可控属性 | object | - |
| shape | 海量点的预设形状 | `ShapeType` | `BMAP_POINT_SHAPE_WATERDROP` |
| size | 海量点的预设尺寸 | `SizeType` | `BMAP_POINT_SIZE_SMALL` |
| color | 海量点的颜色，默认为'#fa937e'，同时支持颜色字符串，如'red'； | `string` | `#d340c3` |

### 事件

| 参数 | 说明 | 类型 |
| ----- | ----- | ----- |
| onClick | 鼠标点击点时会触发此事件 | (event: { type: string, target: any, point: Point }) => void; |
| onMouseOver | 鼠标移入点时会触发该事件 | (event: { type: string, target: any, point: Point }) => void; |
| onMouseOut | 鼠标移出点时会触发该事件 | (event: { type: string, target: any }) => void; |

### ShapeType

| 常量 | 描述 |
| ---- | ---- |
|BMAP_POINT_SHAPE_CIRCLE | 圆形，为默认形状 |
|BMAP_POINT_SHAPE_STAR | 星形 |
|BMAP_POINT_SHAPE_SQUARE | 方形 |
|BMAP_POINT_SHAPE_RHOMBUS | 菱形 |
|BMAP_POINT_SHAPE_WATERDROP | 水滴状，该类型无size和color属性 |

### SizeType

| 常量 | 描述 |
| ---- | ---- |
| BMAP_POINT_SIZE_TINY | 定义点的尺寸为超小，宽高为2px*2px |
| BMAP_POINT_SIZE_SMALLER | 定义点的尺寸为很小，宽高为4px*4px |
| BMAP_POINT_SIZE_SMALL | 定义点的尺寸为小，宽高为8px*8px |
| BMAP_POINT_SIZE_NORMAL | 定义点的尺寸为正常，宽高为10px*10px，为海量点默认尺寸 |
| BMAP_POINT_SIZE_BIG | 定义点的尺寸为大，宽高为16px*16px |
| BMAP_POINT_SIZE_BIGGER | 定义点的尺寸为很大，宽高为20px*20px |
| BMAP_POINT_SIZE_HUGE | 定义点的尺寸为超大，宽高为30px*30px |