import { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { ControlProps } from './';
import { usePrevious, useProperties, useVisiable } from '../common/hooks';
import getControl from './getControl';

export interface UseControl extends ControlProps {}

export default (props = {} as UseControl) => {
  const [control, setControl] = useState<BMap.Control>();
  const { map, children, defaultOffset, defaultAnchor } = props;

  const [div, setDiv] = useState<HTMLDivElement>();
  const [portal, setPortal] = useState();
  const [count, setCount] = useState(0);
  useMemo(() => {
    if (map && !control) {
      const elm = document.createElement('div');
      const portalInstance = ReactDOM.createPortal(children, elm);
      const Control = getControl();
      const instance = new Control(elm, defaultAnchor, defaultOffset);
      setCount(count + 1);
      setDiv(elm);
      map.addOverlay(instance);
      setPortal(portalInstance);
      setControl(instance);
    }
  }, [map, control]);

  const prevCount = usePrevious(count);
  useMemo(() => {
    if (map && div && children && count === prevCount && count > 0) {
      const portalInstance = ReactDOM.createPortal(children, div);
      setCount(count + 1);
      setPortal(portalInstance);
    }
  }, [children, control]);

  useVisiable(control!, props);
  useProperties<BMap.Control, UseControl>(control!, props, [
    'Anchor', 'Offset',
  ]);
  return {
    portal, setPortal,
    control, setControl
  };
}