import { combineReducers } from 'redux';

// Modules
import curriculas from './curriculas';
import flowchart from './flowchart';

export default combineReducers({
  curriculas,
  flowchart
});
