import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Panner.css';
import CarouselItemChild from './CarouselItem/CarouselItemChild';

const Panner = ({ cats }) => {
	return (
		<Carousel className="panner">
			{cats &&
				cats.map((cat) => (
					<CarouselItemChild src={cat.image} label={cat.name} />
				))}
		</Carousel>
	);
};

export default Panner;
