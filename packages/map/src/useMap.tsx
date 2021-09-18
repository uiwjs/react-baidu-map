import { useEffect, useState, useMemo } from 'react';
import { useEnableProperties, useProperties, useEventProperties } from '@uiw/react-baidu-map-utils';
import { MapProps } from './';

export interface OverlayProps extends MapChildProps {
  /**
   * 覆盖物是否可见
   */
  visiable?: boolean;
}

/**
 * 此类型是 `<Map>` 组件传递给子组件(如 `<Marker>`)的两个 `props`
 */
export interface MapChildProps {
  /**
   * 地图API的核心类，SDK加载完成才有
   */
  BMap?: typeof BMap;
  /**
   * 实例化后的地图对象
   */
  map?: BMap.Map;
}

export interface UseMap extends MapProps, MapChildProps {
  /**
   * 指定的容器
   */
  container?: string | HTMLDivElement;
}

export function useMap(props: UseMap = {}) {
  const { widget, minZoom, maxZoom, mapType, enableHighResolution, enableAutoResize, enableMapClick } = props;
  const [map, setMap] = useState<BMap.Map>();
  const [zoom, setZoom] = useState(props.zoom || 15);
  const [container, setContainer] = useState(props.container);
  useMemo(() => {
    if (container && !map && BMap) {
      const instance = new BMap.Map(container, {
        minZoom,
        maxZoom,
        mapType,
        enableHighResolution,
        enableAutoResize,
        enableMapClick,
      });
      /**
       * 加载控件
       */
      widget &&
        widget.forEach((item) => {
          if (!BMap) {
            return;
          }
          if (typeof item === 'string') {
            instance.addControl(new (BMap[item] as any)());
          } else if (typeof item === 'object' && item.control && typeof item.control === 'function') {
            instance.addControl(item.control(BMap, instance));
          } else if (typeof item === 'object' && item.name) {
            const options = typeof item.options === 'function' ? item.options(BMap, instance) : item.options;
            instance.addControl(new (BMap[item.name] as any)(options));
          }
        });
      setMap(instance);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container, map]);

  const [center, setCenter] = useState(props.center || '上海');
  /**
   * 根据参数设置中心点
   */
  useEffect(() => {
    if (map && center) {
      let cent = center;
      if (center && (center as BMap.Point).lng && (center as BMap.Point).lat) {
        cent = new BMap.Point((center as BMap.Point).lng, (center as BMap.Point).lat);
        map.centerAndZoom(cent!, zoom!);
      }
      map.centerAndZoom(center, zoom!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center, map]);

  const [autoLocalCity, setAutoLocalCity] = useState(props.autoLocalCity);
  /**
   * IP定位获取当前城市，进行自动定位
   */
  useEffect(() => {
    if (map && autoLocalCity) {
      const myCity = new BMap.LocalCity();
      myCity.get((result) => {
        setCenter(result.name as any);
        setZoom(result.level as any);
        setAutoLocalCity(false);
      });
    }
  }, [autoLocalCity, map]);

  useEventProperties<BMap.Map, UseMap>(map!, props, [
    'Click',
    'DblClick',
    'RightClick',
    'RightdblClick',
    'MapTypeChange',
    'MouseMove',
    'MouseOver',
    'MouseOut',
    'MoveStart',
    'Moving',
    'MoveEnd',
    'ZoomStart',
    'ZoomEnd',
    'AddOverlay',
    'AddControl',
    'RemoveControl',
    'RemoveOverlay',
    'ClearOverlays',
    'DragStart',
    'Dragging',
    'DragEnd',
    'AddTileLayer',
    'RemoveTileLayer',
    'Load',
    'ReSize',
    'HotspotClick',
    'HotspotOver',
    'HotspotOut',
    'TilesLoaded',
    'TouchStart',
    'TouchMove',
    'TouchEnd',
    'LongPress',
  ]);
  // 'Center',
  useProperties<BMap.Map, UseMap>(map!, props, [
    'DefaultCursor',
    'DraggingCursor',
    'MinZoom',
    'MaxZoom',
    'MapStyle',
    'MapStyleV2',
    'Panorama',
    'CurrentCity',
    'MapType',
    'Viewport',
    'Zoom',
  ]);
  useEnableProperties<BMap.Map, UseMap>(map!, props, [
    'Dragging',
    'ScrollWheelZoom',
    'DoubleClickZoom',
    'Keyboard',
    'InertialDragging',
    'ContinuousZoom',
    'PinchToZoom',
    'AutoResize',
  ]);
  return {
    map,
    setMap,
    zoom,
    setZoom,
    container,
    setContainer,
    center,
    setCenter,
    autoLocalCity,
    setAutoLocalCity,
  };
}
