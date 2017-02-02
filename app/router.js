import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppWrapper, Home, About, NoMatch} from './scenes';

export default () => {
  return(
    <Router>
      <Route path="/" component={AppWrapper}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route component={NoMatch}/>
        </Switch>
      </Route>
    </Router>
  )
};
