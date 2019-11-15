import React, { Component } from 'react';
import { MapChildProps } from '../common/map';

export interface MarkerProps extends MapChildProps, BMap.MarkerOptions {
  position: BMap.Point;
  /**
   * 此常量表示标注的动画效果。
   */
  animation?: BMap.Animation;
}

export default class Marker extends Component<MarkerProps> {
  componentDidMount() {
    const { map, BMap } = this.props;
    if (map && BMap) {
      this.addMarker();
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps: MarkerProps) {
    const { map, BMap } = nextProps;
    if (map !== this.props.map || BMap !== this.props.BMap) {
      this.addMarker();
    }
  }
  addMarker = () => {
    const {
      map, BMap, position, animation,
      // MarkerOptions
      offset, icon, enableMassClear, enableDragging, enableClicking, raiseOnDrag, draggingCursor, rotation, shadow, title,
    } = this.props;
    if (!map || !BMap) {
      return;
    }

    const point = new BMap.Point(position.lng, position.lat);
    const marker = new BMap.Marker(point, { offset, icon, enableMassClear, enableDragging, enableClicking, raiseOnDrag, draggingCursor, rotation, shadow, title });
    map.addOverlay(marker);
    if (animation) {
      marker.setAnimation(animation);
    }
  }
  render() {
    return null;
  }
}