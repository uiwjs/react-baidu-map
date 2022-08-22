import { useEffect, useState } from 'react';
import {
  usePortal,
  useEnableProperties,
  useProperties,
  useVisiable,
  useEventProperties,
} from '@uiw/react-baidu-map-utils';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { LabelProps } from './';

export interface UseLabel extends LabelProps {}

export function useLabel(props = {} as UseLabel) {
  const [label, setLabel] = useState<BMap.Label>();
  const { offset, style, content = '', position, enableMassClear } = props;
  const { container, Portal } = usePortal();
  // const { container } = useRenderDom({ children: props.children });
  const { map } = useMapContext();

  useEffect(() => {
    if (!BMap || !map) return;
    if (!label) {
      const opts = { offset, position, enableMassClear };
      const instance = new BMap.Label(props.children ? container.innerHTML : content, opts);
      instance.setStyle({ ...style });
      map.addOverlay(instance);
      setLabel(instance);
    }
    return () => {
      if (map && label) {
        map.removeOverlay(label);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  useEffect(() => {
    if (label) {
      label.setContent(props.children ? container.innerHTML : content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.children, container, label]);

  useVisiable(label!, props);
  useEventProperties<BMap.Label, UseLabel>(label!, props, [
    'Click',
    'DblClick',
    'MouseDo',
    'MouseUp',
    'MouseOout',
    'MouseO',
    'Remove',
    'RightClick',
  ]);
  useProperties<BMap.Label, UseLabel>(label!, props, ['Style', 'Position', 'Offset', 'Title', 'ZIndex']);
  useEnableProperties<BMap.Label, UseLabel>(label!, props, ['MassClear']);

  return {
    label,
    setLabel,
    Portal,
  };
}
