<p align="center">
  <a href="https://github.com/uiwjs/react-baidu-map">
    <img src="https://uiwjs.github.io/react-baidu-map/logo.svg" height="80px" alt="百度地图 LOGO" />
  </a>
</p>
<h3 align="center">百度地图 React 组件</h3>

<p align="center">
  <a href="https://github.com/uiwjs/react-baidu-map/actions">
    <img src="https://github.com/uiwjs/react-baidu-map/workflows/Build%20&%20Deploy/badge.svg" alt="Build & Deploy">
  </a>
  <a href="https://github.com/uiwjs/react-baidu-map/issues">
    <img src="https://img.shields.io/github/issues/uiwjs/react-baidu-map.svg" alt="Issues">
  </a>
  <a href="https://github.com/uiwjs/react-baidu-map/network">
    <img src="https://img.shields.io/github/forks/uiwjs/react-baidu-map.svg" alt="Forks">
  </a>
  <a href="https://github.com/uiwjs/react-baidu-map/stargazers">
    <img src="https://img.shields.io/github/stars/uiwjs/react-baidu-map.svg" alt="Stars">
  </a>
  <a href="https://github.com/uiwjs/react-baidu-map/releases">
    <img src="https://img.shields.io/github/release/uiwjs/react-baidu-map.svg" alt="Releases">
  </a>
  <a href="https://www.npmjs.com/package/@uiw/react-baidu-map">
    <img src="https://img.shields.io/npm/v/@uiw/react-baidu-map.svg" alt="npm version">
  </a>
  <a href="https://gitee.com/uiw/react-baidu-map">
    <img src="https://jaywcjlove.github.io/sb/ico/gitee.svg" alt="Gitee Repo">
  </a>
</p>

这是一个基于 React 封装的百度地图组件，帮助你轻松的接入地图到 React 项目中。除了必须引用的 APILoader/Map 组件外，我们目前提供了最常用的地图组件，能满足大部分简单的业务场景；如果你有更复杂的需求，或者觉得默认提供的组件功能不够，可以使用 Map 组件返回的地图实例，完全自定义一个地图组件，然后根据百度地图原生 API 做百度地图允许你做的一切事情。

![](https://user-images.githubusercontent.com/1680273/71525077-35126b00-290b-11ea-9a11-ffd8b30dc9b8.png)

文档实例预览: [Github](https://uiwjs.github.io/react-baidu-map/) | [Gitee](https://uiw.gitee.io/react-baidu-map/)

### 特性

- ♻️ 自动加载百度地图 SDK（通过创建 Script 标签的形式加载），包括第三方 SDK。
- 📚 使用 Typescript 编写，集成百度地图 SDK [@type](src/types) 声明文件（包括中文注释）。
- ⚛️ 支持 React Hook 新增特性（需要 React 16.8+）。
- 💝 不依赖任何第三方组件。

## 安装

> 不依赖 [`uiw`](https://github.com/uiwjs/uiw) 组件库

```bash
npm install @uiw/react-baidu-map --save
```

## 使用

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Map, APILoader } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Map />
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

## 开发

```bash
npm install # 安装依赖

npm run watch # 监听编译输出 js 文件, 监听编译输出 .d.ts 类型文件
npm run start # 文档网站运行
```

## 相关连接

- [@uiw/react-amap](https://github.com/uiwjs/react-amap) 高德地图 React 组件
- [百度拾取坐标系统](https://api.map.baidu.com/lbsapi/getpoint/index.html) 
- [百度地图官方 Demo 示例](https://lbsyun.baidu.com/jsdemo.htm) 
- [百度地图 API v3.0](https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html) 
