import { useEffect, useState } from 'react';
import { LabelProps } from './';
import { useEnableProperties, useProperties, useVisiable, useEventProperties } from '../common/hooks';

export interface UseLabel extends LabelProps {}

export default function useLabel(props = {} as UseLabel) {
  const [label, setLabel] = useState<BMap.Label>();
  const { map, offset, style, content, position, enableMassClear } = props;

  useEffect(() => {
    if (!BMap || !map) return;
    if (!label) {
      const opts = { offset, position, enableMassClear };
      const instance = new BMap.Label(content || '', opts);
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
  useProperties<BMap.Label, UseLabel>(label!, props, ['Style', 'Content', 'Position', 'Offset', 'Title', 'ZIndex']);
  useEnableProperties<BMap.Label, UseLabel>(label!, props, ['MassClear']);

  return {
    label,
    setLabel,
  };
}
