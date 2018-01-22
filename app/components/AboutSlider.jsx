import React, { Component } from 'react';
import MainSlider from './MainSlider.jsx';
import Spinner from './Spinner.jsx';
import style from './styles/AboutSlider.scss';


class AboutSlider extends React.Component {
  constructor() {
    super();
    this.state = { 
                  dataResponse: []
                 };
}
componentDidMount() {
  fetch(`https://api.github.com/users`) 
  .then(data => data.json())
  .then(data => this.setState({dataResponse : data}));
  }
	render() {
	  const { dataResponse } = this.state;
    const url = dataResponse.map((item) => 
          <a href={item.url} key={item.login} target="_blank">{item.login}</a>);
	return (
			<div>
						{ dataResponse.length === 0 &&
							<Spinner />
						}
						{ dataResponse && dataResponse.length > 0 &&
							<MainSlider>
								{url}
							</MainSlider>
						}
			</div>
		);
	}
}
export default AboutSlider;