import { useEffect, useState } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useProperties, useVisiable } from '@uiw/react-baidu-map-utils';
import { MapTypeControlProps } from './';

export interface UseMapTypeControl extends MapTypeControlProps {}

export function useMapTypeControl(props = {} as UseMapTypeControl) {
  const [mapTypeControl, setMapTypeControl] = useState<BMap.MapTypeControl>();
  const { anchor, offset, type, mapTypes } = props;
  const { map } = useMapContext();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useVisiable(mapTypeControl!, props);
  useProperties<BMap.MapTypeControl, UseMapTypeControl>(mapTypeControl!, props, ['Anchor', 'Offset', 'Unit']);
  return {
    mapTypeControl,
    setMapTypeControl,
  };
}
