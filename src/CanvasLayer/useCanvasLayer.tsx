import { useState, useMemo } from 'react';
import { CanvasLayerProps } from '.';
import { useVisiable } from '../common/hooks';

export interface UseCanvasLayer extends CanvasLayerProps {}

export interface CanvasLayerResult {
  canvas: React.HTMLAttributes<HTMLCanvasElement>;
  ba: React.HTMLAttributes<HTMLCanvasElement>;
  options: BMap.CanvasLayerOptions;
  zIndex: number;
  map: UseCanvasLayer['map'];
  BMap: UseCanvasLayer['BMap'];
}

export default function useCanvasLayer(props = {} as UseCanvasLayer) {
  const { map, zIndex, paneName } = props;
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
  }, [map, canvasLayer]);

  useVisiable(canvasLayer!, props);

  return {
    canvasLayer,
    setCanvasLayer,
  };
}
