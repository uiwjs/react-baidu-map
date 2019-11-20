import React, { useState, useEffect, useMemo } from 'react';
import { PointCollectionProps } from './';
import { useProperties } from '../common/useEnableProperties';

const EVENTS = ['onClick', 'onMouseOver', 'onMouseOut'];

export default (props = {} as PointCollectionProps) => {
  const { map, shape, color, size } = props;
  const [points, setPoints] = useState(props.points);
  const [pointCollection, setPointCollection] = useState<BMap.PointCollection>();

  const getPoints = (data: [number, number][] = []) => {
    const result: BMap.Point[] = [];
    data.forEach((item) => {
      result.push(new BMap.Point(item[0], item[1]))
    });
    return result;
  }
  useEffect(() => {
    if (!BMap || !map) return;
    // 判断当前浏览器是否支持绘制海量点
    if (!document.createElement('canvas').getContext) return;
    const opts  = { shape, color, size };
    if (!pointCollection) {
      if (!opts.size) opts.size = BMAP_POINT_SIZE_SMALL;
      if (!opts.shape) opts.shape = BMAP_POINT_SHAPE_WATERDROP;
      if (!opts.color) opts.color = '#d340c3';
      const pointCollection = new BMap.PointCollection(getPoints(points), opts);
      // pointCollection.clear();
      map.addOverlay(pointCollection);
      setPointCollection(pointCollection);
      EVENTS.forEach((evnetName) => {
        if ((props as any)[evnetName]) {
          const name = evnetName.replace(/^on/, '').toLowerCase();
          pointCollection.addEventListener(name, (props as any)[evnetName]);
        }
      });
    }
  }, [map]);

  useEffect(() => {
    if (pointCollection && points) {
      // pointCollection.clear();
      pointCollection.setPoints(getPoints(points));
    }
  }, [points, pointCollection]);

  useProperties<BMap.PointCollection, PointCollectionProps>(pointCollection!, props, ['Styles']);
  
  return {
    pointCollection, setPointCollection,
    points, setPoints,
  };
}