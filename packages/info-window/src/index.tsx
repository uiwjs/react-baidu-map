import { render } from 'react-dom';
import React, { Fragment, useMemo, useEffect, useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useInfoWindow } from './useInfoWindow';

export * from './useInfoWindow';

export interface InfoWindowProps extends OverlayProps, BMap.InfoWindowOptions, BMap.InfoWindowEvent {
  /**
   * 窗口是否打开
   * @default true
   */
  isOpen?: boolean;
  /**
   * 窗口位置经纬度
   */
  position: BMap.Point;
  /**
   * 展示文本内容，支持 HTML 内容字符串
   */
  content?: string | HTMLElement;
  /**
   * 信息窗口最大化时所显示内容，支持HTML内容
   */
  maxContent?: string;
  /**
   * 展示文本内容，类似于 content
   */
  children?: JSX.Element;
}

export default React.forwardRef<InfoWindowProps & { infoWindow?: BMap.InfoWindow }, InfoWindowProps>((props, ref) => {
  const { children } = props;
  const container = useMemo(() => document.createElement('div'), []);
  useEffect(() => render(<Fragment>{children}</Fragment>, container), [children]);

  const { infoWindow, setIsOpen } = useInfoWindow({
    ...props,
    content: props.children ? container : props.content,
  });

  useEffect(() => setIsOpen(props.isOpen!), [props.isOpen]);
  useImperativeHandle(ref, () => ({ ...props, infoWindow }));
  return null;
});
