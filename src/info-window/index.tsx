import React from 'react';
import Overlay from '../common/overlay';

// const EVENTS = ['close', 'open', 'maximize', 'restore', 'clickclose'];

export interface InfoWindowProps extends BMap.InfoWindowOptions, BMap.InfoWindowEvent {
  /**
   * 窗口是否打开
   * @default true
   */
  isOpen?: boolean;
  /**
   * 窗口位置经纬度
   */
  position: BMap.Point;
  /**
   * 展示文本内容，支持 HTML 内容字符串
   */
  content?: string;
}

export default class InfoWindow extends Overlay<InfoWindowProps> {
  instance?: BMap.InfoWindow;
  static defaultProps = {
    isOpen: true,
  }
  componentDidMount() {
    this.addInfoWindow();
  }
  addInfoWindow(props = this.props) {
    const { BMap, map, isOpen } = props;
    if (!map || !BMap) return;
    const { width, height, maxWidth, offset, title, enableAutoPan, enableCloseOnClick, enableMessage, message } = props;
    const opts: BMap.InfoWindowOptions = { width, height, maxWidth, offset, title, enableAutoPan, enableCloseOnClick, enableMessage, message };

    if (!isOpen) {
      if (this.instance) map.closeInfoWindow();
    }
    if (!this.instance && isOpen) {
      this.instance = new BMap.InfoWindow(props.content || '', opts);
    }
    if(this.instance && isOpen && this.instance) {
      const point = new BMap.Point(props.position.lng, props.position.lat);
      map.openInfoWindow(this.instance, point);
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps: InfoWindowProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.addInfoWindow(nextProps);
    }
  }
}