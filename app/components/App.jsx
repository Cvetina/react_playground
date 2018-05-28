import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import MainNav from './MainNav.jsx';
import style from './styles/global.scss';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <MainNav />
          <Layout />
        </div>
      </HashRouter>
    );
  }
}
export default App