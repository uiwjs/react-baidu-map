
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
}

/**
 * 此类表示一个地理坐标点。
 * - `lng` 地理经度
 * - `lat` 地理纬度
 */
export interface Point { lng: number; lat: number; }

/**
 * 此类表示地图上的一点，单位为像素
 */
export type Size = { width?: number; height?: number; }
/**
 * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角
 * - `x` x坐标
 * - `y` y坐标
 */
export type Pixel = { x: number; y: number; }

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
export type MapType = (name: string, layers: TileLayer | TileLayer[]) => void;

/**
 * 此类表示地理坐标的矩形区域。创建一个包含所有给定点坐标的矩形区域。其中
 * - `sw` 表示矩形区域的西南角
 * - `ne` 表示矩形区域的东北角
 */
export type Bounds = (sw: Point, ne: Point) => BoundsProps
/**
 * Bounds 的方法
 */
export interface BoundsProps {
  /**
   * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true
   */
  equals?: (other: Bounds) => Boolean;
  /**
   * 如果点的地理坐标位于此矩形内，则返回true
   */
  containsPoint?: (point: Point) => Boolean;
  /**
   * 传入的矩形区域完全包含于此矩形区域中，则返回true
   */
  containsBounds?: (bounds: Bounds)  => Boolean;
  /**
   * 计算与另一矩形的交集区域
   */
  intersects?: (other: Bounds) => Bounds;
  /**
   * 放大此矩形，使其包含给定的点
   */
  extend?: (point: Point) => void;  
  /**
   * 返回矩形的中心点
   */
  getCenter?: () => Point;
  /**
   * 如果矩形为空，则返回true
   */
  isEmpty?: () => Boolean;
  /**
   * 返回矩形区域的西南角
   */
  getSouthWest?: () => Point;
  /**
   * 返回矩形区域的东北角
   */
  getNorthEast?: () => Point;
  /**
   * 返回矩形区域的跨度
   */
  toSpan?: () => Point;
}
/**
 * 此类表示TileLayer构造函数的可选参数
 */
export type TileLayerOptions = {
  /**
   * 是否使用了带有透明信息的PNG。由于IE6不支持PNG透明，因此需要特殊处理
   */
  transparentPng?: boolean;
  /**
   * 指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。
   * 模板的格式应该为：http://yourhost/tile?x={X}&y={Y}&z={Z}.png 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，
   * 比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，您需要实现TileLayer.getTileUrl()抽象方法
   */
  tileUrlTemplate?: string;
  /**
   * 地图图层的版权信息
   */
  copyright?: Copyright;
  /**
   * 图层的zIndex
   */
  zIndex?: number;
}

/**
 * 此类表示一个地图图层，您可以向地图中添加自定义图层。
 */
export type TileLayer = (opts: TileLayerOptions) => TileLayerProps;

/**
 * TileLayer 的方法
 */
export interface TileLayerProps {
  /**
   * 抽象。向地图返回地图图块的网址，图块索引由 tileCoord 的 x 和 y 属性在指定的缩放级别 zoom 提供。
   * 如果您在 TileLayerOptions 中提供了 tileUrlTemplate 参数，则可不实现此接口
   */
  getTilesUrl: (tileCoord: Pixel, zoom: number) => string;
  /**
   * 返回地图图层数据的版权对象
   */
  getCopyright?: () => Copyright | null;
  /**
   * 如果图层所用的图片为PNG格式并且包含透明信息，则返回true
   */
  isTransparentPng?: () => boolean;
}

/**
 * 该类用于设置地图样式的个性化地图服务V2，使用对象字面量形式表示，不可实例化。
 * 样式Json，通过[`编辑器生成`](http://lbsyun.baidu.com/customv2/index.html)
 */
