import React, { useImperativeHandle } from 'react';
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
  const { control, ControlPortal } = useControl(props);
  useImperativeHandle(ref, () => ({ ...props, control }), [control, props]);
  return <ControlPortal>{props.children}</ControlPortal>;
});
