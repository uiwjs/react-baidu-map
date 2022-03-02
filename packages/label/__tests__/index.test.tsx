/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Label, { useLabel } from '../src';

describe('<Label />', () => {
  it('Label test case', () => {
    expect(typeof Label).toEqual('object');
    expect(typeof useLabel).toEqual('function');
    const component = TestRenderer.create(<Label />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
