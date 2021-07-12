import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = ({ product, catSlug, productSlug }) => {
	return (
		<Card style={{ width: '18rem' }}>
			<Link to={`/${catSlug}/${productSlug}`}>
				<Card.Img variant="top" src={product.image} />
			</Link>
			<Card.Body>
				<Card.Title>{product.name}</Card.Title>
				<Card.Title>{product.price}</Card.Title>
				<Card.Text>{product.description}</Card.Text>
				<Button variant="primary">Add to Cart</Button>
			</Card.Body>
		</Card>
	);
};

export default Product;
