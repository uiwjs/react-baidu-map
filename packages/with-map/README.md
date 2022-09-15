withMap
===

一个高阶组件，用于将当前上下文的 `BMap.Map` 实例注入到目标组件中，主要用于实现对地图组件的自定义控制。

```jsx
import { withMap, APILoader } from '@uiw/react-baidu-map';
// 或者单独安装使用
import withMap from '@uiw/react-baidu-map-with-map';
```

### 基本用法

```jsx mdx:preview
import React from 'react';
import { withMap, APILoader } from '@uiw/react-baidu-map';

class ExampleMap extends React.Component {
  componentDidMount() {
    const { BMap, map, container } = this.props;
    // 启用滚轮放大缩小，默认禁用
    // map.enableScrollWheelZoom();
    // 添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
      mapTypes:[
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
      ]
    }));
    const point = new BMap.Point(121.458965, 31.238775);
    const marker = new BMap.Marker(point);      // 创建标注
    map.addOverlay(marker);                     // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); // 跳动的动画

    // 添加自定义菜单
    const menu = new BMap.ContextMenu()
    const menuItem = [
      { text: '放大', callback: () => map.zoomIn() },
      { text: '缩小', callback: () => map.zoomOut() },
    ]
    for (let i = 0; i < menuItem.length; i++) {
      menu.addItem(new BMap.MenuItem(menuItem[i].text, menuItem[i].callback, 100));
    }
    map.addContextMenu(menu);
  }
  render() {
    return null;
  }
}

const CustomWithMap = withMap(ExampleMap);

const Demo = () => {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
        <CustomWithMap
          enableScrollWheelZoom
          zoom={8}
          ref={(instance) => {
            console.log('instance>', instance);
          }}
        />
      </APILoader>
    </div>
  )
};

export default Demo;
```


高阶组件 `withMap` 可以作为 `Map` 组件来使用，继承 `Map` 可以默认传递 `Map` 的属性，相关属性参考 [`<Map>`](#/map)。