import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import scenes
import About from './About/About';
import AppWrapper from './AppWrapper/AppWrapper';
import Curriculum from './Curriculum/Curriculum';
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';

export default () => (
  <Route path="/" component={AppWrapper}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/curriculum/:id" component={Curriculum}/>
      <Route path="/about" component={About}/>
      <Route component={NoMatch}/>
    </Switch>
  </Route>
);
