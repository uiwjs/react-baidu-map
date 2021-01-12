/// <reference path="./base.d.ts" />
/// <reference path="./core.d.ts" />

declare namespace BMap {
  interface LocalSearchSearchOptions {
    forceLocal: boolean;
    customData: any;
  }
  class LocalSearch {
    constructor(location: Map | Point | string, opts?: LocalSearchOptions);
    search(keyword: string | string[], option?: LocalSearchSearchOptions): void;
    searchInBounds(
      keyword: string | string[],
      bounds: Bounds,
      option?: {
        customData: any;
      },
    ): void;
    searchNearby(
      keyword: string | string[],
      center: LocalResultPoi | string | Point,
      radius: number,
      option?: {
        customData: any;
      },
    ): void;
    getResults(): LocalResult | LocalResult[];
    clearResults(): void;
    gotoPage(page: number): void;
    enableAutoViewport(): void;
    disableAutoViewport(): void;
    enableFirstResultSelection(): void;
    disableFirstResultSelection(): void;
    setLocation(location: Map | Point | string): void;
    setPageCapacity(capacity: number): void;
    getPageCapacity(): number;
    setSearchCompleteCallback(callback: (results: LocalResult | LocalResult[]) => void): void;
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    getStatus(): ServiceStatusCode;
  }
  type LineType = number;
  interface WalkingRouteResult {
    city: string;
    getStart(): LocalResultPoi;
    getEnd(): LocalResultPoi;
    getNumPlans(): number;
    getPlan(i: number): RoutePlan;
  }
  class BusLineSearch {
    constructor(location: Map | Point | string, opts?: BusLineSearchOptions);
    getBusList(keyword: string): void;
    getBusLine(busLstItem: BusListItem): void;
    clearResults(): void;
    enableAutoViewport(): void;
    disableAutoViewport(): void;
    setLocation(location: Map | Point | string): void;
    getStatus(): ServiceStatusCode;
    toString(): string;
    setGetBusListCompleteCallback(callback: (rs: BusListResult) => void): void;
    setGetBusLineCompleteCallback(callback: (rs: BusLine) => void): void;
    setBusListHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    setBusLineHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    setPolylinesSetCallback(callback: (ply: Polyline) => void): void;
    setMarkersSetCallback(callback: (markers: Marker[]) => void): void;
  }
  interface LocalSearchOptions {
    renderOptions?: RenderOptions;
    onMarkersSet?: (pois: LocalResultPoi[]) => void;
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
    onResultsHtmlSet?: (container: HTMLElement) => void;
    pageCapacity?: number;
    onSearchComplete?: (results: LocalResult[]) => void;
  }
  class DrivingRoute {
    constructor(location: Map | Point | string, opts?: DrivingRouteOptions);
    search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
    getResults(): DrivingRouteResult;
    clearResults(): void;
    enableAutoViewport(): void;
    disableAutoViewport(): void;
    setLocation(location: Map | Point | string): void;
    setPolicy(policy: DrivingPolicy): void;
    setSearchCompleteCallback(callback: (results: DrivingRouteResult) => void): void;
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
    setPolylinesSetCallback(callback: (routes: Route[]) => void): void;
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    getStatus(): ServiceStatusCode;
    toString(): string;
  }
  class Geocoder {
    constructor();
    getPoint(address: string, callback: (point: Point) => void, city: string): void;
    getLocation(point: Point, callback: (result: GeocoderResult) => void, opts?: LocationOptions): void;
  }
  interface BusLineSearchOptions {
    renderOptions?: RenderOptions;
    onGetBusListComplete?: (rs: BusListResult) => void;
    onGetBusLineComplete?: (rs: BusLine) => void;
    onBusListHtmlSet?: (container: HTMLElement) => void;
    onBusLineHtmlSet?: (container: HTMLElement) => void;
    onPolylinesSet?: (ply: Polyline) => void;
    onMarkersSet?: (sts: Marker[]) => void;
  }
  interface CustomData {
    geotableId: number;
    tags: string;
    filter: string;
  }
  interface DrivingRouteOptions {
    renderOptions?: RenderOptions;
    policy?: DrivingPolicy;
    onSearchComplete?: (results: DrivingRouteResult) => void;
    onMarkersSet?: (pois: LocalResultPoi[]) => void;
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
    onPolylinesSet?: (routes: Route[]) => void;
    onResultsHtmlSet?: (container: HTMLElement) => void;
  }
  interface GeocoderResult {
    point: Point;
    address: string;
    addressComponents: AddressComponent;
    surroundingPoi: LocalResultPoi[];
    business: string;
  }
  interface BusListResult {
    keyword: string;
    city: string;
    moreResultsUrl: string;
    getNumBusList(): number;
    getBusListItem(i: number): BusListItem;
  }
  interface RenderOptions {
    /**
     * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
     */
    map: Map;
    /**
     * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
     */
    panel: String | HTMLElement;
    /**
     *  是否选择第一个检索结果。此属性仅对LocalSearch有效
     */
    selectFirstResult: Boolean;
    /**
     *  检索结束后是否自动调整地图视野。此属性对LocalCity无效
     */
    autoViewport: Boolean;
  }
  type DrivingPolicy = number;
  interface AddressComponent {
    /**
     * 门牌号码
     */
    streetNumber: string;
    /**
     * 街道名称
     */
    street: string;
    /**
     * 区县名称
     */
    district: string;
    /**
     * 城市名称
     */
    city: string;
    /**
     * 省份名称
     */
    province: string;
  }
  interface BusLine {
    name: string;
    startTime: string;
    endTime: string;
    company: string;
    getNumBusStations(): string;
    getBusStation(i: number): BusStation;
    getPath(): Point[];
    getPolyline(): Polyline;
  }
  interface LocalResult {
    keyword: string;
    center: LocalResultPoi;
    radius: number;
    bounds: Bounds;
    city: string;
    moreResultsUrl: string;
    province: string;
    suggestions: string[];
    getPoi(i: number): LocalResultPoi;
    getCurrentNumPois(): number;
    getNumPois(): number;
    getNumPages(): number;
    getPageIndex(): number;
    getCityList(): any[];
  }
  interface DrivingRouteResult {
    policy: DrivingPolicy;
    city: string;
    moreResultsUrl: string;
    taxiFare: TaxiFare;
    getStart(): LocalResultPoi;
    getEnd(): LocalResultPoi;
    getNumPlans(): number;
    getPlan(i: number): RoutePlan;
  }
  /**
   * 此类表示Geocoder的地址解析请求的可选参数。它不可实例化。
   */
  interface LocationOptions {
    /**
     * 附近POI所处于的最大半径，默认为100米
     */
    poiRadius?: number;
    /**
     * 返回的POI点个数，默认为10个。取值范围
     */
    numPois?: number;
  }
  interface BusListItem {
    name: string;
  }
  interface LocalResultPoi {
    title: string;
    point: Point;
    url: string;
    address: string;
    city: string;
    phoneNumber: string;
    postcode: string;
    type: PoiType;
    isAccurate: boolean;
    province: string;
    tags: string[];
    detailUrl: string;
  }
  interface TaxiFare {
    day: TaxiFareDetail;
    night: TaxiFareDetail;
    distance: number;
    remark: string;
  }
  /**
   * 此类用于获取用户所在的城市位置信息。(根据用户IP自动定位到城市)
   */
  class LocalCity {
    /**
     * 创建一个获取本地城市位置的实例
     * @param opts
     */
    constructor(opts?: LocalCityOptions);
    /**
     * 当获取城市信息后，回调函数会被调用，其参数为类型为LocalCityResult对象
     */
    get(callback: (result: LocalCityResult) => void): void;
  }
  interface BusStation {
    name: string;
    position: Point;
  }
  type PoiType = number;
  interface TaxiFareDetail {
    initialFare: number;
    unitFare: number;
    totalFare: number;
  }
  interface LocalCityOptions {
    renderOptions?: RenderOptions;
  }
  class Autocomplete {
    constructor(opts?: AutocompleteOptions);
    /**
     * 显示提示列表
     */
    show(): void;
    /**
     * 显示提示列表
     */
    hide(): void;
    /**
     * 修改请求数据类型。types定义方法详见AutocompleteOptions
     */
    setTypes(types: string[]): void;
    /**
     * 设置检索区域
     */
    setLocation(location: string | Map | Point): void;
    /**
     * 发起某个关键字的提示请求，会引起onSearchComplete的回调
     */
    search(keywords: string): void;
    /**
     * 获取结果列表
     */
    getResults(): AutocompleteResult;
    /**
     * 设置绑定的input控件的值，且不会出现下拉列表
     */
    setInputValue(keyword: string): void;
    /**
     * 设置绑定的input控件的值，且不会出现下拉列表
     */
    dispose(): void;
    /**
     * 回车选中某条记录后触发 item :
     * {
     *  index : 1 `高亮的记录，所属返回结果的index` ,
     *  value : {} `结果数据，见AutocompleteResultPoi`
     * }
     */
    onconfirm: (event: { type: string; target: any; item: any }) => void;
    /**
     * 键盘或者鼠标移动，某条记录高亮之后，触发
     * fromitem:
     * {
     *  `上一条记录的信息`
     *  index : 2
     *  `高亮的记录，所属返回结果的index`,
     *  value : {}
     *  `结果数据，见AutocompleteResultPoi`
     * },
     * toitem: {`当前记录的信息，与fromitem结构一致`}
     * AutocompleteOptions
     */
    onhighlight: (event: { type: string; target: any; fromitem: any; toitem: any }) => void;
  }
  class TransitRoute {
    constructor(location: Map | Point | string, opts?: TransitRouteOptions);
    search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
    getResults(): TransitRouteResult;
    clearResults(): void;
    enableAutoViewport(): void;
    disableAutoViewport(): void;
    setPageCapacity(capacity: number): void;
    setLocation(location: Map | Point | string): void;
    setPolicy(policy: TransitPolicy): void;
    setSearchCompleteCallback(callback: (results: TransitRouteResult) => void): void;
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
    setPolylinesSetCallback(callback: (lines: Line[], routes: Route[]) => void): void;
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    getStatus(): ServiceStatusCode;
    toString(): string;
  }
  interface RoutePlan {
    getNumRoutes(): number;
    getRoute(i: number): Route;
    getDistance(format?: boolean): string | number;
    getDuration(format?: boolean): string | number;
    getDragPois(): LocalResultPoi[];
  }
  interface LocalCityResult {
    /**
     * 城市所在中心点
     */
    center: Point;
    /**
     * 展示当前城市的最佳地图级别，如果您在使用此对象时提供了map实例，则地图级别将根据您提供的地图大小进行调整
     */
    level: number;
    /**
     * 城市名称
     */
    name: String;
  }
  interface AutocompleteOptions {
    location?: string | Map | Point;
    types?: string[];
    onSearchComplete?: (result: AutocompleteResult) => void;
    input?: string | HTMLElement;
  }
  interface TransitRouteOptions {
    renderOptions?: RenderOptions;
    policy?: TransitPolicy;
    pageCapacity?: number;
    onSearchComplete?: (result: TransitRouteResult) => void;
    onMarkersSet?: (pois: LocalResultPoi[], transfers: LocalResultPoi[]) => void;
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
    onPolylinesSet?: (lines: Line[]) => void;
    onResultsHtmlSet?: (container: HTMLElement) => void;
  }
  interface Route {
    getNumRoutes(): number;
    getStep(i: number): Step;
    getDistance(format?: boolean): string | number;
    getIndex(): number;
    getPolyline(): Polyline;
    getPoints(): Point[];
    getPath(): Point[];
    getRouteType(): RouteType;
  }
  class TrafficControl {
    constructor();
    setPanelOffset(offset: Size): void;
    show(): void;
    hide(): void;
  }
  interface AutocompleteResultPoi {
    province: string;
    City: string; // wtf
    district: string;
    street: string;
    streetNumber: string;
    business: string;
  }
  type TransitPolicy = number;
  type RouteType = number;
  class Geolocation {
    constructor();
    getCurrentPosition(callback: (result: GeolocationResult) => void, opts?: PositionOptions): void;
    getStatus(): ServiceStatusCode;
  }
  interface AutocompleteResult {
    keyword: string;
    getPoi(i: number): AutocompleteResultPoi;
    getNumPois(): number;
  }
  interface TransitRouteResult {
    policy: TransitPolicy;
    city: string;
    moreResultsUrl: string;
    getStart(): LocalResultPoi;
    getEnd(): LocalResultPoi;
    getNumPlans(): number;
    getPlan(i: number): TransitRoutePlan;
  }
  interface Step {
    getPoint(): Point;
    getPosition(): Point;
    getIndex(): number;
    getDescription(includeHtml: boolean): string;
    getDistance(format?: boolean): string | number;
  }
  interface GeolocationResult {
    /**
     * 定位坐标点
     */
    point: Point;
    /**
     * 定位坐标点
     */
    accuracy: number;
    /**
     * 根据定位坐标点解析出的地址信息，可能为空（3.0新增）
     */
    address: AddressComponent;
  }
  class Boundary {
    constructor();
    get(name: string, callback: (result: string[]) => void): void;
  }
  class Convertor {
    translate(
      points: Point[],
      from: number,
      to: number,
      callback: (result: { points: Point[]; status: number }) => void,
    ): void;
  }
  interface TransitRoutePlan {
    getNumLines(): number;
    getLine(i: number): Line;
    getNumRoutes(): number;
    getRoute(i: number): Route;
    getDistance(format?: boolean): string | number;
    getDuration(format?: boolean): string | number;
    getDescription(includeHtml: boolean): string;
  }
  class WalkingRoute {
    constructor(location: Map | Point | string, opts?: WalkingRouteOptions);
    search(start: string | Point | LocalResultPoi, end: string | Point | LocalResultPoi): void;
    getResults(): WalkingRouteResult;
    clearResults(): void;
    enableAutoViewport(): void;
    disableAutoViewport(): void;
    setLocation(location: Map | Point | string): void;
    setSearchCompleteCallback(callback: (result: WalkingRouteResult) => void): void;
    setMarkersSetCallback(callback: (pois: LocalResultPoi[]) => void): void;
    setInfoHtmlSetCallback(callback: (poi: LocalResultPoi, html: HTMLElement) => void): void;
    setPolylinesSetCallback(callback: (routes: Route[]) => void): void;
    setResultsHtmlSetCallback(callback: (container: HTMLElement) => void): void;
    getStatus(): ServiceStatusCode;
    toString(): string;
  }
  interface PositionOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
  }
  interface Line {
    title: string;
    type: LineType;
    getNumViaStops(): number;
    getGetOnStop(): LocalResultPoi;
    getGetOffStop(): LocalResultPoi;
    getPoints(): Point[];
    getPath(): Point[];
    getPolyline(): Polyline;
    getDistance(format?: boolean): string | number;
  }
  interface WalkingRouteOptions {
    renderOptions?: RenderOptions;
    onSearchComplete?: (result: WalkingRouteResult) => void;
    onMarkersSet?: (pois: LocalResultPoi[]) => void;
    onPolylinesSet?: (routes: Route[]) => void;
    onInfoHtmlSet?: (poi: LocalResultPoi, html: HTMLElement) => void;
    onResultsHtmlSet?: (container: HTMLElement) => void;
  }
  type HighlightModes = number;
  type ServiceStatusCode = number;
}