export type MapStyleV2 = {
  styleJson?: any[];
}

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
  /**
   * 启用地图拖拽，默认启用
   */
  enableDragging?: () => void;
  /**
   * 禁用地图拖拽
   */
  disableDragging?: () => void;
  /**
   * 启用滚轮放大缩小，默认禁用
   */
  enableScrollWheelZoom?: () => void;
  /**
   * 禁用滚轮放大缩小
   */
  disableScrollWheelZoom?: () => void;
  /**
   * 启用双击放大，默认启用
   */
  enableDoubleClickZoom?: () => void;
  /**
   * 禁用双击放大
   */
  disableDoubleClickZoom?: () => void;
  /**
   * 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。
   * 同时按下其中两个键可使地图进行对角移动。
   * PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
   */
  enableKeyboard?: () => void;
  /**
   * 禁用键盘操作
   */
  disableKeyboard?: () => void;
  /**
   * 启用地图惯性拖拽，默认禁用
   */
  enableInertialDragging?: () => void;
  /**
   * 禁用地图惯性拖拽
   */
  disableInertialDragging?: () => void;
  /**
   * 启用连续缩放效果，默认禁用
   */
  enableContinuousZoom?: () => void;
  /**
   * 禁用连续缩放效果
   */
  disableContinuousZoom?: () => void;
  /**
   * 启用双指操作缩放，默认启用
   */
  enablePinchToZoom?: () => void;
  /**
   * 禁用双指操作缩放
   */
  disablePinchToZoom?: () => void;
  /**
   * 启用自动适应容器尺寸变化，默认启用
   */
  enableAutoResize?: () => void;
  /**
   * 禁用自动适应容器尺寸变化
   */
  disableAutoResize?: () => void;
  /**
   * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
   */
  setDefaultCursor?: (cursor: string) => void;
  /**
   * 返回地图默认的鼠标指针样式
   */
  getDefaultCursor?: () => string;
  /**
   * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
   */
  setDraggingCursor?: (cursor: string) => string;
  /**
   * 返回拖拽地图时的鼠标指针样式
   */
  getDraggingCursor?: () => void;
  /**
   * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
   */
  setMinZoom?: (zoom: Number) => void;
  /**
   * 设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
   */
  setMaxZoom?: (zoom: Number) => void;
  /**
   * 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
   */
  setMapStyle?: () => void;
  /**
   * 设置地图个性化样式V2版本，仅支持现代浏览器（支持Canvas）
   */
  setMapStyleV2?: (style: MapStyleV2) => void;
  /**
   * 将全景实例与Map类进行绑定
   */
  setPanorama?: (pano: Panorama) => void;
  /**
   * 返回地图可视区域，以地理坐标表示
   */
  getBounds?: () => Bounds;
  /**
   * 返回地图当前中心点
   */
  getCenter?: () => Point;
  /**
   * 返回两点之间的距离，单位是米
   */
  getDistance?: (start: Point, end: Point)=> void;
  /**
   * 返回地图类型
   */
  getMapType?: () => MapType;
  /**
   * 返回地图视图的大小，以像素表示
   */
  getSize?: () => Size;
}

/**
 * 在给定的结点中创建全景
 * 此类用来展示某位置的全景视图，可以单独放置在一个div容器中，也可以放在Map类的容器中。
 * http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0
 */
export type Panorama = (container: String | HTMLElement, opts: PanoramaOptions) => PanoramaProps

/**
 * Panorama 方法事件
 */
export interface PanoramaProps extends PanoramaEvent {
  /**
   * 获取全景中道路指示信息
   */
  getLinks?: () => Array<PanoramaLink>;
  /**
   * 获取当前全景的id
   */
  getId?: () => string;
  /**
   * 获取当前全景的位置，通过经纬度描述
   */
  getPosition?: () => Point;
  /**
   * 获取当前全景的视角
   */
  getPov?: () => PanoramaPov;
  /**
   * 获取当前全景的级别
   */
  getZoom?: () => Number;
  /**
   * 设置全景的 id
   */
  setId?: (id: string) => void;
  /**
   * 设置全景的位置
   */
  setPosition?: (position: Point) => void;
  /**
   * 设置全景的视角
   */
  setPov?: (pov: PanoramaPov) => void;
  /**
   * 设置全景的级别
   */
  setZoom?: (zoom: Number) => void;
  /**
   * 开启鼠标滚轮缩放功能。仅对PC上有效
   */
  enableScrollWheelZoom?: () => void;
  /**
   * 关闭鼠标滚轮缩放功能
   */
  disableScrollWheelZoom?: () => void;
  /**
   * 显示全景
   */
  show?: () => void;
  /**
   * 隐藏全景
   */
  hide?: () => void;
  /**
   * 全景场景内添加覆盖物
   */
  addOverlay?: (overlay: PanoramaLabel) => void;
  /**
   * 删除全景内的覆盖物
   */
  removeOverlay?: (overlay: PanoramaLabel) => void;
  /**
   * 获取全景的类型（室外景返回BMAP_PANORAMA_STREET_SCENE、室内景返回BMAP_PANORAMA_INDOOR_SCENE）
   */
  getSceneType?: () => PanoramaPOIType;
  /**
   * 设置全景可配置参数
   */
  setOptions?: (opts: PanoramaOptions) => void;
  /**
   * 设置全景外景场景点内可见的POI类型，默认为隐藏所有类型poi
   */
  setPanoramaPOIType?: () => PanoramaPOIType;

}

/**
 * Panorama 的事件
 */
export interface PanoramaEvent {
  /**
   * 全景位置发生变化时触发
   */
  position_changed?: () => void;
  /**
   * 全景相邻道路发生变化时触发，通常是在位置变化时，异步获取新数据之后触发
   */
  links_changed?: () => void;
  /**
   * 全景视角发生变化时触发
   */
  pov_changed?: () => void;
  /**
   * 全景级别发生变化时触发
   */
  zoom_changed?: () => void;
  /**
   * 全景场景点类型改变（室内景、室外景）时触发
   */
  scene_type_changed?: () => void;
}

export type PanoramaPOIType = 'BMAP_PANORAMA_POI_HOTEL' | 'BMAP_PANORAMA_POI_CATERING' | 'BMAP_PANORAMA_POI_MOVIE' | 'BMAP_PANORAMA_POI_TRANSIT' | 'BMAP_PANORAMA_POI_INDOOR_SCENE' | 'BMAP_PANORAMA_POI_NONE';

