import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useCustomOverlay } from './useCustomOverlay';

export * from './useCustomOverlay';

export interface CustomOverlayProps extends OverlayProps {
  /**
   * 设置标注的地理坐标。
   */
  position?: BMap.Point;
  /**
   * 对应 css z-index 属性，当添加了多个 CustomOverlay 时，可以用于设置层叠顺序
   */
  zIndex?: number;
  /**
   *
   * 覆盖物层级
   * JSAPI 把地图覆盖物分为了8个层级，顶层为 `floatPane`，
   * 低层为 `vertexPane`。可以通过Map实例的 `getPanes()` 方法，获取到8个层级的名称
   */
  paneName?: keyof BMap.MapPanes;
  /**
   * 覆盖物是否可见。
   */
  visiable?: boolean;
  /**
   * 自定义 DOM 元素。
   */
  children?: React.ReactNode;
}

export default React.forwardRef<CustomOverlayProps, CustomOverlayProps>((props, ref) => {
  const { customOverlay, portal } = useCustomOverlay(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ ...props, customOverlay }), [customOverlay]);
  if (portal) {
    return portal;
  }
  return null;
});
