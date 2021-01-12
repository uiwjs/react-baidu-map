import { useState, useEffect, useMemo } from 'react';
import { CircleProps } from './';
import { useEnableProperties, useProperties, useVisiable, useEventProperties } from '../common/hooks';

export interface UseCircle extends CircleProps {}

export default (props = {} as UseCircle) => {
  const {
    map,
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
};
