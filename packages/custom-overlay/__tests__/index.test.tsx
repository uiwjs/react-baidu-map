/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import CustomOverlay, { useCustomOverlay } from '../src';

describe('<CustomOverlay />', () => {
  it('CustomOverlay test case', () => {
    expect(typeof CustomOverlay).toEqual('object');
    expect(typeof useCustomOverlay).toEqual('function');
    const component = TestRenderer.create(<CustomOverlay />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
