import { useState, useEffect, useMemo } from 'react';
import { PolylineProps } from './';
import { useEnableProperties, useProperties, useVisiable } from '../common/hooks';

export default (props = {} as PolylineProps) => {
  const { map, strokeColor, strokeWeight, strokeOpacity, strokeStyle, enableMassClear, enableEditing, enableClicking, icons, } = props;
  const [polyline, setPolyline] = useState<BMap.Polyline>();
  const [path, setPath] = useState(props.path || []);

  const opts = { strokeColor, strokeWeight, strokeOpacity, strokeStyle, enableMassClear, enableEditing, enableClicking, icons, }
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
  useEnableProperties<BMap.Polyline, PolylineProps>(polyline!, props, ['Editing', 'MassClear']);
  // PositionAt
  useProperties<BMap.Polyline, PolylineProps>(polyline!, props, ['StrokeColor', 'StrokeOpacity', 'StrokeWeight', 'StrokeStyle']);

  return {
    polyline, setPolyline,
    path, setPath
  }
}

