import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';
import style from './styles/About.scss';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      eventDateValue: "20/08/2018 23:40:00"    
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

  getCountdown() {
    const { date, eventDateValue } = this.state;
    const duration = moment(eventDateValue,"DD/MM/YYYY HH:mm:ss")
                          .diff(moment(date,"DD/MM/YYYY HH:mm:ss")
                      );
    const countdown = moment.duration(duration);           
    return Math.floor(countdown.asDays()) + ' days ' + moment.utc(duration).format("HH:mm:ss");
  }

  componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
  }

  render() {
    return (
      <div className={style.container}> 
        <center>
          {/* <div>Countdown: {this.getCountdown()}</div> */}
          <div className={style.time}>{this.getTime()}</div>
          <h2>About</h2>
          <p>
          This is a sample micro project which stands for better understanding my
          knowledge and skills as a developer. Sitting on the base of GitHub API and using 
          React, Webpack, SCSS and Babel, this project aims to give you a simple overview.
          Currently I am still developing the project and adding new features to it.
          </p> 
          <p>
             Here I`ve used react slick for the slider, react dom router for 
             routing and react bootstrap for the icons. For updating state in the project
             I am using setState(). 
          </p>  
          <p>
            As a developer I wish to stay current and up-to-date with the industry and new 
            technologies. I have strong HTML and CSS skills, experience with Sass and jQuery,
            experience with Angular, ReactJS, Redux and native JS.
          </p>
        </center>
      </div>
    );
  }
}
export default About