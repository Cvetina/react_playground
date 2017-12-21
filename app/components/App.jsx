import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import MainNav from './MainNav.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainNav />
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}
export default App