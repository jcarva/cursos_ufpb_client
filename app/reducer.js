import { combineReducers } from 'redux';
import FetchCurriculas from './modules/index'

const rootReducer = combineReducers({
  curriculas: FetchCurriculas
});

export default rootReducer;
