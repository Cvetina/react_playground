import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import style from './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className={style.mainWrapper}>
         <Route path="/about" exact component={About} />
         <Route path="/home" exact component={Home} />
      </div>
    );
  }
}
export default Layout