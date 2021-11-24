import PropTypes from 'prop-types';
import { ACTIONS } from '../../constants';

export const initialState = {
  loading: false,
  moviesData: [],
  moviesMeta: {
    totalPage: 0,
    page: 0
  }
};

export const propTypes = {
  loading: PropTypes.bool,
  movies: PropTypes.array
};

export default function reducer(state = initialState, action) {
  const { type, loading, movies, page } = action;

  switch (type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        loading
      };
    case ACTIONS.MOVIES_FETCHED:
      return {
        ...state,
        moviesData: [
          ...state.moviesData,
          ...movies.Search
        ],
        moviesMeta: {
          totalPage: Math.ceil(movies.totalResults / 10),
          page
        }
      };
    case ACTIONS.RESET:
      return {
        ...state,
        moviesData: [],
        moviesMeta: {
          totalPage: 0,
          page: 0
        }
      };
    default:
      return state;
  }
}
