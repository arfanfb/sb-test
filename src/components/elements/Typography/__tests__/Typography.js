import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Typography from '../Typography';

describe('src/components/Typography', () => {
  it('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Typography />);
    expect(tree).toMatchSnapshot();

  });

  it('expect class-name style', () => {
    const result = Typography({
      ...Typography.defaultProps,
      classNameProps:'style',
    });
    const { classNameProps } = result.props;
    expect(classNameProps).toBe('style');
  });

  it('expect variant heading', () => {
    const result = Typography({
      ...Typography.defaultProps,
      variant:'heading 1',
    });
    const { variant } = result.props;
    expect(variant).toBe('heading 1');
  });

  it('expect variant body', () => {
    const result = Typography({
      ...Typography.defaultProps,
      variant:'body 1',
      tag: 'label',
    });
    const { tag } = result.props;
    expect(tag).toBe('label');
  });
});
