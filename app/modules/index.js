import { combineReducers } from 'redux';
import AppTitleReducer from './App/index'

const rootReducer = combineReducers({
  title: AppTitleReducer
});

export default rootReducer;
