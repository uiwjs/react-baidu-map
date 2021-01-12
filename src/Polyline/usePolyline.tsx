import { useState, useEffect, useMemo } from 'react';
import { PolylineProps } from './';
import { useEnableProperties, useProperties, useVisiable, useEventProperties } from '../common/hooks';

export interface UsePolyline extends PolylineProps {}

export default (props = {} as UsePolyline) => {
  const {
    map,
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking,
    icons,
  } = props;
  const [polyline, setPolyline] = useState<BMap.Polyline>();
  const [path, setPath] = useState(props.path || []);

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
  useMemo(() => {
    if (map && !polyline) {
      const points = (props.path || []).map((item) => new BMap.Point(item.lng, item.lat));
      const instance = new BMap.Polyline(points, opts);
      map.addOverlay(instance);
      setPolyline(instance);
    }
  }, [map, polyline]);

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
};
