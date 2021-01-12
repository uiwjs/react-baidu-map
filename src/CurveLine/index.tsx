import React, { useEffect, useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import useCurveLine from './useCurveLine';

export interface CurveLineProps extends BMapLib.CurveLineOptions, BMapLib.CurveLineEvents, OverlayProps {
  /**
   * 设置弧线的点数组
   */
  path: BMap.Point[];
}

export default React.forwardRef<CurveLineProps & { curveLine?: BMapLib.CurveLine }, CurveLineProps>((props, ref) => {
  const { curveLine, BMapLib, setPath } = useCurveLine(props);
  useEffect(() => setPath(props.path), [props.path]);
  useImperativeHandle(ref, () => ({ ...props, curveLine, BMapLib }));
  return null;
});
