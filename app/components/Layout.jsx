import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Search from './Search.jsx';
import Start from './Start.jsx';
import style from './styles/Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className={style.mainWrapper}>
        <div className={style.container}>
          <Route path="/search" component={Search}/>
          <Route path="/about" exact component={About} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Start} />
        </div>
      </div>
    );
  }
}
export default Layout