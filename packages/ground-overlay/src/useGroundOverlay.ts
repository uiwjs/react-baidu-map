import { useEffect, useState } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useProperties, useVisiable, useEventProperties } from '@uiw/react-baidu-map-utils';
import { GroundOverlayProps } from './';

export interface UseGroundOverlay extends GroundOverlayProps {}

export function useGroundOverlay(props = {} as UseGroundOverlay) {
  const [groundOverlay, setGroundOverlay] = useState<BMap.GroundOverlay>();
  const { bounds, opacity, imageURL, displayOnMinLevel, displayOnMaxLevel } = props;
  const { map } = useMapContext();
  useEffect(() => {
    if (!groundOverlay && bounds && map) {
      const instance = new BMap.GroundOverlay(bounds, {
        opacity,
        imageURL,
        displayOnMinLevel,
        displayOnMaxLevel,
      });
      map.addOverlay(instance);
      setGroundOverlay(instance);
      return () => {
        if (map && instance) {
          map.removeOverlay(instance);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useVisiable(groundOverlay!, props);
  useEventProperties<BMap.GroundOverlay, UseGroundOverlay>(groundOverlay!, props, ['Click', 'DblClick']);
  useProperties<BMap.GroundOverlay, UseGroundOverlay>(groundOverlay!, props, [
    'Bounds',
    'Opacity',
    'ImageURL',
    'DisplayOnMinLevel',
    'DispalyOnMaxLevel',
  ]);

  return {
    groundOverlay,
    setGroundOverlay,
  };
}
