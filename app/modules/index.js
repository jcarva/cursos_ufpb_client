import { combineReducers } from 'redux';

// Modules
import curricula from './curricula';
import flowchart from './flowchart';

// Extra modules
import entities from 'utils/redux/entities';

export default combineReducers({
  curricula,
  flowchart,
  entities
});
