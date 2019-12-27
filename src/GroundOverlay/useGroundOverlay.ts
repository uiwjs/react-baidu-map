import { useEffect, useState } from 'react';
import { GroundOverlayProps } from './';
import { useProperties, useVisiable, useEventProperties } from '../common/hooks';

export interface UseGroundOverlay extends GroundOverlayProps {}

export default (props = {} as UseGroundOverlay) => {
  const [groundOverlay, setGroundOverlay] = useState<BMap.GroundOverlay>();
  const { map, bounds, opacity, imageURL, displayOnMinLevel, displayOnMaxLevel } = props;
  useEffect(() => {
    if (!groundOverlay && bounds && map) {
      const instance = new BMap.GroundOverlay(bounds, { opacity, imageURL, displayOnMinLevel, displayOnMaxLevel });
      map.addOverlay(instance);
      setGroundOverlay(instance);
      return () => {
        if (map && instance) {
          map.removeOverlay(instance);
        }
      }
    }
  }, [map]);

  useVisiable(groundOverlay!, props);
  useEventProperties<BMap.GroundOverlay, UseGroundOverlay>(groundOverlay!, props, [
    'Click', 'DblClick'
  ]);
  useProperties<BMap.GroundOverlay, UseGroundOverlay>(groundOverlay!, props, [
    'Bounds',
    'Opacity',
    'ImageURL',
    'DisplayOnMinLevel',
    'DispalyOnMaxLevel',
  ]);

  return {
    groundOverlay, setGroundOverlay
  };
}