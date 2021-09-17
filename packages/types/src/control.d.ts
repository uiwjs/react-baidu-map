/// <reference path="./base.d.ts" />

declare namespace BMap {
  class Control {
    constructor();
    /**
     * 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置
     */
    defaultAnchor: ControlAnchor;
    /**
     * 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置
     */
    defaultOffset: Size;
    /**
     * 抽象方法。调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。
     * 自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。
     * DOM元素需要添加到地图的容器中，使用map.getContainer()方法可获得地图容器元素
     * @param map Map
     */
    initialize(map: Map): HTMLElement;
    /**
     * 设置控件停靠的位置
     */
    setAnchor(anchor: ControlAnchor): void;
    /**
     * 返回控件停靠的位置
     */
    getAnchor(): ControlAnchor;
    /**
     * 设置控件停靠的偏移量
     */
    setOffset(offset: Size): void;
    /**
     * 返回控件停靠的偏移量
     */
    getOffset(): Size;
    /**
     * 显示控件
     */
    show(): void;
    /**
     * 隐藏控件
     */
    hide(): void;
    /**
     * 判断控件的可见性
     */
    isVisible(): boolean;
    /**
     * 自定义 Control 在 add 之后立马能读取到 Container, 内置 Control 不能
     */
    getContainer(): HTMLElement | undefined;
  }
  interface NavigationControlOptions {
    /**
     * 控件的停靠位置
     */
    anchor?: ControlAnchor;
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
  /**
   * 此类表示ScaleControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
   */
  interface ScaleControlOptions {
    /**
     * 控件的停靠位置
     */
    anchor?: ControlAnchor;
    /**
     * 控件的水平偏移值
     */
    offset?: Size;
  }
  interface CopyrightControlOptions {
    /**
     * 控件的停靠位置
     */
    anchor?: ControlAnchor;
    /**
     * 控件的水平偏移值
     */
    offset?: Size;
  }
  type ControlAnchor = number;
  /**
   * 此类表示OverviewMapControl构造函数的可选参数。
   * 它没有构造函数，但可通过对象字面量形式表示。
   */
  class OverviewMapControl extends Control {
    constructor(opts: OverviewMapControlOptions);
  }
  interface OverviewMapControl {
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
    /**
     * 添加事件监听函数
     * @param event
     * @param handler
     */
    addEventListener(event: string, handler: Callback): void;
    /**
     * 移除事件监听函数
     * @param event
     * @param handler
     */
    removeEventListener(event: string, handler: Callback): void;
  }
  type LengthUnit = string;
  /**
   * 此类是负责切换地图类型的控件，此类继承Control所有功能。
   */
  class MapTypeControl extends Control {
    constructor(opts?: MapTypeControlOptions);
  }
  interface MapTypeControlOptions {
    /**
     * 控件的停靠位置
     */
    anchor?: ControlAnchor;
    /**
     * 控件的水平偏移值
     */
    offset?: Size;
    /**
     * 控件样式
     */
    type?: MapTypeControlType;
    /**
     * 控件展示的地图类型，默认为普通图、卫星图、卫星加路网混合图和三维图。通过此属性可配置控件展示的地图类型
     */
    mapTypes?: MapType[];
  }
  class NavigationControl extends Control {
    constructor(opts?: NavigationControlOptions);
    /**
     * 返回平移缩放控件的类型
     */
    getType: () => NavigationControlType;
    /**
     * 设置平移缩放控件的类型
     */
    setType: (type: NavigationControlType) => void;
  }
  interface OverviewMapControlOptions {
    /**
     * 控件的停靠位置
     */
    anchor?: ControlAnchor;
    /**
     * 控件的偏移值
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
  class CopyrightControl extends Control {
    constructor(opts?: CopyrightControlOptions);
    /**
     * 添加版权信息
     */
    addCopyright(copyright: Copyright): void;
    /**
     * 移除版权信息
     */
    removeCopyright(id: number): void;
    /**
     * 返回单个版权信息
     */
    getCopyright(id: number): Copyright;
    /**
     * 返回版权信息列表
     */
    getCopyrightCollection(): Copyright[];
  }
  type NavigationControlType = number;
  class ScaleControl extends Control {
    constructor(opts?: ScaleControlOptions);
    /**
     * 返回比例尺单位制
     */
    getUnit?: () => LengthUnit;
    /**
     * 设置比例尺单位制
     */
    setUnit?: (unit: LengthUnit) => void;
  }
  interface Copyright {
    id?: number;
    content?: string;
    bounds?: Bounds;
  }
  type MapTypeControlType = number;
  /**
   * 此类表示GeolocationControl构造函数的可选参数。
   * 它没有构造函数，但可通过对象字面量形式表示。
   */
  class GeolocationControl extends Control {
    constructor(opts?: GeolocationControlOptions);
  }
  interface GeolocationControl {
    /**
     * 添加事件监听函数
     * @param event
     * @param handler
     */
    addEventListener(event: string, handler: Callback): void;
    /**
     * 移除事件监听函数
     * @param event
     * @param handler
     */
    removeEventListener(event: string, handler: Callback): void;
  }
  interface GeolocationControlOptions {
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
  type StatusCode = number;
  class PanoramaControl extends Control {
    constructor();
  }

