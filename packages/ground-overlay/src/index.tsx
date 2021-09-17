import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useGroundOverlay } from './useGroundOverlay';

export * from './useGroundOverlay';

export interface GroundOverlayProps extends OverlayProps, BMap.GroundOverlayOptions, BMap.GroundOverlayEvents {
  /**
   * 设置矩形区域
   */
  bounds?: BMap.Bounds;
}

export default React.forwardRef<GroundOverlayProps, GroundOverlayProps>((props, ref) => {
  const { groundOverlay } = useGroundOverlay(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ ...props, groundOverlay }), [groundOverlay]);
  return null;
});
