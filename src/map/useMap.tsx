import { useEffect, useState } from 'react';
import { MapProps } from './';

export interface UseMap extends MapProps {
  /**
   * 指定的容器
   */
  container?: string | HTMLDivElement;
}

export default (props: UseMap = {}) => {
  const { widget, zoom, minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick } = props
  const [center, setCenter] = useState(props.center || '上海');
  const [autoLocalCity, setAutoLocalCity] = useState(props.autoLocalCity);
  const [map, setMap] = useState<BMap.Map>();
  const [container, setContainer] = useState<string | HTMLDivElement>(props.container as (string | HTMLDivElement));
  useEffect(() => {
    if (container && !map) {
      const instance = new BMap.Map(container, { minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick });
      setMap(instance);
    }
    if (map) {
      /**
       * 加载控件
       */
      (widget || []).forEach((item) => {
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
      if (center) {
        let cent = center;
        if ((center as BMap.Point).lng && (center as BMap.Point).lat) {
          cent = new BMap.Point((center as BMap.Point).lng, (center as BMap.Point).lat);
        }
        map.centerAndZoom(cent!, zoom!);
      }
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
    }
  });
  return {
    map, setMap,
    container, setContainer,
    center, setCenter,
    autoLocalCity, setAutoLocalCity,
  }
}