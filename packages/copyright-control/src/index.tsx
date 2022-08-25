import React, { useImperativeHandle, Fragment } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useCopyrightControl } from './useCopyrightControl';
import { CopyrightControlItem } from './Item';

export * from './Item';
export * from './useCopyrightControl';

export interface CopyrightControlProps extends OverlayProps, BMap.CopyrightControlOptions {
  /**
   * 自定义 DOM 元素。
   */
  children?: React.ReactNode;
}

type RefCopyrightControl = React.ForwardRefExoticComponent<
  CopyrightControlProps & React.RefAttributes<CopyrightControlProps>
> & { Item: typeof CopyrightControlItem };

const CopyrightControl: RefCopyrightControl = React.forwardRef<
  CopyrightControlProps & { copyrightControl?: BMap.CopyrightControl },
  CopyrightControlProps
>((props, ref) => {
  const { copyrightControl } = useCopyrightControl(props);
  useImperativeHandle(ref, () => ({ ...props, copyrightControl }), [copyrightControl, props]);
  return (
    <Fragment>
      {React.Children.toArray(props.children).map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            control: copyrightControl,
            id: index + 1,
          });
        }
        return child;
      })}
    </Fragment>
  );
}) as unknown as RefCopyrightControl;

CopyrightControl.Item = CopyrightControlItem;

export default CopyrightControl;
