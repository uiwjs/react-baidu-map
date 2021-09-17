/// <reference path="./base.d.ts" />
/// <reference path="./control.d.ts" />
declare namespace BMap {
  /**
   * 在给定的结点中创建全景
   * 此类用来展示某位置的全景视图，可以单独放置在一个div容器中，也可以放在Map类的容器中。
   * http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference_3_0.html#a8b0
   */
  class Panorama {
    /**
     * 在给定的结点中创建全景
     */
    constructor(container: string | HTMLElement, opts?: PanoramaOptions);
    /**
     * 获取全景中道路指示信息
     */
    getLinks: () => Array<PanoramaLink>;
    /**
     * 获取当前全景的id
     */
    getId: () => string;
    /**
     * 获取当前全景的位置，通过经纬度描述
     */
    getPosition: () => Point;
    /**
     * 获取当前全景的视角
     */
    getPov: () => PanoramaPov;
    /**
     * 获取当前全景的级别
     */
    getZoom: () => Number;
    /**
     * 设置全景的 id
     */
    setId: (id: string) => void;
    /**
     * 设置全景的位置
     */
    setPosition: (position: Point) => void;
    /**
     * 设置全景的视角
     */
    setPov: (pov: PanoramaPov) => void;
    /**
     * 设置全景的级别
     */
    setZoom: (zoom: Number) => void;
    /**
     * 开启鼠标滚轮缩放功能。仅对PC上有效
     */
    enableScrollWheelZoom: () => void;
    /**
     * 关闭鼠标滚轮缩放功能
     */
    disableScrollWheelZoom: () => void;
    /**
     * 显示全景
     */
    show: () => void;
    /**
     * 隐藏全景
     */
    hide: () => void;
    /**
     * 全景场景内添加覆盖物
     */
    addOverlay: (overlay: PanoramaLabel) => void;
    /**
     * 删除全景内的覆盖物
     */
    removeOverlay: (overlay: PanoramaLabel) => void;
    /**
     * 获取全景的类型（室外景返回BMAP_PANORAMA_STREET_SCENE、室内景返回BMAP_PANORAMA_INDOOR_SCENE）
     */
    getSceneType: () => PanoramaPOIType;
    /**
     * 设置全景可配置参数
     */
    setOptions: (opts: PanoramaOptions) => void;
    /**
     * 设置全景外景场景点内可见的POI类型，默认为隐藏所有类型poi
     */
    setPanoramaPOIType: () => PanoramaPOIType;

    /**
     * 全景位置发生变化时触发
     */
    onposition_changed?: () => void;
    /**
     * 全景相邻道路发生变化时触发，通常是在位置变化时，异步获取新数据之后触发
     */
    onlinks_changed?: () => void;
    /**
     * 全景视角发生变化时触发
     */
    onpov_changed?: () => void;
    /**
     * 全景级别发生变化时触发
     */
    onzoom_changed?: () => void;
    /**
     * 全景场景点类型改变（室内景、室外景）时触发
     */
    onscene_type_changed?: () => void;
  }
  /**
   * 此类为Panorama类构造函数的可选参数，使用对象字面量形式表示，不可实例化。
   */
  interface PanoramaOptions {
    /**
     * 是否显示全景的导航控件，默认为true
     */
    navigationControl: boolean;
    /**
     * 是否显示道路指示控件。默认为true
     */
    linksControl: boolean;
    /**
     * 是否显示全景室内场景的切换控件，默认为false，仅对室内景生效
     */
    indoorSceneSwitchControl: boolean;
    /**
     * 是否显示相册控件，默认为false
     */
    albumsControl: boolean;
    /**
     * 全景相册控件配置参数
     */
    albumsControlOptions: AlbumsControlOptions;
  }
  interface PanoramaLink {
    /**
     * 相连全景的描述信息
     */
    description: string;
    /**
     * 相连道路的方向，正北方向为0，正东为90，正南为180，正西为270
     */
    heading: string;
    /**
     * 相邻全景的id
     */
    id: string;
  }
  interface PanoramaPov {
    /**
     * 水平方向的角度，正北方向为0，正东为90，正南为180，正西为270
     */
    heading: number;
    /**
     * 竖直方向的角度，向上最大到90度，向下最大到-90度。（在某些场景下，俯角可能无法到达最大值）
     */
    pitch: number;
  }
  /**
   * 此类用来检索全景数据信息。
   */
  class PanoramaService {
    /**
     * 在创建检索全景数据信息类的实例
     */
    constructor();
    /**
     * 根据全景id返回全景数据，当获取不到数据时，回调函数参数为null
     */
    getPanoramaById(id: string, callback: (data: PanoramaData) => void): void;
    /**
     * 根据坐标及半径返回该范围内的全景数据；
     * 不设置半径参数时，默认半径为50米；当获取不到数据时，回调函数参数为null
     */
    getPanoramaByLocation(point: Point, radius?: number, callback?: (data: PanoramaData) => void): void;
  }
  interface PanoramaData {
    id: string;
    description: string;
    links: PanoramaLink[];
    position: Point;
    tiles: PanoramaTileData;
  }
  interface PanoramaTileData {
    centerHeading: number;
    tileSize: Size;
    worldSize: Size;
  }
  /**
   * 该类提供在全景中添加标签功能。
   */
  class PanoramaLabel {
    constructor(content: string, opts?: PanoramaLabelOptions);
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
    onclick: (event: { type: string; target: any }) => void;
    onmouseover: (event: { type: string; target: any }) => void;
    onmouseout: (event: { type: string; target: any }) => void;
    onremove: (event: { type: string; target: any }) => void;
  }
  interface PanoramaLabelOptions {
    /**
     * 文本标注的地理位置
     */
    position?: Point;
    /**
     * 文本标注在全景场景点中距地面的高度。（javascript全景实现方式暂不支持），默认为2米
     */
    altitude?: number;
  }
  interface AlbumsControlOptions {
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
  type PanoramaSceneType = string;
  type PanoramaPOIType = string;
}
/**
 * 全景场景点的类型为室内场景
 */
declare const BMAP_PANORAMA_INDOOR_SCENE: string;
/**
 * 全景场景点的类型为室外场景
 */
declare const BMAP_PANORAMA_STREET_SCENE: string;

declare const BMAP_PANORAMA_POI_HOTEL: string;
declare const BMAP_PANORAMA_POI_CATERING: string;
declare const BMAP_PANORAMA_POI_MOVIE: string;
declare const BMAP_PANORAMA_POI_TRANSIT: string;
declare const BMAP_PANORAMA_POI_INDOOR_SCENE: string;
declare const BMAP_PANORAMA_POI_NONE: string;
