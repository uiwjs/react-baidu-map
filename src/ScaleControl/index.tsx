import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import useScaleControl from './useScaleControl';

export interface ScaleControlProps
  extends OverlayProps,
    BMap.ScaleControlOptions {}

export default React.forwardRef<ScaleControlProps, ScaleControlProps>(
  (props, ref) => {
    const { scaleControl } = useScaleControl(props);
    useImperativeHandle(ref, () => ({ ...props, scaleControl }), [
      scaleControl,
    ]);
    return null;
  },
);
