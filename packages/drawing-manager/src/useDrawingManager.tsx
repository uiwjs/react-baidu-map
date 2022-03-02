import { useState, useMemo } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { requireScript, requireCss } from '@uiw/react-baidu-map-utils';
import { DrawingManagerProps } from '.';

export interface UseDrawingManager extends DrawingManagerProps {}

export function useDrawingManager(props = {} as UseDrawingManager) {
  const {
    isOpen,
    drawingMode,
    enableDrawingTool,
    enableCalculate,
    drawingToolOptions,
    markerOptions,
    circleOptions,
    polylineOptions,
    polygonOptions,
    rectangleOptions,
  } = props;
  const { map } = useMapContext();

  const [drawingManager, setDrawingManager] = useState<BMapLib.DrawingManager>();
  const libSDK = window.BMapLib;
  const [bMapLib, setBMapLib] = useState<typeof BMapLib>(libSDK);
  const [loadMapLib, setLoadBMapLib] = useState(false || !!libSDK);
  const opts = {
    isOpen,
    drawingMode,
    enableDrawingTool,
    enableCalculate,
    drawingToolOptions,
    markerOptions,
    circleOptions,
    polylineOptions,
    polygonOptions,
    rectangleOptions,
  } as BMap.DrawingManagerOptions;

  useMemo(() => {
    // 如果第一次加载，会执行下面的
    if (map && bMapLib && !drawingManager) {
      if (bMapLib.DrawingManager) {
        const instance = new BMapLib.DrawingManager(map, opts);
        setDrawingManager(instance);
      }
    }

    // 如果 bMapLib 已经加载过，会执行下面的
    if (map && bMapLib && !bMapLib.DrawingManager) {
      requireCss('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css').then(() => {});

      requireScript('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js')
        .then(() => {
          if (window.BMapLib) {
            const newMapLib = Object.assign(window.BMapLib, bMapLib);
            setBMapLib(newMapLib);

            const instance = new BMapLib.DrawingManager(map, opts);
            setDrawingManager(instance);
          }
        })
        .catch(() => {});
    }

    // 如果第一次加载，会执行下面的
    if (!bMapLib && !loadMapLib) {
      setLoadBMapLib(true);
      requireCss('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css').then(() => {});
      requireScript('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js')
        .then(() => {
          if (window.BMapLib) {
            setBMapLib(window.BMapLib);
          }
        })
        .catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, loadMapLib, bMapLib, drawingManager]);

  return {
    drawingManager,
    setDrawingManager,
    BMapLib: bMapLib,
  };
}
