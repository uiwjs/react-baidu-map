
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
   * JSONP 回调函数名称
   * @default __baidumap_init_callback
   */
  callback?: string;
  /**
   * 请求 SDK 的前半部分
   * http://api.map.baidu.com/api?v=2.0&ak=E480562045
   * @default api.map.baidu.com/api
   */
  hostAndPath?: string;
}

/**
 * 此类表示一个地理坐标点。
 * - `lng` 地理经度
 * - `lat` 地理纬度
 */
export interface Point { lng: number; lat: number; }

/**
 * 此类以像素表示一个矩形区域的大小。
 */
export type Size = { width?: number; height?: number; }

/**
 * 此类表示一条版权信息。可作为CopyrightControl.addCopyright()方法的参数。
 * 它没有构造函数，但可通过对象字面量形式表示。
 * - `id` 该版权信息的唯一标识符
 * - `content` 该版权的文本信息，用于显示在地图上，支持HTML内容
 * - `bounds` 该版权信息所适用的地理区域
 */
export type Copyright = { id?: number; content?: string; bounds?: boolean; }

/**
 * 此常量表示平移缩放控件的类型。
 * - `BMAP_NAVIGATION_CONTROL_LARGE` 标准的平移缩放控件(包括平移、缩放按钮和滑块)
 * - `BMAP_NAVIGATION_CONTROL_SMALL` 仅包含平移和缩放按钮
 * - `BMAP_NAVIGATION_CONTROL_PAN` 仅包含平移按钮
 * - `BMAP_NAVIGATION_CONTROL_ZOOM`	仅包含缩放按钮
 */
export type NavigationControlType = 'BMAP_NAVIGATION_CONTROL_LARGE' | 'BMAP_NAVIGATION_CONTROL_SMALL' | 'BMAP_NAVIGATION_CONTROL_PAN' | 'BMAP_NAVIGATION_CONTROL_ZOOM';

/**
 * 此常量表示控件的定位。
 * - `BMAP_ANCHOR_TOP_LEFT` 控件将定位到地图的左上角
 * - `BMAP_ANCHOR_TOP_RIGHT` 控件将定位到地图的右上角
 * - `BMAP_ANCHOR_BOTTOM_LEFT` 控件将定位到地图的左下角
 * - `BMAP_ANCHOR_BOTTOM_RIGHT` 控件将定位到地图的右下角
 */
export type ControlAnchor = 'BMAP_ANCHOR_TOP_LEFT' | 'BMAP_ANCHOR_TOP_RIGHT' | 'BMAP_ANCHOR_BOTTOM_LEFT' | 'BMAP_ANCHOR_BOTTOM_RIGHT';

/**
 * 常量表示长度单位制。
 * - `BMAP_UNIT_METRIC`	公制单位
 * - `BMAP_UNIT_IMPERIAL`	英制单位
 */
export type LengthUnit = 'BMAP_UNIT_METRIC' | 'BMAP_UNIT_IMPERIAL';

/**
 * - `BMAP_MAPTYPE_CONTROL_HORIZONTAL` 按钮水平方式展示，默认采用此类型展示
 * - `BMAP_MAPTYPE_CONTROL_DROPDOWN` 按钮呈下拉列表方式展示
 * - `BMAP_MAPTYPE_CONTROL_MAP` 以图片方式展示类型控件，设置该类型后无法指定maptypes属性
 */
export type MapTypeControlType = 'BMAP_MAPTYPE_CONTROL_HORIZONTAL' | 'BMAP_MAPTYPE_CONTROL_DROPDOWN' | 'BMAP_MAPTYPE_CONTROL_MAP';

export type IconOptions = {
  /**
   * 图标的定位点相对于图标左上角的偏移值
   */
  anchor?: ControlAnchor;
  /**
   * 图标所用的图片相对于可视区域的偏移值，此功能的作用等同于CSS中的 background-position 属性
   */
  imageOffset?: Size;
  /**
   * 信息窗口开启位置相对于图标左上角的偏移值
   */
  infoWindowAnchor?: Size;
  /**
   * 设置icon打印图片的url，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置
   */
  printImageUrl?: string;
}

export interface IconProps {
  /**
   * 设置图片资源的地址
   */
  setImageUrl?: (imageUrl: String) => void;
  /**
   * 设置图标可视区域的大小
   */
  setSize?: (size: Size) => void;
  /**
   * 设置图标的大小
   */
  setImageSize?: (offset: Size) => void;
  /**
   * 设置图标定位点相对于其左上角的偏移值
   */
  setAnchor?: (anchor: Size) => void;
  /**
   * 设置图片相对于可视区域的偏移值
   */
  setImageOffset?: (offset: Size) => void;
  /**
   * 设置信息窗口开启位置相对于图标左上角的偏移值
   */
  setInfoWindowAnchor?: (anchor: Size) => void;
  /**
   * 设置icon的打印图片，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。
   * 如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置
   */
  setPrintImageUrl?: (url: String) => void;
}

