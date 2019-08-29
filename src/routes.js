import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from './containers/Main';
import About from './containers/About';

export default props => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/about' component={About} />
  </Switch>
)