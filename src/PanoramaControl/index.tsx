import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import usePanoramaControl from './usePanoramaControl';

export interface PanoramaControlProps extends OverlayProps {}

export default React.forwardRef<PanoramaControlProps, PanoramaControlProps>(
  (props, ref) => {
    const { panoramaControl } = usePanoramaControl(props);
    useImperativeHandle(ref, () => ({ ...props, panoramaControl }), [
      panoramaControl,
    ]);
    return null;
  },
);
