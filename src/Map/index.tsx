/// <reference types="../types" />

import React, { useRef, useEffect, useImperativeHandle, Fragment, useMemo } from 'react';
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

export type ControlOptions =
  | {
      name: keyof Control;
      options?: (bmap: typeof BMap, map: BMap.Map) => void;
      control?(bmap: typeof BMap, map: BMap.Map): BMap.Control;
    }
  | {
      name: keyof Control;
      options?: Control[keyof Control];
      control?(bmap: typeof BMap, map: BMap.Map): BMap.Control;
    };

export type ControlOptionsAll = keyof Control | ControlOptions;

export interface MapProps extends BMap.MapOptions, BMap.MapEvents {
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
   * 定位, 可使用如 `上海市` 的地区字符串，
   * 也可以使用对象如 `{lng: 121.424333, lat: 31.228604}` 表示经纬度
   */
  center?: string | BMap.Point;
  /**
   * IP定位获取当前城市，进行自动定位
   */
  autoLocalCity?: boolean;
  children?: React.ReactNode;
  /**
   * 启用地图拖拽，默认启用
   */
  enableDragging?: boolean;
  /**
   * 启用滚轮放大缩小，默认禁用
   */
  enableScrollWheelZoom?: boolean;
  /**
   * 启用双击放大，默认启用
   */
  enableDoubleClickZoom?: boolean;
  /**
   * 启用地图惯性拖拽，默认禁用
   */
  enableInertialDragging?: boolean;
  /**
   * 启用连续缩放效果，默认禁用
   */
  enableContinuousZoom?: boolean;
  /**
   * 启用双指操作缩放，默认启用
   */
  enablePinchToZoom?: boolean;
  /**
   * 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。
   * PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
   */
  enableKeyboard?: boolean;
  /**
   * 设置地图个性化样式V2版本，仅支持现代浏览器（支持Canvas）
   */
  mapStyleV2?: BMap.MapStyleV2;
  /**
   * 设置地图城市，注意当地图初始化时的类型设置为 `BMAP_NORMAL_MAP` 时，
   * 需要在调用 `centerAndZoom` 之前调用此方法设置地图所在城市。
   * 例如：
   * @example
   *
   * ```js
   * var map = new BMap.Map(“container”, { mapType: BMAP_NORMAL_MAP });
   * map.setCurrentCity(“北京市”);
   * map.centerAndZoom(new BMap.Point(116.404, 39.915), 18);
   * ```
   *
   * 注意：初始化的坐标应与您设置的城市对应，否则地图将无法正常显示。
   */
  currentCity?: string;
  /**
   * 将全景实例与Map类进行绑定
   */
  panorama?: BMap.Panorama;
  
  viewport?:BMap.Point[];
}

export type MapChildRenderProps =
  | {
      children?: (data: { BMap: typeof BMap; map: BMap.Map; container?: string | HTMLDivElement | null }) => void;
    }
  | { children?: React.ReactNode };

export default React.forwardRef<MapProps & { map?: BMap.Map }, MapProps & MapChildRenderProps>(
  ({ className, style, children, ...props }, ref) => {
    window.BMap = window.BMap || window.BMapGL;
    const elmRef = useRef<HTMLDivElement>(null);
    const { setContainer, container, setCenter, setAutoLocalCity, map } = useMap({
      container: elmRef.current as string | HTMLDivElement,
      ...props,
    });
    useEffect(() => setContainer(elmRef.current as string | HTMLDivElement | undefined), [elmRef.current]);
    useMemo(() => props.center && setCenter(props.center!), [props.center]);
    useEffect(() => setAutoLocalCity(props.autoLocalCity!), [props.autoLocalCity]);
    useImperativeHandle(ref, () => ({ ...props, map, BMap, container: elmRef }), [map]);
    const childs = React.Children.toArray(children);
    return (
      <Fragment>
        <div ref={elmRef} className={className} style={{ fontSize: 1, height: '100%', ...style }} />
        {BMap && map && typeof children === 'function' && children({ BMap, map, container })}
        {BMap &&
          map &&
          childs.map((child) => {
            if (!React.isValidElement(child)) return;
            return React.cloneElement(child, {
              ...child.props,
              BMap,
              map,
              container,
            });
          })}
      </Fragment>
    );
  },
);
