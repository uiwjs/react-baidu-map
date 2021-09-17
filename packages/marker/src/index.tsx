import React, { useEffect, useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useMarker } from './useMarker';

export * from './useMarker';
export interface MarkerProps extends OverlayProps, BMap.MarkerEvents, BMap.MarkerOptions {
  /**
   * **`必填`** 设置标注的地理坐标。
   */
  position: BMap.Point;
  /**
   * 此常量表示标注的动画效果。
   */
  animation?: BMap.Animation;
  /**
   * 标点类型
   */
  type?:
    | 'location'
    | 'end'
    | 'start'
    | 'simple_red'
    | 'simple_blue'
    | 'loc_blue'
    | 'loc_red'
    | 'dot_red'
    | 'dot_blue'
    | 'red1'
    | 'red2'
    | 'red3'
    | 'red4'
    | 'red5'
    | 'red6'
    | 'red7'
    | 'red8'
    | 'red9'
    | 'blue1'
    | 'blue2'
    | 'blue3'
    | 'blue4'
    | 'blue5'
    | 'blue6'
    | 'blue7'
    | 'blue8'
    | 'blue9';
}

export default React.forwardRef<MarkerProps & { marker?: BMap.Marker }, MarkerProps>((props, ref) => {
  const { marker, setType } = useMarker(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => props.type && setType(props.type), [props.type]);
  useImperativeHandle(ref, () => ({ ...props, marker }));
  return null;
});
