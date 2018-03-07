import React from 'react';
import { render } from 'react-dom';
import HomeSlider from './HomeSlider.jsx';
import style from './styles/Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className={style.container}> 
        <center> 
          <h2>Home</h2>
        </center>
        <HomeSlider />
      </div>
    );
  }
}
export default Home