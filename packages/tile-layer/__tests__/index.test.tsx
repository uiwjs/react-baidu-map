import React from 'react';
import TestRenderer from 'react-test-renderer';
import TileLayer, { useTileLayer } from '../src';

describe('<TileLayer />', () => {
  it('TileLayer test case', () => {
    expect(typeof TileLayer).toEqual('object');
    expect(typeof useTileLayer).toEqual('function');
    const component = TestRenderer.create(<TileLayer />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
