declare global {
  interface Window {
    BMap: typeof BMap;
  }
}

declare namespace BMap {
  type Callback = (...args: any[]) => void;
  /**
   * 此类表示一个地理坐标点。
   */
  class Point {
    /**
     * 以指定的经度和纬度创建一个地理点坐标
     * @param lng 地理经度
     * @param lat 地理纬度
     */
    constructor(lng: number, lat: number);
    lng: number;
    lat: number;
    /**
     * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true
     * @param other
     */
    equals?(other: Point): boolean;
  }
  /**
   * 此类表示地图上的一点，单位为像素。
   * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角
   */
  class Pixel {
    constructor(x: number, y: number);
    /**
     * x坐标
     */
    x: number;
    /**
     * y坐标
     */
    y: number;
    equals?(other: Pixel): boolean;
  }
  /**
   * 此类以像素表示一个矩形区域的大小。
   */
  class Size {
    /**
     * 以指定的宽度和高度创建一个矩形区域大小对象
     * @param width
     * @param height
     */
    constructor(width: number, height: number);
    /**
     * 以指定的宽度和高度创建一个矩形区域大小对象
     */
    width: number;
    /**
     * 竖直方向的数值
     */
    height: number;
    /**
     * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true
     */
    equals?(other: Size): boolean;
  }
  class Bounds {
    constructor(sw: Point, ne: Point);
    /**
     * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true
     */
    equals?(other: Bounds): Boolean;
    /**
     * 如果点的地理坐标位于此矩形内，则返回true
     */
    containsPoint?(point: Point): Boolean;
    /**
     * 传入的矩形区域完全包含于此矩形区域中，则返回true
     */
    containsBounds?(bounds: Bounds): Boolean;
    /**
     * 计算与另一矩形的交集区域
     */
    intersects?(other: Bounds): Bounds;
    /**
     * 放大此矩形，使其包含给定的点
     */
    extend?(point: Point): void;
    /**
     * 返回矩形的中心点
     */
    getCenter?(): Point;
    /**
     * 如果矩形为空，则返回true
     */
    isEmpty?(): Boolean;
    /**
     * 返回矩形区域的西南角
     */
    getSouthWest?(): Point;
    /**
     * 返回矩形区域的东北角
     */
    getNorthEast?(): Point;
    /**
     * 返回矩形区域的跨度
     */
    toSpan?(): Point;
  }
}
