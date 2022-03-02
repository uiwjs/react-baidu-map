import React from 'react';
import TestRenderer from 'react-test-renderer';
import PointCollection, { usePointCollection } from '../src';

describe('<PointCollection />', () => {
  it('PointCollection test case', () => {
    expect(typeof PointCollection).toEqual('object');
    expect(typeof usePointCollection).toEqual('function');
    const component = TestRenderer.create(<PointCollection />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
