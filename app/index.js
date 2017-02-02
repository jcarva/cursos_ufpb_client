import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

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
if (module.hot) module.hot.accept('./components/App', () => {
  const newApp = require('./components/App').default;
  render(newApp);
});
