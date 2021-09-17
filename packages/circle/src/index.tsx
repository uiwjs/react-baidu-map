import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useCircle } from './useCircle';
export * from './useCircle';

export interface CircleProps extends OverlayProps, BMap.CircleOptions, BMap.CircleEvents {
  /**
   * 设置折线的点数组
   */
  center: BMap.Point;
  /**
   * 设置圆形的半径，单位为米
   */
  radius: number;
}

export default React.forwardRef<CircleProps & { circle?: BMap.Circle }, CircleProps>((props, ref) => {
  const { circle } = useCircle(props);
  useImperativeHandle(ref, () => ({ ...props, circle }));
  return null;
});
