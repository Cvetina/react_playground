import React, { Component } from 'react';
import Slider from 'react-slick';
 
class MainSlider extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillReceiveProps(){
		this.refs.slick.innerSlider.onWindowResized()
	}
	render() {
		const settings = { 
			autoplay: true,
			lazyLoad: true,
			pauseOnHover: true,
			arrows: true,
			swipeToSlide: true,
			infinite: true,
			speed: 1500,
			slidesToShow: 1,
			slidesToScroll: 1
	}
	return (
		<Slider ref="slick" {...settings}>
			{this.props.children}
		</Slider>
		);
	}
}
export default MainSlider;