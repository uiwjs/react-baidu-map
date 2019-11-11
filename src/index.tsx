import React from 'react';
import classnames from 'classnames';
import { IProps } from './common/props';
import { sum } from './sum';
import './index.less';

export type TSize = 'large' | 'default' | 'small';
export interface IButton extends IProps {
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
  type: 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark' | 'link';
  size: TSize;
  htmlType?: 'button' | 'submit' | 'reset';
}

export default class Button extends React.PureComponent<IButton, {}> {
  public static defaultProps: IButton = {
    type: 'light',
    prefixCls: 'w-btn',
    size: 'default',
    htmlType: 'button',
  }
  public render() {
    const { prefixCls, className, children, type, htmlType, size } = this.props;
    const cls = classnames(className, prefixCls, {
      [`${prefixCls}-size-${size}`]: size,
      [`${prefixCls}-${type}`]: type,
    });
    return (
      <button type={htmlType} className={cls}>
        {children && React.Children.map(children, (child) => {
          if (!child) return child;
          if(React.isValidElement(child)) return child;
          return <span>{child}<span>{sum(1, 3)}</span></span>;
        })}
      </button>
    )
  }
}