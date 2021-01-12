import React, { useImperativeHandle, useEffect } from 'react';
import { OverlayProps } from '../common/map';
import useTileLayer from './useTileLayer';

export interface TileLayerProps extends OverlayProps, BMap.TileLayerOptions, BMap.TileLayer {
  visiable?: boolean;
}

export default React.forwardRef<TileLayerProps, TileLayerProps>((props, ref) => {
  const { tileLayer, setVisiable } = useTileLayer(props);
  useImperativeHandle(ref, () => ({ ...props, tileLayer }), [tileLayer]);
  useEffect(() => setVisiable(props.visiable!), [props.visiable]);
  return null;
});
