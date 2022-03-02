import { useState, useMemo } from 'react';
import { useMapContext } from '@uiw/react-baidu-map-map';
import { useVisiable } from '@uiw/react-baidu-map-utils';
import { CanvasLayerProps } from '.';

export interface UseCanvasLayer extends CanvasLayerProps {}

export interface CanvasLayerResult {
  canvas: React.HTMLAttributes<HTMLCanvasElement>;
  ba: React.HTMLAttributes<HTMLCanvasElement>;
  options: BMap.CanvasLayerOptions;
  zIndex: number;
  map: UseCanvasLayer['map'];
  BMap: UseCanvasLayer['BMap'];
}

export function useCanvasLayer(props = {} as UseCanvasLayer) {
  const { zIndex, paneName } = props;
  const { map } = useMapContext();
  const [canvasLayer, setCanvasLayer] = useState<BMap.CanvasLayer>();
  useMemo(() => {
    if (map && BMap && !canvasLayer) {
      const update = function (this: CanvasLayerResult) {
        const self = this;
        props.update && props.update({ ...self, BMap, map });
      };
      const instance = new BMap.CanvasLayer({ zIndex, paneName, update });
      map.addOverlay(instance);
      setCanvasLayer(instance);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, canvasLayer]);

  useVisiable(canvasLayer!, props);

  return {
    canvasLayer,
    setCanvasLayer,
  };
}
