import { useState, useMemo } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useEnableProperties, useProperties, useVisiable, useEventProperties } from '@uiw/react-baidu-map-utils';
import { CircleProps } from './';

export interface UseCircle extends CircleProps {}

export function useCircle(props = {} as UseCircle) {
  const {
    center,
    radius,
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
  const [circle, setCircle] = useState<BMap.Circle>();

  useMemo(() => {
    if (map && !circle) {
      let point = center;
      if (center && center.lng && center.lat) {
        point = new BMap.Point(center.lng, center.lat);
      }
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
      const instance = new BMap.Circle(point, radius, opts);
      map.addOverlay(instance);
      setCircle(instance);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, circle]);

  useVisiable(circle!, props);
  useEventProperties<BMap.Circle, UseCircle>(circle!, props, [
    'Click',
    'DblClick',
    'MouseDown',
    'MouseUp',
    'MouseOut',
    'MouseOver',
    'Remove',
    'LineUpdate',
  ]);
  useEnableProperties<BMap.Circle, UseCircle>(circle!, props, ['Editing', 'MassClear']);
  useProperties<BMap.Circle, UseCircle>(circle!, props, [
    'Center',
    'Radius',
    'StrokeColor',
    'FillColor',
    'StrokeOpacity',
    'FillOpacity',
    'StrokeWeight',
    'StrokeStyle',
  ]);

  return {
    circle,
    setCircle,
  };
}
