
Marker 点标注组件
===

表示地图上一个图像标注。

### 基本用法

<!--DemoStart,bgWhite,codePen--> 
```jsx
import { Map, Marker, APILoader } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '350px' }}>
    <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
      <Map
        zoom={13}
        // center="上海"
        center={{ lng: 121.460977, lat: 31.227906 }}
      >
        <Marker position={{ lng: 121.411535, lat: 31.222965 }} animation={2} />
        <Marker position={{ lng: 121.465145, lat: 31.241245 }} />
      </Map>
    </APILoader>
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| position | **`必填`** 设置标注的地理坐标。[百度拾取坐标系统](http://api.map.baidu.com/lbsapi/getpoint/index.html) | `Point` | - |
| animation | 此常量表示标注的动画效果, `1` 坠落动画，`2` 跳动动画。 | `number` | - |