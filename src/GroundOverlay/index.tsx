import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import useGroundOverlay from './useGroundOverlay';


export interface GroundOverlayProps extends OverlayProps, BMap.GroundOverlayOptions, BMap.GroundOverlayEvents {
  /**
   * 设置矩形区域
   */
  bounds?: BMap.Bounds;
}

export default React.forwardRef<GroundOverlayProps, GroundOverlayProps>((props, ref) => {
  const { groundOverlay } = useGroundOverlay(props);
  useImperativeHandle(ref, () => ({ ...props, groundOverlay }), [groundOverlay]);
  return null;
})