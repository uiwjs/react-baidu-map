/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import InfoWindow, { useInfoWindow } from '../src';

describe('<InfoWindow />', () => {
  it('InfoWindow test case', () => {
    expect(typeof InfoWindow).toEqual('object');
    expect(typeof useInfoWindow).toEqual('function');
    const component = TestRenderer.create(
      <InfoWindow title={<div>xxx</div>} position={{ lng: 121.501365, lat: 31.224942 }} />,
    );
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
