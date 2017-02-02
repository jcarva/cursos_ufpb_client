import axios from 'axios';

//Constants
const base_api_url = 'https://cursos-ufpb.herokuapp.com/api/curricula'

// Action Types
const FETCH_CURRICULAS = 'app/modules/SearchBar/FETCH_CURRICULAS'

// Reducer
export default function reducer(state = null, action) {
  switch(action.type) {
    case FETCH_CURRICULAS:
      return action.payload.data.curricula;
    default:
      return state;
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


