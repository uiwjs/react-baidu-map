/// <reference types="@uiw/react-baidu-map-types" />
import { render } from 'react-dom';
import React, { Fragment, useEffect, useState, useRef, useLayoutEffect } from 'react';

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
    const funName = (props[eName] ? `enable${name}` : `disable${name}`) as keyof T;
    if (instance && props[eName] !== undefined) {
      instance[funName] && (instance[funName] as any)();
    }
  });
}

/**
 * 针对 Overlay 类型的组件，有公共的是否显示 对象处理
 * 通过参数 `visiable` 来控制执行 `show()` or `hide()`
 */
export function useVisiable<T extends BMap.Overlay, F extends { visiable?: boolean }>(instance: T, props = {} as F) {
  const visiable = (props as any).visiable;
  const [state, setState] = useState(visiable);
  useEffect(() => {
    if (instance && visiable !== undefined) {
      if (visiable) {
        instance.show && instance.show();
      } else {
        instance.hide && instance.hide();
      }
      if (visiable !== state) {
        setState(visiable);
      }
    }
  }, [instance, state, visiable]);
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(props[eName]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (instance && instance[`set${name}` as keyof T] && props[eName] !== undefined) {
        /**
         * 坐标点的参数设置，比对, 坐标点的参数设置
         */
        let data: any = props[eName];
        if (data && data.lng && data.lat) {
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
          if (eName === 'bounds') {
            if (state && props[eName] && !(state as any).equals(props[eName])) {
              setState(props[eName]);
            }
          } else {
            setState(props[eName]);
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instance, props[eName]]);
  });
}

export interface EventListener {
  /**
   * 添加事件监听函数
   * @param event
   * @param handler
   */
  addEventListener(event: string, handler: any): void;
  /**
   * 移除事件监听函数
   * @param event
   * @param handler
   */
  removeEventListener(event: string, handler: any): void;
}

export type EventNameType = 'CamelCase' | 'PascalCase' | 'LowerCase';

/**
 * 绑定事件
 * @param instance 实例对象
 * @param props 传递进来的 props
 * @param eventName 事件的名字，如，我们使用 `onClick` 事件，最终被转换成，`click` 绑定到实例中，`onDblClick` => `dblclick`
 *
 * @example
 * ```js
 * useEventProperties<BMap.Marker, UseMarker>(marker!, props, [
 *   'Click', 'DblClick', 'MouseDown', 'MouseUp', 'MouseOut', 'MouseOver'
 * ]);
 * ```
 */
export function useEventProperties<T extends EventListener, F>(
  instance: T,
  props = {} as F,
  eventName: string[] = [],
  type?: EventNameType,
) {
  eventName.forEach((name) => {
    const eventName = `on${name}` as keyof F;
    const eventHandle = props[eventName];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!instance) return;
      if (eventHandle && name) {
        let eName = name;
        if (type === 'CamelCase') {
          eName = name.replace(name[0], name[0].toLowerCase());
        } else {
          eName = name.toLowerCase();
        }
        instance.addEventListener(eName, eventHandle);
        return () => {
          instance.removeEventListener(eName, eventHandle);
        };
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instance, props[eventName]]);
  });
}

/**
 * 获取上一轮的 props 或 state
 * How to get the previous props or state?
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * @example
 * ```js
 * function Counter() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *   return <h1>Now: {count}, before: {prevCount}</h1>;
 * }
 * ```
 */
export function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function useRenderDom(props: { children: React.ReactNode }) {
  const container = useRef(document.createElement('div'));

  useLayoutEffect(() => {
    render(<Fragment>{props.children}</Fragment>, container.current);
  }, [props.children]);

  return { container: container.current };
}
