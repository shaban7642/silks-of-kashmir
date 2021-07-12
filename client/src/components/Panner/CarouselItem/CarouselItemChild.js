import React from 'react';
import { CarouselItem, Carousel } from 'react-bootstrap';
const CarouselItemChild = (props) => {
	return (
		<CarouselItem interval={1000} {...props}>
			<img className="d-block w-100" src={props.src} alt="a slider" />
			<Carousel.Caption>
				<h3>{props.label}</h3>
			</Carousel.Caption>
		</CarouselItem>
	);
};

export default CarouselItemChild;
