import { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePrevious } from '../common/hooks';

export interface UseCreatePortal {
  /**
   * 自定义 DOM 元素。
   */
  children?: React.ReactNode;
}

export default (props = {} as UseCreatePortal) => {
  const [div, setDiv] = useState<HTMLDivElement>();
  const [portal, setPortal] = useState();
  const [count, setCount] = useState(0);
  const [children, setChildren] = useState(props.children);
  useMemo(() => {
    if (!div) {
      const elm = document.createElement('div');
      const portalInstance = ReactDOM.createPortal(children, elm);
      setCount(count + 1);
      setDiv(elm);
      setPortal(portalInstance);
    }
  }, [div]);

  const prevCount = usePrevious(count);
  useMemo(() => {
    if (div && children && count === prevCount && count > 0) {
      const portalInstance = ReactDOM.createPortal(children, div);
      setCount(count + 1);
      setPortal(portalInstance);
    }
  }, [children, div]);

  return {
    div, setDiv,
    portal, setPortal,
    children, setChildren,
  };
}