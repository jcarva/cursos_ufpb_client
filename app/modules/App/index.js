// Action Types
const APP_TITLE = 'app/modules/app/APP_TITLE';

// Reducer
export default function reducer(state = null, action) {
  switch(action.type) {
    case APP_TITLE:
      return action.payload;
    default:
      return state;
  }
}

const TITLE = 'Cursos UFPB - Cliessnt Side';

// Action Creators
export function app_title() {

  return {
    type: APP_TITLE,
    payload: TITLE
  }
}

