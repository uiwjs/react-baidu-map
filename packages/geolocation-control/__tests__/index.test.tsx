/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import GeolocationControl, { useGeolocationControl } from '../src';

describe('<GeolocationControl />', () => {
  it('GeolocationControl test case', () => {
    expect(typeof GeolocationControl).toEqual('object');
    expect(typeof useGeolocationControl).toEqual('function');
    const component = TestRenderer.create(<GeolocationControl />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
