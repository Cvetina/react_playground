import React from 'react';
import {render} from 'react-dom';
import { Router, Route } from 'react-router-dom';
import App from './components/App.jsx';
import About from './components/About.jsx';
import Layout from './components/Layout.jsx';

const routes  = () => (
  <Router>
    <Route exact path="/" component={App}>
      <Route exact path="/" component={Layout} />
        <Route exact path="/about" component={About}>
      </Route>
    </Route>
  </Router>
)
export default routes 