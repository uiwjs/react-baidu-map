import React, { useState, useEffect } from 'react';
import { InfoWindowProps } from './';

// const EVENTS = ['close', 'open', 'maximize', 'restore', 'clickclose'];

export default (props: InfoWindowProps) => {
  const { map, position, width, height, maxWidth, offset, title, enableAutoPan, enableCloseOnClick, enableMessage, message } = props;
  const opts: BMap.InfoWindowOptions = { width, height, maxWidth, offset, title, enableAutoPan, enableCloseOnClick, enableMessage, message };
  const [infoWindow, useInfoWindow] = useState<BMap.InfoWindow>();
  const [isOpen, useIsOpen] = useState(props.isOpen);
  useEffect(() => {
    if (!infoWindow) {
      useInfoWindow(new BMap.InfoWindow(props.content || '', opts));
    }
    if (infoWindow && isOpen && position && map) {
      const point = new BMap.Point(props.position.lng, props.position.lat);
      map.openInfoWindow(infoWindow, point);
    }

    if (infoWindow && map && !props.isOpen) {
      map.closeInfoWindow();
      useIsOpen(props.isOpen);
    }
    if (infoWindow && map && props.isOpen) {
      const point = new BMap.Point(position.lng, position.lat);
      map.openInfoWindow(infoWindow, point);
      useIsOpen(props.isOpen);
    }
  });
  return {
    infoWindow, useInfoWindow, isOpen, useIsOpen,
  }
}