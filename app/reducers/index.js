import { combineReducers } from 'redux';
import AppTitleReducer from './app'

const rootReducer = combineReducers({
  title: AppTitleReducer
});

export default rootReducer;
