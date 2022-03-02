import { useEffect, useState } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useProperties, useVisiable } from '@uiw/react-baidu-map-utils';
import { NavigationControlProps } from './';

export interface UseNavigationControl extends NavigationControlProps {}

export function useNavigationControl(props = {} as UseNavigationControl) {
  const [navigationControl, setNavigationControl] = useState<BMap.NavigationControl>();
  const { anchor, offset, type, showZoomInfo, enableGeolocation } = props;
  const { map } = useMapContext();
  useEffect(() => {
    if (!map || navigationControl) return;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useVisiable(navigationControl!, props);
  useProperties<BMap.NavigationControl, UseNavigationControl>(navigationControl!, props, ['Anchor', 'Offset', 'Type']);
  return {
    navigationControl,
    setNavigationControl,
  };
}
