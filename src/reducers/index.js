import { combineReducers } from 'redux';
import weatherReducer from './reducers-weather';
import viewReducer from './reducers-view';

const rootReducer = combineReducers({
  weather: weatherReducer,
  view: viewReducer
});

export default rootReducer;
