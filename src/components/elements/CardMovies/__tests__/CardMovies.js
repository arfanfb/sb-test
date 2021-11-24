import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import CardMovies from '../index';

jest.mock('react', () => ({
  ...require.requireActual('react'),
}));

describe('src/components/elements/CardMovies', () => {
  it('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<CardMovies />);
    expect(tree).toMatchSnapshot();
  });

  it('render with props', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<CardMovies title="Judul Game" year="4" />);
    expect(tree).toMatchSnapshot();
  });

  it('render without title', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<CardMovies year="4" />);
    expect(tree).toMatchSnapshot();
  });

  it('render without joystick', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<CardMovies title="4" />);
    expect(tree).toMatchSnapshot();
  });
});
