import { ACTIONS } from '../../constants';
import { API_KEY, SERVICES } from '../../configs';
import fetch from '../../utils/fetch';

export function reset() {
  return dispatch => {
    dispatch({
      type: ACTIONS.MOVIE_FETCHED,
      movie: { }
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

export function getMovie(i, plot) {
  return dispatch => {
    dispatch({
      type: ACTIONS.LOADING,
      loading: true,
    });

    let params = {
      apikey: API_KEY,
    };

    if (i !== '') {
      params.i = i;
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
          type: ACTIONS.LOADING,
          loading: false,
        });

        dispatch({
          type: ACTIONS.MOVIE_FETCHED,
          movie: res.data
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
