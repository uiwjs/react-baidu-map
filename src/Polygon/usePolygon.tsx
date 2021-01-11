import { useState, useEffect, useMemo } from 'react';
import {
  useEnableProperties,
  useProperties,
  useVisiable,
  useEventProperties,
} from '../common/hooks';
import { PolygonProps } from './';

export interface UsePolygon extends PolygonProps {}

export default (props = {} as UsePolygon) => {
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
  useMemo(() => {
    if (map && !polygon) {
      const points = (path || []).map(
        (item) => new BMap.Point(item.lng, item.lat),
      );
      const instance = new BMap.Polygon(points, opts);
      map.addOverlay(instance);
      setPolygon(instance);
    }
  }, [map, props.path, polygon]);

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
  useEnableProperties<BMap.Polygon, UsePolygon>(polygon!, props, [
    'Editing',
    'MassClear',
  ]);
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
};
