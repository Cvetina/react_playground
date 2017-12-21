import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, NavItem} from 'react-bootstrap';
import style from './main.scss';

class MainNav extends React.Component {
  render() {
    return (
        <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} href="/about">NavItem 2 content</NavItem>
          <NavItem eventKey={3}>NavItem 3 content</NavItem>
        </Nav>
    );
  }
}
export default MainNav