import React, { useEffect } from 'react';
import { MapChildProps } from '../common/map';
import usePolygon from './usePolygon';

export interface PolygonProps extends BMap.PolygonOptions, MapChildProps {
  /**
   * 设置折线的点数组
   */
  path: BMap.Point[];
}

export default (props = {} as PolygonProps) => {
  const { setPath } = usePolygon(props);
  useEffect(() => setPath(props.path), [props.path]);
  return null;
}
