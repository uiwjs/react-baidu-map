import React, { useImperativeHandle } from 'react';
import { MapChildProps } from '@uiw/react-baidu-map-map';
import { useDrawingManager } from './useDrawingManager';

export * from './useDrawingManager';
export interface DrawingManagerProps extends BMap.DrawingManagerOptions, MapChildProps {}

export default React.forwardRef<DrawingManagerProps & { drawingManager?: BMapLib.DrawingManager }, DrawingManagerProps>(
  (props, ref) => {
    const { drawingManager } = useDrawingManager(props);
    useImperativeHandle(ref, () => ({ ...props, drawingManager, BMapLib }));
    return null;
  },
);
