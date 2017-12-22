import React from 'react';
import { render } from 'react-dom';
import MainSlider from './MainSlider.jsx';
import style from './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={style.container}> 
          <h2>Home</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit magna,
            dapibus eget ante vitae, tempus venenatis tellus. Curabitur et mattis nulla, 
            at interdum elit. Suspendisse tincidunt elit a diam viverra, et dapibus 
            tellus euismod. Sed viverra ipsum semper, tincidunt magna vel, fermentum turpis. 
            Nam porta metus leo.
          </p>
      </div>
    );
  }
}
export default Home