import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from "./containers/Main";

export default props => (
  <Switch>
    <Route exact path="/" component={Main}  />
  </Switch>
)