/**
 * 初始化和加载baidu地图
 */
import React from 'react';
import { Config } from '../common/map';
import { requireScript } from '../utils/requireScript';

export function delay(time: number): Promise<undefined> {
  return new Promise((resolve, reject) => {
    window.setTimeout(resolve, time);
  });
}

export interface APILoaderProps extends Config {
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
export default class APILoader extends React.Component<APILoaderProps, State> {
  public static defaultProps = {
    akay: '',
    hostAndPath: 'api.map.baidu.com/api',
    version: '3.0',
    callbackName: 'load_bmap_sdk',
    type: '',
  };

  /**
   * 全局可能存在多个Loader同时渲染, 但是只能由一个负责加载
   */
  private static waitQueue: Array<[Function, Function]> = [];
  /**
   * 等待BMap就绪
   */
  public static async ready() {
    if (window.BMap) {
      return;
    }
    if (window.BMapGL) {
      return;
    }
    return new Promise((res, rej) => {
      APILoader.waitQueue.push([res, rej]);
    });
  }
  public constructor(props: APILoaderProps) {
    super(props);
    this.state = {
      loaded: props.type === 'webgl' ? !!window.BMapGL : !!window.BMap,
    };
    if (this.props.akay == null) {
      throw new TypeError('BaiDuMap: akay is required');
    }
  }

  public componentDidMount() {
    const { callbackName } = this.props;
    if ((this.props.type === 'webgl' && !window.BMapGL) || !window.BMap) {
      if (window[callbackName as any]) {
        APILoader.waitQueue.push([this.finish, this.handleError]);
        return;
      }

      this.loadMap();
    }
  }

  public render() {
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
    let protocol = (cfg.protocol || window.location.protocol) as Config['protocol'];
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
    const src = this.getScriptSrc();
    (window as any)[callbackName as any] = () => {
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
      } catch (error) {
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
    this.setState({ error });
  };

  private finish = () => {
    if (this.props.type === 'webgl') {
      window.BMap = window.BMapGL as any;
    }
    this.setState({
      loaded: true,
    });
  };
}
