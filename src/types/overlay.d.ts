/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />
/// <reference path="./rightmenu.d.ts" />
declare namespace BMap {
	interface Overlay {
		initialize?(map: Map): HTMLElement;
		isVisible?(): boolean;
		draw?(): void;
		show?(): void;
		hide?(): void;
	}
	type SymbolShapeType = number;
	interface PolylineOptions {
		strokeColor?: string;
		strokeWeight?: number;
		strokeOpacity?: number;
		strokeStyle?: string;
		enableMassClear?: boolean;
		enableEditing?: boolean;
		enableClicking?: boolean;
	}
	interface GroundOverlayOptions {
		opacity?: number;
		imageURL?: string;
		displayOnMinLevel?: number;
		displayOnMaxLevel?: number;
	}
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
    getIcon():Icon;
    /**
     * 设置标注的地理坐标
     */
    setPosition(position: Point):void;
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
    setTop(isTop: Boolean): void;
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
    setZIndex(zIndex: Number): void;
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
    setAnimation(animation: Animation | null): void;
    /**
     * 设置点的旋转角度
     */
    setRotation(rotation: Number): void;
    /**
     * 获取点的旋转角度
     */
    getRotation(): Number;
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
    addEventListener(event: String, handler: Function): void;
    /**
     * 移除事件监听函数
     */
    removeEventListener(event: String, handler: Function) : void;
  
