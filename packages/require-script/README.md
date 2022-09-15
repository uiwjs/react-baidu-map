RequireScript 加载第三方包
===

提供一个组件加载第三方包，也提供了一个 `requireScript` 方法加载第三方包。

```jsx
import { RequireScript, requireScript } from '@uiw/react-baidu-map';
// 或者单独安装使用
import RequireScript, { requireScript } from '@uiw/react-baidu-map-require-script';
```

> ⚠️ 注意：预览当前页面需要刷新页面。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### 基本用法

下面实例来自高德官方： https://lbsyun.baidu.com/jsdemo.htm#gl_tool_1

```jsx mdx:preview
import React from 'react';
import { useRef } from 'react';
import { Map, APILoader, RequireScript } from '@uiw/react-baidu-map';

const Example = () => {
  const myDis = useRef();
  const openHandle = () => {
    myDis.current.open();
  }
  const closeHandle = () => {
    myDis.current.close();
  }
  return (
    <>
      <div>
        <input type="button" value="开启测距" onClick={openHandle} />
        <input type="button" value="关闭测距" onClick={closeHandle} />
      </div>
      <Map mapClick={false} style={{ height: 350 }}>
          {({ map }) => {
            myDis.current = new BMapGLLib.DistanceTool(map);
            // 监听测距过程中的鼠标事件
            myDis.current.addEventListener('drawend', function(e) {
              console.group("drawend");
              console.log(e.points);
              console.log(e.overlays);
              console.log(e.distance);
              console.groupEnd();
            });
            myDis.current.addEventListener("addpoint", function(e) {
              console.group("addpoint");
              console.log(e.point);
              console.log(e.pixel);
              console.log(e.index);
              console.log(e.distance);
              console.groupEnd();
            });
            myDis.current.addEventListener("removepolyline", function(e) {
              console.group("removepolyline");
              console.log(e);
              console.groupEnd();
            });
          }}
      </Map>
    </>
  );
};

const Demo = () => (
  <div style={{ width: '100%' }}>
    <APILoader type="webgl" akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <RequireScript src="//mapopen.cdn.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js">
        <Example />
      </RequireScript>
    </APILoader>
  </div>
);

export default Demo;
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| src | 第三方包的 URL 地址 | `string` | - |

### 事件

| 参数 | 说明 | 类型 | 默认值 |
| ----- | ----- | ----- | ----- |
| onCompleted | 加载完成 | () => void; | - |
| onFailed | 加载失败 | () => void; | - |