import React, { Component } from 'react';
import { MapChildProps } from '../common/map';
import defaultIconUrl from './markers.png';

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

export default class Marker extends Component<MarkerProps> {
  static defaultProps = {
    type: 'loc_blue',
  }
  componentDidMount() {
    this.addMarker();
  }
  UNSAFE_componentWillReceiveProps(nextProps: MarkerProps) {
    const { map, BMap } = nextProps;
    if (map !== this.props.map || BMap !== this.props.BMap) {
      this.addMarker();
    }
  }
  getIcons = (name: string) => {
    const icons = {
      'simple_red': new BMap.Icon(defaultIconUrl , new BMap.Size(42 / 2, 66 / 2), {
        imageOffset: new BMap.Size(-454 / 2, -378 / 2),
        anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
      }),
      'simple_blue': new BMap.Icon(defaultIconUrl , new BMap.Size(42 / 2, 66 / 2), {
        imageOffset: new BMap.Size(-454 / 2, -450 / 2),
        anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
      }),
      'loc_red': new BMap.Icon(defaultIconUrl , new BMap.Size(46 / 2, 70 / 2), {
        imageOffset: new BMap.Size(-400 / 2, -378 / 2),
        anchor: new BMap.Size(46 / 2 / 2, 70 / 2),
      }),
      'loc_blue': new BMap.Icon(defaultIconUrl , new BMap.Size(46 / 2, 70 / 2), {
        imageOffset: new BMap.Size(-400 / 2, -450 / 2),
        anchor: new BMap.Size(46 / 2 / 2, 70 / 2),
      }),
      'dot_red': new BMap.Icon(defaultIconUrl , new BMap.Size(16 / 2, 16 / 2), {
        imageOffset: new BMap.Size(-216 / 2, -466 / 2),
        anchor: new BMap.Size(16 / 2 / 2, 16 / 2),
      }),
      'dot_blue': new BMap.Icon(defaultIconUrl , new BMap.Size(16 / 2, 16 / 2), {
        imageOffset: new BMap.Size(-216 / 2, -486 / 2),
        anchor: new BMap.Size(16 / 2 / 2, 16 / 2),
      }),
      'start': new BMap.Icon(defaultIconUrl , new BMap.Size(50 / 2, 80 / 2), {
        imageOffset: new BMap.Size(-400 / 2, -278 / 2),
        anchor: new BMap.Size(50 / 2 / 2, 80 / 2),
      }),
      'end': new BMap.Icon(defaultIconUrl , new BMap.Size(50 / 2, 80 / 2), {
        imageOffset: new BMap.Size(-450 / 2, -278 / 2),
        anchor: new BMap.Size(50 / 2 / 2, 80 / 2),
      }),
      'location': new BMap.Icon(defaultIconUrl , new BMap.Size(28 / 2, 40 / 2), {
        imageOffset: new BMap.Size(-248 / 2, -466 / 2),
        anchor: new BMap.Size(28 / 2 / 2, 40 / 2),
      }),
    }

    for (var i = 1; i <= 10; i++) {
      (icons as any)['red' + i] = new BMap.Icon(defaultIconUrl , new BMap.Size(42 / 2, 66 / 2), {
        imageOffset: new BMap.Size(0 - 42 / 2 * (i - 1), 0),
        anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
      });
    }

    for (var i = 1; i <= 10; i++) {
      (icons as any)['blue' + i] = new BMap.Icon(defaultIconUrl , new BMap.Size(42 / 2, 66 / 2), {
        imageOffset: new BMap.Size(0 - 42 / 2 * (i - 1), - 132 / 2),
        anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
      });
    }
    return icons[name as keyof typeof icons];
  }
  addMarker = () => {
    const {
      map, BMap, position, animation, type,
      // MarkerOptions
      offset, icon, enableMassClear, enableDragging, enableClicking, raiseOnDrag, draggingCursor, rotation, shadow, title,
    } = this.props;
    if (!map || !BMap) {
      return;
    }
    const options = { offset, icon, enableMassClear, enableDragging, enableClicking, raiseOnDrag, draggingCursor, rotation, shadow, title }
    if(!options.icon && this.getIcons(type as string)) {
      options.icon = this.getIcons(type as string);
      options.icon.setImageSize(new BMap.Size(600 / 2, 600 / 2));
    }
    const point = new BMap.Point(position.lng, position.lat);
    const marker = new BMap.Marker(point, options);
    map.addOverlay(marker);
    if (animation) {
      marker.setAnimation(animation);
    }
  }
  render() {
    return null;
  }
}