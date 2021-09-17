import { useEffect, useState } from 'react';
import { OverviewMapControlProps } from './';
import { useProperties, useVisiable, useEventProperties } from '@uiw/react-baidu-map-utils';

export interface UseOverviewMapControl extends OverviewMapControlProps {}

export function useOverviewMapControl(props = {} as UseOverviewMapControl) {
  const [overviewMapControl, setOverviewMapControl] = useState<BMap.OverviewMapControl>();
  const { map, anchor, offset, size, isOpen } = props;
  useEffect(() => {
    if (map && !overviewMapControl) {
      const instance = new BMap.OverviewMapControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
        offset,
        size,
        isOpen,
      });
      map.addControl(instance);
      setOverviewMapControl(instance);
      return () => {
        map.removeControl(instance);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useVisiable(overviewMapControl!, props);
  useEventProperties<BMap.OverviewMapControl, UseOverviewMapControl>(overviewMapControl!, props, [
    'ViewChanged',
    'ViewChanging',
  ]);
  useProperties<BMap.OverviewMapControl, UseOverviewMapControl>(overviewMapControl!, props, [
    'Anchor',
    'Offset',
    'Size',
  ]);
  return {
    overviewMapControl,
    setOverviewMapControl,
  };
}