/**
 * 此类表示标注覆盖物所使用的图标。
 */
export type Icon = (url: string, size: Size, opts: IconOptions) => IconProps;

export interface MapProps {
  /**
   * 设初始化地图。 如果center类型为Point时，zoom必须赋值，范围3-19级，
   * 若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。
   * 如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据 center 适配最佳 zoom 级别
   * 
   * @param zoom 如果center类型为Point时，zoom必须赋值，范围3-19级
   * @param center 
   */
  centerAndZoom: (center: string | Point, zoom: number) => void;
  /**
   * 将控件添加到地图，一个控件实例只能向地图中添加一次
   */
  addControl: (control: Control) => void;
}

export interface BMap {
  /**
   * 此类是负责进行地图定位的控件，使用html5浏览器定位功能，此类继承Control所有功能。
   */
  GeolocationControl: new (type?: GeolocationControlOptions) => GeolocationControlProps;
  /**
   * 此类表示版权控件，您可以在地图上添加自己的版权信息。
   * 每一个版权信息需要包含如下内容：版权的唯一标识、版权内容和其适用的区域范围。
   */
  CopyrightControl: new (opts?: CopyrightControlOptions) => CopyrightControlProps;
  /**
   * 此类是负责切换地图类型的控件，此类继承Control所有功能。
   */
  MapTypeControl: new (opts?: MapTypeControlOptions) => void;
  /**
   * 此类表示比例尺控件。
   */
  ScaleControl: new (opts?: ScaleControlOptions) => ScaleControlProps
  /**
   * 默认位于地图右下方，是一个可折叠的缩略地图
   */
  OverviewMapControl: new (opts?: OverviewMapControlOptions) => OverviewMapControlProps;
  /**
   * 此类表示地图的平移缩放控件，可以对地图进行上下左右四个方向的平移和缩放操作。
   */
  NavigationControl: new (type?: NavigationControlOptions) => NavigationControlProps;
  /**
   * 此类是地图API的核心类，用来实例化一个地图
   */
  Map: new (d: HTMLDivElement) => MapProps;
}

/**
 * 创建一个控件原型实例，通过该原型实例可创建自定义控件
 */
export interface Control {

}

export interface GeolocationControlOptions {
  /**
   * 控件的停靠位置
   */
  anchor?: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset?: Size;
  /**
   * 是否显示定位信息面板。默认显示定位信息面板
   */
  showAddressBar?: boolean;
  /**
   * 添加控件时是否进行定位。默认添加控件时不进行定位
   */
  enableAutoLocation?: boolean;
  /**
   * 可自定义定位中心点的Icon样式
   */
  locationIcon?: Icon;
}

export interface GeolocationControlProps {

}

export interface CopyrightControlOptions {
  /**
   * 控件的停靠位置
   */
  anchor?: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset?: Size;
}

export interface CopyrightControlProps {
  /**
   * 添加版权信息
   */
  addCopyright?: (copyright: Copyright) => void;
  /**
   * 移除版权信息
   */
  removeCopyright?: (id: number) => void;
  /**
   * 返回单个版权信息
   */
  getCopyright?: (id: number) => Copyright;
  /**
   * 返回版权信息列表
   */
  getCopyrightCollection?: () => Copyright[];
}

export interface MapTypeControlOptions {
  type?: MapTypeControlType;
  // mapTypes?: 
}

export interface ScaleControlProps {
  /**
   * 返回比例尺单位制
   */
  getUnit?: () => LengthUnit;
  /**
   * 设置比例尺单位制
   */
  setUnit?: (unit: LengthUnit) => void;
}

export interface ScaleControlOptions {
  /**
   * 控件的停靠位置
   */
  anchor?: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset?: Size;
}

export interface OverviewMapControlProps {
  /**
   * 切换缩略地图控件的开合状态
   */
  changeView?: () => void;
  /**
   * 设置缩略地图的大小
   */
  setSize?: (size: Size) => void;
  /**
   * 返回缩略地图的大小
   */
  getSize?: () => Size;
}

export interface OverviewMapControlOptions {
  /**
   * 控件的停靠位置
   */
  anchor?: ControlAnchor;
  /**
   * 控件的水平偏移值
   */
  offset?: Size;
  /**
   * 缩略地图控件的大小
   */
  size?: Size;
  /**
   * 缩略地图添加到地图后的开合状态，默认为关闭
   */
  isOpen?: boolean;

}

export interface NavigationControlOptions {
  /**
   * 控件的水平偏移值
   */
  offset?: Size;
  /**
   * 平移缩放控件的类型
   */
  type?: NavigationControlType;
  /**
   * 是否显示级别提示信息
   */
  showZoomInfo?: boolean;
  /**
   * 控件是否集成定位功能，默认为false
   */
  enableGeolocation?: boolean;
}

export interface NavigationControlProps {
  /**
   * 返回平移缩放控件的类型
   */
  getType: () => NavigationControlType;
  /**
   * 设置平移缩放控件的类型
   */
  setType: (type: NavigationControlType) => void;
}
