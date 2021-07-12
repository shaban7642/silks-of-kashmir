import React, { useState, useEffect, Fragment } from 'react';
import { Form, Button, InputGroup, Col, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listCats } from '../../actions/catActions';
import { productCreate } from './functions/functions';
import { uploadImg } from './functions/functions';
const CreateProducts = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [quantity, setQuantity] = useState('');
	const [shipping, setShipping] = useState('');
	const [color, setColor] = useState('');
	const [brand, setBrand] = useState('');
	const [file, setFile] = useState('');
	const [image, setImage] = useState('');
	const { catList } = useSelector((state) => ({ ...state }));
	const { cats } = catList;

	const onChange = (e) => {
		setFile(e.target.files[0]);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);
		uploadImg(formData)
			.then((res) => {
				const { filePath } = res.data;
				console.log(filePath);
				setImage(filePath);
			})
			.catch((err) => {
				if (err.response.status === 500) {
					console.log('There is a problem with the server');
				} else {
					console.log(err.response.data.msg);
				}
			});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		productCreate({
			name,
			description,
			price,
			category,
			quantity,
			shipping,
			color,
			brand,
			image,
		}).then((res) => {
			console.log(res);
		});
	};

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listCats());
	}, [dispatch]);

	return (
		<Form onSubmit={handleSubmit} className="col-md-12">
			<Row>
				<Form.Group md={6} controlId="formBasicEmail">
					<Form.Control
						type="text"
						placeholder="Product Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group md={6}>
					<Form.Control
						type="text"
						placeholder="Product Description"
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
					/>
				</Form.Group>
			</Row>
			<Row>
				<InputGroup className="mb-3 col-md-6">
					<InputGroup.Prepend>
						<InputGroup.Text>UK</InputGroup.Text>
					</InputGroup.Prepend>
					<Form.Control
						aria-label="Amount (to the nearest uk)"
						value={price}
						onChange={(e) => {
							setPrice(e.target.value);
						}}
					/>
					<InputGroup.Append>
						<InputGroup.Text>{price}</InputGroup.Text>
					</InputGroup.Append>
				</InputGroup>
				<Form.Group
					controlId="exampleForm.SelectCustom"
					className="col-md-6"
				>
					<Form.Label>Category</Form.Label>
					<Form.Control
						as="select"
						custom
						onChange={(e) => setCategory(e.target.value)}
					>
						<option>Please Select</option>
						{cats &&
							cats.map((cat) => (
								<option value={cat.slug} key={cat._id}>
									{cat.name}
								</option>
							))}
					</Form.Control>
				</Form.Group>
			</Row>

			<Form.Group>
				<Form.Control
					type="number"
					placeholder="Quantity"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Color"
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
			</Form.Group>
			<Form.Group
				controlId="exampleForm.SelectCustom"
				className="col-md-6"
			>
				<Form.Label>Category</Form.Label>
				<Form.Control
					as="select"
					custom
					onChange={(e) => setShipping(e.target.value)}
				>
					<option>Please Select</option>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</Form.Control>
			</Form.Group>

			<Form.Group>
				<Form.Control
					type="text"
					placeholder="brand"
					value={brand}
					onChange={(e) => setBrand(e.target.value)}
				/>
			</Form.Group>
			<Fragment>
				<Form>
					<Form.Group controlId="formFileMultiple" className="mb-3">
						<Form.Label>Choose product images</Form.Label>
						<Form.Control
							name="file"
							type="file"
							onChange={onChange}
						/>
					</Form.Group>
					<Button variant="dark" onClick={onSubmit}>
						Upload
					</Button>
				</Form>
			</Fragment>
			{image && (
				<Col xs={6} md={4}>
					<Image src={image} thumbnail />
				</Col>
			)}

			<Button variant="primary" type="submit" onClick={handleSubmit}>
				Create
			</Button>
		</Form>
	);
};

export default CreateProducts;
