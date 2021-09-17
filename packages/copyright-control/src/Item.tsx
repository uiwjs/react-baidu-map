import React from 'react';
import { useEffect, useState } from 'react';
import { usePrevious, useCreatePortal } from '@uiw/react-baidu-map-utils';

let uid: number = 1;

export interface CopyrightControlItemProps {
  /**
   * 自定义 DOM 元素。
   */
  children?: React.ReactNode;
  /**
   * 该版权信息所适用的地理区域
   */
  bounds?: BMap.Bounds;
  /**
   * 表示版权控件实例，`CopyrightControl` 给子组件注入的一个版权控件实例属性。
   */
  control?: BMap.CopyrightControl;
}

export function CopyrightControlItem(props: CopyrightControlItemProps = {}) {
  const { children, control, bounds } = props;
  const { portal, div, setChildren } = useCreatePortal();
  const [id] = useState(uid++);
  useEffect(() => {
    if (control) {
      setChildren(children);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, control]);

  const prevId = usePrevious(id);
  useEffect(() => {
    if (portal && control) {
      control.addCopyright({
        id,
        bounds,
        content: div!.innerHTML,
      });
    }
    return function () {
      if (prevId && control) {
        control.removeCopyright(prevId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, portal]);
  return portal || null;
}