		onclick: (event: { type: string, target: any }) => void;
		ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onremove: (event: { type: string, target: any }) => void;
		oninfowindowclose: (event: { type: string, target: any }) => void;
		oninfowindowopen: (event: { type: string, target: any }) => void;
		ondragstart: (event: { type: string, target: any }) => void;
		ondragging: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		ondragend: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onrightclick: (event: { type: string, target: any }) => void;
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
		constructor(symbol: symbol, offset?: string, repeat?: string, fixedRotation?: boolean);
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
    onClick?: (event: { type: string, target: any, point: Point }) => void;
    /**
     * 鼠标移入点时会触发该事件
     */
    onMouseOver?: (event: { type: string, target: any, point: Point }) => void;
    /**
     * 鼠标移出点时会触发该事件
     */
		onMouseOut?: (event: { type: string, target: any, point: Point }) => void;
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
    rotation?: Number;
    /**
     * 阴影图标
     */
    shadow?: Icon;
    /**
     * 鼠标移到marker上的显示内容
     */
    title?: string;
	}
	interface InfoWindowEvent {
    /**
     * 信息窗口被关闭时触发此事件
     */
    onClose: (event: { type: string, target: any, point: Point }) => void;
    /**
     * 信息窗口被打开时触发此事件
     */
    onOpen: (event: { type: string, target: any, point: Point }) => void;
    /**
     * 信息窗口最大化后触发此事件
     */
    onMaximize: (event: { type: string, target: any }) => void;
    /**
     * 信息窗口还原时触发此事件
     */
    onRestore: (event: { type: string, target: any }) => void;
    /**
     * 点击信息窗口的关闭按钮时触发此事件
     */
		onClickclose: (event: { type: string, target: any }) => void;
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
    title?: string;
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
	interface Polygon extends Overlay {
		setPath(path: Point[]): void;
		getPath(): Point[];
		setStrokeColor(color: string): void;
		getStrokeColor(): string;
		setFillColor(color: string): void;
		getFillColor(): string;
		setStrokeOpacity(opacity: number): void;
		getStrokeOpacity(): number;
		setFillOpacity(opacity: number): void;
		getFillOpacity(): number;
		setStrokeWeight(weight: number): void;
		getStrokeWeight(): number;
		setStrokeStyle(style: string): void;
		getStrokeStyle(): string;
		getBounds(): Bounds;
		enableEditing(): void;
		disableEditing(): void;
		enableMassClear(): void;
		disableMassClear(): void;
		setPointAt(index: number, point: Point): void;
		setPositionAt(index: number, point: Point): void;
		getMap(): Map;
		addEventListener(event: string, handler: Callback): void;
		removeEventListener(event: string, handler: Callback): void;
		onclick: (event: { type: string, target: any }) => void;
		ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onremove: (event: { type: string, target: any }) => void;
		onlineupdate: (event: { type: string, target: any }) => void;
	}
	class Polygon {
		constructor(points: Point[], opts?: PolygonOptions);
	}
  /**
   * 此常量表示标注的动画效果。
   */
	type Animation = number;
	interface PolygonOptions {
		strokeColor?: string;
		fillColor?: string;
		strokeWeight?: number;
		strokeOpacity?: number;
		fillOpacity?: number;
		strokeStyle?: string;
		enableMassClear?: boolean;
		enableEditing?: boolean;
		enableClicking?: boolean;
	}
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
    setImageUrl?: (imageUrl: String) => void;
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
    setPrintImageUrl(url: String): void;
  }
  /**
   * 此类表示标注覆盖物所使用的图标。
   */
	class Icon {
    /**
     * 以给定的图像地址和大小创建图标对象实例
     */
		constructor(url: string, size: Size, opts?: IconOptions);
	}
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
    setContent(content: String): void;
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
    setOffset(offset: Size) : void;
    /**
     * 返回文本标注的偏移值
     */
    getOffset(): Size;
    /**
     *   设置文本标注的标题，当鼠标移至标注上时显示此标题
     */
    setTitle(title: String): void;
    /**
     * 返回文本标注的标题
     */
    getTitle(): String;
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
    setZIndex(zIndex: Number): void;
    /**
     * 返回覆盖物所在的map对象
     */
    getMap(): MapProps;
    /**
     * 添加事件监听函数
     */
    addEventListener(event: String, handler: Function): void;
    /**
     * 移除事件监听函数
     */
    removeEventListener(event: String, handler: Function): void;
		onclick: (event: { type: string, target: any }) => void;
		ondblclick: (event: { type: string, target: any }) => void;
		onmousedown: (event: { type: string, target: any }) => void;
		onmouseup: (event: { type: string, target: any }) => void;
		onmouseout: (event: { type: string, target: any }) => void;
		onmouseover: (event: { type: string, target: any }) => void;
		onremove: (event: { type: string, target: any }) => void;
		onrightclick: (event: { type: string, target: any }) => void;
	}
  /**
   * 此类表示地图上的文本标注。
   * 创建一个文本标注实例。point参数指定了文本标注所在的地理位置
   */
	class Label {
		constructor(content: string, opts?: LabelOptions);
	}
	interface Circle extends Overlay {
		setCenter(center: Point): void;
		getCenter(): Point;
		setRadius(radius: number): void;
		getRadius(): number;
		getBounds(): Bounds;
		setStrokeColor(color: string): void;
		getStrokeColor(): string;
		setFillColor(color: string): void;
		getFillColor(): string;
		setStrokeOpacity(opacity: number): void;
		getStrokeOpacity(): number;
		setFillOpacity(opacity: number): void;
		getFillOpacity(): number;
		setStrokeWeight(weight: number): void;
		getStrokeWeight(): number;
		setStrokeStyle(style: string): void;
		getStrokeStyle(): string;
		enableEditing(): void;
		disableEditing(): void;
		enableMassClear(): void;
		disableMassClear(): void;
		getMap(): Map;
		addEventListener(event: string, handler: Callback): void;
		removeEventListener(event: string, handler: Callback): void;
		onclick: (event: { type: string, target: any }) => void;
		ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onremove: (event: { type: string, target: any }) => void;
		onlineupdate: (event: { type: string, target: any }) => void;
	}
	class Circle {
		constructor(center: Point, radius: number, opts?: CircleOptions);
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
	interface LabelOptions {
    /**
     * 文本标注的位置偏移值
     */
    offset: Size;
    /**
     * 文本标注的地理位置
     */
    position: Point;
    /**
     * 是否在调用map.clearOverlays清除此覆盖物，默认为true
     */
    enableMassClear: Boolean;
	}
	interface CircleOptions {
		strokeColor?: string;
		fillColor?: string;
		strokeWeight?: number;
		strokeOpacity?: number;
		fillOpacity?: number;
		strokeStyle?: string;
		enableMassClear?: boolean;
		enableEditing?: boolean;
		enableClicking?: boolean;
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
	interface Polyline extends Overlay {
		setPath(path: Point[]): void;
		getPath(): Point[];
		setStrokeColor(color: string): void;
		getStrokeColor(): string;
		setFillColor(color: string): void;
		getFillColor(): string;
		setStrokeOpacity(opacity: number): void;
		getStrokeOpacity(): number;
		setFillOpacity(opacity: number): void;
		getFillOpacity(): number;
		setStrokeWeight(weight: number): void;
		getStrokeWeight(): number;
		setStrokeStyle(style: string): void;
		getStrokeStyle(): string;
		getBounds(): Bounds;
		enableEditing(): void;
		disableEditing(): void;
		enableMassClear(): void;
		disableMassClear(): void;
		setPointAt(index: number, point: Point): void;
		setPositionAt(index: number, point: Point): void;
		getMap(): Map;
		addEventListener(event: string, handler: Callback): void;
		removeEventListener(event: string, handler: Callback): void;
		onclick: (event: { type: string, target: any }) => void;
		ondblclick: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmousedown: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseup: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseout: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onmouseover: (event: { type: string, target: any, point: Point, pixel: Pixel }) => void;
		onremove: (event: { type: string, target: any }) => void;
		onlineupdate: (event: { type: string, target: any }) => void;
	}
	class Polyline {
		constructor(points: Point[], opts?: PolylineOptions);
	}
	interface GroundOverlay extends Overlay {
		setBounds(bounds: Bounds): void;
		getBounds(): Bounds;
		setOpacity(opcity: number): void;
		getOpacity(): number;
		setImageURL(url: string): void;
		getImageURL(): string;
		setDisplayOnMinLevel(level: number): void;
		getDisplayOnMinLevel(): number;
		setDispalyOnMaxLevel(level: number): void;
		getDispalyOnMaxLevel(): number;
		onclick: (event: { type: string, target: any }) => void;
		ondblclick: (event: { type: string, target: any }) => void;
	}
	class GroundOverlay {
		constructor(bounds: Bounds, opts?: GroundOverlayOptions);
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
	interface MapPanes {
		floatPane?: HTMLElement;
		markerMouseTarget?: HTMLElement;
		floatShadow?: HTMLElement;
		labelPane?: HTMLElement;
		markerPane?: HTMLElement;
		markerShadow?: HTMLElement;
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