
export interface Config {
  /**
   * akay 密钥
   * 您需先申请密钥（ak）才可使用该服务，接口无使用次数限制，请开发者放心使用。
   * 文档说明地址：http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey
   * 申请秘钥地址：http://lbs.baidu.com/apiconsole/key?application=key
   */
  akay: string;
  /**
   * SDK 包版本
   * @default 3.0
   */
  version?: string;
  /**
   * 协议，默认是根据当前网站协议的
   */
  protocol?: 'http' | 'https';
  /**
   * 请求 SDK 的前半部分
   * http://api.map.baidu.com/api?v=2.0&ak=E480562045
   * @default api.map.baidu.com/api
   */
  hostAndPath?: string;
  /**
   * JSONP 回调函数
   */
  callbackName?: string;
}

/**
 * 此类型是 `<Map>` 组件传递给子组件(如 `<Marker>`)的两个 props
 */
export interface MapChildProps {
  /**
   * 地图API的核心类，SDK加载完成才有
   */
  BMap?: typeof BMap;
  /**
   * 实例化后的地图对象
   */
  map?: BMap.Map;
}

export interface OverlayProps extends MapChildProps {
  /**
   * 地图API的核心类，SDK加载完成才有
   */
  BMap?: typeof BMap;
  /**
   * 实例化后的地图对象
   */
  map?: BMap.Map;
  /**
   * 覆盖物是否可见
   */
  visiable?: boolean;
}