import { useEffect, useState } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useProperties, useVisiable, useEventProperties } from '@uiw/react-baidu-map-utils';
import { GeolocationControlProps } from './';

export interface UseGeolocationControl extends GeolocationControlProps {}

export function useGeolocationControl(props = {} as UseGeolocationControl) {
  const [geolocationControl, setGeolocationControl] = useState<BMap.GeolocationControl>();
  const { anchor, offset, showAddressBar, enableAutoLocation, locationIcon } = props;
  const { map } = useMapContext();
  useEffect(() => {
    if (map && !geolocationControl) {
      const instance = new BMap.GeolocationControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
        offset,
        showAddressBar,
        enableAutoLocation,
        locationIcon,
      });
      map.addControl(instance);
      setGeolocationControl(instance);
      return () => {
        if (map && instance) {
          map.removeControl(instance);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useVisiable(geolocationControl!, props);
  useEventProperties<BMap.GeolocationControl, UseGeolocationControl>(
    geolocationControl!,
    props,
    ['LocationSuccess', 'LocationError'],
    'CamelCase',
  );
  useProperties<BMap.GeolocationControl, UseGeolocationControl>(geolocationControl!, props, ['Anchor', 'Offset']);
  return {
    geolocationControl,
    setGeolocationControl,
  };
}
