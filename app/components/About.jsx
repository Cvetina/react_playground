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
          Phasellus commodo ipsum quis porta porta. Donec venenatis ex at interdum interdum. 
          Nam interdum massa erat, sed consequat dui volutpat eget.
        </p>
        
      </div>
    );
  }
}
export default About