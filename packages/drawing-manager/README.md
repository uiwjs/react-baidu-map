DrawingManager 鼠标绘制工具条库
===

提供鼠标绘制点、线、面、多边形（矩形、圆）的编辑工具条的开源代码库。且用户可使用 JavaScript API 对应覆盖物（点、线、面等）类接口对其进行属性（如颜色、线宽等）设置、编辑（如开启线顶点编辑等）等功能

> 当前组件自动加载 [DrawingManager_min.js](http://api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js)，加载完成将会有个 [`window.BMapLib`](http://api.map.baidu.com/library/DrawingManager/1.4/docs/symbols/BMapLib.DrawingManager.html) 的全局对象。

```jsx
import { DrawingManager, useDrawingManager } from '@uiw/react-baidu-map';
// 或者单独安装使用
import DrawingManager, { useDrawingManager } from '@uiw/react-baidu-map-drawing-manager';
```

### 基本用法

```jsx mdx:preview
import React, { useState } from 'react'
import { Map, DrawingManager, APILoader } from '@uiw/react-baidu-map'

const styleOptions = {
  strokeColor: 'red', //边线颜色。
  fillColor: 'red', //填充颜色。当参数为空时，圆形将没有填充效果。
  strokeWeight: 3, //边线的宽度，以像素为单位。
  strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
  fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
  strokeStyle: 'solid' //边线的样式，solid或dashed。
}

const Example = () => {
  return (
    <>
      <Map zoom={4} center="武汉" widget={['NavigationControl']} style={{ height: 350 }}>
        <DrawingManager
          isOpen={true}
          enableDrawingTool={true}
          drawingToolOptions={{
            anchor: BMAP_ANCHOR_TOP_RIGHT,
            offset: new BMap.Size(5, 5)
          }}
          circleOptions={styleOptions}
          polylineOptions={styleOptions}
          polygonOptions={styleOptions}
          rectangleOptions={styleOptions}
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
)
export default Demo;
```


### 使用 hooks

```jsx mdx:preview
import React from 'react';
import { useRef, useEffect, useState } from 'react'
import { Map, APILoader, Provider, useMap, useDrawingManager } from '@uiw/react-baidu-map'

const Example = () => {

  const styleOptions = {
    strokeColor: 'red', // 边线颜色。
    fillColor: 'red', // 填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 3, // 边线的宽度，以像素为单位。
    strokeOpacity: 0.8, // 边线透明度，取值范围0 - 1。
    fillOpacity: 0.6, // 填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' // 边线的样式，solid或dashed。
  }

  const divElm = useRef(null)

  const { setContainer, map } = useMap({
    zoom: 8,
    enableScrollWheelZoom: true,
    widget: ['GeolocationControl', 'NavigationControl']
  })

  const { drawingManager } = useDrawingManager({
    map,
    isOpen: true, // 是否开启绘制模式
    enableDrawingTool: true, // 是否显示工具栏
    drawingToolOptions: {
      anchor: BMAP_ANCHOR_TOP_RIGHT, // 位置
      offset: new BMap.Size(5, 5) // 偏离值
    },
    circleOptions: styleOptions, // 圆的样式
    polylineOptions: styleOptions, // 线的样式
    polygonOptions: styleOptions, // 多边形的样式
    rectangleOptions: styleOptions // 矩形的样式
  })

  useEffect(() => {
    if (divElm.current && !map) {
      setContainer(divElm.current)
    }
  }, [map])

  return (
    <>
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
)
export default Demo;
```


### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| isOpen | 是否开启绘制模式 | `boolean` | - |
| enableDrawingTool |  是否添加绘制工具栏控件 | `boolean` | 默认不添加 |
| drawingToolOptions |  折线的宽度，以像素为单位 | Json Object | 可选的输入参数，非必填项 |
| enableCalculate |  绘制是否进行测距(画线时候)、测面(画圆、多边形、矩形) | `boolean` | - |

### drawingToolOptions

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| anchor | 是否开启绘制模式 | ControlAnchor | 停靠位置、默认左上角 |
| offset | 偏移值 | BMap.Size | - |
| scale | 工具栏的缩放比例,默认为1 | Number | - |
| drawingModes | 工具栏上可以选择出现的绘制模式 | Array | - |

### 官方文档

- demo: https://lbsyun.baidu.com/jsdemo.htm#f0_7
- api: http://api.map.baidu.com/library/DrawingManager/1.4/docs/symbols/BMapLib.DrawingManager.html

