import React, { useEffect } from 'react';
import { MapChildProps } from '../common/map';
import useMarkers from './useMarkers';

export interface MarkerProps extends MapChildProps, BMap.MarkerOptions {
  position: BMap.Point;
  /**
   * 此常量表示标注的动画效果。
   */
  animation?: BMap.Animation;
  type?: 'location' | 'end' | 'start' | 'simple_red' | 'simple_blue' | 'loc_blue' | 'loc_red' | 'dot_red' | 'dot_blue'
    | 'red1' | 'red2' | 'red3' | 'red4' | 'red5' | 'red6' | 'red7' | 'red8' | 'red9'
    | 'blue1' | 'blue2' | 'blue3' | 'blue4' | 'blue5' | 'blue6' | 'blue7' | 'blue8' | 'blue9';
}

export default (props: MarkerProps) => {
  const { setAnimation, setType } = useMarkers(props);
  useEffect(() => setAnimation(props.animation), [props.animation]);
  useEffect(() => setType(props.type!), [props.type]);
  return null;
}
