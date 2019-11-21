import React, { useEffect, useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import useInfoWindow from './useInfoWindow';

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
  content?: string;
  /**
   * 信息窗口最大化时所显示内容，支持HTML内容
   */
  maxContent?: string;
}

export default React.forwardRef<InfoWindowProps & { infoWindow?: BMap.InfoWindow }, InfoWindowProps>((props, ref) => {
  const { infoWindow, setIsOpen } = useInfoWindow(props);
  useEffect(() => setIsOpen(props.isOpen!), [props.isOpen]);
  useImperativeHandle(ref, () => ({ ...props, infoWindow }));
  return null;
});
