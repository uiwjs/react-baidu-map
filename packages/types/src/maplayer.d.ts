/// <reference path="./base.d.ts" />
/// <reference path="./control.d.ts" />
declare namespace BMap {
  /**
   * 此类表示一个地图图层，您可以向地图中添加自定义图层。
   */
  class TileLayer {
    constructor(opts?: TileLayerOptions);
    /**
     * 抽象。向地图返回地图图块的网址，图块索引由 tileCoord 的 x 和 y 属性在指定的缩放级别 zoom 提供。
     * 如果您在 TileLayerOptions 中提供了 tileUrlTemplate 参数，则可不实现此接口
     */
    getTilesUrl?: (tileCoord: Pixel, zoom: number) => string;
    /**
     * 返回地图图层数据的版权对象
     */
    getCopyright?: () => Copyright | null;
    /**
     * 如果图层所用的图片为PNG格式并且包含透明信息，则返回true
     */
    isTransparentPng?: () => boolean;
  }
  interface TileLayerOptions {
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
  class TrafficLayer extends TileLayer {
    constructor(opts?: TrafficLayerOptions);
  }
  interface TrafficLayerOptions {
    predictDate?: PredictDate;
  }
  interface PredictDate {
    weekday: number;
    hour: number;
  }
  class CustomLayer extends TileLayer {
    constructor(opts: CustomLayerOptions);
    onhotspotclick: (event: { type: string; target: any; content: any }) => void;
  }
  interface Custompoi {
    poiId: string;
    databoxId: string;
    title: string;
    address: string;
    phoneNumber: string;
    postcode: string;
    provinceCode: number;
    province: string;
    cityCode: number;
    city: string;
    districtCode: number;
    district: string;
    point: Point;
    tags: string[];
    typeId: number;
    extendedData: any;
  }
  /**
   * 此图层用来展示全景覆盖的区域。
   * 创建全景覆盖区域图层的实例
   */
  class PanoramaCoverageLayer extends TileLayer {
    constructor();
  }
  interface CustomLayerOptions {
    databoxId?: string;
    geotableId?: string;
    q?: string;
    tags?: string;
    filter?: string;
    pointDensityType?: PointDensityType;
  }
  type PointDensityType = number;
}

declare const BMAP_POINT_DENSITY_HIGH: BMap.PointDensityType;
declare const BMAP_POINT_DENSITY_MEDIUM: BMap.PointDensityType;
declare const BMAP_POINT_DENSITY_LOW: BMap.PointDensityType;
