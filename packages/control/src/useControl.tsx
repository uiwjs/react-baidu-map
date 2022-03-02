import { useState, useEffect } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useProperties, useVisiable, useRenderDom } from '@uiw/react-baidu-map-utils';
import getControl from './getControl';
import { ControlProps } from './';

export interface UseControl extends ControlProps {}

export function useControl(props = {} as UseControl) {
  const { container } = useRenderDom({ children: props.children });
  const [control, setControl] = useState<BMap.Control>();
  const { offset, anchor } = props;
  const { map } = useMapContext();

  useEffect(() => {
    if (map && !control && props.children) {
      const Control = getControl();
      const instance = new Control(container, anchor, offset);
      setControl(instance);
      map.addOverlay(instance);
    }
    return () => {
      if (map && control)
        () => {
          map.removeControl(control);
        };
    };
  }, [map, control, anchor, offset, container, props.children]);

  useVisiable(control!, props);
  useProperties<BMap.Control, UseControl>(control!, props, ['Anchor', 'Offset']);
  return {
    control,
    setControl,
  };
}
