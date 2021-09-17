import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useNavigationControl } from './useNavigationControl';

export * from './useNavigationControl';
export interface NavigationControlProps extends OverlayProps, BMap.NavigationControlOptions {}

export default React.forwardRef<NavigationControlProps, NavigationControlProps>((props, ref) => {
  const { navigationControl } = useNavigationControl(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({ ...props, navigationControl }), [navigationControl]);
  return null;
});
