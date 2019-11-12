import React, { Component } from 'react';
import APILoader from '../utils/APILoader';
import { Config, NavigationControlOptions, ScaleControlOptions, MapTypeControlOptions, OverviewMapControlOptions, CopyrightControlOptions, GeolocationControlOptions } from '../common/map';
import { BMap } from '../common/map';

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

export interface MapProps extends Config {
  /**
   * 百度地图上负责与地图交互的UI元素称为控件。
   */
  widget?: (ControlOptionsAll | ControlOptions)[];
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
  }
  async componentDidMount() {
    const { akay, version, protocol, callback, hostAndPath, widget } = this.props;
    // 加载百度地图 SDK JS文件
    const apiObj = new APILoader({ akay, version, protocol, callback, hostAndPath }).load();
    if (apiObj && this.divRef.current) {
      const BMap = await apiObj;
      const map = new BMap.Map(this.divRef.current);
      map.centerAndZoom('上海', 10);
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