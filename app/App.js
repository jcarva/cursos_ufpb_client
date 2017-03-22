import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from './store';
import Scenes from './scenes';

export default () => (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Scenes />
    </BrowserRouter>
  </Provider>
);
