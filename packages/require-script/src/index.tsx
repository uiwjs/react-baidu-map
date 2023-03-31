import React, { Fragment, useEffect, useState } from 'react';
import { requireScript } from '@uiw/react-baidu-map-utils';
import { RenderProps } from '@uiw/react-baidu-map-map';

export type RequireScriptProps = {
  src?: string;
  /** ✅ 加载完成 */
  onCompleted?: () => void;
  /** ❌ 加载失败 */
  onFailed?: (error: any) => void;
} & RenderProps;

export default React.forwardRef<
  RequireScriptProps,
  RequireScriptProps & {
    map: BMap.Map;
    container?: HTMLDivElement | null;
  }
>((props, ref) => {
  const { children, map, container } = props || {};
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    if (props.src) {
      requireScript(props.src)
        .then(() => {
          setCompleted(true);
          props.onCompleted && props.onCompleted();
        })
        .catch((err) => {
          props.onFailed && props.onFailed(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const chields = typeof children === 'function' ? [children] : React.Children.toArray(children);
  if (completed) {
    return (
      <Fragment>
        {typeof children === 'function' && children({ BMap, map, container })}
        {chields.map((child) => {
          if (!React.isValidElement(child)) return null;
          return React.cloneElement(child, {
            ...child.props,
            BMap,
            map,
            container,
          });
        })}
      </Fragment>
    );
  }

  return null;
});
