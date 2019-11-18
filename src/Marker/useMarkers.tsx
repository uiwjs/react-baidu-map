import { useState, useEffect } from 'react';
import defaultIconUrl from './markers.png';
import { MarkerProps } from './';

export interface UseMarkers extends MarkerProps{}

export default (props = {} as UseMarkers) => {
  const {
    map, position,
    offset, icon, enableMassClear, enableDragging, enableClicking, raiseOnDrag, draggingCursor, rotation, shadow, title,
  } = props;
  const [type, setType] = useState(props.type || 'loc_blue');
  const [marker, setMarker] = useState();
  const [animation, setAnimation] = useState(props.animation);

  useEffect(() => {
    if (!BMap || !map) return;

    const getIcons = (name: string) => {
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
    if (!marker) {
      const options = { offset, icon, enableMassClear, enableDragging, enableClicking, raiseOnDrag, draggingCursor, rotation, shadow, title };
      /**
       * 设置标注点 `图标`
       */
      if(!icon && getIcons(type as string)) {
        options.icon = getIcons(type as string);
        options.icon.setImageSize(new BMap.Size(600 / 2, 600 / 2));
      }
      const point = new BMap.Point(position.lng, position.lat);
      const marker = new BMap.Marker(point, options);
      if (animation) {
        marker.setAnimation(animation);
      }
      map.addOverlay(marker);
      setMarker(marker);
    } else {
      if (props.animation !== animation) {
        marker.setAnimation(props.animation);
        setAnimation(props.animation);
      }

      if (props.type !== type && getIcons(type as string)) {
        const newIcon = getIcons(type as string);
        newIcon.setImageSize(new BMap.Size(600 / 2, 600 / 2));
        marker.setIcon(newIcon);
      }
    }
  });
  return {
    marker, setMarker,
    animation, setAnimation,
    type, setType,
  }
}