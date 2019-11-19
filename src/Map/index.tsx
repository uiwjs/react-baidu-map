import React, { useRef, useEffect, Fragment } from 'react';
import useMap from './useMap';

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
  children?: React.ReactNode;
  /**
   * 地图实例加载完成执行事件
   * @param bmap 地图API的核心类，SDK加载完成才有
   * @param map 实例化后的地图对象
   */
  ready?(bmap: typeof BMap, map: BMap.Map): BMap.Map;
}

export default function Map({ className, style, children, ...props }: MapProps) {
  const divElm = useRef<HTMLDivElement>(null);
  const { setContainer, setZoom, setCenter, setAutoLocalCity, map } = useMap({ container: divElm.current as (string | HTMLDivElement), ...props });
  useEffect(() => {
    if (props.ready && map) {
      props.ready(BMap, map) as BMap.Map;
    }
  }, [map]);
  useEffect(() => setContainer(divElm.current!), [divElm.current]);
  useEffect(() => setZoom(props.zoom || 15), [props.zoom]);
  useEffect(() => setCenter(props.center || '上海'), [props.center]);
  useEffect(() => setAutoLocalCity(props.autoLocalCity!), [props.autoLocalCity]);
  return (
    <Fragment>
      <div ref={divElm} className={className} style={{ height: '100%', ...style}} />
      {BMap && map && React.Children.toArray(children).map((child) => {
        if (!React.isValidElement(child)) return;
        return React.cloneElement(child, {
          ...child.props,
          BMap: BMap,
          map: map,
        });
      })}
    </Fragment>
  )
}
