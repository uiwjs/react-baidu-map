import { useEffect, useState } from 'react';
import { PanoramaControlProps } from './';
import { useVisiable } from '../common/hooks';

export interface UsePanoramaControl extends PanoramaControlProps {}

export default function usePanoramaControl(props = {} as UsePanoramaControl) {
  const [panoramaControl, setPanoramaControl] = useState<BMap.PanoramaControl>();
  const { map } = props;
  useEffect(() => {
    if (map && !panoramaControl) {
      const instance = new BMap.PanoramaControl();
      map.addControl(instance);
      setPanoramaControl(instance);
      return () => {
        map.removeControl(instance);
      };
    }
  }, [map]);

  useVisiable(panoramaControl!, props);
  return {
    panoramaControl,
    setPanoramaControl,
  };
}
