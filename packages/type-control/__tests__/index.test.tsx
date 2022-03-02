import React from 'react';
import TestRenderer from 'react-test-renderer';
import MapTypeControl, { useMapTypeControl } from '../src';

describe('<MapTypeControl />', () => {
  it('MapTypeControl test case', () => {
    expect(typeof MapTypeControl).toEqual('object');
    expect(typeof useMapTypeControl).toEqual('function');
    const component = TestRenderer.create(<MapTypeControl />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
