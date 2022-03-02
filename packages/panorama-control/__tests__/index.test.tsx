import React from 'react';
import TestRenderer from 'react-test-renderer';
import PanoramaControl, { usePanoramaControl } from '../src';

describe('<PanoramaControl />', () => {
  it('PanoramaControl test case', () => {
    expect(typeof PanoramaControl).toEqual('object');
    expect(typeof usePanoramaControl).toEqual('function');
    const component = TestRenderer.create(<PanoramaControl />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
