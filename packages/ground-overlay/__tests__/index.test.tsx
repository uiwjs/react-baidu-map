/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import GroundOverlay, { useGroundOverlay } from '../src';

describe('<GroundOverlay />', () => {
  it('GroundOverlay test case', () => {
    expect(typeof GroundOverlay).toEqual('object');
    expect(typeof useGroundOverlay).toEqual('function');
    const component = TestRenderer.create(<GroundOverlay />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
