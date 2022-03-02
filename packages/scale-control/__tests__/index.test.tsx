import React from 'react';
import TestRenderer from 'react-test-renderer';
import ScaleControl, { useScaleControl } from '../src';

describe('<ScaleControl />', () => {
  it('ScaleControl test case', () => {
    expect(typeof ScaleControl).toEqual('object');
    expect(typeof useScaleControl).toEqual('function');
    const component = TestRenderer.create(<ScaleControl />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
