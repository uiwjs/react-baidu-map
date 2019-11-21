import React, { useEffect, useImperativeHandle } from 'react';
import usePointCollection from './usePointCollection';
import { OverlayProps } from '../common/map';

export interface PointCollectionProps extends OverlayProps, BMap.PointCollectionOption, BMap.PointCollectionEvents {
  points?: [number, number][];
}

export default React.forwardRef<PointCollectionProps & { pointCollection?: BMap.PointCollection }, PointCollectionProps>((props, ref) => {
  const { pointCollection, setPoints } = usePointCollection(props);
  useEffect(() => setPoints(props.points), [props.points]);
  useImperativeHandle(ref, () => ({ ...props, pointCollection }), [pointCollection]);
  return null;
});
