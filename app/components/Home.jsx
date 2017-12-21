import React from 'react';
import { render } from 'react-dom';
import MainSlider from './MainSlider.jsx';

class Home extends React.Component {
  render() {
    return (
      <div> 
        <MainSlider />
        <h2>Home</h2>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit magna,
          dapibus eget ante vitae, tempus venenatis tellus. Curabitur et mattis nulla, 
          at interdum elit. Suspendisse tincidunt elit a diam viverra, et dapibus 
          tellus euismod. Sed viverra ipsum semper, tincidunt magna vel, fermentum turpis. 
          Nam porta metus leo, nec finibus nibh dignissim ac. Nulla nec tempor lectus. 
          Quisque eu est quis lorem pharetra iaculis. Praesent sed mi velit. 
          Sed eu interdum leo, nec tempor sapien. Quisque laoreet eleifend purus, 
          non sagittis ligula pellentesque ut.
        </p>
      </div>
    );
  }
}
export default Home