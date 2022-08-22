/**
 * 初始化和加载baidu地图
 */
import React from 'react';
import { requireScript } from '@uiw/react-baidu-map-utils';

declare global {
  interface Window {
    [index: string]: () => any; // or just any
  }
}

export interface APILoaderConfig {
  /**
   * akay 密钥
   * 您需先申请密钥（ak）才可使用该服务，接口无使用次数限制，请开发者放心使用。
   * 文档说明地址：http://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey
   * 申请秘钥地址：http://lbs.baidu.com/apiconsole/key?application=key
   */
  akay: string;
  /**
   * SDK 包版本
   * @default 3.0
   */
  version?: string;
  /**
   * 协议，默认是根据当前网站协议的
   */
  protocol?: 'http' | 'https';
  /**
   * 请求 SDK 的前半部分
   * http://api.map.baidu.com/api?v=2.0&ak=E480562045
   * @default api.map.baidu.com/api
   */
  hostAndPath?: string;
  /**
   * JSONP 回调函数
   */
  callbackName?: string;
  /**
   * 百度地图JavaScript API GL v1.0是一套由JavaScript语言编写的应用程序接口，可帮助您在网站中构建功能丰富、交互性强的地图应用，支持PC端和移动端基于浏览器的地图应用开发，且支持HTML5特性的地图开发。
   * JavaScript API GL使用了WebGL对地图、覆盖物等进行渲染，支持3D视角展示地图。 GL版本接口基本向下兼容，迁移成本低。目前v1.0版本支持了基本的3D地图展示、基本地图控件和覆盖物。
   */
  type?: 'webgl';
}

export function delay(time: number): Promise<undefined> {
  return new Promise((resolve, reject) => {
    window && window.setTimeout(resolve, time);
  });
}

export interface APILoaderProps extends APILoaderConfig {
  /**
   * 用于展示加载中或错误状态
   */
  fallback?: (error?: Error) => React.ReactNode;
}

interface State {
  loaded: boolean;
  error?: Error;
}

const DEFAULT_RETRY_TIME = 3;

/**
 * APILoader 用于加载百度地图依赖
 */
export default class APILoader extends React.Component<React.PropsWithChildren<APILoaderProps>, State> {
  public static defaultProps = {
    akay: '',
    hostAndPath: 'api.map.baidu.com/api',
    version: '2.0',
    callbackName: 'load_bmap_sdk',
    type: '',
  };

  private isMountedOk: boolean = false;

  /**
   * 全局可能存在多个Loader同时渲染, 但是只能由一个负责加载
   */
  private static waitQueue: Array<[Function, Function]> = [];
  /**
   * 等待BMap就绪
   */
  public static async ready() {
    if (window && window.BMap.Map) {
      return;
    }
    if (window && window.BMapGL.Map) {
      return;
    }
    return new Promise((res, rej) => {
      APILoader.waitQueue.push([res, rej]);
    });
  }
  public constructor(props: APILoaderProps) {
    super(props);
    this.state = {
      loaded:
        props.type === 'webgl'
          ? window && !!window.BMapGL && !!window.BMapGL.Map
          : window && !!window.BMap && !!window.BMap.Map,
    };
    if (this.props.akay == null) {
      throw new TypeError('BaiDuMap: akay is required');
    }
  }

  public componentDidMount() {
    this.isMountedOk = true;
    const { callbackName } = this.props;
    if (!window || !callbackName) {
      return;
    }
    if (
      (this.props.type === 'webgl' && window && window.BMapGL && !window.BMapGL.Map) ||
      (this.props.type === 'webgl' && window && !window.BMapGL) ||
      (window && window.BMap && !window.BMap.Map) ||
      (window && !window.BMap)
    ) {
      if (window && window[callbackName]) {
        APILoader.waitQueue.push([this.finish, this.handleError]);
        return;
      }

      this.loadMap();
    }
  }

  componentWillUnmount() {
    this.isMountedOk = false;
  }

  public render() {
    if (window && window.BMapGL && this.props.type === 'webgl') {
      window.BMap = window.BMapGL as any;
    }
    return this.state.loaded ? (
      this.props.children
    ) : this.props.fallback ? (
      this.props.fallback(this.state.error)
    ) : this.state.error ? (
      <div style={{ color: 'red' }}>{this.state.error.message}</div>
    ) : null;
  }

  private getScriptSrc() {
    const cfg = this.props;
    let protocol = (cfg.protocol || window.location.protocol) as APILoaderConfig['protocol'];
    if (protocol!.indexOf(':') === -1) {
      protocol += ':';
    }
    const args = [`v=${cfg.version}`, `ak=${cfg.akay}`, `callback=${cfg.callbackName}`];
    if (cfg.type) {
      args.push(`type=${cfg.type}`);
    }
    return `${protocol}//${cfg.hostAndPath}?${args.join('&')}`;
  }
  /**
   * load BaiduMap in script tag
   */
  private async loadMap() {
    const { callbackName } = this.props;
    if (!window || !callbackName) {
      return;
    }
    const src = this.getScriptSrc();
    window[callbackName] = () => {
      // flush queue
      const queue = APILoader.waitQueue;
      APILoader.waitQueue = [];
      queue.forEach((task) => task[0]());
      this.finish();
    };

    for (let i = 0; i < DEFAULT_RETRY_TIME; i++) {
      try {
        await requireScript(src);
        break;
      } catch (error: any) {
        if (i === DEFAULT_RETRY_TIME - 1) {
          const err = new Error(`Failed to load Baidu Map: ${error.message}`);
          // flush queue
          const queue = APILoader.waitQueue;
          APILoader.waitQueue = [];
          queue.forEach((task) => task[1](err));
          this.handleError(err);
          return;
        }
        await delay(i * 1000);
      }
    }
  }

  private handleError = (error: Error) => {
    if (this.isMountedOk) {
      this.setState({ error });
    }
  };

  private finish = () => {
    if (window && this.props.type === 'webgl') {
      window.BMap = window.BMapGL as any;
    }
    if (this.isMountedOk) {
      this.setState({
        loaded: true,
      });
    }
  };
}
