import { useState, useEffect, useMemo } from 'react';
import { PolygonProps } from './';
import { useEnableProperties, useProperties } from '../common/useEnableProperties';

export default (props = {} as PolygonProps) => {
  const { map, strokeColor, fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle, enableMassClear, enableEditing, enableClicking } = props;
  const [polygon, setPolygon] = useState<BMap.Polygon>();
  const [path, setPath] = useState(props.path || []);

  const opts = { strokeColor, fillColor, strokeWeight, strokeOpacity, fillOpacity, strokeStyle, enableMassClear, enableEditing, enableClicking }
  useMemo(() => {
    if (map && !polygon) {
      const points = (props.path || []).map((item) => new BMap.Point(item.lng, item.lat));
      const instance = new BMap.Polygon(points, opts);
      map.addOverlay(instance);
      setPolygon(instance);
    }
  }, [map, polygon]);

  useEffect(() => {
    if (path && polygon) {
      const points = path.map((item) => new BMap.Point(item.lng, item.lat));
      polygon.setPath(points);
    }
  }, [polygon, path]);

  useEnableProperties<BMap.Polygon, PolygonProps>(polygon!, props, ['Editing', 'MassClear']);
  // PositionAt
  useProperties<BMap.Polygon, PolygonProps>(polygon!, props, ['StrokeColor', 'StrokeOpacity', 'FillColor', 'FillOpacity', 'StrokeWeight', 'StrokeStyle']);

  return {
    polygon, setPolygon,
    path, setPath
  }
}

