import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1> all products{product.length}</h1>

            <div className="service-container">
                {
                    product.map(pd => <Product
                        key={pd.id}
                        product={pd}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default Products;