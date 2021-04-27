import React, { useEffect, useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import usePolyline from './usePolyline';

export interface PolylineProps extends BMap.PolylineOptions, BMap.PolylineEvents, OverlayProps {
  /**
   * 设置折线的点数组
   */
  path: BMap.Point[];
}

export default React.forwardRef<PolylineProps & { polygon?: BMap.Polygon }, PolylineProps>((props, ref) => {
  const { polyline, setPath } = usePolyline(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPath(props.path), [props.path]);
  useImperativeHandle(ref, () => ({ ...props, polyline }), [polyline, props]);
  return null;
});
