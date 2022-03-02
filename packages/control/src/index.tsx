import { render } from 'react-dom';
import React, { useImperativeHandle, useEffect, Fragment, useMemo } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useControl } from './useControl';
export * from './useControl';

export interface ControlProps extends OverlayProps {
  /**
   * 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置
   */
  anchor?: BMap.ControlAnchor;
  /**
   * 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置
   */
  offset?: BMap.Size;
  /**
   * 自定义 DOM 元素。
   */
  children?: React.ReactNode;
}

export default React.forwardRef<ControlProps & { control?: BMap.Control }, ControlProps>((props, ref) => {
  const { children } = props;
  const container = useMemo(() => document.createElement('div'), []);
  useEffect(() => render(<Fragment>{children}</Fragment>, container), [children]);
  const { control } = useControl({ ...props, children: container });
  useImperativeHandle(ref, () => ({ ...props, control, children: container }), [control]);
  return null;
});
