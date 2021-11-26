import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <div className="d-flex justify-content-between">
                        <div>
                            <img
                                className="d-block bannerImage "
                                src=" https://i.ibb.co/FxsyRrB/slider-main-demo-1.jpg"
                                alt="First slide"
                            />
                        </div>
                        <div className="bannerDetal">
                            <h2> Hello</h2>
                        </div>

                    </div>

                    {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h2> Hello</h2>
                        </div>
                        <div>
                            <img
                                className="d-block bannerImage"
                                src="  https://i.ibb.co/HVjQXFh/slider-main-demo-2.jpg"
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="d-flex justify-content-between">
                        <div>
                            <img
                                className="d-block bannerImage"
                                src="https://i.ibb.co/hF62WDn/slider-main-demo-3.jpg"
                                alt="Third slide"
                            />
                        </div>
                        <div>
                            <h2> Hello</h2>
                        </div>

                    </div>


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;