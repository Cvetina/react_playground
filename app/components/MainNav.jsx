import React from 'react';
import {render} from 'react-dom';
import { NavLink } from 'react-router-dom';
import Home from './shared/Home.jsx';
import Fire from './shared/Fire.jsx';
import Target from './shared/Target.jsx';
import style from './styles/MainNav.scss';

class MainNav extends React.Component {
  render() {
    return (
      <div className={style.navContainer}>
          <NavLink exact activeClassName='active' className={style.navItem} to={'/home'}>
            <Home />
            <span className={style.linkText}>Home</span> 
          </NavLink>
          <NavLink exact activeClassName='active' className={style.navItem} to={'/about'}>
            <Fire />
            <span className={style.linkText}>About</span>
          </NavLink>
          <NavLink exact activeClassName='active' className={style.navItem} to={'/search'}>
            <Target />
            <span className={style.linkText}>Search</span> 
          </NavLink>
      </div>
    );
  }
}
export default MainNav