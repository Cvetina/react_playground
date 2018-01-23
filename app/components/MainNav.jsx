import React from 'react';
import {render} from 'react-dom';
import { NavLink } from 'react-router-dom';
import style from './styles/MainNav.scss';

class MainNav extends React.Component {
  render() {
    return (
      <div className={style.navContainer}>
          <NavLink exact activeClassName='active' className={style.navItem} to={'/home'}>Home</NavLink>
          <NavLink exact activeClassName='active' className={style.navItem} to={'/about'}>About</NavLink>
          <NavLink exact activeClassName='active' className={style.navItem} to={'/search'}>Search</NavLink>
      </div>
    );
  }
}
export default MainNav