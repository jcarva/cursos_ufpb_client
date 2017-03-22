import { fromJS, Map } from 'immutable';

export const SET_ENTITIES = 'utils/entities/SET_ENTITIES';

export default (state = {}, action) => {
  switch(action.type) {
    case SET_ENTITIES:
      return fromJS(action.payload);
    default:
      return fromJS(state);
  }
};

export const setEntities = (entities) => ({
  type: SET_ENTITIES,
  payload: entities
});

export const getEntities = (name) => (state) => state.entities.get(name, Map({}));
