import React from 'react';
import TestRenderer from 'react-test-renderer';
import Polyline, { usePolyline } from '../src';

describe('<Polyline />', () => {
  it('Polyline test case', () => {
    expect(typeof Polyline).toEqual('object');
    expect(typeof usePolyline).toEqual('function');
    const component = TestRenderer.create(
      <Polyline
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
