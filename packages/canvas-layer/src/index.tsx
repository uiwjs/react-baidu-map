import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useCanvasLayer, CanvasLayerResult } from './useCanvasLayer';
export * from './useCanvasLayer';

export interface Argument extends CanvasLayerResult {}

export interface CanvasLayerProps extends Omit<BMap.CanvasLayerOptions, 'update'>, OverlayProps {
  update?(argument: Argument): void;
}

export default React.forwardRef<CanvasLayerProps & { canvasLayer?: BMap.CanvasLayer }, CanvasLayerProps>(
  (props, ref) => {
    const { canvasLayer } = useCanvasLayer(props);
    useImperativeHandle(ref, () => ({ ...props, canvasLayer }));
    return null;
  },
);
