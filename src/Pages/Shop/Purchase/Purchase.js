import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Purchase.css'


const Purchase = () => {
    const { productId } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://secret-shelf-20286.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const onSubmit = data => {
        console.log(data);
        data.status = "pending";
        axios.post('https://secret-shelf-20286.herokuapp.com/order', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('added  successfully');
                    reset();
                }
            })
    }
    return (
        <div className='purchase'>
            <div className='main-container'>
                <div className='productStyle'>
                    <div>
                        <img className='imageStyle' src={product.image} alt="" /></div>
                    <div>
                        <h2>{product.name}</h2>
                        {/* <p>{product._id}</p> */}
                        <p>{product.description}</p>
                        <h4>$ {product.price}</h4>
                    </div>
                </div>
                <div>
                    <div className="add-service">
                        <h2> Order Place</h2>
                        <form className="from-style" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={product?.name} {...register("name", { required: true })} placeholder="Name" />
                            <input defaultValue={product?.image}{...register("image", { required: true })} placeholder="Product Image" />
                            <input defaultValue={product?.price}{...register("price", { required: true })} placeholder="Price" />
                            <input defaultValue={user?.email}{...register("email", { required: true })} placeholder="Email" />
                            <input {...register("PhoneNumer", { required: true })} placeholder="PhoneNuber" />
                            <input {...register("date")} type="date" placeholder="date" />
                            <input {...register("address", { required: true })} placeholder="Address" />
                            <input className="main-btn rounded-pill " type="submit" value="Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;