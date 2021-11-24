import PropTypes from 'prop-types';
import { ACTIONS } from '../../constants';

export const initialState = {
  loading: false,
  movie: { }
};

export const propTypes = {
  loading: PropTypes.bool,
  movie: PropTypes.object
};

export default function reducer(state = initialState, action) {
  const { type, loading, movie } = action;

  switch (type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        loading
      };
    case ACTIONS.MOVIE_FETCHED:
      return {
        ...state,
        movie
      };
    default:
      return state;
  }
}
