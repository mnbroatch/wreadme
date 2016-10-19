import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from '../Components/HomePage';
import NewTale from '../Components/NewTale';
import App from '../Components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="newTale" component={NewTale} />
  </Route>
);
