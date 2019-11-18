import React, { useEffect } from 'react';
import usePointCollection from './usePointCollection';
import { MapChildProps } from '../common/map';

export interface PointCollectionProps extends MapChildProps, BMap.PointCollectionOption, BMap.PointCollectionEvents {
  points?: [number, number][];
}

export default (props: PointCollectionProps = {}) => {
  const { setPoints } = usePointCollection(props);
  useEffect(() => setPoints(props.points), [props.points]);
  return null;
}