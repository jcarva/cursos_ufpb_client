import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import { getCurricula } from 'modules/curricula';

// Action Types
export const SET_CURRICULUM_TERM = 'cursos_ufpb/flowchart/SET_CURRICULUM_TERM';

// Reducers
const curriculumTerm = (state = '', action) => {
  switch (action.type) {
    case SET_CURRICULUM_TERM:
      return action.term;
    default:
      return state;
  }
};

export default combineReducers({
  curriculumTerm
});

// Action Creators
export const setCurriculumTerm = (term) => ({
  type: SET_CURRICULUM_TERM,
  term
});

// Selectors
export const getCurriculumTerm = (state) => state.flowchart.curriculumTerm;

export const getFilteredCurricula = createSelector(
  getCurriculumTerm,
  getCurricula,
  (term, curricula) => (
    curricula.filter(curriculum =>
      curriculum.get('name').match(new RegExp(`^.*${term}.*$`, 'i'))
    )
  )
);
