import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import Router from './router';

export default () => (
  <Provider store={configureStore()}>
    <Router/>
  </Provider>
);
