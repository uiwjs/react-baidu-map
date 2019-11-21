
/// <reference path="./base.d.ts" />

declare namespace BMap {
  class Control {
    constructor();
    defaultAnchor: ControlAnchor;
    defaultOffset: Size;
    initialize(map: Map): HTMLElement;
    setAnchor(anchor: ControlAnchor): void;
    getAnchor(): ControlAnchor;
    setOffset(offset: Size): void;
    getOffset(): Size;
    show(): void;
    hide(): void;
    isVisible(): boolean;
    /** 自定义Control在add之后立马能读取到Container, 内置Control不能 */
    getContainer(): HTMLElement | undefined;
  }
  interface NavigationControlOptions {
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
     * 缩略地图开合状态发生变化后触发此事件
     */
    onviewchanged: (event: { type: string, target: any, isOpen: boolean }) => void;
    /**
     * 缩略地图开合状态发生变化过程中触发此事件
     */
    onviewchanging: (event: { type: string, target: any }) => void;
  }
  type LengthUnit = string;
  /**
   * 此类是负责切换地图类型的控件，此类继承Control所有功能。
   */
  class MapTypeControl extends Control {
    constructor(opts?: MapTypeControlOptions);
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
    anchor?: ControlAnchor;
    offset?: Size;
    size?: Size;
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
  interface MapTypeControlOptions {
    type?: MapTypeControlType;
    mapTypes?: MapType[];
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
 * 此常量用于描述对象当前状态。
 * -`BMAP_STATUS_PERMISSION_DENIED` 没有权限。对应数值“6”
 * - `BMAP_STATUS_SERVICE_UNAVAILABLE` 服务不可用。对应数值“7”
 * - `BMAP_STATUS_TIMEOUT` 超时。对应数值“8”
 */
declare const BMAP_STATUS_PERMISSION_DENIED: BMap.StatusCode;
declare const BMAP_STATUS_SERVICE_UNAVAILABLE: BMap.StatusCode;
declare const BMAP_STATUS_TIMEOUT: BMap.StatusCode;