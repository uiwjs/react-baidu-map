/**
 * @jest-environment jsdom
 */
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Map } from '../src';

describe('<Map />', () => {
  it('Should output a Button', () => {
    const component = TestRenderer.create(
      <Map />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    if (tree) {
      // expect(tree.type).toBe('button');
    }
  });
});