/**
 * 此类用来描述全景中道路指示中相邻全景的信息。使用对象字面量形式表示，不可实例化。
 */
export type PanoramaLink = {
  /**
   * 相连全景的描述信息
   */
  description?: string;
  /**
   * 相连道路的方向，正北方向为0，正东为90，正南为180，正西为270
   */
  heading?: number;
  /**
   * 相邻全景的id
   */
  id?: string;
}

/**
 * 此类描述全景的视角。使用对象字面量形式表示，不可实例化。
 */
export type PanoramaPov = {
  /**
   * 水平方向的角度，正北方向为0，正东为90，正南为180，正西为270
   */
  heading?: number;
  /**
   * 竖直方向的角度，向上最大到90度，向下最大到-90度。（在某些场景下，俯角可能无法到达最大值）
   */
  pitch?: number;
}

/**
 * 该类提供在全景中添加标签功能。
 */
export type PanoramaLabel = (content: String, opts: PanoramaLabelOptions) => PanoramaLabelProps;

/**
 * 此类为 PanoramaLabel 类构造函数的可选参数，使用对象字面量形式表示，不可实例化。
 */
export interface PanoramaLabelOptions {
  /**
   * 文本标注的地理位置
   */
  position?: Point;
  /**
   * 文本标注在全景场景点中距地面的高度。（javascript全景实现方式暂不支持），默认为2米
   */
  altitude?: number;
}

/**
 * PanoramaLabel 构造函数
 */
export interface PanoramaLabelProps {
  /**
  * 设置标签的经纬度坐标
  */
  setPosition?: (position: Point) => void;
  /**
    * 获取标签的经纬度坐标
    */
  getPosition?: () => Point;
  /**
    * 获取标签与全景中心点的视角
    */
  getPov?: () => PanoramaPov;
  /**
    * 设置标签显示内容
    */
  setContent?: (content: String) => void;
  /**
    * 获取标签的显示内容
    */
  getContent?: () => string;
  /**
    * 设置标签可见
    */
  show?: () => void;
  /**
    * 设置标签不可见
    */
  hide?: () => void;
  /**
    * 设置标签距离地面的高度
    */
  setAltitude?: (altitude: number) => void;
  /**
    * 获取标签距离地面的高度
    */
  getAltitude?: () => number;
  /**
    * 注册事件
    */
  addEventListener?: () => void;
  /**
    * 移除事件
    */
  removeEventListener?: () => void; 
}

export interface PanoramaOptions {
  /**
   *  是否显示全景的导航控件，默认为true
   */
  navigationContro?: boolean;
  /**
   *  是否显示道路指示控件。默认为true
   */
  linksControl?: boolean;
  /**
   *  是否显示全景室内场景的切换控件，默认为false，仅对室内景生效
   */
  indoorSceneSwitchControl?: boolean;
  /**
   *  是否显示相册控件，默认为false
   */
  albumsContro?: boolean;
  /**
   * 全景相册控件配置参数
   */
  albumsControlOptions?: AlbumsControlOptions;
}

export interface AlbumsControlOptions {
  /**
   * 相册控件的停靠位置
   */
  anchor?: ControlAnchor;
  /**
   * 相册的偏移量
   */
  offset?: Size;
  /**
   * 相册控件的最大宽度，可以设置总宽度百分比(例如50%) 或者像素数字（500）,默认值为100%
   */
  maxWidth?: number | string;
  /**
   * 相册内图片的高度。默认为 80px。（为保证图片比例，只设置高度，宽度自如会拉宽）
   */
  imageHeight?: number;
}

export interface BMapProps {
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
  Map: new (d: HTMLDivElement, opts?: MapOptions) => MapProps;
}

export interface MapOptions {
  /**
   * 地图允许展示的最小级别
   */
  minZoom?: number;
  /**
   * 地图允许展示的最大级别
   */
  maxZoom?: number;
  /**
   * 地图类型
   * @default BMAP_NORMAL_MAP
   */
  mapType?: MapType;
  /**
   * 是否启用使用高分辨率地图。在iPhone4及其后续设备上，可以通过开启此选项获取更高分辨率的底图，v1.2,v1.3版本默认不开启，v1.4 默认为开启状态
   */
  enableHighResolution?: boolean;
  /**
   * 地图允许展示的最大级别
   */
  enableAutoResize?: boolean;
  /**
   * 是否开启底图可点功能
   */
  enableMapClick?: boolean;
}

/**
 * 创建一个控件原型实例，通过该原型实例可创建自定义控件
 */
export interface Control {

}

/**
 * 此类表示GeolocationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
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

/**
 * 此类表示 CopyrightControl 构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
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

/**
 * 此类表示MapTypeControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
export interface MapTypeControlOptions {
  type?: MapTypeControlType;
  mapTypes?: MapType[];
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

/**
 * 此类表示ScaleControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
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

/**
 * 此类表示OverviewMapControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
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

/**
 * 此类表示NavigationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
 */
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
