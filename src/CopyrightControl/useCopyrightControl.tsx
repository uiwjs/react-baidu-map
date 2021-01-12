import { useMemo, useState } from 'react';
import { CopyrightControlProps } from './';
import { useProperties, useVisiable } from '../common/hooks';
import useCreatePortal from '../common/useCreatePortal';

export interface UseCopyrightControl extends CopyrightControlProps {}

export default function (props = {} as UseCopyrightControl) {
  const { portal, setPortal } = useCreatePortal({ children: props.children });
  const [copyrightControl, setCopyrightControl] = useState<BMap.CopyrightControl>();
  const { map, anchor, offset } = props;
  useMemo(() => {
    if (map && !copyrightControl) {
      const instance = new BMap.CopyrightControl({
        anchor: anchor || BMAP_ANCHOR_TOP_RIGHT,
        offset,
      });
      map.addControl(instance);
      setCopyrightControl(instance);
    }
  }, [map, copyrightControl]);

  useVisiable(copyrightControl!, props);
  useProperties<BMap.CopyrightControl, UseCopyrightControl>(copyrightControl!, props, ['Anchor', 'Offset']);

  return {
    portal,
    setPortal,
    copyrightControl,
    setCopyrightControl,
  };
}
