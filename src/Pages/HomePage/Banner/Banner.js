import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='carusalStyle'>
            <Carousel>
                <Carousel.Item>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row  d-flex align-items-center  p-5">
                                <div class="col-lg-6 carusalBox">
                                    <h1>Comfortable Chare</h1>
                                    <p> Nostrum vero laudantium similique minus quasi placeat sequi eos obcaecati saepe deserunt!</p>
                                    <h1>$289</h1>
                                    <button class="btn btn-warning">Up Coming</button>
                                </div>
                                <div class="col-lg-6 carusalBox">
                                    <img
                                        className="d-block bannerImage "
                                        src=" https://i.ibb.co/FxsyRrB/slider-main-demo-1.jpg"
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row  d-flex align-items-center  p-5">
                                <div class="col-lg-6">
                                    <h1>Office Chare</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vero laudantium similique minus quasi placeat sequi eos obcaecati saepe deserunt!</p>
                                    <h1>$289</h1>
                                    <button class="btn btn-warning">Up Coming</button>
                                </div>
                                <div class="col-lg-6">
                                    <img
                                        className="d-block bannerImage"
                                        src="  https://i.ibb.co/HVjQXFh/slider-main-demo-2.jpg"
                                        alt="Second slide"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row   d-flex align-items-center  p-5">
                                <div class="col-lg-6  ">
                                    <h1>Bamboo feature </h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum vero laudantium similique minus quasi placeat sequi eos obcaecati saepe deserunt!</p>
                                    <h1>$289</h1>
                                    <button class="btn btn-warning">Up Coming</button>
                                </div>
                                <div class="col-lg-6 ">
                                    <img
                                        className="d-block bannerImage"
                                        src="https://i.ibb.co/Vmv3NBZ/slider-main-demo-new3.png"
                                        alt="Third slide"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;