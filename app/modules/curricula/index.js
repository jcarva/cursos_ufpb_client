import { List } from 'immutable';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import CurriculaAPI from 'api/curricula';
import { getEntities } from 'utils/redux/entities';

// Action Types
export const FETCH_CURRICULA_REQUEST = 'cursos_ufpb/curricula/FETCH_CURRICULA_REQUEST';
export const FETCH_CURRICULA_SUCCESS = 'cursos_ufpb/curricula/FETCH_CURRICULA_SUCCESS';
export const FETCH_CURRICULA_FAILURE = 'cursos_ufpb/curricula/FETCH_CURRICULA_FAILURE';

export const FETCH_CURRICULUM_REQUEST = 'cursos_ufpb/curricula/FETCH_CURRICULUM_REQUEST';
export const FETCH_CURRICULUM_SUCCESS = 'cursos_ufpb/curricula/FETCH_CURRICULUM_SUCCESS';
export const FETCH_CURRICULUM_FAILURE = 'cursos_ufpb/curricula/FETCH_CURRICULUM_FAILURE';

// Reducers
const all = (state = [], action) => {
  switch (action.type) {
    case FETCH_CURRICULA_SUCCESS:
      return List(action.payload);
    default:
      return List(state);
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_CURRICULA_REQUEST:
    case FETCH_CURRICULUM_REQUEST:
      return true;
    case FETCH_CURRICULA_SUCCESS:
    case FETCH_CURRICULA_FAILURE:
    case FETCH_CURRICULUM_SUCCESS:
    case FETCH_CURRICULUM_FAILURE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  all,
  loading
});

// Action Creators
export const fetchCurricula = () => (dispatch) => {
  dispatch({
    type: FETCH_CURRICULA_REQUEST
  });

  CurriculaAPI
    .getCurricula()
    .then((response) => {
      dispatch(setEntities(response.entities));
      dispatch({
        type: FETCH_CURRICULA_SUCCESS,
        payload: response.result
      })
    })
    .catch((error) => dispatch(error));
};

export const fetchCurriculum = (id) => (dispatch) => {
  dispatch({
    type: FETCH_CURRICULUM_REQUEST
  });

  CurriculaAPI
    .getCurriculum(id)
    .then((response) => {
      dispatch(setEntities(response.entities));
      dispatch({
        type: FETCH_CURRICULUM_SUCCESS,
        payload: response.result
      })
    })
    .catch((error) => dispatch(error));
};

// Selectors
export const getCurricula = createSelector(
  getEntities('curricula'),
  (state) => state.curricula.all,
  (byId, all) => all.map((id) => byId.get(id))
);

export const getCurriculum = createSelector(
  getEntities('curricula'),
  (state, id) => id,
  (byId, id) => byId.get(id)
);
