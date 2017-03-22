import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import scenes
import FlowchartView from './FlowchartView';
import NoMatch from './NoMatch';

export default () => (
    <div>
      <h1>Cursos UFPB</h1>
      <div>
        <Switch>
          <Route path="/flowchart" component={FlowchartView} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </div>
);
