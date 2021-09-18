/* eslint-disable jest/no-conditional-expect */
/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import Map from '../src';

describe('<Map />', () => {
  it('Should output a Map', () => {
    const component = TestRenderer.create(<Map />);
    let tree = component.toJSON();
    if (tree && !Array.isArray(tree)) {
      expect(tree.type).toBe('div');
      expect(tree.props).toEqual({
        className: undefined,
        style: { fontSize: 1, height: '100%' },
      });
    }
  });
});
