import { useMapContext } from '@uiw/react-baidu-map-map';
import { useEffect, useState } from 'react';
// import defaultIconUrl from './markers.png';
import { noop, useEnableProperties, useEventProperties, useProperties, useVisiable } from '@uiw/react-baidu-map-utils';
import { MarkerProps } from '.';
import { defaultIconUrl } from './markers';

export interface UseMarker extends MarkerProps {}

const getIcons = (name: string) => {
  const icons = {
    simple_red: new BMap.Icon(defaultIconUrl, new BMap.Size(42 / 2, 66 / 2), {
      imageOffset: new BMap.Size(-454 / 2, -378 / 2),
      anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
    }),
    simple_blue: new BMap.Icon(defaultIconUrl, new BMap.Size(42 / 2, 66 / 2), {
      imageOffset: new BMap.Size(-454 / 2, -450 / 2),
      anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
    }),
    loc_red: new BMap.Icon(defaultIconUrl, new BMap.Size(46 / 2, 70 / 2), {
      imageOffset: new BMap.Size(-400 / 2, -378 / 2),
      anchor: new BMap.Size(46 / 2 / 2, 70 / 2),
    }),
    loc_blue: new BMap.Icon(defaultIconUrl, new BMap.Size(46 / 2, 70 / 2), {
      imageOffset: new BMap.Size(-400 / 2, -450 / 2),
      anchor: new BMap.Size(46 / 2 / 2, 70 / 2),
    }),
    dot_red: new BMap.Icon(defaultIconUrl, new BMap.Size(16 / 2, 16 / 2), {
      imageOffset: new BMap.Size(-216 / 2, -466 / 2),
      anchor: new BMap.Size(16 / 2 / 2, 16 / 2),
    }),
    dot_blue: new BMap.Icon(defaultIconUrl, new BMap.Size(16 / 2, 16 / 2), {
      imageOffset: new BMap.Size(-216 / 2, -486 / 2),
      anchor: new BMap.Size(16 / 2 / 2, 16 / 2),
    }),
    start: new BMap.Icon(defaultIconUrl, new BMap.Size(50 / 2, 80 / 2), {
      imageOffset: new BMap.Size(-400 / 2, -278 / 2),
      anchor: new BMap.Size(50 / 2 / 2, 80 / 2),
    }),
    end: new BMap.Icon(defaultIconUrl, new BMap.Size(50 / 2, 80 / 2), {
      imageOffset: new BMap.Size(-450 / 2, -278 / 2),
      anchor: new BMap.Size(50 / 2 / 2, 80 / 2),
    }),
    location: new BMap.Icon(defaultIconUrl, new BMap.Size(28 / 2, 40 / 2), {
      imageOffset: new BMap.Size(-248 / 2, -466 / 2),
      anchor: new BMap.Size(28 / 2 / 2, 40 / 2),
    }),
  };

  for (let i = 1; i <= 10; i++) {
    (icons as any)['red' + i] = new BMap.Icon(defaultIconUrl, new BMap.Size(42 / 2, 66 / 2), {
      imageOffset: new BMap.Size(0 - (42 / 2) * (i - 1), 0),
      anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
    });
  }

  for (let i = 1; i <= 10; i++) {
    (icons as any)['blue' + i] = new BMap.Icon(defaultIconUrl, new BMap.Size(42 / 2, 66 / 2), {
      imageOffset: new BMap.Size(0 - (42 / 2) * (i - 1), -132 / 2),
      anchor: new BMap.Size(42 / 2 / 2, 66 / 2),
    });
  }
  return icons[name as keyof typeof icons];
};

export function useMarker(props = {} as UseMarker) {
  const {
    position,
    animation,
    offset,
    icon,
    enableMassClear,
    enableDragging,
    enableClicking,
    raiseOnDrag,
    draggingCursor,
    rotation,
    shadow,
    title,
  } = props;
  const { map } = useMapContext();
  const [marker, setMarker] = useState<BMap.Marker>();

  useEffect(() => {
    if (!BMap || !map) return noop;
    const options = {
      offset,
      icon,
      enableMassClear,
      enableDragging,
      enableClicking,
      raiseOnDrag,
      draggingCursor,
      rotation,
      shadow,
      title,
    };
    const point = new BMap.Point(position.lng, position.lat);
    const newMarker = new BMap.Marker(point, options);
    map.addOverlay(newMarker);
    newMarker.setAnimation(animation);
    setMarker(newMarker);
    return () => {
      map.removeOverlay(newMarker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  const [type, setType] = useState(props.type || 'loc_blue');
  /**
   * 设置标注点 `图标`
   */
  useEffect(() => {
    if (map && marker && !icon && type) {
      const newIcon = getIcons(type as string);
      console.log('>>>>newIcon>>>', newIcon);
      newIcon.setImageSize(new BMap.Size(600 / 2, 600 / 2));
      marker.setIcon(newIcon);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, marker]);
  useVisiable(marker!, props);
  useEventProperties<BMap.Marker, UseMarker>(marker!, props, [
    'Click',
    'DblClick',
    'MouseDown',
    'MouseUp',
    'MouseOut',
    'MouseOver',
    'Remove',
    'InfowindowClose',
    'InfowindowOpen',
    'DragStart',
    'Dragging',
    'DragEnd',
    'RightClick',
  ]);
  useEnableProperties<BMap.Marker, UseMarker>(marker!, props, ['Dragging', 'MassClear', 'Clicking']);
  useProperties<BMap.Marker, UseMarker>(marker!, props, [
    'Icon',
    'Position',
    'Animation',
    'Offset',
    'Label',
    'Title',
    'Top',
    'ZIndex',
    'Rotation',
    'Shadow',
  ]);

  return {
    marker,
    setMarker,
    type,
    setType,
  };
}
