import React, { useEffect, Fragment } from 'react';
import { productDetailsAction } from '../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { Col, Row, ListGroup, Image } from 'react-bootstrap';
const ProductDetails = ({ match }) => {
	const dispatch = useDispatch();
	const { productDetails } = useSelector((state) => ({ ...state }));
	const { loading, error, productInfo } = productDetails;

	useEffect(() => {
		dispatch(productDetailsAction(match.params.productSlug));
	}, [dispatch, match]);
	return (
		<Row>
			{loading ? (
				<Loader />
			) : (
				productInfo && (
					<Fragment>
						<Col xs={6} md={4}>
							<Image
								className="w-75"
								src={productInfo.image}
								square
							/>
						</Col>
						<Col md={8}>
							<ListGroup variant="flush">
								<ListGroup.Item>
									{productInfo.name}
								</ListGroup.Item>
								<ListGroup.Item>
									{productInfo.price}
								</ListGroup.Item>
								<ListGroup.Item>
									{productInfo.description}
								</ListGroup.Item>
								<ListGroup.Item>
									{productInfo.sold}
								</ListGroup.Item>
								<ListGroup.Item>
									{productInfo.quantity - productInfo.sold}{' '}
								</ListGroup.Item>
								<ListGroup.Item>
									{productInfo.color}
								</ListGroup.Item>
								<ListGroup.Item>
									{productInfo.brand}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Fragment>
				)
			)}
		</Row>
	);
};

export default ProductDetails;
