import { useEffect, useState } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useProperties, useVisiable } from '@uiw/react-baidu-map-utils';
import { ScaleControlProps } from './';

export interface UseScaleControl extends ScaleControlProps {}

export function useScaleControl(props = {} as UseScaleControl) {
  const [scaleControl, setScaleControl] = useState<BMap.ScaleControl>();
  const { anchor, offset } = props;
  const { map } = useMapContext();
  useEffect(() => {
    if (map && !scaleControl) {
      const instance = new BMap.ScaleControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
        offset,
      });
      map.addControl(instance);
      setScaleControl(instance);
      return () => {
        map.removeControl(instance);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useVisiable(scaleControl!, props);
  useProperties<BMap.ScaleControl, UseScaleControl>(scaleControl!, props, ['Anchor', 'Offset', 'Unit']);
  return {
    scaleControl,
    setScaleControl,
  };
}
