/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Control, { useControl } from '../src';

describe('<Control />', () => {
  it('Control test case', () => {
    expect(typeof Control).toEqual('object');
    expect(typeof useControl).toEqual('function');
    const component = TestRenderer.create(<Control />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
