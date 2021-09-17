import React, { useEffect, useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { usePolygon } from './usePolygon';

export * from './usePolygon';
export interface PolygonProps extends BMap.PolygonOptions, BMap.PolygonEvents, OverlayProps {
  /**
   * 设置折线的点数组
   */
  path: BMap.Point[];
}

export default React.forwardRef<PolygonProps & { polygon?: BMap.Polygon }, PolygonProps>((props, ref) => {
  const { polygon, setPath } = usePolygon(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPath(props.path), [props.path]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ ...props, polygon }), [polygon, props]);
  return null;
});
