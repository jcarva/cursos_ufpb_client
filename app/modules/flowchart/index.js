import { combineReducers } from 'redux';
import { fetchCurriculum } from 'modules/curriculas';

// Action Types
export const SELECT_CURRICULUM = 'cursos_ufpb/flowchart/SELECT_CURRICULUM';

// Reducers
const curriculumSelected = (state = null, action) => {
    switch (action.type) {
      case SELECT_CURRICULUM:
        return action.payload.id;
      default:
        return state;
    }
};

export default combineReducers({
  curriculumSelected
});

// Action Creators
export const selectCurriculum = (id) => (dispatch) => {
  dispatch(fetchCurriculum(id));
  dispatch({
    type: SELECT_CURRICULUM,
    id
  });
};
