import { useEffect, useState, useMemo } from 'react';
import { MapChildProps } from '../common/map';
import { MapProps } from './';

export interface UseMap extends MapProps, MapChildProps {
  /**
   * 指定的容器
   */
  container?: string | HTMLDivElement;
}

export default (props: UseMap = {}) => {
  const { widget, minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick } = props;
  const [center, setCenter] = useState(props.center || '上海');
  const [autoLocalCity, setAutoLocalCity] = useState(props.autoLocalCity);
  const [map, setMap] = useState<BMap.Map>();
  const [zoom, setZoom] = useState(props.zoom || 15);
  const [container, setContainer] = useState<string | HTMLDivElement>(props.container as (string | HTMLDivElement));
  useEffect(() => {
    if (container && !map) {
      const instance = new BMap.Map(container, { minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick });
      let cent = center;
      if (center && (center as BMap.Point).lng && (center as BMap.Point).lat) {
        cent = new BMap.Point((center as BMap.Point).lng, (center as BMap.Point).lat);
      }
      instance.centerAndZoom(cent!, zoom!);
      /**
       * 加载控件
       */
      widget && widget.forEach((item) => {
        if(typeof item === 'string') {
          instance.addControl(new (BMap[item] as any)()); 
        } else if (typeof item === 'object' && item.name) {
          const options = typeof item.options === 'function' ? item.options(BMap) : item.options
          instance.addControl(new (BMap[item.name] as any)(options)); 
        }
      });
      setMap(instance);
    }
  }, [container, map]);

  useEffect(() => {
    if (map && zoom) {
      map.setZoom(zoom!);
    }
  }, [zoom]);

  /**
   * 根据参数设置中心点
   */
  useEffect(() => {
    if (map && center) {
      let cent = center;
      if (center && (center as BMap.Point).lng && (center as BMap.Point).lat) {
        cent = new BMap.Point((center as BMap.Point).lng, (center as BMap.Point).lat);
      }
      map.setCenter(cent);
    }
  }, [center]);

  /**
   * IP定位获取当前城市，进行自动定位
   */
  useEffect(() => {
    if (map && autoLocalCity) {
      console.log('autoLocalCity:', autoLocalCity)
      const myCity = new BMap.LocalCity();
      myCity.get((result) => {
        setCenter(result.name as any);
        setZoom(result.level as any);
        setAutoLocalCity(false);
      });
    }
  }, [autoLocalCity]);

  return {
    map, setMap,
    zoom, setZoom,
    container, setContainer,
    center, setCenter,
    autoLocalCity, setAutoLocalCity,
  }
}