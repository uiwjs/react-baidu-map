/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import DrawingManager, { useDrawingManager } from '../src';

describe('<DrawingManager />', () => {
  it('DrawingManager test case', () => {
    expect(typeof DrawingManager).toEqual('object');
    expect(typeof useDrawingManager).toEqual('function');
    const component = TestRenderer.create(<DrawingManager />);
    let tree = component.toJSON();
    expect(tree).toBeNull();
  });
});
