import { useState, useEffect, useMemo } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { requireScript } from '@uiw/react-baidu-map-utils';
import { useEnableProperties, useProperties, useVisiable, useEventProperties } from '@uiw/react-baidu-map-utils';
import { CurveLineProps } from '.';

export interface UseCurveLine extends CurveLineProps {}

export function useCurveLine(props = {} as UseCurveLine) {
  const {
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing = false,
    enableClicking,
    icons,
  } = props;
  const { map } = useMapContext();
  const [curveLine, setCurveLine] = useState<BMapLib.CurveLine>();
  const libSDK = window.BMapLib;
  const [bMapLib, setBMapLib] = useState<typeof BMapLib>(libSDK);
  const [loadMapLib, setLoadBMapLib] = useState(false || !!libSDK);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const opts = {
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking,
    icons,
  };
  useMemo(() => {
    // 如果第一次加载，会执行下面的
    if (map && bMapLib && !curveLine) {
      if (bMapLib.CurveLine) {
        const points = (props.path || []).map((item) => new BMap.Point(item.lng, item.lat));
        const instance = new BMapLib.CurveLine(points, opts);
        map.addOverlay(instance);
        setCurveLine(instance);
      }
    }

    // 如果 bMapLib 已经加载过，会执行下面的
    if (map && bMapLib && !bMapLib.CurveLine) {
      requireScript('//api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js')
        .then(() => {
          if (window.BMapLib) {
            const newMapLib = Object.assign(window.BMapLib, bMapLib);
            setBMapLib(newMapLib);

            const points = (props.path || []).map((item) => new BMap.Point(item.lng, item.lat));
            const instance = new BMapLib.CurveLine(points, opts);
            map.addOverlay(instance);
            setCurveLine(instance);
          }
        })
        .catch(() => {});
    }

    // 如果第一次加载，会执行下面的
    if (!bMapLib && !loadMapLib) {
      setLoadBMapLib(true);
      requireScript('//api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js')
        .then(() => {
          if (window.BMapLib) {
            setBMapLib(window.BMapLib);
          }
        })
        .catch(() => {});
    }
  }, [map, bMapLib, curveLine, loadMapLib, props.path, opts]);

  const [path, setPath] = useState(props.path || []);
  useEffect(() => {
    if (curveLine && props.path && path && JSON.stringify(path) !== JSON.stringify(props.path)) {
      const points = path.map((item) => new BMap.Point(item.lng, item.lat));
      curveLine.setPath(points);
    }
  }, [curveLine, path, props.path]);

  useVisiable(curveLine!, props);
  useEventProperties<BMap.Polyline, UseCurveLine>(curveLine!, props, [
    'Click',
    'DblClick',
    'MouseDown',
    'MouseUp',
    'MouseOut',
    'MouseOver',
    'Remove',
    'LineUpdate',
  ]);
  useEnableProperties<BMapLib.CurveLine, UseCurveLine>(curveLine!, props, ['Editing', 'MassClear']);
  // PositionAt
  useProperties<BMapLib.CurveLine, UseCurveLine>(curveLine!, props, [
    'StrokeColor',
    'StrokeOpacity',
    'StrokeWeight',
    'StrokeStyle',
  ]);

  return {
    curveLine,
    setCurveLine,
    BMapLib: bMapLib,
    path,
    setPath,
  };
}
