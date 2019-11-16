import React, { Component, Fragment } from 'react';
import { MapChildProps } from '../common/map';

export interface Control {
  Control: BMap.Control;
  NavigationControl: BMap.NavigationControlOptions;
  OverviewMapControl: BMap.OverviewMapControlOptions;
  ScaleControl: BMap.ScaleControlOptions;
  MapTypeControl: BMap.MapTypeControlOptions;
  CopyrightControl: BMap.CopyrightControlOptions;
  GeolocationControl: BMap.GeolocationControlOptions;
}

export type ControlOptions = {
  name: keyof Control;
  options?: (map: typeof BMap) => void | Control[keyof Control] ;
}

export type ControlOptionsAll = keyof Control | {
  name: keyof Control;
  options?: Control[keyof Control] ;
};

export interface MapProps extends BMap.MapOptions {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  style?: React.HTMLAttributes<HTMLDivElement>['style'];
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
  center?: string | BMap.Point;
  /**
   * IP定位获取当前城市，进行自动定位
   */
  autoLocalCity?: boolean;
}

export interface MapState extends MapChildProps {}

export default class Map extends Component<MapProps, MapState> {
  public divRef = React.createRef<HTMLDivElement>();
  constructor(props: MapProps) {
    super(props);
    this.state = {};
  }
  static defaultProps: MapProps = {
    widget: [],
    center: '上海',
  }
  async componentDidMount() {
    if (window.BMap) {
      this.initializeMap();
      return;
    }
    throw new TypeError('BaiDuMap should be used under <APILoader />');
  }
  initializeMap = () => {
    const {
      widget, zoom, center,
      minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick,
      autoLocalCity
    } = this.props;
    if (this.divRef.current) {
      const BMap = window.BMap
      const map = new BMap.Map(this.divRef.current, { minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick });
      /**
       * 加载控件
       */
      widget!.forEach((item) => {
        if(typeof item === 'string') {
          map.addControl(new (BMap[item] as any)()); 
        } else if (typeof item === 'object' && item.name) {
          const options = typeof item.options === 'function' ? item.options(BMap) : item.options
          map.addControl(new (BMap[item.name] as any)(options)); 
        }
      });
      /**
       * 根据参数设置中心点
       */
      let cent = center;
      if ((center as BMap.Point).lng && (center as BMap.Point).lat) {
        cent = new BMap.Point((center as BMap.Point).lng, (center as BMap.Point).lat);
      }
      map.centerAndZoom(cent!, zoom!);
      /**
       * IP定位获取当前城市，进行自动定位
       */
      if (autoLocalCity) {
        const myCity = new BMap.LocalCity();
        myCity.get((result) => {
          map.setCenter(result.center);
          map.setZoom(result.level);
        });
      }
      this.setState({ BMap, map });
    }
  }
  render() {
    const { style, className } = this.props;
    console.log('~~~~children~~:', this.props.children);
    return (
      <Fragment>
        <div ref={this.divRef} className={className} style={{ height: '100%', ...style}} />
        {this.state.BMap && React.Children.toArray(this.props.children).map((child) => {
          if (!React.isValidElement(child)) return;
          return React.cloneElement(child, {
            ...child.props,
            BMap: this.state.BMap,
            map: this.state.map,
          });
        })}
      </Fragment>
    );
  }
}