import { createStore } from 'redux'
import rootReducer from './modules/index'

export const configureStore = (initialState) => {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules/index.js').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
