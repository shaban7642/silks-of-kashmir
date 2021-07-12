import React, { Fragment, useState } from 'react';
import { Form, Button, Image, Col } from 'react-bootstrap';
import axios from 'axios';

const SingleUploader = () => {
	const [file, setFile] = useState('');
	const [uploadedFile, setUploadedFile] = useState({});
	const onChange = (e) => {
		setFile(e.target.files[0]);
	};
	const onSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', file);
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API}/upload`,
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
			const { fileName, filePath } = res.data;
			setUploadedFile({ fileName, filePath });
			localStorage.setItem('imagePath', filePath);
		} catch (err) {
			if (err.response.status === 500) {
				console.log('There is a problem with the server');
			} else {
				console.log(err.response.data.msg);
			}
		}
	};
	return (
		<Fragment>
			<Form>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Please Choose Category Image</Form.Label>
					<Form.Control name="file" type="file" onChange={onChange} />
				</Form.Group>
				<Button onClick={onSubmit}>Upload</Button>
			</Form>
			{uploadedFile && (
				<Col xs={6} md={4}>
					<Image
						src={uploadedFile && uploadedFile.filePath}
						thumbnail
					/>
				</Col>
			)}
		</Fragment>
	);
};

export default SingleUploader;
