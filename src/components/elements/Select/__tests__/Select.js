import React, { useState } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Select from '../index';

jest.mock('react', () => ({
  ...require.requireActual('react'),
  useState: jest.fn((v) => [v, jest.fn()]),
  useEffect: jest.fn(),
}));

describe('src/components/elements/Select', () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementation((f) => f());
  };

  useEffect = jest.spyOn(React, 'useEffect');
  mockUseEffect();
  it('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Select>
        <option value="128">128kbps</option>
        <option value="300">300kbps</option>
      </Select>
    );
    expect(tree).toMatchSnapshot();
  });

  it('handleOpen func', () => {
    const setActive = jest.fn();
    useState.mockImplementationOnce((v) => [v, setActive]);
    const result = Select({
      ...Select.defaultProps,
    });
    const { children } = result.props;
    children[0].props.onClick();
    expect(setActive).toHaveBeenCalled();
  });

  it('handleClick func', () => {
    const setItem = jest.fn();
    useState.mockImplementationOnce((v) => [v, setItem]);
    const result = Select({
      ...Select.defaultProps,
      children: [
        <option key={0} value="300">300kbps</option>,
        <option key={1} value="300">300kbps</option>,
      ],
      multiple: true,
    });
    const { children } = result.props.children[1].props;
    children[0].props.onClick();
    expect(setItem).toHaveBeenCalled();
  });

  // it('render with item', () => {
  //   const setItem = jest.fn();
  //   jest.spyOn(React, 'useState').mockImplementation(() => ['bold', setItem]);
  //   const shallow = new ShallowRenderer();
  //   shallow.render(<Select />);
  //   // expect(tree).toMatchSnapshot();
  // });
});
