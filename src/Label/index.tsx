import React, { useEffect } from 'react';
import { MapChildProps } from '../common/map';
import useLabel from './useLabel';


export interface LabelProps extends MapChildProps, BMap.LabelOptions, BMap.LabelEvents {
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
  style?: HTMLDivElement['style'];
}

export default (props = {} as LabelProps) => {
  const { setContent, setStyle, setPosition } = useLabel(props);
  useEffect(() => setContent(props.content), [props.content]);
  useEffect(() => setStyle(props.style), [props.style]);
  useEffect(() => setPosition(props.position), [props.position]);
  return null;
}