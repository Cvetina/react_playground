import React from 'react';
import {render} from 'react-dom';
import AboutSlider from './AboutSlider.jsx';
import style from './styles/About.scss';

class About extends React.Component {
  render() {
    return (
      <div className={style.container}> 
        <h2>About</h2>
        <p>
           Users coming from https://api.github.com/users
        </p>
        <AboutSlider />
      </div>
    );
  }
}
export default About