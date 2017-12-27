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
			slidesToShow: 5,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1610,
				  settings: {
					slidesToShow: 4,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 1280,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 980,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 667,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
	}
	return (
		<Slider ref="slick" {...settings}>
			{this.props.children}
		</Slider>
		);
	}
}
export default MainSlider;