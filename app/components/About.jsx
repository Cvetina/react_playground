import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';
import AboutSlider from './AboutSlider.jsx';
import style from './styles/About.scss';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
      this.setState({date: moment()});
  }

  getTime() {
      return this.state.date.format('HH:mm:ss')
  }

  componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className={style.container}> 
        <center className={style.time}>{this.getTime()}
        </center>
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