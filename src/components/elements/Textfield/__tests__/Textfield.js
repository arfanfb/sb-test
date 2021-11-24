import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TextField from '../index';

describe('src/components/elements/textfield', () => {
  it('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<TextField />);
    expect(tree).toMatchSnapshot();
  });

  it('expect width 400px', () => {
    const result = TextField({
      ...TextField.defaultProps,
      width: 400,
    });

    const { width } = result.props;
    expect(width).toBe(400);
  });

  it('expect class-name style text', () => {
    const result = TextField({
      ...TextField.defaultProps,
      'class-name': 'style text',
    });

    const { className } = result.props;
    expect(className).toBe('style text ');
  });
});
