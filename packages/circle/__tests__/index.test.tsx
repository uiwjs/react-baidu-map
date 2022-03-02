/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Circle, { useCircle } from '../src';

describe('<Circle />', () => {
  it('Circle test case', () => {
    expect(typeof Circle).toEqual('object');
    expect(typeof useCircle).toEqual('function');
    const component = TestRenderer.create(<Circle center={{ lng: 121.455228, lat: 31.240257 }} radius={1000} />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
