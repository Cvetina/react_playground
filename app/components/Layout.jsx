import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainSlider from './MainSlider.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import Start from './Start.jsx';
import style from './Layout.scss';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
}
componentDidMount() {
  fetch(`https://api.github.com/users`) 
  .then(data => data.json())
  .then(data => this.setState({ users: data }));
}
  render() {
    const { users } = this.state;
    const slidesImg = users.map(user => 
          <div key={user.login}><img src={user.avatar_url}/></div>
        );
    return (
      <div className={style.mainWrapper}>
         <div className={style.sliderContainer}>
            {slidesImg.length &&
              <MainSlider>   
                {slidesImg}
              </MainSlider>  
            } 
         </div>
        <div className={style.container}>
          <Route path="/about" exact component={About} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Start} />
        </div>
      </div>
    );
  }
}
export default Layout