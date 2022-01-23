import React from 'react';
import Banner from '../Banner/Banner';
import ReviewShow from '../ReviewShow/ReviewShow';
import Serveces from '../Serveces/Serveces';


const Home = () => {
    return (
        <>
            <Banner />
            <Serveces></Serveces>
            <ReviewShow></ReviewShow>
        </>
    );
};

export default Home;