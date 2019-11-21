import { useMemo, useState } from 'react';
import { LabelProps } from './';
import { useEnableProperties, useProperties, useVisiable } from '../common/useProperties';

const EVENTS = ['onClick', 'onDblClick', 'onMouseDo', 'onMouseUp', 'onMouseOout', 'onMouseO', 'onRemove', 'onRightClick'];

export interface UseLabel extends LabelProps {}

export default (props = {} as UseLabel) => {
  const [label, setLabel] = useState<BMap.Label>();
  const { map, offset, style, content, position, enableMassClear } = props;

  useMemo(() => {
    if (!BMap || !map) return;
    if (!label) {
      const opts = { offset, position, enableMassClear };
      const instance = new BMap.Label(content || '', opts);
      instance.setStyle({ ...style });
      map.addOverlay(instance);
      setLabel(instance);

      EVENTS.forEach((evnetName) => {
        if ((props as any)[evnetName]) {
          const name = evnetName.replace(/^on/, '').toLowerCase();
          instance.addEventListener(name, (props as any)[evnetName]);
        }
      });
    }
  }, [map]);

  useVisiable(label!, props);
  useProperties<BMap.Label, UseLabel>(label!, props, [
    'Style', 'Content', 'Position', 'Offset', 'Title', 'ZIndex'
  ]);
  useEnableProperties<BMap.Label, UseLabel>(label!, props, ['MassClear']);

  return {
    label, setLabel
  };
}