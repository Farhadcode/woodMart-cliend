import React from 'react';

const DisplasyReview = ({ customerReview }) => {
    console.log();

    const { name, description, image, county } = customerReview;
    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={image} />
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