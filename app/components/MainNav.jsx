import React from 'react';
import {render} from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Glyphicon } from "react-bootstrap";
import style from './styles/MainNav.scss';

class MainNav extends React.Component {
  render() {
    return (
      <div className={style.navContainer}>
          <NavLink exact activeClassName='active' className={style.navItem} to={'/home'}>
            <Glyphicon glyph="home" />
            <span className={style.linkText}>Home</span> 
          </NavLink>
          <NavLink exact activeClassName='active' className={style.navItem} to={'/about'}>
            <Glyphicon glyph="fire" />
            <span className={style.linkText}>About</span>
          </NavLink>
          <NavLink exact activeClassName='active' className={style.navItem} to={'/search'}>
            <Glyphicon glyph="search" />
            <span className={style.linkText}>Search</span> 
          </NavLink>
      </div>
    );
  }
}
export default MainNav