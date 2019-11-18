import React, { useEffect } from 'react';
import { MapChildProps } from '../common/map';
import useInfoWindow from './useInfoWindow';

export interface InfoWindowProps extends MapChildProps, BMap.InfoWindowOptions, BMap.InfoWindowEvent {
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
}

export default function InfoWindow(props: InfoWindowProps) {
  const { setContent, setIsOpen, setTitle } = useInfoWindow(props);
  useEffect(() => setTitle(props.title), [props.title]);
  useEffect(() => setContent(props.content), [props.content]);
  useEffect(() => setIsOpen(props.isOpen!), [props.isOpen]);
  return null;
}