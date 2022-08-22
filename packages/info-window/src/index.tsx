import React, { Fragment, useEffect, useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useInfoWindow } from './useInfoWindow';

export * from './useInfoWindow';

export interface InfoWindowProps extends OverlayProps, Omit<BMap.InfoWindowOptions, 'title'>, BMap.InfoWindowEvent {
  /**
   * 窗口是否打开
   * @default true
   */
  isOpen?: boolean;
  /** 窗口位置经纬度 */
  position: BMap.Point;
  /** 展示文本内容，支持 HTML 内容字符串 */
  content?: string | HTMLElement;
  /** 信息窗标题文字 */
  title?: string | HTMLElement | JSX.Element;
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
  const { infoWindow, setIsOpen, Portal, PortalTitle } = useInfoWindow(props);

  useEffect(() => setIsOpen(props.isOpen!), [props.isOpen, setIsOpen]);
  useImperativeHandle(ref, () => ({ ...props, infoWindow }));
  return (
    <Fragment>
      <Portal>{props.children}</Portal>
      <PortalTitle>{props.title as any}</PortalTitle>
    </Fragment>
  );
});
