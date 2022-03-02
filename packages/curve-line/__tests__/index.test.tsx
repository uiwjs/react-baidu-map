/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import CurveLine, { useCurveLine } from '../src';

describe('<CurveLine />', () => {
  it('CurveLine test case', () => {
    expect(typeof CurveLine).toEqual('object');
    expect(typeof useCurveLine).toEqual('function');
    const component = TestRenderer.create(<CurveLine path={[{ lng: 116.432045, lat: 39.910683 }]} />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
