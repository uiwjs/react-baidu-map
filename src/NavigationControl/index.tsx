import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import useNavigationControl from './useNavigationControl';

export interface NavigationControlProps extends OverlayProps, BMap.NavigationControlOptions {}

export default React.forwardRef<NavigationControlProps, NavigationControlProps>((props, ref) => {
  const { navigationControl } = useNavigationControl(props);
  useImperativeHandle(ref, () => ({ ...props, navigationControl }), [navigationControl]);
  return null;
});
