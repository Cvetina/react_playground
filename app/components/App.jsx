import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Layout from './Layout.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}
export default App