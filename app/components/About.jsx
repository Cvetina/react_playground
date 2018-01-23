import React from 'react';
import {render} from 'react-dom';
import AboutSlider from './AboutSlider.jsx';

class About extends React.Component {
  render() {
    return (
      <div> 
        <AboutSlider />
        <h2>About</h2>
        <p>
            https://api.github.com/users
        </p>
        
      </div>
    );
  }
}
export default About