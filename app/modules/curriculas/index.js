import axios from 'axios';
import { Map, fromJS } from 'immutable';
import { combineReducers } from 'redux';

//Constants
const BASE_API_URL= 'https://cursos-ufpb.herokuapp.com/api/curricula';

// Action Types
export const FETCH_CURRICULAS = 'cursos_ufpb/curriculas/FETCH_CURRICULAS';
export const FETCH_CURRICULUM = 'cursos_ufpb/curriculas/FETCH_CURRICULUM';

// Reducers
const byId = (state = {}, action) => {
    switch (action.type) {
      case FETCH_CURRICULAS:
        return fromJS(action.payload.data.curricula)
          .reduce((acc, curriculum) => (
            acc.set(curriculum.id, curriculum)
          ), Map(state));
      case FETCH_CURRICULUM:
        const curriculum = fromJS(action.payload.data.curriculum);
        return Map(state)
          .set(curriculum.get('id'), curriculum);
      default:
        return Map(state);
    }
};

export default combineReducers({
  byId
});

// Action Creators
export function fetchCurriculas() {
  const request = axios.get(BASE_API_URL)

  return {
    type: FETCH_CURRICULAS,
    payload: request
  }
};

export function fetchCurriculum(id) {
  const request = axios.get(`${BASE_API_URL}/${id}`)

  return {
    type: FETCH_CURRICULUM,
    payload: request
  }
};
