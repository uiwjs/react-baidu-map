import React, { useEffect, useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { usePointCollection } from './usePointCollection';

export * from './usePointCollection';
export interface PointCollectionProps extends OverlayProps, BMap.PointCollectionOption, BMap.PointCollectionEvents {
  points?: [number, number][];
}

export default React.forwardRef<
  PointCollectionProps & { pointCollection?: BMap.PointCollection },
  PointCollectionProps
>((props, ref) => {
  const { pointCollection, setPoints } = usePointCollection(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPoints(props.points), [props.points]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ ...props, pointCollection }), [pointCollection]);
  return null;
});
