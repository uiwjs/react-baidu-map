declare global {
  interface Window {
    BMapLib: typeof BMapLib;
  }
}

declare namespace BMap {
  interface DrawingManagerOptions {
    /**
     * 是否开启绘制模式
     */
    isOpen?: boolean;

    /**
     * 当前的绘制模式, 默认是绘制点
     */
    drawingMode?: BMap.DrawingType;

    /**
     * 是否添加绘制工具栏控件，默认不添加
     */
    enableDrawingTool?: boolean;

    /**
     * 绘制是否进行测距(画线时候)、测面(画圆、多边形、矩形)
     */
    enableCalculate?: boolean;

    drawingToolOptions?: BMap.DrawingToolOptions;

    markerOptions?: BMap.CircleOptions;
    circleOptions?: BMap.CircleOptions;
    polylineOptions?: BMap.PolylineOptions;
    polygonOptions?: BMap.PolygonOptions;
    rectangleOptions?: BMap.PolygonOptions;
  }

  interface DrawingToolOptions {
    anchor?: BMap.ControlAnchor;
    offset?: BMap.Size;
    scale?: number;
    drawingModes?: BMap.DrawingType[];
  }
}

declare namespace BMapLib {
  type Callback = (...args: any[]) => void;

  type Callback<T> = (e: any, overlay: T) => void;

  /**
   * 弧线
   */
  class CurveLine {
    constructor(points: BMap.Point[], opts?: CurveLineOptions);
  }
  interface CurveLineOptions extends BMap.PolylineOptions {}
  interface CurveLine extends BMap.Polyline {}
  interface CurveLineEvents extends BMap.PolylineEvents {}

  /**
   * 鼠标绘制管理
   */
  class DrawingManager {
    constructor(map: BMap.Map, opts?: BMap.DrawingManagerOptions);

    /**
     * 开启地图的绘制状态
     */
    open(): void;

    /**
     * 关闭地图的绘制状态
     */
    close(): void;

    /**
     * 打开距离或面积计算
     */
    enableCalculate(): void;

    /**
     * 关闭距离或面积计算
     */
    disableCalculate(): void;

    /**
     * 获取当前的绘制模式
     */
    getDrawingMode(): BMap.DrawingType;

    /**
     * 设置当前的绘制模式
     * BMAP_DRAWING_MARKER    画点
     * BMAP_DRAWING_CIRCLE    画圆
     * BMAP_DRAWING_POLYLINE  画线
     * BMAP_DRAWING_POLYGON   画多边形
     * BMAP_DRAWING_RECTANGLE 画矩形
     * @param drawingType 绘制模式
     */
    setDrawingMode(drawingType: BMap.DrawingType): void;

    /**
     * 添加事件监听函数
     * @param event
     * @param handler
     */
    addEventListener(event: string, handler: Callback): void;

    /**
     * 添加事件监听函数
     * @param event
     * @param handler
     */
    addEventListener<T>(event: string, handler: Callback<T>): void;

    /**
     * 移除事件监听函数
     * @param event
     * @param handler
     */
    removeEventListener(event: string, handler: Callback): void;
  }
}
