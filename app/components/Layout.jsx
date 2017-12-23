import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainSlider from './MainSlider.jsx';
import About from './About.jsx';
import Home from './Home.jsx';
import Start from './Start.jsx';
import Spinner from './Spinner.jsx';
import style from './Layout.scss';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { 
                  dataResponse: [],
                  isLoading: true,
                 };
}
componentDidMount() {
  fetch(`https://api.github.com/users`) 
  .then(data => data.json())
  .then(data => this.setState({dataResponse : data}));
  }
  render() {
    const { dataResponse, isLoading } = this.state;
    const sliderImages = dataResponse.map((item) => 
          <div key={item.login}><img src={item.avatar_url}/></div>);
    return (
      <div className={style.mainWrapper}>
        <div>
          { isLoading && 
            <Spinner />
          }
          { dataResponse && 
            <MainSlider className={style.sliderContainer}>
              {sliderImages}
            </MainSlider>
          }
        </div>
        <div className={style.container}>
          <Route path="/about" exact component={About} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Start} />
        </div>
      </div>
    );
  }
}
export default Layout