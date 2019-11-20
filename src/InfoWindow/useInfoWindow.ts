import React, { useState, useEffect, useMemo } from 'react';
import { InfoWindowProps } from './';
import { useEnableProperties, useProperties } from '../common/useEnableProperties';

const EVENTS = ['close', 'open', 'maximize', 'restore', 'clickclose'];

export interface UseInfoWindow extends InfoWindowProps {}

export default (props = {} as UseInfoWindow) => {
  const { map, position, ...opts } = props;
  const [infoWindow, setInfoWindow] = useState<BMap.InfoWindow>();
  const [isOpen, setIsOpen] = useState(opts.isOpen === undefined ? true : opts.isOpen);
  useMemo(() => {
    if (!BMap || !map) return;
    if (!infoWindow) {
      const win = new BMap.InfoWindow('', { ...opts })
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

  useProperties<BMap.InfoWindow, UseInfoWindow>(infoWindow!, props, [
    'Width', 'Height', 'Title', 'Content', 'MaxContent'
  ]);
  useEnableProperties<BMap.InfoWindow, UseInfoWindow>(infoWindow!, props, ['CloseOnClick', 'Maximize', 'AutoPan']);

  return {
    /**
     * 信息窗口实例对象
     */
    infoWindow,
    /**
     * 更新 信息窗口实例对象
     */
    setInfoWindow, isOpen, setIsOpen
  }
}