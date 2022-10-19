/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />
/// <reference path="./rightmenu.d.ts" />
declare namespace BMap {
  class Overlay {}
  interface Overlay {
    initialize?(map: Map): HTMLElement;
    isVisible?(): boolean;
    draw?(): void;
    show?(): void;
    hide?(): void;
  }
  type SymbolShapeType = number;
  /**
   * 此类表示地图上一个图像标注。
   */
  class Marker {
    /**
     * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
     * @param point
     * @param opts
     */
    constructor(point: Point, opts?: MarkerOptions);
  }
  interface MarkerOptions {
    /**
     * 标注的位置偏移值
     */
    offset?: Size;
    /**
     * 标注所用的图标对象
     */
    icon?: Icon;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean;
    /**
     * 是否启用拖拽，默认为false
     */
    enableDragging?: boolean;
    /**
     * 是否响应点击事件。默认为true
     */
    enableClicking?: boolean;
    /**
     * 拖拽标注时，标注是否开启离开地图表面效果。默认为false
     */
    raiseOnDrag?: boolean;
    /**
     * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
     */
    draggingCursor?: string;
    /**
     * 旋转角度
     */
    rotation?: number;
    /**
     * 阴影图标
     */
    shadow?: Icon;
    /**
     * 鼠标移到marker上的显示内容
     */
    title?: string;
  }
  interface Marker extends Overlay {
    /**
     * 打开信息窗
     */
    openInfoWindow(infoWnd: InfoWindow): void;
    /**
     * 关闭信息窗
     */
    closeInfoWindow(): void;
    /**
     * 设置标注所用的图标对象
     */
    setIcon(icon: Icon): void;
    /**
     * 返回标注所用的图标对象
     */
    getIcon(): Icon;
    /**
     * 设置标注的地理坐标
     */
    setPosition(position: Point): void;
    /**
     * 返回标注的地理坐标
     */
    getPosition(): Point;
    /**
     * 设置标注的偏移值
     */
    setOffset(offset: Size): void;
    /**
     * 返回标注的偏移值
     */
    getOffset(): Size;
    /**
     * 返回标注的文本标注
     */
    getLabel(): Label;
    /**
     * 为标注添加文本标注
     */
    setLabel(label: Label): void;
    /**
     * 设置标注的标题，当鼠标移至标注上时显示此标题
     */
    setTitle(title: string): void;
    /**
     * 返回标注的标题
     */
    getTitle(): string;
    /**
     * 将标注置于其他标注之上。默认情况下，纬度较低的标注会覆盖在纬度较高的标注之上，从而形成一种立体效果。通过此方法可使某个标注覆盖在其他所有标注之上。
     * 注意：如果在多个标注对象上调用此方法，则这些标注依旧按照纬度产生默认的覆盖效果
     */
    setTop(isTop: boolean): void;
    /**
     * 开启标注拖拽功能
     */
    enableDragging(): void;
    /**
     * 关闭标注拖拽功能
     */
    disableDragging(): void;
    /**
     * 允许覆盖物在map.clearOverlays方法中被清除
     */
    enableMassClear(): void;
    /**
     * 禁止覆盖物在map.clearOverlays方法中被清除
     */
    disableMassClear(): void;
    /**
     * 设置覆盖物的zIndex
     */
    setZIndex(zIndex: number): void;
    /**
     * 返回覆盖物所在的map对象
     */
    getMap(): MapProps;
    /**
     * 添加右键菜单
     */
    addContextMenu(menu: ContextMenu): void;
    /**
     * 移除右键菜单
     */
    removeContextMenu(menu: ContextMenu): void;
    /**
     * 设置标注动画效果。如果参数为null，则取消动画效果。该方法需要在addOverlay方法后设置
     */
    setAnimation(animation?: Animation | null): void;
    /**
     * 设置点的旋转角度
     */
    setRotation(rotation: number): void;
    /**
     * 获取点的旋转角度
     */
    getRotation(): number;
    /**
     * 设置标注阴影图标
     */
    setShadow(shadow: Icon): void;
    /**
     * 获取标注阴影图标
     */
    getShadow(): Icon;
    /**
     * 添加事件监听函数
     */
    addEventListener(event: string, handler: Function): void;
    /**
     * 移除事件监听函数
     */
    removeEventListener(event: string, handler: Function): void;
  }
  interface MarkerEvents {
    /**
     * 点击标注图标后会触发此事件
     */
    onClick?(event: { type: string; target: any }): void;
    /**
     * 双击标注图标后会触发此事件
     */
    onDblClick?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标在标注图上按下触发此事件
     */
    onMouseDown?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标在标注图上释放触发此事件
     */
    onMouseUp?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标离开标注时触发此事件
     */
    onMouseOut?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 当鼠标进入标注图标区域时会触发此事件
     */
    onMouseOver?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 移除标注时触发
     */
    onRemove?(event: { type: string; target: any }): void;
    /**
     * 信息窗在此标注上关闭时触发此事件
     */
    onInfowindowClose?(event: { type: string; target: any }): void;
    /**
     * 信息窗在此标注上打开时触发此事件
     */
    onInfowindowOpen?(event: { type: string; target: any }): void;
    /**
     * 开始拖拽标注时触发此事件
     */
    onDragStart?(event: { type: string; target: any }): void;
    /**
     * 拖拽标注过程中触发此事件
     */
    onDragging?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 拖拽结束时触发此事件
     */
    onDragEnd?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 右键点击标注时触发此事件
     */
    onRightClick?(event: { type: string; target: any }): void;
  }
  interface SymbolOptions {
    anchor?: Size;
    fillColor?: string;
    fillOpacity?: number;
    scale?: number;
    rotation?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
  }
  class IconSequence {
    constructor(symbol: Symbol, offset?: string, repeat?: string, fixedRotation?: boolean);
  }
  interface PointCollection extends Overlay {
    /**
     * 设置要在地图上展示的点坐标集合
     * @param points
     */
    setPoints(points: Point[]): void;
    /**
     * 点的样式，包括:大小"size"（可选,默认正常尺寸10*10px，SizeType类型），
     * 形状"shape"（可选，默认圆形，ShapeType类型），
     * 颜色"color"（可选，字符串类型）
     */
    setStyles(styles: PointCollectionOption): void;
    /**
     * 清除海量点
     */
    clear(): void;
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
  /**
   * 此类表示海量点类，利用该类可同时在地图上展示万级别的点，目前仅适用于html5浏览器。
   */
  class PointCollection {
    /**
     * 创建海量点类。points为点的坐标集合，opts为点的绘制样式
     * @param points
     * @param opts
     */
    constructor(points: Point[], opts?: PointCollectionOption);
  }
  interface PointCollectionEvents {
    /**
     * 鼠标点击点时会触发此事件
     */
    onClick?: (event: { type: string; target: any; point: Point }) => void;
    /**
     * 鼠标移入点时会触发该事件
     */
    onMouseOver?: (event: { type: string; target: any; point: Point }) => void;
    /**
     * 鼠标移出点时会触发该事件
     */
    onMouseOut?: (event: { type: string; target: any; point: Point }) => void;
  }
  interface PointCollectionOption {
    /**
     * 海量点的预设形状
     */
    shape?: ShapeType;
    /**
     * 海量点的颜色，默认为'#fa937e'，同时支持颜色字符串，
     * 如'red'；
     * 哈希字符串: 如 `#000000`；
     * rgb字符串: 如 `rgb(0,0,0)`；
     * rgba字符串: 如 `rgb(255,0,0,0.1)`；
     * hsl字符串: 如 `hsl(0,100%,50%)`；
     * hsla字符串: 如 `hsla(0,100%,50%,0.4)`
     * @default BMAP_POINT_SHAPE_WATERDROP
     */
    color?: string;
    /**
     * 海量点的预设尺寸
     * @default BMAP_POINT_SIZE_SMALL
     */
    size?: SizeType;
  }
  interface InfoWindowEvent {
    /**
     * 信息窗口被关闭时触发此事件
     */
    onClose?: (event: { type: string; target: any; point: Point }) => void;
    /**
     * 信息窗口被打开时触发此事件
     */
    onOpen?: (event: { type: string; target: any; point: Point }) => void;
    /**
     * 信息窗口最大化后触发此事件
     */
    onMaximize?: (event: { type: string; target: any }) => void;
    /**
     * 信息窗口还原时触发此事件
     */
    onRestore?: (event: { type: string; target: any }) => void;
    /**
     * 点击信息窗口的关闭按钮时触发此事件
     */
    onClickclose?: (event: { type: string; target: any }) => void;
  }
  interface InfoWindow extends Overlay {
    /**
     * 设置信息窗口的宽度，单位像素。取值范围：220 - 730
     */
    setWidth(width: number): void;
    /**
     * 设置信息窗口的高度，单位像素。取值范围：60 - 650
     */
    setHeight(height: number): void;
    /**
     * 重绘信息窗口，当信息窗口内容发生变化时进行调用
     */
    redraw(): void;
    /**
     * 设置信息窗口标题。支持HTML内容。1.2版本开始title参数支持传入DOM结点
     */
    setTitle(title: string | HTMLElement): void;
    /**
     * 返回信息窗口标题
     */
    getTitle(): string | HTMLElement;
    /**
     * 设置信息窗口内容。支持HTML内容。1.2版本开始content参数支持传入DOM结点
     * @param content
     */
    setContent(content: string | HTMLElement): void;
    /**
     * 返回信息窗口内容
     */
    getContent(): string | HTMLElement;
    /**
     * 返回信息窗口的位置
     */
    getPosition(): Point;
    /**
     * 启用窗口最大化功能。需要设置最大化后信息窗口里的内容，该接口才生效
     */
    enableMaximize(): void;
    /**
     * 禁用窗口最大化功能
     */
    disableMaximize(): void;
    /**
     * 返回信息窗口的打开状态
     */
    isOpen(): boolean;
    /**
     * 信息窗口最大化时所显示内容，支持HTML内容
     * @param content
     */
    setMaxContent(content: string): void;
    /**
     * 最大化信息窗口
     */
    maximize(): void;
    /**
     * 还原信息窗口
     */
    restore(): void;
    /**
     * 开启打开信息窗口时地图自动平移
     */
    enableAutoPan(): void;
    /**
     * 关闭打开信息窗口时地图自动平移
     */
    disableAutoPan(): void;
    /**
     * 开启点击地图时关闭信息窗口
     */
    enableCloseOnClick(): void;
    /**
     * 关闭点击地图时关闭信息窗口
     */
    disableCloseOnClick(): void;
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
  /**
   * 此类表示地图上包含信息的窗口。
   */
  class InfoWindow {
    /**
     * 创建一个信息窗实例，其中 content 支持HTML内容。
     * 1.2 版本开始content参数支持传入DOM结点
     * @param content
     * @param opts
     */
    constructor(content: string | HTMLElement, opts?: InfoWindowOptions);
  }
  interface InfoWindowOptions {
    /**
     * 信息窗宽度，单位像素。取值范围：0, 220 - 730。
     * 如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
     */
    width?: number;
    /**
     * 信息窗高度，单位像素。取值范围：0, 60 - 650。
     * 如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
     */
    height?: number;
    /**
     * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
     */
    maxWidth?: number;
    /**
     * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，
     * 在标注上打开的信息窗底端尖角的位置取决于标注所用图标的 infoWindowOffset 属性值，
     * 您可以为信息窗添加偏移量来改变默认位置
     */
    offset?: Size;
    /**
     * 信息窗标题文字，支持HTML内容
     */
    title?: string | HTMLElement;
    /**
     * 是否开启信息窗口打开时地图自动移动（默认开启）
     */
    enableAutoPan?: boolean;
    /**
     * 是否开启点击地图关闭信息窗口（默认开启）
     */
    enableCloseOnClick?: boolean;
    /**
     * 是否在信息窗里显示短信发送按钮（默认开启）
     */
    enableMessage?: boolean;
    /**
     * 自定义部分的短信内容，可选项。完整的短信内容包括：自定义部分+位置链接，不设置时，显示默认短信内容。短信内容最长为140个字
     */
    message?: string;
  }
  /**
   * 此类表示一个多边形覆盖物。
   */
  class Polygon {
    /**
     * 创建多边形覆盖物
     * @param points
     * @param opts
     */
    constructor(points: Point[], opts?: PolygonOptions);
  }
  interface PolygonOptions {
    /**
     * 边线颜色
     */
    strokeColor?: string;
    /**
     * 填充颜色。当参数为空时，折线覆盖物将没有填充效果
     */
    fillColor?: string;
    /**
     * 边线的宽度，以像素为单位
     */
    strokeWeight?: number;
    /**
     * 边线透明度，取值范围0 - 1
     */
    strokeOpacity?: number;
    /**
     * 填充的透明度，取值范围0 - 1
     */
    fillOpacity?: number;
    /**
     * 边线的样式，solid或dashed
     */
    strokeStyle?: string;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean;
    /**
     * 是否启用线编辑，默认为false
     */
    enableEditing?: boolean;
    /**
     * 是否响应点击事件，默认为true
     */
    enableClicking?: boolean;
  }
  interface Polygon extends Overlay {
    /**
     * 设置多边型的点数组
     * @param path
     */
    setPath(path: Point[]): void;
    /**
     * 返回多边型的点数组
     */
    getPath(): Point[];
    /**
     * 设置多边型的边线颜色，参数为合法的CSS颜色值
     * @param color
     */
    setStrokeColor(color: string): void;
    /**
     * 返回多边型的边线颜色
     */
    getStrokeColor(): string;
    /**
     * 设置多边形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，折线覆盖物将没有填充效果
     * @param color
     */
    setFillColor(color: string): void;
    /**
     * 返回多边形的填充颜色
     */
    getFillColor(): string;
    /**
     * 设置多边形的边线透明度，取值范围0 - 1
     * @param opacity
     */
    setStrokeOpacity(opacity: number): void;
    /**
     * 返回多边形的边线透明度
     */
    getStrokeOpacity(): number;
    /**
     * 设置多边形的填充透明度，取值范围0 - 1
     * @param opacity
     */
    setFillOpacity(opacity: number): void;
    /**
     * 返回多边形的填充透明度
     */
    getFillOpacity(): number;
    /**
     * 设置多边形边线的宽度，取值为大于等于1的整数
     */
    setStrokeWeight(weight: number): void;
    /**
     * 返回多边形边线的宽度
     */
    getStrokeWeight(): number;
    /**
     * 设置多边形边线样式为实线或虚线，取值solid或dashed
     * @param style
     */
    setStrokeStyle(style: string): void;
    /**
     * 返回多边形边线样式
     */
    getStrokeStyle(): string;
    /**
     * 返回覆盖物的地理区域范围
     */
    getBounds(): Bounds;
    /**
     * 开启编辑功能
     */
    enableEditing(): void;
    /**
     * 关闭编辑功能
     */
    disableEditing(): void;
    /**
     * 允许覆盖物在map.clearOverlays方法中被清除
     */
    enableMassClear(): void;
    /**
     * 禁止覆盖物在map.clearOverlays方法中被清除
     */
    disableMassClear(): void;
    /**
     * 修改指定位置的坐标。索引index从0开始计数。例如setPositionAt(2, point)代表将折线的第3个点的坐标设为point
     * @param index
     * @param point
     */
    setPositionAt(index: number, point: Point): void;
    /**
     * 返回覆盖物所在的map对象
     */
    getMap(): Map;
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
  interface PolygonEvents {
    /**
     * 点击多边形后会触发此事件
     */
    onClick?: (event: { type: string; target: any }) => void;
    /**
     * 双击多边形后会触发此事件
     */
    onDoubleClick?: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;
    /**
     * 鼠标在多边形上按下触发此事件
     */
    onMouseDown?: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;
    /**
     * 鼠标在多边形释放触发此事件
     */
    onMouseUp?: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;
    /**
     * 鼠标离开多边形时触发此事件
     */
    onMouseOut?: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;
    /**
     * 当鼠标进入多边形区域时会触发此事件
     */
    onMouseOver?: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;
    /**
     * 移除多边形时触发
     */
    onRemove?: (event: { type: string; target: any }) => void;
    /**
     * 覆盖物的属性发生变化时触发
     */
    onLineUpdate?: (event: { type: string; target: any }) => void;
  }
  /**
   * 此常量表示标注的动画效果。
   */
  type Animation = number;
  type ShapeType = number;
  interface Icon extends Overlay {
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
    /**
     * 设置图片资源的地址
     */
    setImageUrl?: (imageUrl: string) => void;
    /**
     * 设置图标可视区域的大小
     */
    setSize?: (size: Size) => void;
    /**
     * 设置图标的大小
     */
    setImageSize(offset: Size): void;
    /**
     * 设置图标定位点相对于其左上角的偏移值
     */
    setAnchor(anchor: Size): void;
    /**
     * 设置图片相对于可视区域的偏移值
     */
    setImageOffset(offset: Size): void;
    /**
     * 设置信息窗口开启位置相对于图标左上角的偏移值
     */
    setInfoWindowAnchor(anchor: Size): void;
    /**
     * 设置icon的打印图片，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。
     * 如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置
     */
    setPrintImageUrl(url: string): void;
  }
  /**
   * 此类表示标注覆盖物所使用的图标。
   */
  class Icon {
    /**
     * 此类表示标注覆盖物所使用的图标。point参数指定了文本标注所在的地理位置
     */
    constructor(url: string, size: Size, opts?: IconOptions);
  }
  /**
   * 此类表示地图上的文本标注。
   */
  interface Label extends Overlay {
    /**
     * 设置文本标注样式，该样式将作用于文本标注的容器元素上。其中styles为JavaScript对象常量，
     * 比如： setStyle({ color : "red", fontSize : "12px" }) 
     注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，例如：背景色属性要写成：backgroundColor
    */
    setStyle(styles: Object): void;
    /**
     *   设置文本标注的内容。支持HTML
     */
    setContent(content: string): void;
    /**
     *   设置文本标注坐标。仅当通过Map.addOverlay()方法添加的文本标注有效
     */
    setPosition(position: Point): void;
    /**
     * 获取Label的地理坐标
     */
    getPosition(): Point;
    /**
     *   设置文本标注的偏移值
     */
    setOffset(offset: Size): void;
    /**
     * 返回文本标注的偏移值
     */
    getOffset(): Size;
    /**
     *   设置文本标注的标题，当鼠标移至标注上时显示此标题
     */
    setTitle(title: string): void;
    /**
     * 返回文本标注的标题
     */
    getTitle(): string;
    /**
     * 允许覆盖物在map.clearOverlays方法中被清除
     */
    enableMassClear(): void;
    /**
     * 禁止覆盖物在map.clearOverlays方法中被清除
     */
    disableMassClear(): void;
    /**
     * 设置覆盖物的zIndex
     */
    setZIndex(zIndex: number): void;
    /**
     * 返回覆盖物所在的map对象
     */
    getMap(): MapProps;
    /**
     * 添加事件监听函数
     */
    addEventListener(event: string, handler: Function): void;
    /**
     * 移除事件监听函数
     */
    removeEventListener(event: string, handler: Function): void;
  }
  interface LabelOptions {
    /**
     * 文本标注的位置偏移值
     */
    offset?: Size;
    /**
     * 文本标注的地理位置
     */
    position?: Point;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean;
  }
  interface LabelEvents {
    /**
     * 点击文本标注后会触发此事件
     */
    onClick?: (event: { type: string; target: any }) => void;
    /**
     * 双击文本标注后会触发此事件
     */
    onDblClick?: (event: { type: string; target: any }) => void;
    /**
     * 鼠标在文本标注上按下触发此事件
     */
    onMouseDown?: (event: { type: string; target: any }) => void;
    /**
     * 鼠标在文本标注释放触发此事件
     */
    onMouseUp?: (event: { type: string; target: any }) => void;
    /**
     * 鼠标离开文本标注时触发此事件
     */
    onMouseOout?: (event: { type: string; target: any }) => void;
    /**
     * 当鼠标进入文本标注区域时会触发此事件
     */
    onMouseOver?: (event: { type: string; target: any }) => void;
    /**
     * 移除文本标注时触发
     */
    onRemove?: (event: { type: string; target: any }) => void;
    /**
     * 右键点击标注时触发此事件
     */
    onRightClick?: (event: { type: string; target: any }) => void;
  }
  /**
   * 此类表示地图上的文本标注。
   * 创建一个文本标注实例。point参数指定了文本标注所在的地理位置
   */
  class Label {
    constructor(content: string, opts?: LabelOptions);
  }
  class CanvasLayer {
    /**
     * 创建一个CanvasLayer实例，每个实例都是一个单独的canvas标签即单独的一层。可以为同一个地图添加多层的CanvasLayer叠加。
     */
    constructor(opts?: CanvasLayerOptions);
  }
  interface CanvasLayer extends Overlay {}
  /**
   * CanvasLayer构造函数的可选参数。
   */
  interface CanvasLayerOptions {
    /**
     * 对应 canvas 的 css z-index 属性，当添加了多个 CanvasLayer 时，可以用于设置层叠顺序
     */
    zIndex?: number;
    /**
     * CanvasLayer位于的覆盖物层级，
     * 例：paneName: floatPane。JSAPI把地图覆盖物分为了8个层级，顶层为'floatPane'，
     * 低层为'vertexPane'。可以通过Map实例的getPanes()方法，获取到8个层级的名称
     */
    paneName?: keyof BMap.MapPanes;
    /**
     * 具体的绘制逻辑。通过this.canvas获取当前的canvas对象
     */
    update?(): void;
  }
  class Circle {
    constructor(center: Point, radius: number, opts?: CircleOptions);
  }
  interface CircleOptions {
    /**
     * 圆形边线颜色
     */
    strokeColor?: string;
    /**
     * 圆形填充颜色。当参数为空时，圆形将没有填充效果
     */
    fillColor?: string;
    /**
     * 圆形边线的宽度，以像素为单位
     */
    strokeWeight?: number;
    /**
     * 圆形边线透明度，取值范围0 - 1
     */
    strokeOpacity?: number;
    /**
     * 圆形填充的透明度，取值范围0 - 1
     */
    fillOpacity?: number;
    /**
     * 圆形边线的样式，solid或dashed
     */
    strokeStyle?: string;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean;
    /**
     * 是否启用线编辑，默认为false
     */
    enableEditing?: boolean;
    /**
     * 是否响应点击事件，默认为true
     */
    enableClicking?: boolean;
  }
  interface Circle extends Overlay {
    /**
     * 设置圆形的中心点坐标
     */
    setCenter(center: Point): void;
    /**
     * 返回圆形的中心点坐标
     */
    getCenter(): Point;
    /**
     * 设置圆形的半径，单位为米
     */
    setRadius(radius: number): void;
    /**
     * 返回圆形的半径，单位为米
     */
    getRadius(): number;
    /**
     * 返回圆形的地理区域范围
     */
    getBounds(): Bounds;
    /**
     * 设置圆形的边线颜色，参数为合法的CSS颜色值
     */
    setStrokeColor(color: string): void;
    /**
     * 返回圆形的边线颜色
     */
    getStrokeColor(): string;
    /**
     * 设置圆形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，圆形覆盖物将没有填充效果
     */
    setFillColor(color: string): void;
    /**
     * 返回圆形的填充颜色
     */
    getFillColor(): string;
    /**
     * 设置圆形的边线透明度，取值范围0 - 1
     */
    setStrokeOpacity(opacity: number): void;
    /**
     * 返回圆形的边线透明度
     */
    getStrokeOpacity(): number;
    /**
     * 设置圆形的填充透明度，取值范围0 - 1
     */
    setFillOpacity(opacity: number): void;
    /**
     * 返回圆形的填充透明度
     */
    getFillOpacity(): number;
    /**
     * 设置圆形边线的宽度，取值为大于等于1的整数
     */
    setStrokeWeight(weight: number): void;
    /**
     * 返回圆形边线的宽度
     */
    getStrokeWeight(): number;
    /**
     * 设置圆形边线样式为实线或虚线，取值solid或dashed
     */
    setStrokeStyle(style: string): void;
    /**
     * 返回圆形边线样式
     */
    getStrokeStyle(): string;
    /**
     * 开启编辑功能
     */
    enableEditing(): void;
    /**
     * 关闭编辑功能
     */
    disableEditing(): void;
    /**
     * 允许覆盖物在map.clearOverlays方法中被清除
     */
    enableMassClear(): void;
    /**
     * 禁止覆盖物在map.clearOverlays方法中被清除
     */
    disableMassClear(): void;
    /**
     * 返回覆盖物所在的map对象
     */
    getMap(): Map;
    /**
     * 添加事件监听函数
     */
    addEventListener(event: string, handler: Function): void;
    /**
     * 移除事件监听函数
     */
    removeEventListener(event: string, handler: Function): void;
  }
  interface CircleEvents {
    /**
     * 鼠标点击圆形后会触发此事件
     */
    onClick?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标双击圆形后会触发此事件
     */
    onDblClick?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标在圆形上按下触发此事件
     */
    onMouseDown?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标在圆形释放触发此事件
     */
    onMouseUp?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标离开圆形时触发此事件
     */
    onMouseOut?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 当鼠标进入圆形区域时会触发此事件
     */
    onMouseOver?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 移除圆形时触发此事件
     */
    onRemove?(event: { type: string; target: any }): void;
    /**
     * 圆形覆盖物的属性发生变化时触发此事件
     */
    onLineUpdate?(event: { type: string; target: any }): void;
  }
  type SizeType = number;
  interface IconOptions {
    /**
     * 图标的定位锚点。此点用来决定图标与地理位置的关系，是相对于图标左上角的偏移值，默认等于图标宽度和高度的中间值
     */
    anchor?: Size;
    /**
     * 图片相对于可视区域的偏移值
     */
    imageOffset?: Size;
    /**
     * 信息窗口定位锚点。开启信息窗口时，信息窗口底部尖角相对于图标左上角的位置，默认等于图标的ancho
     */
    infoWindowAnchor?: Size;
    /**
     * 用于打印的图片，此属性只适用于IE6，为了解决IE6在包含滤镜的情况下打印样式不正确的问题
     */
    printImageUrl?: string;
  }
  // interface Hotspot extends Overlay {
  interface Hotspot {
    /**
     * 获取热区位置坐标
     */
    getPosition(): Point;
    /**
     * 设置热区位置坐标
     */
    setPosition(position: Point): void;
    /**
     * 获取热区提示文本
     */
    getText(): string;
    /**
     * 设置热区提示文本
     */
    setText(text: string): void;
    /**
     * 获取热区对应的用户数据
     */
    getUserData(): Mix;
    /**
     * 设置热区对应的用户数据
     */
    setUserData(data: Mix): void;
  }
  /**
   * 此类表示地图上的一个热区。
   */
  class Hotspot {
    /**
     * 创建Hotspot对象实例
     * @param position
     * @param opts
     */
    constructor(position: Point, opts?: HotspotOptions);
  }
  interface Symbol extends Overlay {
    setPath(path: string | SymbolShapeType): void;
    setAnchor(anchor: Size): void;
    setRotation(rotation: number): void;
    setScale(scale: number): void;
    setStrokeWeight(strokeWeight: number): void;
    setStrokeColor(color: string): void;
    setStrokeOpacity(opacity: number): void;
    setFillOpacity(opacity: number): void;
    setFillColor(color: string): void;
  }
  class Symbol {
    constructor(path: string | SymbolShapeType, opts?: SymbolOptions);
  }
  interface PolylineOptions {
    /**
     * 折线颜色
     */
    strokeColor?: string;
    /**
     * 折线的宽度，以像素为单位
     */
    strokeWeight?: number;
    /**
     * 折线的透明度，取值范围0 - 1
     */
    strokeOpacity?: number;
    /**
     * 折线的样式，solid或dashed
     */
    strokeStyle?: string;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear?: boolean;
    /**
     * 是否启用线编辑，默认为false
     */
    enableEditing?: boolean;
    /**
     * 是否响应点击事件，默认为true
     */
    enableClicking?: boolean;
    /**
     * 配置贴合折线的图标
     */
    icons?: Array<IconSequence>;
  }
  interface Polyline extends Overlay {
    /**
     * 设置折线的点数组
     * @param path
     */
    setPath(path: Point[]): void;
    /**
     * 返回折线的点数组
     */
    getPath(): Point[];
    /**
     * 设置折线的颜色
     * @param color
     */
    setStrokeColor(color: string): void;
    /**
     * 返回折线的颜色
     */
    getStrokeColor(): string;
    /**
     * 设置透明度，取值范围0 - 1
     * @param opacity
     */
    setStrokeOpacity(opacity: number): void;
    /**
     * 返回透明度
     */
    getStrokeOpacity(): number;
    /**
     * 设置线的宽度，范围为大于等于1的整数
     * @param weight
     */
    setStrokeWeight(weight: number): void;
    /**
     * 返回线的宽度
     */
    getStrokeWeight(): number;
    /**
     * 设置是为实线或虚线，solid 或 dashed
     * @param style
     */
    setStrokeStyle(style: 'solid' | 'dashed'): void;
    /**
     * 返回当前线样式状态，实线或者虚线
     */
    getStrokeStyle(): string;
    /**
     * 返回覆盖物的地理区域范围
     */
    getBounds(): Bounds;
    /**
     * 开启编辑功能
     */
    enableEditing(): void;
    /**
     * 关闭编辑功能
     */
    disableEditing(): void;
    /**
     * 允许覆盖物在 map.clearOverlays 方法中被清除
     */
    enableMassClear(): void;
    /**
     * 禁止覆盖物在 map.clearOverlays 方法中被清除
     */
    disableMassClear(): void;
    /**
     * 修改指定位置的坐标。
     * 索引index从0开始计数。
     * 例如 setPointAt(2, point) 代表将折线的第3个点的坐标设为point
     * @param index
     * @param point
     */
    setPositionAt(index: number, point: Point): void;
    /**
     * 返回覆盖物所在的map对象
     */
    getMap(): Map;
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
  interface PolylineEvents {
    /**
     * 点击折线后会触发此事件
     */
    onClick?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 双击折线后会触发此事件
     */
    onDblClick?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标在折线上按下触发此事件
     */
    onMouseDown?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标在折线释放触发此事件
     */
    onMouseUp?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 鼠标离开折线时触发此事件
     */
    onMouseOut?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 当鼠标进入折线区域时会触发此事件
     */
    onMouseOver?(event: { type: string; target: any; point: Point; pixel: Pixel }): void;
    /**
     * 移除折线时触发
     */
    onRemove?(event: { type: string; target: any }): void;
    /**
     * 覆盖物的属性发生变化时触发
     */
    onLineUpdate?(event: { type: string; target: any }): void;
  }
  class Polyline {
    constructor(points: Point[], opts?: PolylineOptions);
  }
  interface GroundOverlay extends Overlay {
    /**
     * 设置图层显示的矩形区域
     */
    setBounds(bounds: Bounds): none;
    /**
     * 返回图层显示的矩形区域
     */
    getBounds(): Bounds;
    /**
     * 设置图层的透明度
     */
    setOpacity(opcity: number): none;
    /**
     * 返回图层的透明度
     */
    getOpacity(): number;
    /**
     * 返回图层地址
     */
    setImageURL(url: string): none;
    /**
     * 返回图层地址
     */
    getImageURL(): string;
    /**
     * 设置图层显示的最小级别
     */
    setDisplayOnMinLevel(level: number): none;
    /**
     * 返回图层显示的最小级别
     */
    getDisplayOnMinLevel(): number;
    /**
     * 设置图层显示的最大级别
     */
    setDispalyOnMaxLevel(level: number): none;
    /**
     * 返回图层显示的最大级别
     */
    getDispalyOnMaxLevel(): number;
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
  interface GroundOverlayEvents {
    /**
     * 鼠标点击图层后会触发此事件
     */
    onClick?(event: { type: string; target: any }): void;
    /**
     * 鼠标双击图层后会触发此事件
     */
    onDblClick?(event: { type: string; target: any }): void;
  }
  class GroundOverlay {
    constructor(bounds: Bounds, opts?: GroundOverlayOptions);
  }
  interface GroundOverlayOptions {
    /**
     * 图层透明度
     */
    opacity?: number;
    /**
     * 图层地址
     */
    imageURL?: string;
    /**
     * 图层显示的最小级别
     */
    displayOnMinLevel?: number;
    /**
     * 图层显示的最大级别
     */
    displayOnMaxLevel?: number;
  }
  interface HotspotOptions {
    /**
     * 当鼠标移至某一热区上时出现的文字提示
     */
    text: string;
    /**
     * 热区响应区域距中心点的扩展偏移值。数组的四个数值分别表示上、右、下、左距离中心点的扩展偏移量。默认偏移量为[5, 5, 5, 5]
     */
    offsets: Array<number>;
    /**
     * 由用户填入的自定义数据
     */
    userData: any;
    /**
     * 热区生效的最小级别
     */
    minZoom: number;
    /**
     * 热区生效的最大级别
     */
    maxZoom: number;
  }
  /**
   * 覆盖物层级
   * JSAPI 把地图覆盖物分为了8个层级，顶层为 `floatPane`，
   * 低层为 `vertexPane`。可以通过Map实例的 `getPanes()` 方法，获取到8个层级的名称
   *
   * API: https://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a3b1
   */
  interface MapPanes {
    /**
     * 信息窗口所在的容器
     */
    floatPane?: HTMLElement;
    /**
     * 标注点击区域所在的容器
     */
    markerMouseTarget?: HTMLElement;
    /**
     * 信息窗口阴影所在的容器
     */
    floatShadow?: HTMLElement;
    /**
     * 文本标注所在的容器
     */
    labelPane?: HTMLElement;
    /**
     * 标注图标所在的容器
     */
    markerPane?: HTMLElement;
    /**
     * 标注阴影所在的容器
     */
    markerShadow?: HTMLElement;
    /**
     * 折线、多边形等矢量图形所在的容器
     */
    mapPane?: HTMLElement;
  }
}

declare const BMap_Symbol_SHAPE_CIRCLE: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_RECTANGLE: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_RHOMBUS: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_STAR: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_POINT: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_PLANE: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_CAMERA: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_WARNING: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_SMILE: BMap.SymbolShapeType;
declare const BMap_Symbol_SHAPE_CLOCK: BMap.SymbolShapeType;

/**
 * 坠落动画
 */
declare const BMAP_ANIMATION_DROP: BMap.Animation;
/**
 * 跳动动画
 */
declare const BMAP_ANIMATION_BOUNCE: BMap.Animation;

/** 圆形，为默认形状 */
declare const BMAP_POINT_SHAPE_CIRCLE: BMap.ShapeType;
/** 星形 */
declare const BMAP_POINT_SHAPE_STAR: BMap.ShapeType;
/** 方形 */
declare const BMAP_POINT_SHAPE_SQUARE: BMap.ShapeType;
/** 菱形 */
declare const BMAP_POINT_SHAPE_RHOMBUS: BMap.ShapeType;
/** 水滴状，该类型无size和color属性 */
declare const BMAP_POINT_SHAPE_WATERDROP: BMap.ShapeType;

/** 定义点的尺寸为超小，宽高为2px*2px */
declare const BMAP_POINT_SIZE_TINY: BMap.SizeType;
/** 定义点的尺寸为很小，宽高为4px*4px */
declare const BMAP_POINT_SIZE_SMALLER: BMap.SizeType;
/** 定义点的尺寸为小，宽高为8px*8px */
declare const BMAP_POINT_SIZE_SMALL: BMap.SizeType;
/** 定义点的尺寸为正常，宽高为10px*10px，为海量点默认尺寸 */
declare const BMAP_POINT_SIZE_NORMAL: BMap.SizeType;
/** 定义点的尺寸为大，宽高为16px*16px */
declare const BMAP_POINT_SIZE_BIG: BMap.SizeType;
/** 定义点的尺寸为很大，宽高为20px*20px */
declare const BMAP_POINT_SIZE_BIGGER: BMap.SizeType;
/** 定义点的尺寸为超大，宽高为30px*30px */
declare const BMAP_POINT_SIZE_HUGE: BMap.SizeType;
