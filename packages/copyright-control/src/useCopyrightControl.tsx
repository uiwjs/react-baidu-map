import { useEffect, useState } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useProperties, useVisiable } from '@uiw/react-baidu-map-utils';
import { CopyrightControlProps } from './';

export interface UseCopyrightControl extends CopyrightControlProps {}

export function useCopyrightControl(props = {} as UseCopyrightControl) {
  const [copyrightControl, setCopyrightControl] = useState<BMap.CopyrightControl>();

  const { anchor, offset } = props;
  const { map } = useMapContext();
  useEffect(() => {
    if (map && !copyrightControl) {
      const instance = new BMap.CopyrightControl({
        anchor: anchor || BMAP_ANCHOR_TOP_RIGHT,
        offset,
      });
      map.addControl(instance);
      setCopyrightControl(instance);
    }
    return () => {
      if (map && copyrightControl) {
        map.removeControl(copyrightControl);
      }
    };
  }, [map, copyrightControl, anchor, offset]);

  useVisiable(copyrightControl!, props);
  useProperties<BMap.CopyrightControl, UseCopyrightControl>(copyrightControl!, props, ['Anchor', 'Offset']);

  return {
    copyrightControl,
    setCopyrightControl,
  };
}
