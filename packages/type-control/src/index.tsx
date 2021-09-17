import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useMapTypeControl } from './useMapTypeControl';

export * from './useMapTypeControl';
export interface MapTypeControlProps extends OverlayProps, BMap.MapTypeControlOptions {}

export default React.forwardRef<MapTypeControlProps, MapTypeControlProps>((props, ref) => {
  const { mapTypeControl } = useMapTypeControl(props);
  useImperativeHandle(ref, () => ({ ...props, mapTypeControl }), [mapTypeControl, props]);
  return null;
});
