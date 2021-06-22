import { useState, useEffect, useMemo } from 'react';
import { useEnableProperties, useProperties, useVisiable, useEventProperties } from '../common/hooks';
import { PolygonProps } from './';
import { noop } from '../utils/noop';

export interface UsePolygon extends PolygonProps {}

export default function usePolygon(props = {} as UsePolygon) {
  const {
    map,
    strokeColor,
    fillColor,
    strokeWeight,
    strokeOpacity,
    fillOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking,
  } = props;
  const [polygon, setPolygon] = useState<BMap.Polygon>();
  const [path, setPath] = useState(props.path || []);

  const opts = {
    strokeColor,
    fillColor,
    strokeWeight,
    strokeOpacity,
    fillOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking,
  };

  useEffect(() => {
    if (!BMap || !map) return noop;
    const points = (path || []).map((item) => new BMap.Point(item.lng, item.lat));
    const instance = new BMap.Polygon(points, opts);
    map.addOverlay(instance);
    setPolygon(instance);
    return function () {
      map.removeOverlay(instance);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, props.path]);

  useEffect(() => {
    if (path && polygon) {
      const points = path.map((item) => new BMap.Point(item.lng, item.lat));
      polygon.setPath(points);
    }
  }, [polygon, path]);

  useVisiable(polygon!, props);
  useEventProperties<BMap.Polygon, UsePolygon>(polygon!, props, [
    'Click',
    'DoubleClick',
    'MouseDown',
    'MouseUp',
    'MouseOut',
    'MouseOver',
    'Remove',
    'LineUpdate',
  ]);
  useEnableProperties<BMap.Polygon, UsePolygon>(polygon!, props, ['Editing', 'MassClear']);
  // PositionAt
  useProperties<BMap.Polygon, PolygonProps>(polygon!, props, [
    'StrokeColor',
    'StrokeOpacity',
    'FillColor',
    'FillOpacity',
    'StrokeWeight',
    'StrokeStyle',
  ]);

  return {
    polygon,
    setPolygon,
    path,
    setPath,
  };
}
