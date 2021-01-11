import React, { useImperativeHandle } from 'react';
import useDrawingManager from './useDrawingManager';
import { MapChildProps } from '../common/map';

export interface DrawingManagerProps
  extends BMap.DrawingManagerOptions,
    MapChildProps {}

export default React.forwardRef<
  DrawingManagerProps & { drawingManager?: BMapLib.DrawingManager },
  DrawingManagerProps
>((props, ref) => {
  const { drawingManager } = useDrawingManager(props);
  useImperativeHandle(ref, () => ({ ...props, drawingManager, BMapLib }));
  return null;
});
