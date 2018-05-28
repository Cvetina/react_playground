import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About.jsx';
import Home from './Home.jsx';
import Search from './Search.jsx';
import Start from './Start.jsx';
import style from './styles/Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <Router>
        <div className={style.mainWrapper}>
          <div className={style.container}>
              <Switch>
                <Route path="/search" component={Search}/>
                <Route path="/about" exact component={About} />
                <Route path="/home" exact component={Home} />
                <Route path="/" exact component={Start} />
              </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Layout