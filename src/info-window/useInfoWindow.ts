import React, { useState, useEffect } from 'react';
import { InfoWindowProps } from './';

const EVENTS = ['close', 'open', 'maximize', 'restore', 'clickclose'];

export default (props: InfoWindowProps) => {
  const {
    BMap, map, position,
    ...opts
  } = props;
  const [infoWindow, useInfoWindow] = useState<BMap.InfoWindow>();
  const [isOpen, useIsOpen] = useState(opts.isOpen);
  const [title, useTitle] = useState(opts.title);
  const [content, useContent] = useState(opts.content);
  useEffect(() => {
    if (!BMap || !map) return;
    if (!infoWindow) {
      const win = new BMap.InfoWindow(content || '', { ...opts, title })
      useInfoWindow(win);
      EVENTS.forEach((evnetName) => {
        const name = `on${evnetName.charAt(0).toUpperCase()}${evnetName.slice(1)}` as keyof BMap.InfoWindowEvent;
        if (opts[name]) {
          win.addEventListener(evnetName, (opts as any)[name]);
        }
      });
      // addEventListener
    } else {
      if(opts.isOpen !== isOpen) {
        useIsOpen(opts.isOpen);
      }
      if(opts.content !== content) {
        useContent(opts.content);
        infoWindow.setContent(opts.content || '');
      }
      if(opts.title !== title) {
        useTitle(opts.title);
        infoWindow.setTitle(opts.title || '');
      }
      if(!infoWindow.isOpen() && position) {
        const point = new BMap.Point(position.lng, position.lat);
        map.openInfoWindow(infoWindow, point);
      }
      if(!isOpen) {
        map.closeInfoWindow();
      }
    }
  });
  return {
    infoWindow, useInfoWindow, isOpen, useIsOpen, title, useTitle, content, useContent
  }
}