import { useState, useEffect, useMemo } from 'react';
import defaultIconUrl from './markers.png';
import { MarkerProps } from '.';
import { useEnableProperties, useProperties, useVisiable } from '../common/useProperties';

export interface UseMarker extends MarkerProps{}

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

export default (props = {} as UseMarker) => {
  const {
    map, position, animation,
    offset, icon, enableMassClear, enableDragging, enableClicking, raiseOnDrag, draggingCursor, rotation, shadow, title,
  } = props;
  const [type, setType] = useState(props.type || 'loc_blue');
  const [marker, setMarker] = useState();
  const options = { offset, icon, enableMassClear, enableDragging, enableClicking, raiseOnDrag, draggingCursor, rotation, shadow, title };
  useMemo(() => {
    if (!BMap || !map) return;
    if (!marker) {
      const point = new BMap.Point(position.lng, position.lat);
      const marker = new BMap.Marker(point, options);
      map.addOverlay(marker);
      marker.setAnimation(animation);
      setMarker(marker);
    }
  }, [map]);

  /**
   * 设置标注点 `图标`
   */
  useEffect(() => {
    if(map && marker && !icon && type) {
      const newIcon = getIcons(type as string);
      newIcon.setImageSize(new BMap.Size(600 / 2, 600 / 2));
      marker.setIcon(newIcon);
    }
  }, [type, marker]);
  useVisiable(marker, props);
  useEnableProperties<BMap.Marker, UseMarker>(marker!, props, ['Dragging', 'MassClear', 'Clicking']);
  useProperties<BMap.Marker, UseMarker>(marker!, props, ['Icon', 'Position', 'Animation', 'Offset', 'Label', 'Title', 'Top', 'ZIndex', 'Rotation', 'Shadow']);

  return {
    marker, setMarker,
    type, setType,
  }
}