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
| akay | **`必填`** 您需先[申请密钥（ak）](http://lbs.baidu.com/apiconsole/key?application=key)才可使用该服务，接口无使用次数限制，请开发者放心使用。 | string | - |
| version | SDK 版本 | string | `3.0` |
| protocol | 协议，默认是根据当前网站协议的 | `http`/`https` | `window.location.protocol` |
| callback | SDK 版本 | string | `__baidumap_init_callback` |
| hostAndPath | 请求 SDK 的前半部分 | string | `api.map.baidu.com/api` |
| widget | 百度地图上负责与地图交互的UI元素称为控件。[`百度控件文档`](http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/widget) | `string[]`/`object[]` | `[]` |
| center | 定位, 可使用如 `上海市青浦区` 的地区字符串，也可以使用对象如 `{lng: 121.424333, lat: 31.228604}` 表示经纬度 | Point,String | `上海市` |
| zoom | 缩放等级，如果 `center` 类型为 `Point` 时，zoom必须赋值，范围 `3-19` 级， 若调用高清底图（针对移动端开发）时，zoom 可赋值范围为 `3-18` 级。 如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据 `center` 适配最佳 `zoom` 级别 | number | - |
| minZoom | 地图允许展示的最小级别 | number | - |
| maxZoom | 地图允许展示的最大级别 | number | - |
| mapType | 地图类型 | MapType | `BMAP_NORMAL_MAP` |
| enableHighResolution | 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4 默认为开启状态 | boolean | - |
| enableAutoResize | 地图允许展示的最大级别 | boolean | `true` |
| enableMapClick | 是否开启底图可点功能 | boolean | `true` |