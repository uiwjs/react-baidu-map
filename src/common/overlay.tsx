import React, { Component } from 'react';
import { MapChildProps } from '../common/map';

export interface OverlayProps extends MapChildProps  {}

export default class Overlay<T> extends Component<OverlayProps & T> {
  render() {
    return null;
  }
}