/// <reference path="./base.d.ts" />
/// <reference path="./maptype.d.ts" />
/// <reference path="./panorama.d.ts" />

declare namespace BMap {
  class Map {
    constructor(container: string | HTMLElement, opts?: MapOptions);
    /**
     * 启用地图拖拽，默认启用
     */
    enableDragging(): void;
    /**
     * 禁用地图拖拽
     */
    disableDragging(): void;
    /**
     * 启用滚轮放大缩小，默认禁用
     */
    enableScrollWheelZoom(): void;
    /**
     * 禁用滚轮放大缩小
     */
    disableScrollWheelZoom(): void;
    /**
     * 启用双击放大，默认启用
     */
    enableDoubleClickZoom(): void;
    /**
     * 禁用双击放大
     */
    disableDoubleClickZoom(): void;
    /**
     * 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。
     * 同时按下其中两个键可使地图进行对角移动。
     * PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
     */
    enableKeyboard(): void;
    /**
     * 禁用键盘操作
     */
    disableKeyboard(): void;
    /**
     * 启用地图惯性拖拽，默认禁用
     */
    enableInertialDragging(): void;
    /**
     * 禁用地图惯性拖拽
     */
    disableInertialDragging(): void;
    /**
     * 启用连续缩放效果，默认禁用
     */
    enableContinuousZoom(): void;
    /**
     * 禁用连续缩放效果
     */
    disableContinuousZoom(): void;
    /**
     * 启用双指操作缩放，默认启用
     */
    enablePinchToZoom(): void;
    /**
     * 禁用双指操作缩放
     */
    disablePinchToZoom(): void;
    /**
     * 启用自动适应容器尺寸变化，默认启用
     */
    enableAutoResize(): void;
    /**
     * 禁用自动适应容器尺寸变化
     */
    disableAutoResize(): void;
    /**
     * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
     */
    setDefaultCursor(cursor: string): void;
    /**
     * 返回地图默认的鼠标指针样式
     */
    getDefaultCursor(): string;
    /**
     * 设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
     */
    setDraggingCursor(cursor: string): string;
    /**
     * 返回拖拽地图时的鼠标指针样式
     */
    getDraggingCursor(): void;
    /**
     * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
     */
    setMinZoom(zoom: Number): void;
    /**
     * 设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
     */
    setMaxZoom(zoom: Number): void;
    /**
     * 设置地图样式，样式包括地图底图颜色和地图要素是否展示两部分
     */
    setMapStyle(style: MapStyle): void;
    /**
     * 设置地图个性化样式V2版本，仅支持现代浏览器（支持Canvas）
     */
    setMapStyleV2(style: MapStyleV2): void;
    /**
     * 将全景实例与Map类进行绑定
     */
    setPanorama(pano: Panorama): void;
    /**
     * 返回地图可视区域，以地理坐标表示
     */
    getBounds(): Bounds;
    /**
     * 返回地图当前中心点
     */
    getCenter(): Point;
    /**
     * 返回两点之间的距离，单位是米
     */
    getDistance(start: Point, end: Point): Number;
    /**
     * 返回地图类型
     */
    getMapType(): MapType;
    /**
     * 返回地图视图的大小，以像素表示
     */
    getSize(): Size;
    /**
     * 根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。
     * 此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上
     */
    getViewport(view: Array<Point>, viewportOptions: ViewportOptions): Viewport;
    /**
     * 返回地图当前缩放级别
     */
    getZoom(): number;
    /**
     * 获取与Map类绑定的全景实例
     */
    getPanorama(): Panorama;
    /**
     * 设初始化地图。 如果center类型为Point时，zoom必须赋值，范围3-19级，
     * 若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。
     * 如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据 center 适配最佳 zoom 级别
     *
     * @param zoom 如果center类型为Point时，zoom必须赋值，范围3-19级
     * @param center
     */
    centerAndZoom(center: string | Point, zoom: number): void;
    /**
     * 将地图的中心点更改为给定的点。如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。
     * 可以通过配置强制移动过程不使用动画效果
     */
    panTo(center: Point, opts: PanOptions): void;
    /**
     * 将地图在水平位置上移动x像素，垂直位置上移动y像素。如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
     */
    panBy(x: number, y: number, opts: PanOptions): void;
    /**
     * 重新设置地图，恢复地图初始化时的中心点和级别
     */
    reset(): void;
    /**
     * 设置地图中心点。center除了可以为坐标点以外，还支持城市名
     */
    setCenter(center: Point | string): void;
    /**
     * 设置地图城市，注意当地图初始化时的类型设置为 `BMAP_NORMAL_MAP` 时，
     * 需要在调用 `centerAndZoom` 之前调用此方法设置地图所在城市。
     * 例如：
     * @example
     *
     * ```js
     * var map = new BMap.Map(“container”, { mapType: BMAP_NORMAL_MAP });
     * map.setCurrentCity(“北京市”);
     * map.centerAndZoom(new BMap.Point(116.404, 39.915), 18);
     * ```
     *
     * 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。
     */
    setCurrentCity(city: string): void;
    /**
     * 设置地图类型
     */
    setMapType(mapType: MapType[]): void;
    /**
     * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
     */
    setViewport(view: Array<Point> | Viewport, viewportOptions: ViewportOptions): void;
    /**
     * 将视图切换到指定的缩放等级，中心点坐标不变。注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动
     */
    setZoom(zoom: Number): void;
    /**
     * 是否使用高分辨率底图。仅当 mapOptions.enableHighResolution 属性为 true 且设备支持高分辨率时返回 true
     */
    highResolutionEnabled(): boolean;
    /**
     * 放大一级视图
     */
    zoomIn(): void;
    /**
     * 缩小一级视图
     */
    zoomOut(): void;
    /**
     * 为地图添加热区
     */
    addHotspot(hotspot: Hotspot): void;
    /**
     * 移除某个地图热区
     */
    removeHotspot(hotspot: Hotspot): void;
    /**
     * 清空地图所有热区
     */
    clearHotspots(): void;
    /**
     * 将控件添加到地图，一个控件实例只能向地图中添加一次
     */
    addControl(control: Control): void;
    /**
     * 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
     */
    removeControl(control: Control): void;
    /**
     * 返回地图的容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
     */
    getContainer(): HTMLElement;
    /**
     * 添加右键菜单
     */
    addContextMenu(menu: ContextMenu): void;
    /**
     * 移除右键菜单
     */
    removeContextMenu(menu: ContextMenu): void;
    /**
     * 将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
     */
    addOverlay(overlay: Overlay): void;
    /**
     * 从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
     */
    removeOverlay(overlay: Overlay): void;
    /**
     * 清除地图上所有覆盖物
     */
    clearOverlays(): void;
    /**
     * 在地图上打开信息窗口
     */
    openInfoWindow(infoWnd?: InfoWindow, point?: Point): void;
    /**
     * 关闭在地图上打开的信息窗口。在标注上打开的信息窗口也可通过此方法进行关闭
     */
    closeInfoWindow(): void;
    /**
     * 根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
     */
    pointToOverlayPixel(point: Point): Pixel;
    /**
     * 根据覆盖物容器的坐标获取对应的地理坐标
     */
    overlayPixelToPoint(pixel: Pixel): Point;
    /**
     * 返回地图上处于打开状态的信息窗的实例。当地图没有打开的信息窗口时，此方法返回null
     */
    getInfoWindow(): InfoWindow | Null;
    /**
     * 返回地图上的所有覆盖物
     */
    getOverlays(): Array<Overlay>;
    /**
     * 返回地图覆盖物容器列表
     */
    getPanes(): MapPanes;
    /**
     * 添加一个自定义地图图层
     */
    addTileLayer(tileLayer: TileLayer): void;
    /**
     * 移除一个自定义地图图层
     */
    removeTileLayer(tileLayer: TileLayer): void;
    /**
     * 通过地图类型得到一个地图图层对象
     */
    getTileLayer(mapType: String): TileLayer;
    /**
     * 像素坐标转换为经纬度坐标
     */
    pixelToPoint(pixel: Pixel): Point;
    /**
     * 经纬度坐标转换为像素坐标
     */
    pointToPixel(point: Point): Pixel;
    addEventListener(event: string, handler: Callback): void;
    removeEventListener(event: string, handler: Callback): void;
  }
  interface MapEvents {
    /**
     * 左键单击地图时触发此事件。 当双击时，产生的事件序列为： click click dblclick
     */
    onClick?(event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }): void;
    /**
     * 鼠标双击地图时会触发此事件
     */
    onDblClick?(event: { type: string; target: any; pixel: Pixel; point: Point }): void;
    /**
     * 右键单击地图时触发此事件。 当双击时，产生的事件序列为： rightclick rightclick rightdblclick
     */
    onRightClick?(event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }): void;
    /**
     * 右键双击地图时触发此事件
     */
    onRightdblClick?(event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }): void;
    /**
     * 地图类型发生变化时触发此事件
     */
    onMapTypeChange?(event: { type: string; target: any }): void;
    /**
     * 鼠标在地图区域移动过程中触发此事件
     */
    onMouseMove?(event: { type: string; target: any; point: Point; pixel: Pixel; overlay: Overlay }): void;
    /**
     * 鼠标移入地图区域时触发此事件
     */
    onMouseOver?(event: { type: string; target: any }): void;
    /**
     * 鼠标移出地图区域时触发此事件
     */
    onMouseOut?(event: { type: string; target: any }): void;
    /**
     * 地图移动开始时触发此事件
     */
    onMoveStart?(event: { type: string; target: any }): void;
    /**
     * 地图移动过程中触发此事件
     */
    onMoving?(event: { type: string; target: any }): void;
    /**
     * 地图移动结束时触发此事件
     */
    onMoveEnd?(event: { type: string; target: any }): void;
    /**
     * 地图更改缩放级别开始时触发触发此事件
     */
    onZoomStart?(event: { type: string; target: any }): void;
    /**
     * 地图更改缩放级别结束时触发触发此事件
     */
    onZoomEnd?(event: { type: string; target: any }): void;
    /**
     * 当使用 Map.addOverlay() 方法向地图中添加单个覆盖物时会触发此事件
     */
    onAddOverlay?(event: { type: string; target: any }): void;
    /**
     * 当使用 Map.addControl() 方法向地图中添加单个控件时会触发此事件
     */
    onAddControl?(event: { type: string; target: any }): void;
    /**
     * 当使用 Map.removeControl() 方法移除单个控件时会触发此事件
     */
    onRemoveControl?(event: { type: string; target: any }): void;
    /**
     * 当使用 Map.removeOverlay() 方法移除单个覆盖物时会触发此事件
     */
    onRemoveOverlay?(event: { type: string; target: any }): void;
    /**
     * 当使用 Map.clearOverlays() 方法一次性移除全部覆盖物时会触发此事件
     */
    onClearOverlays?(event: { type: string; target: any }): void;
    /**
     * 开始拖拽地图时触发
     */
    onDragStart?(event: { type: string; target: any; pixel: Pixel; point: Point }): void;
    /**
     * 拖拽地图过程中触发
     */
    onDragging?(event: { type: string; target: any; pixel: Pixel; point: Point }): void;
    /**
     * 停止拖拽地图时触发
     */
    onDragEnd?(event: { type: string; target: any; pixel: Pixel; point: Point }): void;
    /**
     * 添加一个自定义地图图层时触发此事件
     */
    onAddTileLayer?(event: { type: string; target: any }): void;
    /**
     * 移除一个自定义地图图层时触发此事件
     */
    onRemoveTileLayer?(event: { type: string; target: any }): void;
    /**
     * 调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块
     */
    onLoad?(event: { type: string; target: any; pixel: Pixel; point: Point; zoom: number }): void;
    /**
     * 地图可视区域大小发生变化时会触发此事件
     */
    onReSize?(event: { type: string; target: any; size: Size }): void;
    /**
     * 点击热区时触发此事件
     */
    onHotspotClick?(event: { type: string; target: any; spots: HotspotOptions }): void;
    /**
     * 鼠标移至热区时触发此事件
     */
    onHotspotOver?(event: { type: string; target: any; spots: HotspotOptions }): void;
    /**
     * 鼠标移出热区时触发此事件
     */
    onHotspotOut?(event: { type: string; target: any; spots: HotspotOptions }): void;
    /**
     * 当地图所有图块完成加载时触发此事件
     */
    onTilesLoaded?(event: { type: string; target: any }): void;
    /**
     * 触摸开始时触发此事件，仅适用移动设备
     */
    onTouchStart?(event: { type: string; target: any; point: Point; pixel }): void;
    /**
     * 触摸移动时触发此事件，仅适用移动设备
     */
    onTouchMove?(event: { type: string; target: any; point: Point; pixel }): void;
    /**
     * 触摸结束时触发此事件，仅适用移动设备
     */
    onTouchEnd?(event: { type: string; target: any; point: Point; pixel }): void;
    /**
     * 长按事件，仅适用移动设备
     */
    onLongPress?(event: { type: string; target: any; point: Point; pixel }): void;
  }
  /**
   * 此类是 `panBy` 和 `panTo` 方法的可选参数，没有构造函数，通过对象字面量形式表示。
   */
  interface PanOptions {
    /**
     * 是否在平移过程中禁止动画
     */
    noAnimation?: boolean;
  }
  interface MapOptions {
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
   * 此类代表视野，不可实例化，通过对象字面量形式表示。
   */
  interface Viewport {
    /**
     * 视野中心点
     */
    center: Point;
    /**
     * 视野级别
     */
    zoom: number;
  }
  /**
   * 此类作为map.getViewport与map.setViewport方法的可选参数，不可实例化。
   */
  interface ViewportOptions {
    /**
     * 是否启用动画效果移动地图，默认为true。当调整后的级别与当前地图级别一致时，将使用动画效果移动地图
     */
    enableAnimation?: boolean;
    /**
     * 视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内
     */
    margins?: number[];
    /**
     * 地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如map.setViewport计算出地图的级别为10，如果zoomFactor为-1，则最终的地图级别为9
     */
    zoomFactor?: number;
    /**
     * 改变地图视野的延迟执行时间，单位毫秒，默认为200ms。此延时仅针对动画效果有效
     */
    delay?: number;
  }
  type APIVersion = number;
  /**
   * 该类用于设置地图样式，使用对象字面量形式表示，不可实例化。
   */
  interface MapStyle {
    /**
     * 设置地图上展示的元素种类，支持point（兴趣点）、road（道路）、water（河流）、land（陆地）、building（建筑物）
     */
    features: any[];
    /**
     * 设置地图底图样式，目前支持normal（默认样式）,dark（深色样式）,light（浅色样式）三种
     */
    style: 'normal' | 'dark' | 'light';
  }
  /**
   * 该类用于设置地图样式的个性化地图服务V2，使用对象字面量形式表示，不可实例化。
   * 样式Json，通过[`编辑器生成`](http://lbsyun.baidu.com/apiconsole/custommap)
   */
  type MapStyleV2 = { styleJson: MapStyleItem[] } | { styleId: string };
}
declare const BMAP_API_VERSION: BMap.APIVersion;
