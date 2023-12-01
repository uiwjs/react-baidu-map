import React, { useImperativeHandle } from 'react';
import { MapChildProps } from '@uiw/react-baidu-map-map';
import { useDrawingManager } from './useDrawingManager';

export * from './useDrawingManager';
export interface DrawingManagerProps
  extends BMapLib.DrawingManagerOptions,
    BMapLib.DrawingManagerEvents,
    MapChildProps {}

export default React.forwardRef<DrawingManagerProps & { drawingManager?: BMapLib.DrawingManager }, DrawingManagerProps>(
  (props, ref) => {
    const { drawingManager } = useDrawingManager(props);
    useImperativeHandle(ref, () => ({ ...props, drawingManager, BMapLib: window.BMapLib }));
    return null;
  },
);
