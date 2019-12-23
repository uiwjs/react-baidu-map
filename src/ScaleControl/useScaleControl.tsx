import { useEffect, useState } from 'react';
import { ScaleControlProps } from './';
import { useProperties, useVisiable, useEventProperties } from '../common/hooks';

export interface UseScaleControl extends ScaleControlProps {}

export default function(props = {} as UseScaleControl) {
  const [scaleControl, setScaleControl] = useState<BMap.ScaleControl>();
  const { map, anchor, offset } = props;
  useEffect(() => {
    if (map && !scaleControl) {
      const instance = new BMap.ScaleControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT, offset
      });
      map.addControl(instance);
      setScaleControl(instance);
      return () => {
        map.removeControl(instance);
      }
    }
  }, [map]);

  useVisiable(scaleControl!, props);
  useProperties<BMap.ScaleControl, UseScaleControl>(scaleControl!, props, [
    'Anchor', 'Offset', 'Unit'
  ]);
  return {
    scaleControl, setScaleControl,
  };
}