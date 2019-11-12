import React, { Component } from 'react';
import APILoader from '../utils/APILoader';
import {
  Config, NavigationControlOptions, ScaleControlOptions, MapTypeControlOptions, OverviewMapControlOptions, CopyrightControlOptions, GeolocationControlOptions,
  BMap, Point, MapOptions
} from '../common/map';

export interface Control {
  NavigationControl: NavigationControlOptions;
  OverviewMapControl: OverviewMapControlOptions;
  ScaleControl: ScaleControlOptions;
  MapTypeControl: MapTypeControlOptions;
  CopyrightControl: CopyrightControlOptions;
  GeolocationControl: GeolocationControlOptions;
}

export type ControlOptions = {
  name: keyof Control;
  options?: (map: BMap) => void | Control[keyof Control] ;
}

export type ControlOptionsAll = keyof Control | {
  name: keyof Control;
  options?: Control[keyof Control] ;
};

export interface MapProps extends Config, MapOptions {
  /**
   * 百度地图上负责与地图交互的UI元素称为控件。
   */
  widget?: (ControlOptionsAll | ControlOptions)[];
  /**
   * 缩放等级
   */
  zoom?: number;
  /**
   * 定位, 可使用如 `上海市青浦区` 的地区字符串，
   * 也可以使用对象如 `{lng: 121.424333, lat: 31.228604}` 表示经纬度
   */
  center?: string | Point;
}

export default class Map extends Component<MapProps> {
  public divRef = React.createRef<HTMLDivElement>();
  constructor(props: MapProps) {
    super(props);
    this.state = {
      bmap: null,
    };
  }
  static defaultProps: MapProps = {
    akay: '',
    version: '3.0',
    hostAndPath: 'api.map.baidu.com/api',
    callback: '__baidumap_init_callback',
    widget: [],
    center: '上海'
  }
  async componentDidMount() {
    const {
      akay, version, protocol, callback, hostAndPath, widget, zoom, center,
      minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick
    } = this.props;
    // 加载百度地图 SDK JS文件
    const apiObj = new APILoader({ akay, version, protocol, callback, hostAndPath }).load();
    if (apiObj && this.divRef.current) {
      const BMap = await apiObj;
      const map = new BMap.Map(this.divRef.current, { minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick });
      map.centerAndZoom(center!, zoom!);
      widget!.forEach((item) => {
        if(typeof item === 'string') {
          map.addControl(new (BMap[item] as any)()); 
        } else if (typeof item === 'object' && item.name) {
          const options = typeof item.options === 'function' ? item.options(BMap) : item.options
          map.addControl(new (BMap[item.name] as any)(options)); 
        }
      });
    }
  }
  render() {
    return (
      <div ref={this.divRef} style={{ height: '100%' }}>
        loading...
      </div>
    );
  }
}