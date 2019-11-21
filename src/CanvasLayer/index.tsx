import React from 'react';
import { OverlayProps } from '../common/map';
import useCanvasLayer, { CanvasLayerResult } from './useCanvasLayer';

export interface Argument extends CanvasLayerResult {}

export interface CanvasLayerProps extends Omit<BMap.CanvasLayerOptions, 'update'>, OverlayProps {
  update?(argument: Argument): void; 
}

export default (props = {} as CanvasLayerProps) => {
  useCanvasLayer(props);
  return null;
}
