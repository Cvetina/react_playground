import React, { Component } from 'react';
import Slider from 'react-slick';
import style from './MainSlider.scss';
 
class MainSlider extends React.Component {
	componentWillReceiveProps(){
		this.refs.slick.innerSlider.onWindowResized()
	}
	render() {
		const settings = { 
			autoplay: true,
			lazyLoad: true,
			pauseOnHover: true,
			arrows: true,
			dots: true,
			swipeToSlide: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
	}
	return (
		<Slider ref="slick" className={style.container} dotsClass={style.dots} {...settings} >
			<div><img src='http://cvetina.net/images/slide2.png' /></div>
			<div><img src='http://cvetina.net/images/slide14.jpg' /></div>
			<div><img src='http://cvetina.net/images/slide7.jpg' /></div>
		</Slider>
		);
	}
}
export default MainSlider;