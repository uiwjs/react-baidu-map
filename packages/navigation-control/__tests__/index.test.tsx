import React from 'react';
import TestRenderer from 'react-test-renderer';
import NavigationControl, { useNavigationControl } from '../src';

describe('<NavigationControl />', () => {
  it('NavigationControl test case', () => {
    expect(typeof NavigationControl).toEqual('object');
    expect(typeof useNavigationControl).toEqual('function');
    const component = TestRenderer.create(<NavigationControl />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
