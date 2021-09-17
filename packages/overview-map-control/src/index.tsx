import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useOverviewMapControl } from './useOverviewMapControl';

export * from './useOverviewMapControl';
export interface OverviewMapControlProps extends OverlayProps, BMap.OverviewMapControlOptions {
  /**
   * 缩略地图开合状态发生变化后触发此事件
   */
  onViewChanged?(event: { type: any; target: any; isOpen: boolean }): void;
  /**
   * 缩略地图开合状态发生变化过程中触发此事件
   */
  onViewChanging?(event: { type: any; target: any }): void;
}

export default React.forwardRef<OverviewMapControlProps, OverviewMapControlProps>((props, ref) => {
  const { overviewMapControl } = useOverviewMapControl(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ ...props, overviewMapControl }), [overviewMapControl]);
  return null;
});
