import { useState, useEffect } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useProperties, useVisiable, usePortal } from '@uiw/react-baidu-map-utils';
import getControl from './getControl';
import { ControlProps } from './';

export interface UseControl extends ControlProps {}

export function useControl(props = {} as UseControl) {
  const { container, Portal } = usePortal();
  const [control, setControl] = useState<BMap.Control>();
  const { offset, anchor } = props;
  const { map } = useMapContext();

  useEffect(() => {
    if (map && !control && container) {
      const Control = getControl();
      const instance = new Control(container, anchor, offset);
      setControl(instance);
      map.addOverlay(instance);
    }
    return () => {
      if (map && control) {
        map.removeControl(control);
      }
    };
  }, [map, control, anchor, offset, container]);

  useVisiable(control!, props);
  useProperties<BMap.Control, UseControl>(control!, props, ['Anchor', 'Offset']);
  return {
    control,
    ControlPortal: Portal,
    setControl,
  };
}
