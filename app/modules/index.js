import axios from 'axios';

//Constants
const base_api_url = 'https://cursos-ufpb.herokuapp.com/api/curricula'
const INITIAL_STATE = {all: [], selected: null}

// Action Types
const FETCH_CURRICULAS = 'app/modules/flowchart/FETCH_CURRICULAS'
const FETCH_CURRICULA = 'app/modules/flowchart/FETCH_CURRICULA'

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_CURRICULAS:
      return {...state, all: action.payload.data.curricula}
    case FETCH_CURRICULA:
      return {...state, selected: action.payload.data.curriculum}
    default:
      return state
  }
};

// Action Creators
export function fetchCurriculas() {

  const request = axios.get(base_api_url)

  return {
    type: FETCH_CURRICULAS,
    payload: request
  }
};

export function fetchCurricula(id) {

  const request = axios.get(`${base_api_url}/${id}`)

  return {
    type: FETCH_CURRICULA,
    payload: request
  }
};


