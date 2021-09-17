import React, { useImperativeHandle, useEffect } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useTileLayer } from './useTileLayer';

export * from './useTileLayer';

export interface TileLayerProps extends OverlayProps, BMap.TileLayerOptions, BMap.TileLayer {
  visiable?: boolean;
}

export default React.forwardRef<TileLayerProps, TileLayerProps>((props, ref) => {
  const { tileLayer, setVisiable } = useTileLayer(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ ...props, tileLayer }), [tileLayer]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setVisiable(props.visiable!), [props.visiable]);
  return null;
});
