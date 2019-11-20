react-baidu-map
===

[![](https://img.shields.io/github/issues/uiwjs/react-baidu-map.svg)](https://github.com/uiwjs/react-baidu-map/issues)
[![](https://img.shields.io/github/forks/uiwjs/react-baidu-map.svg)](https://github.com/uiwjs/react-baidu-map/network)
[![](https://img.shields.io/github/stars/uiwjs/react-baidu-map.svg)](https://github.com/uiwjs/react-baidu-map/stargazers)
[![](https://img.shields.io/github/release/uiwjs/react-baidu-map)](https://github.com/uiwjs/react-baidu-map/releases)
[![](https://img.shields.io/npm/v/@uiw/react-baidu-map.svg)](https://www.npmjs.com/package/@uiw/react-baidu-map)
[![](https://jaywcjlove.github.io/sb/ico/gitee.svg)](https://uiw.gitee.io/react-baidu-map/)

这是一个基于 React 封装的百度地图组件，帮助你轻松的接入地图到 React 项目中，[Gitee 镜像仓库](https://gitee.com/uiw/react-baidu-map)。

文档预览: [Github](https://uiwjs.github.io/react-baidu-map/) | [Gitee](https://uiw.gitee.io/react-baidu-map/)

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

npm run ts:watch    # 监听编译输出 js 文件
npm run types:watch # 监听编译输出 .d.ts 类型文件
npm run doc:dev     # 文档网站运行

# 上传 gh-pages 将会执行 `npm run released` 命令
npm run deploy

# 发布
npm run released    # 编译输出 js 文件 和 .d.ts 类型文件
```
