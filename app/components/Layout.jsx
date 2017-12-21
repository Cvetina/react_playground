import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About.jsx';
import MainNav from './MainNav.jsx';
import style from './main.scss';

class Layout extends React.Component {
  render() {
    return (
      <div class={style.mainWrapper}>
         <MainNav />
         <Route path="/about" exact component={About} />
      </div>
    );
  }
}
export default Layout