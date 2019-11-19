import React, { useEffect, useState } from 'react';

/**
 * 批量创建多个如下 State，监听并设置值，
 * 根据 boolean 值执行 `enable` 和 `disable` 开头的函数。
 * @example
 * ```js
 * const [strokeOpacity, setStrokeOpacity] = useState(props.strokeOpacity);
 * useEffect(() => {
 *   console.log('~~:strokeOpacity', strokeOpacity, props.strokeOpacity, polyline);
 *   setStrokeOpacity(props.strokeOpacity)
 * }, [polyline, strokeOpacity, props.strokeOpacity]);
 * ```
 * @param instance 
 * @param props 
 * @param propsName 
 */
export function useEnableProperties<T, F>(instance: T, props: F, propsName: string[] = []) {
  propsName.forEach((name) => {
    const eName = `enable${name}` as keyof F;
    const [state, setState] = useState(props[eName]);
    useEffect(() => {
      if (instance && state !== props[eName]) {
        if (props[eName]) {
          (instance[`enable${name}` as keyof T] as any)();
        } else {
          (instance[`disable${name}` as keyof T] as any)();
        }
        setState(props[eName]);
      }
    }, [instance, state, props[eName]]);
  });
}

/**
 * 批量创建多个如下 State，监听并设置值，
 * 执行 `set` 开头的函数。
 * @param instance 
 * @param props 
 * @param propsName 
 */
export function useProperties<T, F>(instance: T, props: F, propsName: string[] = []) {
  propsName.forEach((name) => {
    const eName = `${name.charAt(0).toLowerCase()}${name.slice(1)}` as keyof F;
    const [state, setState] = useState(props[eName]);
    useEffect(() => {
      if (instance && state !== props[eName]) {
        (instance[`set${name}` as keyof T] as any)(props[eName]);
        setState(props[eName]);
      }
    }, [instance, state, props[eName]]);
  });
}