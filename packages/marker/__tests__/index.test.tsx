/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Marker, { useMarker } from '../src';

describe('<Marker />', () => {
  it('Marker test case', () => {
    expect(typeof Marker).toEqual('object');
    expect(typeof useMarker).toEqual('function');
    const component = TestRenderer.create(<Marker position={{ lng: 121.465145, lat: 31.241245 }} />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
