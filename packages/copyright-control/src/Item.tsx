import React from 'react';
import { useEffect, useState } from 'react';
import { usePrevious, usePortal } from '@uiw/react-baidu-map-utils';

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
  const [id] = useState(uid++);
  const { container, Portal } = usePortal();
  const prevId = usePrevious(id);
  useEffect(() => {
    if (control) {
      control.addCopyright({
        id,
        bounds,
        content: container!.innerHTML,
      });
    }
    return function () {
      if (prevId && control) {
        control.removeCopyright(prevId);
      }
    };
  }, [bounds, children, container, control, id, prevId]);

  return <Portal>{children}</Portal>;
}
