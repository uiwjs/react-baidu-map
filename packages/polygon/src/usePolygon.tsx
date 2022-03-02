import { useState, useEffect } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { noop, useEnableProperties, useProperties, useVisiable, useEventProperties } from '@uiw/react-baidu-map-utils';
import { PolygonProps } from './';

export interface UsePolygon extends PolygonProps {}

export function usePolygon(props = {} as UsePolygon) {
  const {
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
  const { map } = useMapContext();
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
  }, [map]);

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
