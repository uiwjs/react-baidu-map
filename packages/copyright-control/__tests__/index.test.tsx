/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import CopyrightControl, { useCopyrightControl } from '../src';

describe('<CopyrightControl />', () => {
  it('CopyrightControl test case', () => {
    expect(typeof CopyrightControl).toEqual('object');
    expect(typeof useCopyrightControl).toEqual('function');
    const component = TestRenderer.create(<CopyrightControl />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
