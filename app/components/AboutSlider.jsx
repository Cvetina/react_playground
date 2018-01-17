import React, { Component } from 'react';
import MainSlider from './MainSlider.jsx';
import Spinner from './Spinner.jsx';


class AboutSlider extends React.Component {
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
    const url = dataResponse.map((item) => 
          <a href={item.url} key={item.login} target="_blank">{item.login}</a>);
	return (
			<div>
						{ isLoading && dataResponse.length === 0 &&
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