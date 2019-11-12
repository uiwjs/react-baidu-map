Map 组件
===

Map 组件是其他组件的基础，其他地图组件必须作为 Map 的子组件使用；Map 组件会给所有的子组件注入两个属性，和加载 百度地图 SDK。

### 基本用法

Map 的父组件必须具有宽度和高度；

```jsx
import { Map } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <Map akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f" />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

### 小工具

百度地图上负责与地图交互的UI元素称为控件。百度地图API中提供了丰富的控件，您还可以通过 Control 类来实现自定义控件，[`百度控件文档`](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget)。

```jsx
import { Map } from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <Map
      akay="GTrnXa5hwXGwgrMKm3f"
      widget={[
        'GeolocationControl',
        {
          name: 'OverviewMapControl',
          options: {
            isOpen: true,
          }
        },
        {
          name: 'NavigationControl',
          options: (BMap: any) => {
            return {
              offset: new BMap.Size(150, 5),
              showZoomInfo: false,
              enableGeolocation: true,
            }
          }
        }
      ]}
    />
  </div>
);
ReactDOM.render(<Demo />, _mount_);
```

### Props


| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| akay | 您需先[申请密钥（ak）](http://lbs.baidu.com/apiconsole/key?application=key)才可使用该服务，接口无使用次数限制，请开发者放心使用。 | string | - |
| version | SDK 版本 | string | `3.0` |
| protocol | 协议，默认是根据当前网站协议的 | `http`/`https` | `window.location.protocol` |
| callback | SDK 版本 | string | `__baidumap_init_callback` |
| hostAndPath | 请求 SDK 的前半部分 | string | `api.map.baidu.com/api` |
| widget | 百度地图上负责与地图交互的UI元素称为控件。[`百度控件文档`](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget) | `string[]`/`object[]` | `[]` |