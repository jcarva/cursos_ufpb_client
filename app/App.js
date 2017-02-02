import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppWrapper, Home, About, NoMatch, Curriculum } from './scenes';
import { Provider } from 'react-redux';
import { configureStore } from './store';

export default () => (
  <Provider store={configureStore()}>
    <Router>
      <Route path="/" component={AppWrapper}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/curriculum/:id" component={Curriculum}/>
          <Route path="/about" component={About}/>
          <Route component={NoMatch}/>
        </Switch>
      </Route>
    </Router>
  </Provider>
);
