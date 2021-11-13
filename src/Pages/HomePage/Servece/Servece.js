import React from 'react';
import { Link } from 'react-router-dom';
import './Servece.css'

const Servece = ({ servece }) => {
    const { name, image, description, _id, price } = servece;
    return (
        <div className="crad">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="card-body">
                <h2> {name} </h2>
                <p>{description}</p>
                <h5>${price}</h5>
                <Link to={`/purchase/${_id}`}> <button className="">Add to Card</button></Link>
            </div>
        </div>
    );
};

export default Servece;