declare const BMAP_LINE_TYPE_BUS: BMap.LineType;
declare const BMAP_LINE_TYPE_SUBWAY: BMap.LineType;
declare const BMAP_LINE_TYPE_FERRY: BMap.LineType;

declare const BMAP_DRIVING_POLICY_LEAST_TIME: BMap.DrivingPolicy;
declare const BMAP_DRIVING_POLICY_LEAST_DISTANCE: BMap.DrivingPolicy;
declare const BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: BMap.DrivingPolicy;

declare const BMAP_POI_TYPE_NORMAL: BMap.PoiType;
declare const BMAP_POI_TYPE_BUSSTOP: BMap.PoiType;
declare const BMAP_POI_TYPE_SUBSTOP: BMap.PoiType;

declare const BMAP_TRANSIT_POLICY_LEAST_TIME: BMap.TransitPolicy;
declare const BMAP_TRANSIT_POLICY_LEAST_TRANSFER: BMap.TransitPolicy;
declare const BMAP_TRANSIT_POLICY_LEAST_WALKING: BMap.TransitPolicy;
declare const BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: BMap.TransitPolicy;

declare const BMAP_ROUTE_TYPE_DRIVING: BMap.RouteType;
declare const BMAP_ROUTE_TYPE_WALKING: BMap.RouteType;

declare const BMAP_HIGHLIGHT_STEP: BMap.HighlightModes;
declare const BMAP_HIGHLIGHT_ROUTE: BMap.HighlightModes;

declare const BMAP_STATUS_SUCCESS: BMap.ServiceStatusCode;
declare const BMAP_STATUS_CITY_LIST: BMap.ServiceStatusCode;
declare const BMAP_STATUS_UNKNOWN_LOCATION: BMap.ServiceStatusCode;
declare const BMAP_STATUS_UNKNOWN_ROUTE: BMap.ServiceStatusCode;
declare const BMAP_STATUS_INVALID_KEY: BMap.ServiceStatusCode;
declare const BMAP_STATUS_INVALID_REQUEST: BMap.ServiceStatusCode;
