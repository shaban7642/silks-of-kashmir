import React from 'react';
import { Link } from 'react-router-dom';

import Category from './Category';
const Categories = ({ cats }) => {
    return (
        <div className='row'>
            {cats &&
                cats.map((cat) => (
                    <Link to={`/${cat.slug}/products`}>
                        <Category image={cat.image} />
                    </Link>
                ))}
        </div>
    );
};

export default Categories;
