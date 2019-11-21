import React, { useEffect } from 'react';
import { OverlayProps } from '../common/map';
import useCircle from './useCircle';

export interface CircleProps extends BMap.CircleOptions, OverlayProps {
  /**
   * 设置折线的点数组
   */
  center: BMap.Point;
  /**
   * 设置圆形的半径，单位为米
   */
  radius: number;
}

export default (props = {} as CircleProps) => {
  useCircle(props);
  return null;
}
