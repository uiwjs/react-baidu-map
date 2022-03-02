import React from 'react';
import TestRenderer from 'react-test-renderer';
import OverviewMapControl, { useOverviewMapControl } from '../src';

describe('<OverviewMapControl />', () => {
  it('OverviewMapControl test case', () => {
    expect(typeof OverviewMapControl).toEqual('object');
    expect(typeof useOverviewMapControl).toEqual('function');
    const component = TestRenderer.create(<OverviewMapControl />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
