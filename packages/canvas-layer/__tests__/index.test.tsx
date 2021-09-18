/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import CanvasLayer, { useCanvasLayer } from '../src';

describe('<CanvasLayer />', () => {
  it('CanvasLayer test case', () => {
    expect(typeof CanvasLayer).toEqual('object');
    expect(typeof useCanvasLayer).toEqual('function');
    const component = TestRenderer.create(<CanvasLayer />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
