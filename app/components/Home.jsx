import React from 'react';
import { render } from 'react-dom';
import HomeSlider from './HomeSlider.jsx';
import style from './styles/Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={style.container}> 
          <HomeSlider />
          <h2>Home</h2>
          <p>
            Hi guys. This is my little reactjs project. I would like to enchance my skills in that direction. I`m consuming the github api. 
          </p>
      </div>
    );
  }
}
export default Home