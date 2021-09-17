import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useGeolocationControl } from './useGeolocationControl';

export * from './useGeolocationControl';
export interface GeolocationControlProps extends OverlayProps, BMap.GeolocationControlOptions {
  /**
   * 定位成功后触发此事件
   */
  onLocationSuccess?(result: { point: BMap.Point; addressComponent: BMap.AddressComponent }): void;
  /**
   * 定位失败后触发此事件
   */
  onLocationError?(error: { statusCode: BMap.StatusCode }): void;
}

export default React.forwardRef<GeolocationControlProps, GeolocationControlProps>((props, ref) => {
  const { geolocationControl } = useGeolocationControl(props);
  useImperativeHandle(ref, () => ({ ...props, geolocationControl }), [geolocationControl, props]);
  return null;
});
