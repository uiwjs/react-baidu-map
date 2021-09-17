import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useScaleControl } from './useScaleControl';

export * from './useScaleControl';
export interface ScaleControlProps extends OverlayProps, BMap.ScaleControlOptions {}

export default React.forwardRef<ScaleControlProps, ScaleControlProps>((props, ref) => {
  const { scaleControl } = useScaleControl(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ ...props, scaleControl }), [scaleControl]);
  return null;
});
