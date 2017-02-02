import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const appEl = document.getElementById('app');
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    appEl
  );
};

render(App);
if (module.hot) module.hot.accept('./App', () => {
  const newApp = require('./App').default;
  render(newApp);
});
