import React, { useState, useEffect, useMemo } from 'react';
import { InfoWindowProps } from './';

const EVENTS = ['close', 'open', 'maximize', 'restore', 'clickclose'];

export default (props = {} as InfoWindowProps) => {
  const { BMap, map, position, ...opts } = props;
  const [infoWindow, setInfoWindow] = useState<BMap.InfoWindow>();
  const [isOpen, setIsOpen] = useState(opts.isOpen === undefined ? true : opts.isOpen);
  const [title, setTitle] = useState(opts.title);
  const [content, setContent] = useState(opts.content);
  useMemo(() => {
    if (!BMap || !map) return;
    if (!infoWindow) {
      const win = new BMap.InfoWindow('', { ...opts, title })
      setInfoWindow(win);
      EVENTS.forEach((evnetName) => {
        const name = `on${evnetName.charAt(0).toUpperCase()}${evnetName.slice(1)}` as keyof BMap.InfoWindowEvent;
        if (opts[name]) {
          win.addEventListener(evnetName, (opts as any)[name]);
        }
      });
    }
  }, [map]);

  useEffect(() => {
    if (map && BMap && infoWindow) {
      if(!isOpen) {
        map.closeInfoWindow();
      } else if (position) {
        const point = new BMap.Point(position.lng, position.lat);
        map.openInfoWindow(infoWindow, point);
      }
    }
  }, [isOpen, infoWindow]);

  useEffect(() => {
    if (map && BMap && infoWindow && content) {
      infoWindow.setContent(content);
    }
  }, [content, infoWindow]);

  useEffect(() => {
    if (map && BMap && infoWindow) {
      infoWindow.setTitle(title!);
    }
  }, [title]);

  return {
    /**
     * 信息窗口实例对象
     */
    infoWindow,
    /**
     * 更新 信息窗口实例对象
     */
    setInfoWindow, isOpen, setIsOpen, title, setTitle, content, setContent
  }
}