import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from '../pages/Home/reducer';
import movie from '../pages/Movie/reducer';

const rootReducer = combineReducers({
  home,
  movie,
  routing: routerReducer,
});

export default rootReducer;
