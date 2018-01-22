import React, { Component } from 'react';
import MainSlider from './MainSlider.jsx';
import Spinner from './Spinner.jsx';


class HomeSlider extends React.Component {
  constructor() {
    super();
    this.state = { 
                  dataResponse: [],
									isLoading: true,
									error: null
                 };
}
componentDidMount() {
  fetch(`https://api.github.com/users`) 
  .then(data => data.json())
	.then(data => this.setState({dataResponse : data}))
	.catch(error => this.setState({ error, isLoading: false }));
  }
	render() {
	  const { dataResponse, isLoading } = this.state;
    const sliderImages = dataResponse.map((item) => 
          <div key={item.login}><img src={item.avatar_url}/></div>);
	return (
			<div>
						{ isLoading && dataResponse.length === 0 &&
							<Spinner />
						}
						{ dataResponse && dataResponse.length > 0 &&
							<MainSlider>
								{sliderImages}
							</MainSlider>
						}
			</div>
		);
	}
}
export default HomeSlider;