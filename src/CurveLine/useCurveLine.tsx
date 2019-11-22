import { useState, useEffect, useMemo } from 'react';
import { useEnableProperties, useProperties, useVisiable } from '../common/hooks';
import { CurveLineProps } from '.';
import { requireScript } from '../utils/requireScript';

export interface UseCurveLine extends CurveLineProps {
}

export default (props = {} as UseCurveLine) => {
  const { map,  strokeColor, strokeWeight, strokeOpacity, strokeStyle, enableMassClear, enableEditing, enableClicking, icons, } = props;
  const [curveLine, setCurveLine] = useState<BMapLib.CurveLine>();
  const libSDK = window.BMapLib;
  const [bMapLib, setBMapLib] = useState<typeof BMapLib>(libSDK);
  const [loadMapLib, setLoadBMapLib] = useState(false || !!libSDK);
  const opts = { strokeColor, strokeWeight, strokeOpacity, strokeStyle, enableMassClear, enableClicking, icons, }
  useMemo(() => {
    if (map && bMapLib && !curveLine) {
      const points = (props.path || []).map((item) => new BMap.Point(item.lng, item.lat));
      const instance = new BMapLib.CurveLine(points, opts);
      map.addOverlay(instance);
      setCurveLine(instance);
    }
    if (!bMapLib && !loadMapLib) {
      setLoadBMapLib(true);
      requireScript('//api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js').then(() => {
        if (window.BMapLib) {
          setBMapLib(window.BMapLib);
        }
      }).catch(() => {

      });
    }
  }, [map, loadMapLib, bMapLib, curveLine]);

  const [path, setPath] = useState(props.path || []);
  useEffect(() => {
    if (curveLine && props.path && path && JSON.stringify(path) !== JSON.stringify(props.path)) {
      const points = path.map((item) => new BMap.Point(item.lng, item.lat));
      curveLine.setPath(points);
    }
  }, [curveLine, props.path]);

  useVisiable(curveLine!, props);
  useEnableProperties<BMapLib.CurveLine, UseCurveLine>(curveLine!, props, [ 'Editing', 'MassClear']);
  // PositionAt
  useProperties<BMapLib.CurveLine, UseCurveLine>(curveLine!, props, [
    'StrokeColor', 'StrokeOpacity', 'StrokeWeight', 'StrokeStyle'
  ]);

  return {
    curveLine, setCurveLine,
    BMapLib: bMapLib,
    path, setPath
  }
}

