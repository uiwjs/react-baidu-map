import { useMemo, useState, useEffect } from 'react';
import { LabelProps } from './';

const EVENTS = ['onClick', 'onDblClick', 'onMouseDo', 'onMouseUp', 'onMouseOout', 'onMouseO', 'onRemove', 'onRightClick'];

export default (props = {} as LabelProps) => {
  const [label, setLabel] = useState<BMap.Label>();
  const [content, setContent] = useState(props.content);
  const [style, setStyle] = useState(props.style);
  const [position, setPosition] = useState(props.position);
  const { map, offset, enableMassClear } = props;

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

  useEffect(() => {
    if(label && content) {
      label.setContent(content);
    }
  }, [content, label]);

  useEffect(() => {
    if(label && style) {
      label.setStyle({ ...style });
    }
  }, [style, label]);

  useEffect(() => {
    if(label && position) {
      label.setPosition(position);
    }
  }, [position, label]);

  return {
    label, setLabel,
    content, setContent,
    style, setStyle,
    position, setPosition,
  };
}