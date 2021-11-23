import { ACTIONS } from '../../constants';
import { API_KEY, SERVICES } from '../../configs';
import fetch from '../../utils/fetch';

export function setLoading(loading = false) {
  return dispatch => {
    dispatch({
      type: ACTIONS.LOADING,
      loading,
    });
  };
}

export function getTest(s = 'Batman', page = 1) {
  return dispatch => {
    const options = {
      method: 'GET',
      params: {
        apikey: API_KEY,
        s,
        page
      },
      url: SERVICES.GET_DATA
    };

    fetch(options)
      .then((res) => {
        dispatch({
          type: ACTIONS.MOVIES_FETCHED,
          movies: res.data,
        });
      })
      .catch(() => { });
  };
}
