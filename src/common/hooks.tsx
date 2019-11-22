import React, { useEffect, useState, useRef } from 'react';

/**
 * 批量创建多个如下 State，监听并设置值，
 * 组件属性更改 <Componet enableDragging={true} >
 * 根据 enableDragging 的 Boolean 值，执行 `enable` 和 `disable` 开头的函数。
 * @example
 * ```js
 * const [enableDragging, setEnableDragging] = useState(props.enableDragging);
 * useEffect(() => {
 *   console.log('~~:enableDragging', enableDragging, props.enableDragging, polyline);
 *   setEnableDragging(props.enableDragging)
 * }, [polyline, enableDragging, props.enableDragging]);
 * ```
 * @param instance 
 * @param props 
 * @param propsName 
 */
export function useEnableProperties<T = {}, F = {}>(instance: T, props = {} as F, propsName: string[] = []) {
  propsName.forEach((name) => {
    const eName = `enable${name}` as keyof F;
    const [state, setState] = useState(props[eName]);
    useEffect(() => {
      const funName = (props[eName] ? `enable${name}` : `disable${name}`) as keyof T;
      if (instance && props[eName] !== undefined) {
        instance[funName] && (instance[funName] as any)();
        if(props[eName] !== state) {
          setState(props[eName]);
        }
      }
    }, [instance, props[eName]]);
  });
}

/**
 * 针对 Overlay 类型的组件，有公共的是否显示 对象处理
 * 通过参数 `visiable` 来控制执行 `show()` or `hide()`
 */
export function useVisiable<T extends BMap.Overlay, F extends { visiable?: boolean; }>(instance: T, props = {} as F) {
  const visiable = (props as any).visiable;
  const [state, setState] = useState(visiable);
  useEffect(() => {
    if (instance && visiable !== undefined) {
      if (visiable) {
        instance.show && instance.show();
      } else {
        instance.hide && instance.hide();
      }
      if(visiable !== state) {
        setState(visiable);
      }
    }
  }, [instance, visiable]);
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
      if (!instance) return;
      if (instance[`set${name}` as keyof T] && props[eName] !== undefined) {
        /**
         * 坐标点的参数设置，比对, 坐标点的参数设置
         */
        let data: any = props[eName];
        if(data && data.lng && data.lat) {
          data = new BMap.Point(data.lng, data.lat);
          let preData: any = state;
          if (preData && preData.lng && preData.lat) {
            preData = new BMap.Point(preData.lng, preData.lat);
            if (data.equals(preData)) {
              return;
            }
          }
        }

        (instance[`set${name}` as keyof T] as any)(data);
        // 属性发生变化缓存
        if (state !== props[eName]) {
          setState(props[eName]);
        }
      }
    }, [instance, props[eName]]);
  });
}
