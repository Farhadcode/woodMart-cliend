import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PlaceOrder from './../PlaceOrder/PlaceOrder';

const Purchase = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <div>
                <div>
                    <img src={product.image} alt="" /></div>
                <div>
                    <h2>{product.name}</h2>
                    <p>{product._id}</p>
                    <p>{product.description}</p>
                    <h5>$ {product.price}</h5>
                </div>
            </div>
            <div>
                <PlaceOrder></PlaceOrder>
            </div>
        </div>
    );
};

export default Purchase;