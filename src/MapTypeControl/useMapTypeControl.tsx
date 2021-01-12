import { useEffect, useState } from 'react';
import { MapTypeControlProps } from './';
import { useProperties, useVisiable, useEventProperties } from '../common/hooks';

export interface UseMapTypeControl extends MapTypeControlProps {}

export default function (props = {} as UseMapTypeControl) {
  const [mapTypeControl, setMapTypeControl] = useState<BMap.MapTypeControl>();
  const { map, anchor, offset, type, mapTypes } = props;
  useEffect(() => {
    if (map && !mapTypeControl) {
      const instance = new BMap.MapTypeControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
        offset,
        type,
        mapTypes,
      });
      map.addControl(instance);
      setMapTypeControl(instance);
      return () => {
        map.removeControl(instance);
      };
    }
  }, [map]);

  useVisiable(mapTypeControl!, props);
  useProperties<BMap.MapTypeControl, UseMapTypeControl>(mapTypeControl!, props, ['Anchor', 'Offset', 'Unit']);
  return {
    mapTypeControl,
    setMapTypeControl,
  };
}
