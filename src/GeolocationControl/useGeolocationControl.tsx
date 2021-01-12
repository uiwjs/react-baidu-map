import { useEffect, useState } from 'react';
import { GeolocationControlProps } from './';
import { useProperties, useVisiable, useEventProperties } from '../common/hooks';

export interface UseGeolocationControl extends GeolocationControlProps {}

export default function (props = {} as UseGeolocationControl) {
  const [geolocationControl, setGeolocationControl] = useState<BMap.GeolocationControl>();
  const { map, anchor, offset, showAddressBar, enableAutoLocation, locationIcon, onLocationSuccess } = props;
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
