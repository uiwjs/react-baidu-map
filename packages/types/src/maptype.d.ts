/// <reference path="./base.d.ts" />
/// <reference path="./maplayer.d.ts" />

declare namespace BMap {
  class MapType {
    /**
     * 创建 MapType 对象实例
     * @param name
     * @param layers
     * @param opts
     */
    constructor(name: string, layers: TileLayer | TileLayer[], opts?: MapTypeOptions);
    /**
     * 返回地图类型名称
     */
    getName(): string;
    /**
     * 返回地图类型对应的图层
     */
    getTileLayer(): TileLayer;
    /**
     * 返回地图类型允许的最小级别
     */
    getMinZoom(): number;
    /**
     * 返回地图类型允许的最大级别
     */
    getMaxZoom(): number;
    /**
     * 返回地图类型所使用的投影实例
     */
    getProjection(): Projection;
    /**
     * 返回地图类型对应的前景色
     */
    getTextColor(): string;
    /**
     * 返回地图类型的提示说明，用于在地图类型控件中提示
     */
    getTips(): string;
  }
  interface MapTypeOptions {
    /**
     * 该类型地图的最小级别
     */
    minZoom: Number;
    /**
     * 该类型地图的最大级别
     */
    maxZoom: Number;
    /**
     * 当没有图块时所显示的错误图片地址。默认为透明图
     */
    errorImageUrl: String;
    /**
     * 地图类型对应的前景色
     */
    textColor: Number;
    /**
     * 提示说明信息，用于在地图类型控件中进行提示
     */
    tips: String;
  }
  /**
   * 此类表示地图投影抽象基类，不可实例化，但可通过MapType的getProjection方法获得。
   */
  interface Projection {
    /**
     * 抽象，根据球面坐标获得平面坐标
     * @param lngLat
     */
    lngLatToPoint(lngLat: Point): Pixel;
    /**
     * 抽象，根据平面坐标获得球面坐标
     * @param point
     */
    pointToLngLat(point: Pixel): Point;
  }
  /**
   * 此类表示街道地图投影类，一般通过 MapType 的getProjection方法获得实例。
   */
  type MercatorProjection = Projection;
  /**
   * 此类表示透视地图投影类，一般通过 MapType 的getProjection方法获得实例
   */
  type PerspectiveProjection = Projection;
}
declare const BMAP_NORMAL_MAP: BMap.MapType;
declare const BMAP_PERSPECTIVE_MAP: BMap.MapType;
declare const BMAP_SATELLITE_MAP: BMap.MapType;
declare const BMAP_HYBRID_MAP: BMap.MapType;
