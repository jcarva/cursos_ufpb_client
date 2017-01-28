import { APP_TITLE } from '../actions/AppAction'

export default (state = null, action) => {
  switch(action.type) {
    case APP_TITLE:
          return action.payload;
    default:
          return state;
  }
}
