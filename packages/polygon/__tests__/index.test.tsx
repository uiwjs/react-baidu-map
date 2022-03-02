import React from 'react';
import TestRenderer from 'react-test-renderer';
import Polygon, { usePolygon } from '../src';

describe('<Polygon />', () => {
  it('Polygon test case', () => {
    expect(typeof Polygon).toEqual('object');
    expect(typeof usePolygon).toEqual('function');
    const component = TestRenderer.create(
      <Polygon
        path={[
          { lng: 116.399, lat: 39.91 },
          { lng: 116.405, lat: 39.92 },
          { lng: 116.423493, lat: 39.907445 },
        ]}
      />,
    );
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
