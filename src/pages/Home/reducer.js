import PropTypes from 'prop-types';
import { ACTIONS } from '../../constants';

export const initialState = {
  loading: false,
};

export const propTypes = {
  loading: PropTypes.bool
};

export default function reducer(state = initialState, action) {
  const { type, loading } = action;

  switch (type) {
    case ACTIONS.LOADING:
      return {
        ...state,
        loading
      };
    default:
      return state;
  }
}
