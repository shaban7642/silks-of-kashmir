import React, { useEffect, Fragment } from 'react';
import Panner from '../../components/Panner/Panner';
import Categories from '../../pages/Categories/Categories';
import { listCats } from '../../actions/catActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
const Landing = () => {
	const dispatch = useDispatch();
	const { catList } = useSelector((state) => ({ ...state }));
	const { loading, error, cats } = catList;

	useEffect(() => {
		dispatch(listCats());
	}, [dispatch]);
	console.log(cats);
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<div>
					<Panner cats={cats} />
					<Categories cats={cats} />
				</div>
			)}
		</Fragment>
	);
};

export default Landing;
