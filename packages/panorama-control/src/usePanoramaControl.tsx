import { useEffect, useState } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useVisiable } from '@uiw/react-baidu-map-utils';
import { PanoramaControlProps } from './';

export interface UsePanoramaControl extends PanoramaControlProps {}

export function usePanoramaControl(props = {} as UsePanoramaControl) {
  const [panoramaControl, setPanoramaControl] = useState<BMap.PanoramaControl>();
  const { map } = useMapContext();
  useEffect(() => {
    if (map && !panoramaControl) {
      const instance = new BMap.PanoramaControl();
      map.addControl(instance);
      setPanoramaControl(instance);
      return () => {
        map.removeControl(instance);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useVisiable(panoramaControl!, props);
  return {
    panoramaControl,
    setPanoramaControl,
  };
}
