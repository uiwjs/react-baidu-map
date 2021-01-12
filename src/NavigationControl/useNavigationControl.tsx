import { useEffect, useState } from 'react';
import { NavigationControlProps } from './';
import { useProperties, useVisiable } from '../common/hooks';

export interface UseNavigationControl extends NavigationControlProps {}

export default function (props = {} as UseNavigationControl) {
  const [navigationControl, setNavigationControl] = useState<BMap.NavigationControl>();
  const { map, anchor, offset, type, showZoomInfo, enableGeolocation } = props;
  useEffect(() => {
    if (map && !navigationControl) {
      const instance = new BMap.NavigationControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
        offset,
        type,
        showZoomInfo,
        enableGeolocation,
      });
      map.addControl(instance);
      setNavigationControl(instance);
      return () => {
        if (map && instance) {
          map.removeControl(instance);
        }
      };
    }
  }, [map]);

  useVisiable(navigationControl!, props);
  useProperties<BMap.NavigationControl, UseNavigationControl>(navigationControl!, props, ['Anchor', 'Offset', 'Type']);
  return {
    navigationControl,
    setNavigationControl,
  };
}
