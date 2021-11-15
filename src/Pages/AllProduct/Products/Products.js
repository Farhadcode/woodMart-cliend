import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://secret-shelf-20286.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    // console.log(product);
    return (
        <div>
            <h1> all products{product.length}</h1>

            <div className="service-container">
                {
                    product.map(pd => <Product
                        key={pd._id}
                        product={pd}
                    ></Product>)
                }
            </div>

        </div>
    );

};

export default Products;