import React, { useEffect, useState } from 'react';
import './ReviewShow.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import DisplasyReview from '../DisplasyReview/DisplasyReview';


const ReviewShow = () => {
    const [customerReview, setCustomerReview] = useState([]);

    useEffect(() => {
        fetch('https://secret-shelf-20286.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setCustomerReview(data))
    }, []);
    // console.log(customerReview);
    // const testiMonials = [
    //     {

    //         name: 'Rekob Ramya',
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //         address: 'USA',
    //         img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
    //     },
    //     {
    //         name: 'Brandon Savage',
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //         address: 'USA',
    //         img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
    //     },
    //     {
    //         name: 'Steve Burns',
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //         address: 'USA',
    //         img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
    //     },
    //     {


    //         name: 'Kevin Canlas',
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //         address: 'USA',
    //         img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
    //     },
    // ]
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };

    return (
        <>
            <section id="testimonial" className="testimonials pt-70 pb-70">
                <div className="container mt-5">
                    <h4 className="miniTitle text-center">Customer Review</h4>
                    <h2>Product Review :{customerReview.length} </h2>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                                {
                                    customerReview.length === 0 ?
                                        <div class="item">
                                            <div class="shadow-effect">
                                                {/* <img class="img-circle" src={userPic} /> */}

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                            </div>
                                            <div class="testimonial-name">
                                                <h5>Rajon Rony</h5>
                                                <small>ITALY</small>
                                            </div>
                                        </div> :
                                        customerReview.map(review => <DisplasyReview
                                            key={review._id}
                                            review={review}>
                                        </DisplasyReview>

                                        )


                                }

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );


};

export default ReviewShow;