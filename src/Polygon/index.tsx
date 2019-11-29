import React, { useEffect, useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import usePolygon from './usePolygon';

export interface PolygonProps extends BMap.PolygonOptions, BMap.PolygonEvents, OverlayProps {
  /**
   * 设置折线的点数组
   */
  path: BMap.Point[];
}

export default React.forwardRef<PolygonProps & { polygon?: BMap.Polygon }, PolygonProps>((props, ref) => {
  const { polygon, setPath } = usePolygon(props);
  useEffect(() => setPath(props.path), [props.path]);
  useImperativeHandle(ref, () => ({ ...props, polygon }), [polygon]);
  return null;
});
