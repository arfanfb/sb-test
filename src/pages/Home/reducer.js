import PropTypes from 'prop-types';
import { ACTIONS } from '../../constants';

export const initialState = {
  loading: false,
  movies: []
};

export const propTypes = {
  loading: PropTypes.bool,
  movies: PropTypes.array
};

export default function reducer(state = initialState, action) {
  const { type, loading, movies } = action;

  switch (type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        loading
      };
    case ACTIONS.MOVIES_FETCHED:
      return {
        ...state,
        movies
      };
    default:
      return state;
  }
}
