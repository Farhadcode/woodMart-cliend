import React from 'react';

const DisplasyReview = ({ review }) => {
    console.log(review);

    const { name, description, image, county } = review;
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={image} />
                <p>{description}</p>
            </div>
            <div class="testimonial-name">
                <h6>{name}</h6>
                <small>{county}</small>
            </div>
        </div>
    )
};

export default DisplasyReview;