  /**
   * 绘制模式
   */
  type DrawingType = string;
}

/**
 * 常量表示长度单位制 - 公制单位
 */
declare const BMAP_UNIT_METRIC: BMap.LengthUnit;
/**
 * 常量表示长度单位制 - 英制单位
 */
declare const BMAP_UNIT_IMPERIAL: BMap.LengthUnit;

/**
 * 此常量表示控件的定位。
 * - `BMAP_ANCHOR_TOP_LEFT` 控件将定位到地图的左上角
 * - `BMAP_ANCHOR_TOP_RIGHT` 控件将定位到地图的右上角
 * - `BMAP_ANCHOR_BOTTOM_LEFT` 控件将定位到地图的左下角
 * - `BMAP_ANCHOR_BOTTOM_RIGHT` 控件将定位到地图的右下角
 */
declare const BMAP_ANCHOR_TOP_LEFT: BMap.ControlAnchor;
declare const BMAP_ANCHOR_TOP_RIGHT: BMap.ControlAnchor;
declare const BMAP_ANCHOR_BOTTOM_LEFT: BMap.ControlAnchor;
declare const BMAP_ANCHOR_BOTTOM_RIGHT: BMap.ControlAnchor;

/**
 * 此常量表示平移缩放控件的类型。
 * - `BMAP_NAVIGATION_CONTROL_LARGE` 标准的平移缩放控件(包括平移、缩放按钮和滑块)
 * - `BMAP_NAVIGATION_CONTROL_SMALL` 仅包含平移和缩放按钮
 * - `BMAP_NAVIGATION_CONTROL_PAN` 仅包含平移按钮
 * - `BMAP_NAVIGATION_CONTROL_ZOOM` 仅包含缩放按钮
 */
declare const BMAP_NAVIGATION_CONTROL_LARGE: BMap.NavigationControlType;
declare const BMAP_NAVIGATION_CONTROL_SMALL: BMap.NavigationControlType;
declare const BMAP_NAVIGATION_CONTROL_PAN: BMap.NavigationControlType;
declare const BMAP_NAVIGATION_CONTROL_ZOOM: BMap.NavigationControlType;

/**
 * 此常量表示MapTypeControl的外观样式。
 * - `BMAP_MAPTYPE_CONTROL_HORIZONTAL` 按钮水平方式展示，默认采用此类型展示
 * - `BMAP_MAPTYPE_CONTROL_DROPDOWN` 按钮呈下拉列表方式展示
 * - `BMAP_MAPTYPE_CONTROL_MAP` 以图片方式展示类型控件，设置该类型后无法指定maptypes属性
 */
declare const BMAP_MAPTYPE_CONTROL_HORIZONTAL: BMap.MapTypeControlType;
declare const BMAP_MAPTYPE_CONTROL_DROPDOWN: BMap.MapTypeControlType;
declare const BMAP_MAPTYPE_CONTROL_MAP: BMap.MapTypeControlType;

/**
 * 设置当前的绘制模式
 * - `BMAP_DRAWING_MARKER` 画点
 * - `BMAP_DRAWING_CIRCLE` 画圆
 * - `BMAP_DRAWING_POLYLINE` 画线
 * - `BMAP_DRAWING_POLYGON` 画多边形
 * - `BMAP_DRAWING_RECTANGLE` 画矩形
 */
declare const BMAP_DRAWING_MARKER: BMap.DrawingType;
declare const BMAP_DRAWING_CIRCLE: BMap.DrawingType;
declare const BMAP_DRAWING_POLYLINE: BMap.DrawingType;
declare const BMAP_DRAWING_POLYGON: BMap.DrawingType;
declare const BMAP_DRAWING_RECTANGLE: BMap.DrawingType;

/**
 * 此常量用于描述对象当前状态。
 * -`BMAP_STATUS_PERMISSION_DENIED` 没有权限。对应数值“6”
 * - `BMAP_STATUS_SERVICE_UNAVAILABLE` 服务不可用。对应数值“7”
 * - `BMAP_STATUS_TIMEOUT` 超时。对应数值“8”
 */
declare const BMAP_STATUS_PERMISSION_DENIED: BMap.StatusCode;
declare const BMAP_STATUS_SERVICE_UNAVAILABLE: BMap.StatusCode;
declare const BMAP_STATUS_TIMEOUT: BMap.StatusCode;
