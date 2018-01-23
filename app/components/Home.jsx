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
             Hi guys. This is my little react JS project. I`m using the GitHub API for enhancing my skills as JS and font end developer.
          </p>
      </div>
    );
  }
}
export default Home