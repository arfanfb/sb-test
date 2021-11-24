import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ArrowUp } from '../../../../icons';
import Button from '../Button';

jest.mock('react', () => ({
  ...require.requireActual('react'),
}));

describe('src/components/button', () => {
  it('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Button />);
    expect(tree).toMatchSnapshot();
  });

  it('expect width 480px and text Hello', () => {
    const result = Button({
      ...Button.defaultProps,
      width: 480,
      children: 'Hello',
    });
    const { children, style } = result.props;
    expect(children[2]).toBe('Hello');
    expect(style.width).toBe(480);
  });

  it('expect with link href and object', () => {
    const result = Button({
      ...Button.defaultProps,
      to: '/home',
      children: 'Link',
    });

    const { children } = result.props;
    expect(children.props.children[2]).toBe(undefined);

    const result2 = Button({
      ...Button.defaultProps,
      children: <ArrowUp />,
    });
    expect(typeof result2.props.children[2].type).toEqual('function');
  });
});
