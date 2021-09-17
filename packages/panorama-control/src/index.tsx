import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { usePanoramaControl } from './usePanoramaControl';

export * from './usePanoramaControl';
export interface PanoramaControlProps extends OverlayProps {}

export default React.forwardRef<PanoramaControlProps, PanoramaControlProps>((props, ref) => {
  const { panoramaControl } = usePanoramaControl(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ ...props, panoramaControl }), [panoramaControl]);
  return null;
});
