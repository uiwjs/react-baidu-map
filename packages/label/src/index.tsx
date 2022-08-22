import React, { CSSProperties, useImperativeHandle } from 'react';
import { OverlayProps } from '@uiw/react-baidu-map-map';
import { useLabel } from './useLabel';

export * from './useLabel';

export interface LabelProps extends OverlayProps, BMap.LabelOptions, BMap.LabelEvents {
  /**
   * 文本标注内容
   */
  content?: string;
  /**
   * 文本标注样式，该样式将作用于文本标注的容器元素上。
   * 其中styles为JavaScript对象常量，比如： setStyle({ color : "red", fontSize : "12px" })
   * 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，
   * 例如：背景色属性要写成：backgroundColor
   */
  style?: CSSProperties;
  children?: JSX.Element;
}

export default React.forwardRef<LabelProps & { label?: BMap.Label }, LabelProps>((props, ref) => {
  const { label, Portal } = useLabel({ ...props });
  useImperativeHandle(ref, () => ({ ...props, label }), [label, props]);
  return <Portal>{props.children}</Portal>;
});
