import React, { useEffect } from 'react';
import { OverlayProps } from '../common/map';
import useCurveLine from './useCurveLine';

export interface CurveLineProps extends BMapLib.CurveLineOptions, OverlayProps {
  /**
   * 设置弧线的点数组
   */
  path: BMap.Point[];
}

export default (props = {} as CurveLineProps) => {
  const { setPath } = useCurveLine(props);
  useEffect(() => setPath(props.path), [props.path]);
  return null;
}
