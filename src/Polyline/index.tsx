import React, { useEffect, useState, useMemo } from 'react';
import { OverlayProps } from '../common/map';
import usePolyline from './usePolyline';

export interface PolylineProps extends BMap.PolylineOptions, OverlayProps {
  /**
   * 设置折线的点数组
   */
  path: BMap.Point[];
}

export default (props = {} as PolylineProps) => {
  const { setPath } = usePolyline(props);
  useEffect(() => setPath(props.path), [props.path]);
  return null;
}
