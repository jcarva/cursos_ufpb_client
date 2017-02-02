import { combineReducers } from 'redux';
import FetchCurriculas from './SearchBar/index'

const rootReducer = combineReducers({
  curriculas: FetchCurriculas
});

export default rootReducer;
