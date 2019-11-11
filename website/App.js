import React from 'react';
import Button from '../';
import './App.less';

export default class App extends React.PureComponent {
  render () {
    return (
      <div className="warpper">
        <Button type="danger">BUTTON</Button>
        <Button type="success">BUTTON</Button>
        <Button type="primary">BUTTON</Button>
      </div>
    )
  }
}