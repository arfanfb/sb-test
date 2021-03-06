import { ACTIONS } from '../../constants';
import { API_KEY, SERVICES } from '../../configs';
import fetch from '../../utils/fetch';

export function reset() {
  return dispatch => {
    dispatch({
      type: ACTIONS.RESET,
    });
  };
}

export function setLoading(loading = false) {
  return dispatch => {
    dispatch({
      type: ACTIONS.LOADING,
      loading,
    });
  };
}

export function getMovies(s, y, plot, page = 1) {
  return dispatch => {
    dispatch({
      type: ACTIONS.LOADING,
      loading: true,
    });

    let params = {
      apikey: API_KEY,
      page
    };

    if (s !== '') {
      params.s = s;
    }

    if (y !== '') {
      params.y = y;
    }

    if (plot) {
      params.plot = plot;
    }

    const options = {
      method: 'GET',
      params,
      url: SERVICES.GET_DATA
    };

    fetch(options)
      .then((res) => {
        dispatch({
          type: ACTIONS.MOVIES_FETCHED,
          movies: res.data,
          page
        });

        dispatch({
          type: ACTIONS.LOADING,
          loading: false,
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.LOADING,
          loading: false,
        });
      });
  };
}
