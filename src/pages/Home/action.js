import { ACTIONS } from '../../constants';

export function setLoading(loading = false) {
  return dispatch => {
    dispatch({
      type: ACTIONS.LOADING,
      loading,
    });
  };
}
