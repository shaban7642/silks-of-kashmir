import React from 'react';
import { Col, Image } from 'react-bootstrap';
const Category = ({ image }) => {
	return (
		<Col>
			<Col xs={6} md={4}>
				<Image src={image} thumbnail />
			</Col>
		</Col>
	);
};

export default Category;
