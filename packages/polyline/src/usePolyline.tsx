import { useState, useEffect, useMemo } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useEnableProperties, useProperties, useVisiable, useEventProperties } from '@uiw/react-baidu-map-utils';
import { PolylineProps } from './';

export interface UsePolyline extends PolylineProps {}

export function usePolyline(props = {} as UsePolyline) {
  const {
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking,
    icons,
  } = props;
  const { map } = useMapContext();
  const [polyline, setPolyline] = useState<BMap.Polyline>();
  const [path, setPath] = useState(props.path || []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const opts = {
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking,
    icons,
  };
  useEffect(() => {
    return () => {
      if (polyline && map) {
        map.removeOverlay(polyline);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  useMemo(() => {
    if (map && !polyline) {
      const points = (props.path || []).map((item) => new BMap.Point(item.lng, item.lat));
      const instance = new BMap.Polyline(points, opts);
      map.addOverlay(instance);
      setPolyline(instance);
    }
  }, [map, opts, polyline, props.path]);

  useEffect(() => {
    if (path && polyline) {
      const points = path.map((item) => new BMap.Point(item.lng, item.lat));
      polyline.setPath(points);
    }
  }, [polyline, path]);

  useVisiable(polyline!, props);
  useEventProperties<BMap.Polyline, UsePolyline>(polyline!, props, [
    'Click',
    'DblClick',
    'MouseDown',
    'MouseUp',
    'MouseOut',
    'MouseOver',
    'Remove',
    'LineUpdate',
  ]);
  useEnableProperties<BMap.Polyline, UsePolyline>(polyline!, props, ['Editing', 'MassClear']);
  // PositionAt
  useProperties<BMap.Polyline, UsePolyline>(polyline!, props, [
    'StrokeColor',
    'StrokeOpacity',
    'StrokeWeight',
    'StrokeStyle',
  ]);

  return {
    polyline,
    setPolyline,
    path,
    setPath,
  };
}
