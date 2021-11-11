import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { name, image, productDetals, id, price } = product;
    return (
        <div className="crad">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="card-body">
                <h2> {name} </h2>
                <p>{productDetals}</p>
                <h5>${price}</h5>
                <Link to={`/booking/${id}`}> <button className="">Booking</button></Link>
            </div>
        </div>
    );
};

export default Product;